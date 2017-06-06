function onSecond(cb) {
	const ms = 1000;
	const timeout = ms - (Date.now() % ms);

	let off = clearTimeout;
	let timer = setTimeout(() => {
		cb();
		timer = setInterval(cb, ms);
		off = clearInterval;
	}, timeout);

	return () => off(timer);
};
