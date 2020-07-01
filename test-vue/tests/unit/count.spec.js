import { abs, add } from '@/count.js'
import { expect } from 'chai'

describe('测试abs函数', () => {
  it('测试给abs函数传入正数, 期待返回值与输入值相同', () => {
    expect(abs(1)).to.be.equal(1);
  });

  it('测试给abs函数传入负数, 期待返回值与输入值相反', () => {
    expect(abs(-1)).to.be.equal(1);
  })

  it('测试给abs函数传入 0, 期待返回值为 0', () => {
    expect(abs(0)).to.be.equal(0);
  })

  it('测试给abs函数传入非数值, 期待返回值为NaN', () => {
    expect(abs({})).to.be.deep.equal(NaN);
  })
})

describe('测试add函数', () => {
  it('测试给add函数传入(1,2,3,4),期待返回值为 10', () => {
    expect(add(1, 2, 3, 4)).to.be.equal(10)
  })
})