// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { Route, Routes } from 'react-router-dom';
import { Products } from '@nx-mono-repo/products';

export function App() {
  return (
    <Routes>
      <Route path='/products' element={<Products />} />
    </Routes>
  );
}

export default App;
