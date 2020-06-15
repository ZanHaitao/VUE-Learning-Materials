const vm = new Vue({
    el: '#app',
    data: {
        navList: [],
        navActiveIndex: 0,
        navListshow: false,
        bannerList: [],
        bannerWidth: 350,
        bannerActiveIndex: 0,
        bannerStyle: {
            left: 0,
            transition: 'left .5s',
        },
        videoOldList: [],
        videoGetData: false,
        videoCount: 0,
    },
    methods: {
        handleNavClick(index) {
            this.navActiveIndex = index;
        },
        handleNavShow() {
            this.navListshow = !this.navListshow;
        },
        bannerMove() {
            this.bannerStyle.transition = 'left .5s';
            this.bannerActiveIndex++;
            this.bannerStyle.left = -this.bannerActiveIndex * this.bannerWidth + 'px';
        },
        transitionEnd() {
            if (this.bannerActiveIndex === this.bannerList.length - 1) {
                this.bannerActiveIndex = 0;
                this.bannerStyle.left = -this.bannerActiveIndex * this.bannerWidth + 'px';
                this.bannerStyle.transition = 'none';
            }
            setTimeout(() => {
                this.bannerMove();
            }, 1500);
        },
        handleScroll(e) {
            if (this.videoOldList.length === this.videoCount) {
                return;
            }
            const { scrollHeight, offsetHeight, scrollTop } = e.target;
            const del = scrollHeight - offsetHeight - scrollTop;
            if (del < 200 && !this.videoGetData) {
                this.videoGetData = true;
                axios
                    .get('video', {
                        params: {
                            start: this.videoList.length,
                            offset: 12,
                        },
                    })
                    .then((res) => {
                        this.videoGetData = false;
                        this.videoOldList.push(...res.data);
                    });
            }
        },
        getData() {
            axios
                .all([
                    axios.get('nav'),
                    axios.get('banner'),
                    axios.get('video', {
                        params: {
                            start: this.videoList.length,
                            offset: 12,
                        },
                    }),
                ])
                .then(
                    axios.spread((navRes, bannerRes, videoRes) => {
                        this.navList = navRes;

                        const firstBanner = { ...bannerRes[0] };
                        firstBanner.id = Math.floor(Math.random() * 100000);
                        this.bannerList = bannerRes;
                        this.bannerList.push(firstBanner);

                        this.videoCount = videoRes.count;
                        this.videoOldList = videoRes.data;
                    })
                );
        },
    },
    computed: {
        videoList() {
            return this.videoOldList.map((video) => {
                video.play = video.play > 10000 ? video.play / 10000 : video.play;
                video.rank = video.rank > 10000 ? video.rank / 10000 : video.rank;
                return video;
            });
        },
    },
    created() {
        this.getData();
    },
    mounted() {
        setTimeout(() => {
            this.bannerMove();
        }, 1500);
    },
});
