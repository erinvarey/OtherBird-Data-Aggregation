function makeLineChart(chartTitle, muleData, rapData){
	var ctx = document.getElementById("myChart").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: "The Mule",
				data: muleData,
				backgroundColor: 'rgba(0, 0, 0, 0.0)',
				borderColor: 'rgba(255,99,132,1)',
				borderWidth: 3
			}, {
				label: "Rapscallion",
				data: rapData,
				backgroundColor: 'rgba(0, 0, 0, 0.0)',
				borderColor: 'rgba(121, 189, 229,1)',
				borderWidth: 3
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: "Average Star Rating"
					},
					ticks: {
						beginAtZero: true,
						steps: 10,
						stepValue: 5,
						max: 5,
						min: 0
					}
				}],
				xAxes: [{
					scaleLabel: {
						display: true,
						labelString: "Date"
					}
				}]
			},
			title: {
				display: true,
				text: chartTitle
			},
		}
	});
}

function update() {
	var muleData = [4.6, 4.5, 4.1, 3.8, 4.5, 4.2, 4.3];
	var rapData = [2.6, 2.5, 2.1, 2.8, 2.5, 2.2, 2.3];
	
	var start = document.getElementById("startDate").value;
	var end = document.getElementById("endDate").value;
	var dateRange = start + " to " + end;
	var chartTitle = "Average Star Ratings from " + dateRange;
	console.log(typeof(chartTitle));

	if (start < end) {
		document.getElementById("chartInfo").innerHTML = dateRange;
		makeLineChart(chartTitle, muleData, rapData);
	} else {
		document.getElementById("chartInfo").innerHTML = "Please ensure the start date is earlier than the end date";
	}
	
}
