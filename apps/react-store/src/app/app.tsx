// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';

import NxWelcome from './nx-welcome';
import { Products } from '@nx-mono-repo/products';
import { Orders } from '@nx-mono-repo/orders';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/NXMonorepo" element={(<NxWelcome title='react-store'/>)}/>
        <Route path="/NXMonorepo/products" element={(<Products />)}/>
        <Route path='/NXMonorepo/orders' element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;
