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
            </tr>
          ))}
          <tr>
            <td colSpan={3}>Moyenne</td>
            <td>
              {(
                processus.reduce((acc, p) => {
                  return acc + p.rotation;
                }, 0) / processus.length
              ).toFixed(2)}
            </td>
            <td>
              {(
                processus.reduce((acc, p) => {
                  return acc + p.waitingTime;
                }, 0) / processus.length
              ).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
