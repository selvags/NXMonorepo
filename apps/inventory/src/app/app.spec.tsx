import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/NXMonorepo']}>
        <App />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/NXMonorepo']}>
        <App />
      </MemoryRouter>
    );
    expect(getByText(/Welcome inventory/gi)).toBeTruthy();
  });
});
