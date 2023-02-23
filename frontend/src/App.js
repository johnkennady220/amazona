import { BrowserRouter,Link,Route, Routes } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/productScreen';
import Navbar from 'react-bootstrape/Navbar';
import Container from 'react-bootstrape/container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
       <Navbar bg="dark" variant="dark">
         <Container>
           <LinkContainer to="/">
             <Navbar.Brand>amazona</Navbar.Brand>
           </LinkContainer>
         </Container>
       </Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<productScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
