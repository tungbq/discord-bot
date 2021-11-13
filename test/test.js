const getRandom = () => {
	const random = Math.floor(Math.random() * 4 + 1);
	let randomName = 'Unknown User';
	if (random === 1) {
		randomName = 'Tung';
	} else if (random === 2) {
		randomName = 'Tuyen';
	} else if (random === 3) {
		randomName = 'Phu';
	} else if (random === 4) {
		randomName = 'Ton';
	}
	console.log(randomName);
	return randomName;
};

// getRandom();

// http://api.weatherapi.com/v1
