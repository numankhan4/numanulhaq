import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import { HashRouter as Router } from 'react-router-dom';

function App() {
   return (
      <div>
         <Router>
            <BaseLayout />
         </Router>
      </div>
   );
}


export default App;
