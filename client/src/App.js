import React from 'react';
import {Router} from '@reach/router';
import styles from './components/css/styles.module.css';
import './components/css/global.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './views/About';
import List from './views/List';
import Create from './views/Create';
import Update from './views/Update';
import Show from './views/Show';


function App() {
  return (
    <div className="App">
      <Nav/>
      <div className={styles.appWrapper}>
        <Router>
          <List path="/"/>
          <About path="/about"/>
          <Create path="pets/new"/>
          <Update path="pets/:id/edit"/>
          <Show path="pets/:id"/>
        </Router>
      </div>
      <Footer 
        copy={"Subscribe to our newsletter and be the first to learn about our newest adoptees, special news, and more!"}
      />
    </div>
  );
}

export default App;
