function bruteForce(x1, y1, x2, y2) {
  const xgaris = [];
  const ygaris = [];

  let m = ((y2 - y1) / (x2 - x1)).toFixed(2);
  m = Math.floor(m * 10) / 10;

//   jika m < 1
  if (Math.abs(m) <= 1) {
    let n = x2 - x1 + 1;
    let x = x1;

    for (let a = 1; a <= n; a++) {
        let y = m * (x - x1) + y1;
        xgaris.push(x);
        ygaris.push(Math.round(y)); 
        console.log(`Iterasi ${a}: x = ${x}, y = ${Math.round(y)} miring = ${m}`);//buat mantau di console
        x = x + 1;
    }
  } else {
    // jika m > 1
    let miring = ((x2 - x1) / (y2 - y1)).toFixed(2);
    miring = Math.floor(miring * 10) / 10; // buat ngambil 2 angka belakang koma
    let n = y2 - y1 + 1;
    let y = y1;

    for (let a = 1; a <= n; a++) {
        let x = miring * (y - y1) + x1;
        xgaris.push(Math.round(x));
        ygaris.push(y);
        console.log(`Iterasi ${a}: x = ${Math.round(x)}, y = ${y} miring = ${miring}`);// ini juga buat mantau
        y = y + 1;
    }
  }

  return { xgaris, ygaris };
}

function drawLine() {
  
  const x1 = parseInt(document.getElementById('x1').value);
  const y1 = parseInt(document.getElementById('y1').value);
  const x2 = parseInt(document.getElementById('x2').value);
  const y2 = parseInt(document.getElementById('y2').value);

  // buat manggil
  const { xgaris, ygaris } = bruteForce(x1, y1, x2, y2);

  // ini code default dari library chart.js
  chartInstance = new Chart("myChart", {
      type: "line",
      data: {
          labels: xgaris,
          datasets: [{
              fill: false,
              lineTension: 0,
              backgroundColor: "rgba(0,0,255,1.0)",
              borderColor: "rgba(0,0,255,0.1)",
              data: ygaris
          }]
      },
      options: {
          legend: { display: false },
          scales: {
            yAxes: [{ ticks: { min: Math.min(y1, y2), max: Math.max(y1, y2) } }],
            xAxes: [{ ticks: { min: Math.min(x1, x2), max: Math.max(x1, x2) } }]
          }
      }
  });
}
 
function resetForm() {
    document.getElementById("inputForm").reset();
    if (chartInstance) {
      chartInstance.destroy();
      chartInstance = null;
    }
  }