function createLabels () {
	return [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
}

function createDataset (name, values, rgb) {
	var rgb_str = "rgba("+rgb[0]+","+rgb[1]+","+rgb[2];
	return {
		label: name,
		fillColor: rgb_str + ",0.2)",
		strokeColor: rgb_str + ",1)",
		pointColor: rgb_str + ",1)",
		pointStrokeColor: "#fff",
		pointHighlightFill: "#fff",
		pointHighlightStroke: rgb_str + ",1)",
		data: values
	};
}

function createOptions () {
	return {
		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines : true,
		//String - Colour of the grid lines
		scaleGridLineColor : "rgba(0,0,0,0.05)",
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
	};
}

var ChartOfLoife = function (data) {
	var self = this;
	var charts = [];

	// offers
	var offers = {
		ctx: $("#offers canvas")[0].getContext("2d"),
		data: {
			labels: createLabels (),
			datasets: [
				createDataset ("Angebote", data[0].offers, [220, 220, 220]),
				createDataset ("Aufträge", data[0].orders, [151, 187, 205]),
			]
		},
		options: createOptions ()
	};
	offers.chart = new Chart (offers.ctx)
		.Line (offers.data, offers.options);

	// cancellations
	var cancellations = {
		ctx: $("#cancellations canvas")[0].getContext("2d"),
		data: {
			labels: createLabels (),
			datasets: [
				createDataset ("Stornierungen", data[1], [220, 220, 220])
			]
		},
		options: createOptions ()
	};
	cancellations.chart = new Chart (cancellations.ctx)
		.Line (cancellations.data, cancellations.options);

	// customer
	var customer = {
		ctx: $("#customer canvas")[0].getContext("2d"),
		data: {
			labels: createLabels (),
			datasets: [
				createDataset ("Angebote", data[2], [220, 220, 220])
			]
		},
		options: createOptions ()
	};
	customer.chart = new Chart (customer.ctx)
		.Line (customer.data, customer.options);

	// payday
	var payday = {
		ctx: $("#payday canvas")[0].getContext("2d"),
		data: {
			labels: createLabels (),
			datasets: [
				createDataset ("Angebote", data[3], [220, 220, 220])
			]
		},
		options: createOptions ()
	};
	payday.chart = new Chart (payday.ctx)
		.Line (payday.data, payday.options);

	// delivery
	var delivery = {
		ctx: $("#delivery canvas")[0].getContext("2d"),
		data: {
			labels: createLabels (),
			datasets: [
				createDataset ("Angebote", data[4], [220, 220, 220])
			]
		},
		options: createOptions ()
	};
	delivery.chart = new Chart (delivery.ctx)
		.Line (delivery.data, delivery.options);
};


function main () {
	var data = [
		// offers
		{
			offers: [65, 59, 80, 81, 56, 55, 40],
			orders: [28, 48, 40, 19, 86, 27, 90]
		},
		// cancellations
		[28, 48, 40, 19, 86, 27, 90],
		// new customer
		[28, 48, 40, 19, 86, 27, 90],
		// paydays
		[28, 48, 40, 19, 86, 27, 90],
		// delivery
		[28, 48, 40, 19, 86, 27, 90]
	];

	var charts = new ChartOfLoife (data);
}

$(main);
