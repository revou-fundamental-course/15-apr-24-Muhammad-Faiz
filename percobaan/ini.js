// const xgaris = [];
// const ygaris = [];

// // Fungsi algoritma brute force untuk menggambar garis
// function bruteForce() {
//     let x1 = 3; let x2 = 11;
//     let y1 = 2; let y2 = 6;

//     let m = (y2 - y1) / (x2 - x1);
//     let n = x2 - x1 + 1;
//     let x = x1;

//     for (let a = 0; a < n; a++) {
//         let y = m * (x - x1) + y1;
//         xgaris.push(x);
//         ygaris.push(Math.round(y)); // Membulatkan nilai y
//         x = x + 1;
//     }
// }

// bruteForce();

// // Define Data
// const data = [{
//     x: xgaris,
//     y: ygaris,
//     mode: "lines+markers",
//     type: "scatter"
// }];

// // Define Layout
// const layout = {
//     xaxis: { range: [0, 20] },
//     yaxis: { range: [0, 20] },
// };

// // Display using Plotly
// Plotly.newPlot("grafik", data, layout);
