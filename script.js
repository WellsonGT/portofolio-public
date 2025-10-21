// Ambil elemen
const myWorksBtn = document.getElementById('myWorksBtn');
const popup = document.getElementById('projectPopup');
const closePopup = document.getElementById('closePopup');

// Tampilkan popup
myWorksBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Tutup popup
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Tutup popup saat klik di luar area popup
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// ===== RADAR CHART =====
const radarCtx = document.getElementById('skillsRadarChart').getContext('2d');

const radarChart = new Chart(radarCtx, {
  type: 'radar',
  data: {
    labels: ['PHP', 'HTML5', 'Javascript', 'Python', 'CSS3', 'MySQL'],
    datasets: [{
      label: 'Skill Level (%)',
      data: [90, 95, 85, 90, 90, 90],
      backgroundColor: 'rgba(249, 178, 52, 0.3)',
      borderColor: '#f9b234',
      borderWidth: 2,
      pointBackgroundColor: '#f9b234',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f9b234'
    }]
  },
  options: {
    responsive: true,
    scales: {
      r: {
        angleLines: { color: '#333' },
        grid: { color: '#333' },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: false,
          color: '#aaa',
          stepSize: 100
        },
        pointLabels: {
          color: '#fff',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#f9b234',
          font: { size: 14 }
        }
      },
      tooltip: {
        backgroundColor: '#111',
        titleColor: '#f9b234',
        bodyColor: '#fff'
      }
    }
  }
});
