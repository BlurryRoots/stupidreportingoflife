function setup () {
	var charts = [];

	charts[0] = {
		ctx: $("#offers canvas")[0].getContext("2d"),
		data: [
			{
				value: 300,
				color:"#F7464A",
				highlight: "#FF5A5E",
				label: "Angebote"
			},
			{
				value: 50,
				color: "#46BFBD",
				highlight: "#5AD3D1",
				label: "Aufträge"
			}
		]
	};
	charts[0].chart = new Chart (charts[0].ctx).Doughnut (charts[0].data);

	charts[1] = {
		ctx: $("#cancellations canvas")[0].getContext("2d"),
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [
				{
					label: "My First dataset",
					fillColor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: [65, 59, 80, 81, 56, 55, 40]
				},
				{
					label: "My Second dataset",
					fillColor: "rgba(151,187,205,0.2)",
					strokeColor: "rgba(151,187,205,1)",
					pointColor: "rgba(151,187,205,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(151,187,205,1)",
					data: [28, 48, 40, 19, 86, 27, 90]
				}
			]
		},
		options: {
			///Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,
			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(0,0,0,.05)",
			//Number - Width of the grid lines
			scaleGridLineWidth : 1,
			//Boolean - Whether the line is curved between points
			bezierCurve : true,
			//Number - Tension of the bezier curve between points
			bezierCurveTension : 0.4,
			//Boolean - Whether to show a dot for each point
			pointDot : true,
			//Number - Radius of each point dot in pixels
			pointDotRadius : 4,
			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,
			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			pointHitDetectionRadius : 20,
			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,
			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,
			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,
			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
		}
	};
	charts[1].chart = new Chart (charts[1].ctx).Line (charts[1].data, charts[1].options);

	return charts;
}


window.onload = function () {
	window.charts = setup ();
};