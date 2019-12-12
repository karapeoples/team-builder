import React, {useState} from 'react';
import Forms from './components/Forms';
import Teams from'./components/Teams';
import './App.css';

function App() {
const [teamMembers, setTeamMembers]=useState([
  {
  id:  1,
  name: 'Kara Peoples',
  email: 'kararpeoples@yahoo.com',
  role: 'Project Creator', 
  },
]);

const addNewTeamMembers = teamMember => {
  const newTeamMembers = {
    id: Date.now(),
    name: teamMember.name,
    email: teamMember.email,
    role: teamMember.role,
  };
  const newTeamCollection = [...teamMembers, newTeamMembers];
  setTeamMembers(newTeamCollection);
};

  return (
    <div className="App">
      <h1> My Team</h1>
      <Forms addNewTeamMembers={addNewTeamMembers}/>
      {<Teams teamMembers={teamMembers}/>}
    </div>
  );
}

export default App;
