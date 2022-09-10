import React, { useState } from 'react';

interface PersonsProps {
  persons: string[];
  addPersons: (name: string) => void;
}

const Persons: React.FC<PersonsProps> = ({
  persons,
  addPersons,
}: PersonsProps) => {
  const [name, setName] = useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onClick = () => {
    setName('');
    addPersons(name);
  };

  return (
    <div>
      <h1>Add new people to the list</h1>
      <input value={name} onChange={onChange} />
      <button onClick={onClick}>Add</button>
      {persons.length > 0 && (
        <ul>
          {persons.map((person, index) => {
            return <li key={index}>{person}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Persons;
