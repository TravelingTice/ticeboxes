import React from 'react'
import { Box } from '../components/Box'
import { mount } from 'enzyme'

describe('ExampleComponent', () => {
  it('is truthy', () => {
    expect(Box).toBeTruthy()
  })

  it('Renders a div', () => {
    const wrapper = mount(<Box />)

    expect(wrapper.find('div')).toBeTruthy()
  })

  it('Renders a div with children', () => {
    const wrapper = mount(<Box>With children</Box>)

    expect(wrapper.find('div').text() === 'With children').toBeTruthy()
  })

  it('Renders a div with the correct class names', () => {
    let wrapper = mount(<Box mt='5' />)

    expect(wrapper.find('div').hasClass('mt-5')).toBeTruthy()

    wrapper = mount(<Box mt='5' mb='5' />)

    expect(wrapper.find('div').hasClass('mt-5')).toBeTruthy()
    expect(wrapper.find('div').hasClass('mb-5')).toBeTruthy()

    wrapper = mount(<Box text-center />)
    expect(wrapper.find('div').hasClass('text-center')).toBeTruthy()
  })
})
