import React from 'react';
import Table from './Table';

const Output = ({ processus }) => {
  console.log('from output', processus);
  return (
    <div className='output'>
      <Table processus={processus}></Table>
    </div>
  );
};

export default Output;
