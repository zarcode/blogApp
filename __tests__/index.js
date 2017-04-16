import 'react-native'
import React from 'react'
import {shallow} from 'enzyme'
import Kernel from '../src/index.js'

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer'


it('renders correctly', () => {
    const enzymeWrapper = shallow(<Kernel/>);
    expect(enzymeWrapper.length).toBe(1);
    // expect(enzymeWrapper.find('Posts').length).toEqual(1);
});
