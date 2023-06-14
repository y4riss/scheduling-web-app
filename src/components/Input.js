import React from 'react';
import { useState } from 'react';

const Input = ({ onSubmit }) => {
  const [algorithm, setAlgorithm] = useState('0');
  const [dateArrivee, setDateArrivee] = useState(null);
  const [dureeCycle, setDureeCycle] = useState(null);
  const inputRegex = /^\s*\d+(\s+\d+)*\s*$/;

  const handleSelectChange = (e) => {
    setAlgorithm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputRegex.test(dateArrivee) && inputRegex.test(dureeCycle)) {
      const dateArray = dateArrivee.split(' ').filter((char) => char !== '');
      const cycleArray = dureeCycle.split(' ').filter((char) => char !== '');
      if (dateArray.length !== cycleArray.length) {
        alert('invalid input');
      } else if (dateArray.length > 20) {
        alert('too many processes, max process is 20');
      } else onSubmit(algorithm, dateArray, cycleArray);
    } else {
      alert('invalid input');
    }
  };

  return (
    <div className='input'>
      <form onSubmit={handleSubmit}>
        <select name='' id='' value={algorithm} onChange={handleSelectChange}>
          <option value='0'>FCFS</option>
          <option value='1'>SJF</option>
          <option value='2'>SRT</option>
          <option value='3'>ROUND ROBIN</option>
        </select>

        <label htmlFor=''>date d'arrivee</label>
        <input type='text' onChange={(e) => setDateArrivee(e.target.value)} />

        <label htmlFor=''>duree du cycle</label>
        <input type='text' onChange={(e) => setDureeCycle(e.target.value)} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Input;
