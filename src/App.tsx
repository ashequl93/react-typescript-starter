import './App.css';
import Persons from './components/Persons';

const persons = ['Allie', 'Jonathan', 'Kelly'];

function App() {
  const addPersons = (name: string) => {
    persons.push(name);
  };

  return (
    <div className="App">
      <Persons persons={persons} addPersons={addPersons} />
    </div>
  );
}

export default App;
