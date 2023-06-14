import React, { useState } from 'react';
import Output from './components/Output';
import Input from './components/Input';
import fcfs from './algorithms/fcfs';

const App = () => {
  const [nbProcessus, setNbProcessus] = useState(0);
  let processusArray = null;

  const handleInput = (algorithm, dateArrivee, dureeCycle) => {
    setNbProcessus(dateArrivee.length);
    processusArray = [];
    for (let i = 0; i < nbProcessus; i++) {
      const processus = {
        name: String.fromCharCode('A'.charCodeAt(0) + i),
        dateArrivee: parseInt(dateArrivee[i]),
        dureeCycle: parseInt(dureeCycle[i]),
        finished: 0,
        queued: 0,
        waitingTime: 0,
        burstTime: 0,
      };
      processusArray.push(processus);
    }
    switch (algorithm) {
      case '0':
        fcfs(processusArray, nbProcessus);
        break;
      case '1':
        console.log('sjf');
        break;
      case '2':
        console.log('srt');
        break;
      case '3':
        console.log('round robin');
        break;
      default:
        console.log('default');
    }
  };

  return (
    <>
      <Input onSubmit={handleInput}></Input>
      <Output></Output>
    </>
  );
};

export default App;
