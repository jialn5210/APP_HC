const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			
			counter.innerText = count + inc;
			
			setTimeout(updateCount, 5);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});


jQuery(document).ready(function() {
	var chartDiv = $("#barChart");
	var myChart = new Chart(chartDiv, {
		type: 'pie',
		data: {
			labels: ["Confirmados", "Recuperados", "Óbitos", "Suspeitos"],
			datasets: [
			{
				data: [12,7, 3, 75],
				backgroundColor: [
				   "#00B0F2",
				"#18F200",
				"#FF0606",
				"#FF9B06"
				]
			}]
		},
		options: {
			responsive: true,
	maintainAspectRatio: false,
		}
	});
		});
	
	
	