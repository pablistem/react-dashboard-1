import React from 'react';
//import logo from './logo.svg';
import './App2.css';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">

        <SideBar />

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          <Main />

          <Footer/>

        </div>
        {/* <!-- End of Content Wrapper --> */}

      </div>
      {/* <!-- End of Page Wrapper --> */}
    

    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div> 
  */}
    </React.Fragment>
  );
}

export default App;
