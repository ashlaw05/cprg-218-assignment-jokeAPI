fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
	.then(response => response.json())
	.then(data => {
		console.log(data);
		joke.textContent = data.joke || data.setup + "..." + data.delivery
	});

	document.getElementById("programming").addEventListener ('click',function() {
		fetch("https://v2.jokeapi.dev/joke/programming?safe-mode")
		.then(response => response.json())
		.then(data => {
			console.log(data);
			joke.textContent = data.joke || data.setup + "..." + data.delivery
			title.textContent = "A random Programming joke"
		});
	});

	document.getElementById("misc").addEventListener ('click',function() {
		fetch("https://v2.jokeapi.dev/joke/misc?safe-mode")
		.then(response => response.json())
		.then(data => {
			console.log(data);
			joke.textContent = data.joke || data.setup + "..." + data.delivery
			title.textContent = "A random Misc joke"
		});
	});
    
	document.getElementById("pun").addEventListener ('click',function() {
		fetch("https://v2.jokeapi.dev/joke/pun?safe-mode")
		.then(response => response.json())
		.then(data => {
			console.log(data);
			joke.textContent = data.joke || data.setup + "..." + data.delivery
			title.textContent = "A random Pun"
		});
	});

	document.getElementById("spooky").addEventListener ('click',function() {
		fetch("https://v2.jokeapi.dev/joke/spooky?safe-mode")
		.then(response => response.json())
		.then(data => {
			console.log(data);
			joke.textContent = data.joke || data.setup + "..." + data.delivery
			title.textContent = "A random Spooky joke"
		});
	});

	document.getElementById("christmas").addEventListener ('click',function() {
		fetch("https://v2.jokeapi.dev/joke/christmas?safe-mode")
		.then(response => response.json())
		.then(data => {
			console.log(data);
			joke.textContent = data.joke || data.setup + "..." + data.delivery
			title.textContent = "A random Christmas joke"
		});
	});