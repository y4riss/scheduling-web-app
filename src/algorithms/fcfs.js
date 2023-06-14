const p = {};

const fcfs = (processus, nbProcessus) => {
  let i;
  let j;
  let k;
  let total_execution = Math.min(...processus.map((obj) => obj.dateArrivee));

  let p = {
    name: 'TMP',
    dateArrivee: 0x7ffffff,
    dureeCycle: 0,
    finished: 0,
    queued: 0,
  };

  for (i = 0; i < nbProcessus; i++) {
    p.dateArrivee = 0x7ffffff;
    for (j = 0; j < nbProcessus; j++) {
      if (
        processus[j].finished === 0 &&
        processus[j].dateArrivee < p.dateArrivee
      ) {
        p = { ...processus[j] };
        k = j; // save process index
      }
    }

    console.log(processus[k].name);
    processus[k].finished = 1; // marke it as finished
    processus[k].waitingTime = total_execution - processus[k].dateArrivee; // calculate waiting time
    processus[k].rotation =
      total_execution - processus[k].dateArrivee + processus[k].dureeCycle; // burst time ( rotation )

    total_execution += processus[k].dureeCycle;
  }

  return processus;
};

export { fcfs };
