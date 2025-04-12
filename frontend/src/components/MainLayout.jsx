import React from 'react';
import MainLayout from './layout/MainLayout';
import Content2 from './components/Content2';
import Content5 from './components/Content5';
import Content6 from './components/Content6';
import Contact from './components/Contact';

function App() {
  return (
    <MainLayout
      children={{
        content2: <Content2 />,
        content5: <Content5 />,
        content6: <Content6 />,
        contact: <Contact />,
      }}
    />
  );
}

export default App;