import React from 'react';
import './App.css';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>{oneTeam.name}</h3>
        <h3>
          {oneTeam.city}, {oneTeam.state}
        </h3>
        <div />
      </div>
    );
  }
}

function NewList() {
  const teams: TeamProps[] = require('./CollegeBasketballTeams.json');
  return (
    <div>
      {teams.map((singleTeam: TeamProps) => (
        <Team key={singleTeam.tid} {...singleTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>College Basketball Teams</header>
      <NewList />
    </div>
  );
}

export default App;
