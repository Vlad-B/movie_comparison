const debounce = (callback, delay) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) clearInterval(timeoutId);
		timeoutId = setTimeout(() => {
			callback.apply(null, args);
		}, delay);
	};
};
