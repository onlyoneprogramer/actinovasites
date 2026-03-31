window.onload = function () {

    window.goContact = function () {
        window.location.href = "/contact";
    };

    // 그래프
    const ctx = document.getElementById('techChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Kernel', 'eBPF', 'Detection', 'Reverse', 'Cloud'],
            datasets: [{
                data: [95, 90, 92, 97, 85]
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: '#aaa' }, grid: { display: false } },
                y: {
                    ticks: { color: '#aaa' },
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // 파티클 효과
    particlesJS("particles-js", {
        particles: {
            number: { value: 60 },
            size: { value: 2 },
            move: { speed: 1 },
            line_linked: { enable: true }
        }
    });
};