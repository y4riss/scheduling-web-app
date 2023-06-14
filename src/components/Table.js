import React from 'react';

const Table = ({ processus }) => {
  return (
    <div className='statistics'>
      <table>
        <thead>
          <tr>
            <td>Nom Processus</td>
            <td>Date d'arrivee</td>
            <td>Duree cycle</td>
            <td>Temps d'attente</td>
            <td>Temps de rotation</td>
            <td>Rendement</td>
          </tr>
        </thead>
        <tbody>
          {processus.map((p) => (
            <tr>
              <td>{p.name}</td>
              <td>{p.dateArrivee}</td>
              <td>{p.dureeCycle}</td>
              <td>{p.waitingTime}</td>
              <td>{p.rotation}</td>
              <td>{(p.rotation - p.waitingTime) / p.rotation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
