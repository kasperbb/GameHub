window.addEventListener('load', () => {
	addBalance();
});

const addBalance = () => {
	const DOM = {
		currentBalance : document.querySelector('#currentBalance'),
		dollars : document.querySelectorAll('.dollar'),
	};

	DOM.dollars.forEach(elem => {
		elem.addEventListener('click', event => {
			let currentValue = parseInt(DOM.currentBalance.innerHTML);
			currentValue += parseInt(elem.classList[1]);
			DOM.currentBalance.innerHTML = currentValue;
		});
	});
};
