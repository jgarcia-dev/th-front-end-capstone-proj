// Charts setup =============================================================

// datasets
const hourlyLabels = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
const hourlyData = [1, 2, 1, 2, 4, 2, 3, 5, 3, 4, 6, 7, 6, 8, 5, 9, 6, 4, 2, 3, 3, 1, 2, 1];

const dailyLabels = ["S", "M", "T", "W", "T", "F", "S"];
const dailyData = [75, 100, 175, 125, 225, 200, 100];

const weeklyLabels = ["16-22","23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"];
const weeklyData = [750, 1200, 1500, 1250, 1500, 1700, 1250, 1750, 2200, 1750, 2200];

const monthlyLabels = ["JAN","FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const monthlyData = [3000, 2500, 5500, 6000, 4500, 5000, 4500, 6000, 6500, 7250, 5000, 7000];


// All charts global settings
Chart.defaults.global.defaultFontColor = '#aaa';
Chart.defaults.global.defaultFontFamily = "'Open Sans', sans-serif";
Chart.defaults.global.defaultFontSize = 13;
Chart.defaults.global.layout.padding.top = 20;
Chart.defaults.scale.ticks.padding = 15;

// Line chart global settings
Chart.defaults.global.elements.line.borderWidth = 1;
Chart.defaults.global.elements.line.borderColor = '#a0a3e3';
Chart.defaults.global.elements.line.backgroundColor = 'rgba(115, 119, 191, 0.25)';
Chart.defaults.global.elements.line.fill = 'start';
Chart.defaults.global.elements.line.tension = 0;

Chart.defaults.global.elements.point.radius = 6;
Chart.defaults.global.elements.point.borderWidth = 2;
Chart.defaults.global.elements.point.borderColor = '#8083c4';
Chart.defaults.global.elements.point.backgroundColor = '#fff';

// traffic chart
const trafficChartCtx = document.getElementById('traffic-chart').getContext('2d');
const trafficChart = new Chart(trafficChartCtx, {
    type: 'line',
    data: {
        labels: weeklyLabels,
        datasets: [{
            data: weeklyData
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    drawTicks: false
                },
                ticks: {
                    padding: 15
                }
            }],
            yAxes: [{
                gridLines: {
                    drawTicks: 0
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 500,
                    callback: function(value, index) {
                        if (value !== 0) {
                            return value;
                        }
                    }
                }
            }]
        },
        legend: {
            display: false
        }
    }
});


// Bar chart global settings
Chart.defaults.global.elements.rectangle.backgroundColor = 'rgba(115, 119, 191, 1)';

// daily traffic chart
const dailyChartCtx = document.getElementById('daily-chart').getContext('2d');
const dailyChart = new Chart(dailyChartCtx, {
    type: 'bar',
    data: {
        labels: dailyLabels,
        datasets: [{
            data: dailyData,
            barPercentage: 0.5
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    drawTicks: false
                },
                ticks: {
                    padding: 15
                }
            }],
            yAxes: [{
                offset: true,
                gridLines: {
                    offsetGridLines: true,
                    drawTicks: false
                },
                ticks: {
                    stepSize: 50
                }
            }]
        },
        legend: {
            display: false
        }
    }
});


// mobile users chart
const mobileUsersChartCtx = document.getElementById('mobile-users-chart').getContext('2d');
const mobileUsersChart = new Chart(mobileUsersChartCtx, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            borderWidth: 0,
            data: [20, 20, 60],
            backgroundColor: [
                'rgb(115, 177, 191)',
                'rgb(129, 201, 143)',
                'rgb(115, 119, 191)',
            ],
        }]
    },
    options: {
        layout: {
            padding: {
                right: 40
            },
        },
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                padding: 15,
                fontSize: 15
            },
        }
    }
});



// Chart Navigation Functionality =============================================================

const trafficNav = document.querySelector('.traffic-nav');

function setChart(chart, labelsArr, dataArr, ticksStepSize) {
    chart.options.animation.duration = 0;
    chart.data.labels = labelsArr;
    chart.data.datasets[0].data = dataArr;
    chart.options.scales.yAxes[0].ticks.stepSize = ticksStepSize;
    chart.update();
}

function updateTrafficNavStyle(element) {
    const trafficNavLis = document.getElementsByClassName('traffic-btn');

    // Clear selected class from all nav buttons
    for (let i = 0; i < trafficNavLis.length; i++) {
        trafficNavLis[i].classList.remove('selected');
    }

    element.classList.add('selected');
}


trafficNav.addEventListener('click', (e)=> {
    if (e.target.nodeName === 'LI') {
        const btn = e.target;
        const btnText = btn.textContent;

        updateTrafficNavStyle(btn);
    
        if (btnText === "Hourly") {
            setChart(trafficChart, hourlyLabels, hourlyData, 2);
        }
        if (btnText === "Daily") {
            setChart(trafficChart, dailyLabels, dailyData, 50);
        }
        if (btnText === "Weekly") {
            setChart(trafficChart, weeklyLabels, weeklyData, 500);
        }
        if (btnText === "Monthly") {
            setChart(trafficChart, monthlyLabels, monthlyData, 1000);
        }        
    }
});