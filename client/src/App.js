import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Fib from './components/Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <Container style={{marginTop: '35px'}} >
            <Row className="justify-content-md-center" style={{opacity:'90%'}}>
              <Route exact path="/">
                <div id="block" className="block center">
                    <Fib />
                </div>
              </Route>
            </Row>
            <Row className="justify-content-md-center" style={{opacity:'90%'}}>
                <div id="block" className="block center">              
                    <h5>Playing Time, Inc.</h5>
                </div>
            </Row>
        </Container> 
      </div>
    </Router>
  );
}

export default App;

//b4a0043b26e2

{/* <Route exact path="/" component={Fib} />
<Route path="/otherpage" component={OtherPage} /> */}