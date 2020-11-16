import React from 'react'
import { Flex } from '../components/Flex'
import { mount } from 'enzyme'

describe('ExampleComponent', () => {
  it('is truthy', () => {
    expect(Flex).toBeTruthy()
  })

  it('Renders a div', () => {
    const wrapper = mount(<Flex />)

    expect(wrapper.find('div')).toBeTruthy()
  })

  it('Renders a div with children', () => {
    const wrapper = mount(<Flex>With children</Flex>)

    expect(wrapper.find('div').text() === 'With children').toBeTruthy()
  })

  it('Renders with d-flex by default', () => {
    const wrapper = mount(<Flex />)

    expect(wrapper.find('div').hasClass('d-flex')).toBeTruthy()
  })

  it('Renders a div with the correct class names', () => {
    let wrapper = mount(<Flex mt='5' />)

    expect(wrapper.find('div').hasClass('mt-5')).toBeTruthy()

    wrapper = mount(<Flex mt='5' mb='5' />)

    expect(wrapper.find('div').hasClass('mt-5')).toBeTruthy()
    expect(wrapper.find('div').hasClass('mb-5')).toBeTruthy()

    wrapper = mount(<Flex text-center />)
    expect(wrapper.find('div').hasClass('text-center')).toBeTruthy()
  })
})
