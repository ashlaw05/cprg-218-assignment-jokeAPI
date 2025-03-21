fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
	.then(response => response.json())
	.then(data => {
		console.log(data);
		joke.textContent = data.joke || data.setup + data.delivery
	});

	document.getElementById("programming").addEventListener ('click',function() {
		fetch("https://v2.jokeapi.dev/joke/programming?safe-mode")
		.then(response => response.json())
		.then(data => {
			console.log(data);
			joke.textContent = data.joke || data.setup + data.delivery
		});
	});
    