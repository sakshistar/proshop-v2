import Header from './components/Header';
import { Container } from "react-bootstrap";
import * as React from 'react';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (

   <>
     <Header />
        <main className="py-2">
          <Container>
            <Outlet />
          </Container>
        </main>
      <Footer/>
    </>
  );
};

export default App;
