const fcfs = (processus, nbProcessus) => {
  let i;
  let j;
  let k;
  let total_execution = Math.min(...processus.map((obj) => obj.dateArrivee));
  const chart = document.querySelector('.gantt-chart');
  chart.innerHTML = '';

  const first_total_execution = total_execution;
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

    chart.innerHTML += ` <div class='chart'>
     <div class='job'>${processus[k].name}</div>
    <div class='start'>${
      total_execution === first_total_execution ? total_execution : ''
    }</div>
    <div class='finish'>${
      total_execution + processus[k].dureeCycle
    }</div> </div>
    `;

    processus[k].finished = 1; // marke it as finished
    processus[k].waitingTime = Math.max(
      total_execution - processus[k].dateArrivee,
      0
    ); // calculate waiting time
    processus[k].rotation = processus[k].waitingTime + processus[k].dureeCycle; // burst time ( rotation )

    total_execution += processus[k].dureeCycle;
  }

  return processus;
};

export { fcfs };
