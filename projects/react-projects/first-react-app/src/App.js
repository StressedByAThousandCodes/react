import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
/* import TextField from './components/TextField'; */
import { useState } from 'react';


function App() {

  const [count, setCount] = useState(0);

/*   function handleClickIncrease() {
    setCount(count + 1);
  }
  function handleClickDecrease() {
    setCount(count - 1);
  } */

  function handleCounts(props){
    switch(props.name){
      case 'Increase':
        setCount(count+1);
        break;
      case 'Decrease':
        setCount(count-1);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Number of Clicks : {count}</h1>
      {/* <Button name= {'Increase'} onPress={handleClickIncrease} />
      <Button name= {'Decrease'} onPress={handleClickDecrease} /> */}
      <Button name={'Increase'} onPress={() => handleCounts({name: 'Increase'})} />
      <Button name={'Decrease'} onPress={() => handleCounts({name: 'Decrease'})} />
    </div>
  );
}

export default App;


