import React from 'react';
import {shallow} from 'enzyme';
import Hello from './index';

describe('Hello Component', () => {
    it('Should render Hello component without errors', () => {
        const component = shallow(<Hello/>);
        const wrapper = component.find('.getHello');
        expect(wrapper.length).toBe(1);
    })
})