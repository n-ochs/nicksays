//React
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

//Components
import Header from './components/header';
import Instructions from './components/instructions';
import Game from './components/game';
import Leaderboard from './components/leaderboard';

//Firebase
import firebase from './util/firebase';

function App() {

  const [ leaderboard, setLeaderboard ] = useState([]);

  useEffect(() => {
    const positionRef = firebase.database().ref("Position");
    positionRef.on("value", (snapshot) => {
      const positions = snapshot.val();
      const leaderboard = [];
      for (let id in positions) {
        leaderboard.push(positions[id]);
      };
      setLeaderboard(leaderboard);
    });
  }, []);



  return (

    <div className="font-mono">
      <Router>
          <Header />
        <Switch>
          <Route exact path ='/'>
            <Instructions />
            <Game />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/leaderboard'>
            <Leaderboard leaderboard={leaderboard}/>
          </Route>
        </Switch>
      </Router>
    </div>

  );
};

export default App;