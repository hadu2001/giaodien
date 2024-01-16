import { MainLayout } from './components/Layout';
import {Follow,Context} from './pages'
import Main from './pages/Main/main'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Upload from './pages/Upload/upload';

function App() {
  return (
    <Router>
      <div className="App">
   
          <MainLayout>
            <Routes>
              <Route path='/' element={<Context></Context>}></Route>
              <Route path='/follow' element={<Follow></Follow>}></Route>
              <Route path='/context' element={<Context></Context>}></Route>
              <Route path='/upload' element={<Upload></Upload>}></Route>
            </Routes>
          </MainLayout>
    
      </div>
    </Router>
  );
}
{/* <Navbar bg="dark" variant="dark">
<Container>
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
  </Nav>
</Container>
</Navbar>

<Container className="mt-5">
<Row>
  <Col md={3}>
    <div className="sidebar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  </Col>
  <Col md={9}>
    <h1>Content</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget urna et justo mollis condimentum.</p>
  </Col>
</Row>
</Container> */}
export default App;
