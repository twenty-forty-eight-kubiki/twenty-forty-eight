import React from 'react';
import * as renderer from 'react-test-renderer';
import {render} from '@testing-library/react';
import GuiButton from "./GuiButton";


describe('Button component', () => {
  it('should render GuiButton component', () => {
    const component = renderer.create(<GuiButton btnText="Open"/>).toJSON();
    expect(component).toMatchSnapshot();
  })

  it('should render proper name', () => {
    const component = render(<GuiButton btnText="Open"/>);
    expect(component.getByText('Open')).toBeTruthy();
  })
})