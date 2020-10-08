window.addEventListener('load', () => {
	addBalance();
});

const addBalance = () => {
	const DOM = {
		dollars25      : document.querySelector('#dollars25'),
		dollars50      : document.querySelector('#dollars50'),
		dollars100     : document.querySelector('#dollars00'),
		dollars150     : document.querySelector('#dollars50'),
		currentBalance : document.querySelector('#currentBalance'),
	};

	dollars25.addEventListener('click', event => {
		let currentValue = parseInt(DOM.currentBalance.innerHTML);
		currentValue += 25;
		DOM.currentBalance.innerHTML = currentValue;
	});

	dollars50.addEventListener('click', event => {
		let currentValue = parseInt(DOM.currentBalance.innerHTML);
		currentValue += 50;
		DOM.currentBalance.innerHTML = currentValue;
	});

	dollars100.addEventListener('click', event => {
		let currentValue = parseInt(DOM.currentBalance.innerHTML);
		currentValue += 100;
		DOM.currentBalance.innerHTML = currentValue;
	});

	dollars150.addEventListener('click', event => {
		let currentValue = parseInt(DOM.currentBalance.innerHTML);
		currentValue += 150;
		DOM.currentBalance.innerHTML = currentValue;
	});
};
