import React from 'react';
import * as renderer from 'react-test-renderer';
import GuiInput from "./GuiInput";

describe('Input component', () => {
    it('renders input correctly', () => {
        const component = renderer.create(
            <GuiInput
                label='Test label'
                placeholder='Test placeholder'
                value=''
                error={null}
                onChange={() => console.log('onChange')}
                onBlur={() => console.log('onBlur')}
                onFocus={() => console.log('onFocus')}
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('calls onChange when value is changed', () => {
        const handleChange = jest.fn();
        const component = renderer.create(
            <GuiInput
                label='Test label'
                placeholder='Test placeholder'
                value={''}
                error={null}
                onChange={(e) => handleChange(e)}
                onBlur={() => console.log('onBlur')}
                onFocus={() => console.log('onFocus')}
            />
        )
        const input = component.root.findByType('input');
        input.props.onChange({target: { value: 'New value' }});
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
