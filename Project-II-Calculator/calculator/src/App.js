import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import ClearButton from './components/ButtonComponents/ClearButton';
import CalculatorDisplay from './components/ButtonComponents/display';

const App = () => {
  return (
    <div class='wholeContainer'>

    <div>
      <CalculatorDisplay/>
    </div>
    <div>
      <ClearButton/>
    </div>

    <div class='calcFlex'>
      <NumberButton/>
      <ActionButton/>
    </div>

    </div>
  );
};

export default App;
