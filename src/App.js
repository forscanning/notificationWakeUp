import React from 'react';
import Header from './components/Header'
import HowStart from './components/HowStart'
import Intro from './components/Intro'
import BrowserSettings from './components/BrowserSettings'
import MonkeySettings from './components/MonkeySettings'
import InstalScripts from './components/InstalScripts'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <Header />
      <Container >
        <Intro />
        <HowStart />
        <InstalScripts />
        <BrowserSettings />
        <MonkeySettings />
      </Container >
    </>
  );
}

export default App;
