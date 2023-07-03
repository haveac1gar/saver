import { RecoilRoot } from 'recoil';

import { GlobalStyle, InitialiseComponent } from './core';
import { Home } from './pages';

function App() {
  return (
    <>
      <RecoilRoot>
        <InitialiseComponent />

        <GlobalStyle />

        <Home />
      </RecoilRoot>
    </>
  );
}

export default App;
