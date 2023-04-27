import React from 'react';
import * as renderer from 'react-test-renderer';
import GuiButton from './GuiButton';

describe('Button component', () => {
  it('renders button correctly', () => {
    const component = renderer.create(<GuiButton btnText='Open' />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const component = renderer.create(
      <GuiButton btnText='Open' onClick={handleClick} />
    );
    component.root.findByType('button').props.onClick();
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
