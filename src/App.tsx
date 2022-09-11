import './App.css';
import FindUser from './components/FindUser';
import Persons from './components/Persons';

const persons = ['Allie', 'Jonathan', 'Kelly'];

function App() {
  const addPersons = (name: string) => {
    persons.push(name);
  };

  return (
    <div className="App">
      <Persons persons={persons} addPersons={addPersons} />
      <FindUser />
    </div>
  );
}

export default App;
