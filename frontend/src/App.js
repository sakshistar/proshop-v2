import Header from './components/Header';
import { Container } from "react-bootstrap";
import * as React from 'react';
import Footer from './components/Footer';

const App = () => {
  return (

   <>
     <Header />
        <main className="py-2">
          <Container>
            <h1> Welcome to ProShop </h1>
             </Container>
        </main>
        <Footer/>
            </>
  );
};

export default App;
