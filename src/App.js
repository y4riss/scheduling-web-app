import React, { useState } from 'react';
import Table from './components/Table';
import Input from './components/Input';
import Chart from './components/Chart';
import { fcfs } from './algorithms/fcfs';
import { sjf } from './algorithms/sjf';

const App = () => {
  let processusArray = [];
  let nbProcessus;

  const [processus, setProcessus] = useState(null);
  const handleInput = (algorithm, dateArrivee, dureeCycle) => {
    processusArray = [];
    nbProcessus = dateArrivee.length;
    for (let i = 0; i < nbProcessus; i++) {
      const processus = {
        name: String.fromCharCode('A'.charCodeAt(0) + i),
        dateArrivee: parseInt(dateArrivee[i]),
        dureeCycle: parseInt(dureeCycle[i]),
        finished: 0,
        queued: 0,
        waitingTime: 0,
        rotation: 0,
      };
      processusArray.push(processus);
    }
    switch (algorithm) {
      case '0':
        processusArray = fcfs(processusArray, nbProcessus);
        setProcessus(processusArray);
        break;
      case '1':
        processusArray = sjf(processusArray, nbProcessus);
        setProcessus(processusArray);
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
      <Chart></Chart>
      {processus && <Table processus={processus}></Table>}
    </>
  );
};

export default App;
