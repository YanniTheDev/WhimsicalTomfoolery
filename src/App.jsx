import { useState } from 'react'

import './App.css'
import "./ReusableStyles/Flex.css";

// Components
import { AccessPage } from './Components/AccessPage.jsx';
import { HomePage } from './Components/HomePage.jsx';

function App() {
  return (
    <div className="content">
      {/* <AccessPage /> */}

      <HomePage/>
    </div>
  )
}

export default App
