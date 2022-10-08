import { useState } from 'react';
import Exercises from './components/Exercises';
import data from './data/Equinox_FE_exercises.json';
import InfoOfData from './components/InfoOfData';
import './App.css';


function App() {
  const [selected, setSelected] = useState(null);

  const onSelect = (id) => {

    setSelected(data.find((exercise) => exercise.id === id));
  };
  console.log(selected);

  return (
    <div className="App">
     <Exercises onSelectItem={onSelect} />
      {!!selected && <InfoOfData exercise={selected} />}
    </div>
  );
}

export default App;
