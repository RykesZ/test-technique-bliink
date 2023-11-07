import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './header.component';

test('Header renders logo, burger menu, and tabs correctly', () => {
  render(<Header />);

  const logo = screen.queryByTestId('logo');
  expect(logo).toBeInTheDocument();

  const burgerMenu = screen.queryByTestId('burgerMenu');
  expect(burgerMenu).toBeInTheDocument();

  const tab1 = screen.queryByTestId('tab1');
  expect(tab1).toBeInTheDocument();
  const tab2 = screen.queryByTestId('tab2');
  expect(tab2).toBeInTheDocument();
  const tab3 = screen.queryByTestId('tab3');
  expect(tab3).toBeInTheDocument();
  const tab4 = screen.queryByTestId('tab4');
  expect(tab4).toBeInTheDocument();
  const tab5 = screen.queryByTestId('tab5');
  expect(tab5).toBeInTheDocument();
  const tab6 = screen.queryByTestId('tab6');
  expect(tab6).toBeInTheDocument();
  const tab7 = screen.queryByTestId('tab7');
  expect(tab7).toBeInTheDocument();
  const tab8 = screen.queryByTestId('tab8');
  expect(tab8).toBeInTheDocument();
  const tab9 = screen.queryByTestId('tab9');
  expect(tab9).toBeInTheDocument();
  const tab10 = screen.queryByTestId('tab10');
  expect(tab10).toBeInTheDocument();
  const tab11 = screen.queryByTestId('tab11');
  expect(tab11).toBeInTheDocument();
});
