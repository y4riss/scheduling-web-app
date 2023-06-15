const getTotalExecution = (processus, nbProcessus) => {
  let p = {
    name: 'TMP',
    dateArrivee: 0x7ffffff,
    dureeCycle: 0x7ffffff,
    finished: 0,
    queued: 0,
  };

  for (let i = 0; i < nbProcessus; i++) {
    if (
      processus[i].dateArrivee <= p.dateArrivee &&
      processus[i].dureeCycle < p.dureeCycle
    )
      p = { ...processus[i] };
  }

  return p.dateArrivee;
};

const sjf = (processus, nbProcessus) => {
  let i;
  let j;
  let k;
  let total_execution = getTotalExecution(processus, nbProcessus);

  let p = {
    name: 'TMP',
    dateArrivee: 0x7ffffff,
    dureeCycle: 0x7ffffff,
    finished: 0,
    queued: 0,
  };

  for (i = 0; i < nbProcessus; i++) {
    p.dateArrivee = 0x7ffffff;
    p.dureeCycle = 0x7ffffff;
    for (j = 0; j < nbProcessus; j++) {
      if (
        processus[j].finished === 0 &&
        processus[j].dateArrivee <= total_execution &&
        processus[j].dureeCycle < p.dureeCycle
      ) {
        p = { ...processus[j] };
        k = j; // save process index
      }
    }

    console.log(processus[k].name);
    processus[k].finished = 1; // marke it as finished
    processus[k].waitingTime = Math.max(
      total_execution - processus[k].dateArrivee,
      0
    ); // calculate waiting time
    processus[k].rotation = processus[k].waitingTime + processus[k].dureeCycle; // burst time ( rotation )

    total_execution += processus[k].dureeCycle;
  }

  console.log("from sjf");
  return processus;
};

export { sjf };
