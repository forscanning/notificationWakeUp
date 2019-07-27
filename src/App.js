import React from 'react';
import Header from './components/Header'
import HowStart from './components/HowStart'
import InstalScripts from './components/InstalScripts'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <Header />
      <Container >
        <HowStart />
        <InstalScripts />
      </Container >
    </>
  );
}

export default App;
