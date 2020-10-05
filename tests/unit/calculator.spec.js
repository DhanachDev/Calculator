import { shallowMount } from '@vue/test-utils'
import calculator from '@/components/calculator.vue'


describe('calculator.vue', () => {
  const wrapper = shallowMount(calculator)
  it('Result is zero by default', () => {
    expect(wrapper.vm.result).toBe("0")
  })

  it('All variable will be default value after cliked "c" button', async () => {
    const button = wrapper.find('button.clear-value')
    await button.trigger('click')
    expect(wrapper.vm.result).toBe("0")
    expect(wrapper.vm.firstNumber).toBe("")
    expect(wrapper.vm.secondNumber).toBe("")
    expect(wrapper.vm.operate).toBe("")
  })

  it('add zero before "."', async () => {
    const button = wrapper.find('button.decimal')
    await button.trigger('click')
    expect(wrapper.vm.firstNumber).toBe("0.")
  })

})
