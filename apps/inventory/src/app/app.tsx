// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { Route, Routes } from 'react-router-dom';
import { Products } from '@nx-mono-repo/products';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <Routes>
      <Route path='/NXMonorepo' element={<NxWelcome title='inventory'/>} />
      <Route path='/NXMonorepo/products' element={<Products />} />
    </Routes>
  );
}

export default App;
