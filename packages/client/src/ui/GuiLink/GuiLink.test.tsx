import React from 'react';
import * as renderer from 'react-test-renderer';
import GuiLink from './GuiLink';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Input component', () => {
  it('renders link component correctly', () => {
    const component = renderer.create(
      <MemoryRouter>
        <GuiLink url='/auth' text='Ссылка на пример' />
      </MemoryRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correct text and link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <GuiLink url='/auth' text='Авторизация' />
      </MemoryRouter>
    );
    const link = getByText('Авторизация');
    expect(link.getAttribute('href')).toBe('/auth');
  });
});
