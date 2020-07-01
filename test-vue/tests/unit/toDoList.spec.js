import ToDoList from "@/components/ToDoList"
import { mount } from '@vue/test-utils'
import { expect } from 'chai'

describe('测试ToDiList组件', () => {
  it('初始化时mask与input的值都为空', () => {
    const wrapper = mount(ToDoList);
    const inputVal = wrapper.find('input').text()
    const mask = wrapper.vm.mask;
    expect(inputVal).to.be.eqls('');
    expect(mask).to.be.eqls('');
  })

  it('测试mask数据跟随input的值变化', () => {
    const wrapper = mount(ToDoList);
    const Oinput = wrapper.find('input');
    Oinput.setValue('test');
    const mask = wrapper.vm.mask;
    expect(mask).to.be.equal('test')
  })

  it('测试按钮点击后数据渲染', () => {

    const wrapper = mount(ToDoList);
    const oBtn = wrapper.find('button');
    const length = wrapper.vm.maskList.length;
    oBtn.trigger('click');
    expect(wrapper.vm.maskList).lengthOf(length + 1);
    expect(wrapper.vm.mask).to.be.equal('');
  })
})