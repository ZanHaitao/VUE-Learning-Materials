<template>
  <div>
    <div class="date-picker" v-show-panel="showPanel">
      <div class="picker-input">
        <span class="icon">
          <i class="iconfont icon-calendar"></i>
        </span>
        <input type="text" readonly :value="nowDate" />
      </div>
      <div class="calendar" v-if="showPanel">
        <div class="calendar-triangle"></div>
        <div class="calendar-header">
          <span class="calendar-btn iconfont icon-prev-year" @click="changeYear('prev')"></span>
          <span class="calendar-btn iconfont icon-prev-month" @click="changeMonth('prev')"></span>
          <span class="calendar-date">{{ showDate.year }}年{{ showDate.month + 1 }}月</span>
          <span class="calendar-btn iconfont icon-next-month" @click="changeMonth('next')"></span>
          <span class="calendar-btn iconfont icon-next-year" @click="changeYear('next')"></span>
        </div>
        <div class="calendar-content">
          <div class="calendar-week">
            <div v-for="week in ['日','一','二','三','四','五','六']" :key="week">{{ week }}</div>
          </div>
          <div class="calendar-day">
            <div
              v-for="date in showDay"
              :key="date.getTime()"
              :class="{
                'other-month':!isCur(date).month,
                'is-select':isCur(date).select,
                'is-today':isCur(date).toDay,
              }"
              @click="changeSelect(date)"
            >{{date.getDate()}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "show-panel"(el, binding, vnode) {
      const vm = vnode.context;
      const { value } = binding;
      document.onclick = e => {
        if (el.contains(e.target) && !value) {
          vm.changePanel(true);
        } else if (!el.contains(e.target) && value) {
          vm.changePanel(false);
        }
      };
    }
  },
  model: {
    prop: "date",
    event: "change-date"
  },
  props: {
    date: {
      type: Date,
      default() {
        return new Date();
      }
    }
  },
  data() {
    return {
      showDate: {},
      showPanel: false
    };
  },
  computed: {
    nowDate() {
      const { year, month, day } = this.getYearMonthDay(this.date);
      return `${year}-${month + 1}-${day}`;
    },
    showDay() {
      const { year: showYear, month: showMonth } = this.showDate;
      const date = new Date(showYear, showMonth, 1);
      const week = date.getDay();
      const startDay = date.getTime() - week * 1000 * 60 * 60 * 24;
      const arr = [];

      for (let i = 0; i < 42; i++) {
        const dateTime = startDay + i * 1000 * 60 * 60 * 24;
        arr.push(new Date(dateTime));
      }
      return arr;
    }
  },
  methods: {
    getShowDate() {
      this.showDate = this.getYearMonthDay(this.date);
    },
    getYearMonthDay(date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      return {
        year,
        month,
        day
      };
    },
    isCur(date) {
      const { year, month, day } = this.getYearMonthDay(date);
      const { year: showYear, month: showMonth } = this.showDate;

      const {
        year: selectYear,
        month: selectMonth,
        day: selectDay
      } = this.getYearMonthDay(this.date);

      const {
        year: curYear,
        month: curMonth,
        day: curDay
      } = this.getYearMonthDay(new Date());

      return {
        month: year === showYear && month === showMonth,
        toDay: year === curYear && month === curMonth && day === curDay,
        select:
          year === selectYear && month === selectMonth && day === selectDay
      };
    },
    changeSelect(date) {
      this.$emit("change-date", date);
      this.showDate = this.getYearMonthDay(date);
      this.changePanel(false);
    },
    changeYear(type) {
      if (type === "prev") {
        this.showDate.year--;
      } else {
        this.showDate.year++;
      }
    },
    changeMonth(type) {
      const { year, month, day } = this.showDate;
      let date = new Date(year, month, day);
      const moveMonth = type === "prev" ? -1 : 1;
      date.setMonth(month + moveMonth);
      this.showDate = this.getYearMonthDay(date);
    },
    changePanel(flag) {
      this.showPanel = flag;
    }
  },
  created() {
    this.getShowDate();
  }
};
</script>

<style scoped>
@import url("./assets/font.css");

.date-picker {
  display: inline-block;
  position: relative;
}

.picker-input {
  position: relative;
}

.picker-input input {
  height: 40px;
  line-height: 40px;
  padding: 0 40px;
  outline: none;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  color: #777;
  cursor: pointer;
}

.picker-input .icon {
  font-size: 20px;
  color: #999;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.calendar {
  width: 322px;
  height: 335px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  box-shadow: 0 2px 10px #ccc;
  position: absolute;
  top: 48px;
  user-select: none;
}

.calendar-triangle {
  border: 6px solid transparent;
  border-bottom-color: #dcdfe6;
  position: absolute;
  left: 40px;
  top: -12px;
}

.calendar-triangle::before {
  content: "";
  border: 6px solid transparent;
  border-bottom-color: #fff;
  position: absolute;
  left: -6px;
  top: -5px;
}

.calendar-header {
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 20px 10px;
}

.calendar-header .calendar-btn {
  margin: 0 10px;
  font-size: 14px;
  cursor: pointer;
}

.calendar-header .calendar-date {
  margin: 0 20px;
  font-size: 14px;
}

.calendar-content {
  padding: 0 10px;
}

.calendar-content .calendar-week {
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  border-bottom: 1px solid #dcdfe6;
  padding: 10px 0;
}

.calendar-content .calendar-day {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 5px 0;
}

.calendar-content .calendar-day div {
  margin: 5px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}

.calendar-content .calendar-day div.is-today {
  color: #409eff;
  font-weight: 700;
}

.calendar-content .calendar-day div.is-select {
  border-radius: 50%;
  background-color: #409eff;
  color: #fff;
}

.calendar-content .calendar-day div.other-month {
  color: #c0c4cc;
}
</style>