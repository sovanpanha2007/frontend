import { useState } from 'react'
import viteLogo from '/vite.svg'
import Main from './components/Main';
import Headers from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Headers />
      <Main />
      <Footer />
    </>
  );
}

export default App
