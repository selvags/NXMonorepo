import { render } from '@testing-library/react';

import App from './app';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

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
    expect(getByText(/Welcome react-store/gi)).toBeTruthy();
  });
});
