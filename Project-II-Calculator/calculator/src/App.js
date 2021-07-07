import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import ClearButton from './components/ButtonComponents/ClearButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div className='wholeContainer'>
      
    <div>
      <CalculatorDisplay />
    </div>
    <div>
      <ClearButton/>
    </div>

    <div className='calcFlex'>
      <NumberButton/>
      <ActionButton/>
    </div>

    </div>
  );
};

export default App;
