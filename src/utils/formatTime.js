export const format = (seconds) => {
	if (isNaN(seconds)) return '...';

	const minutes = Math.floor(seconds / 60);
	seconds = Math.floor(seconds % 60);
	if (seconds < 10) seconds = '0' + seconds;

	return `${minutes}:${seconds}`;
}

export const timeToMiliSeconds = (time) => {
	if (time === null || time === undefined) return '...';

	const [min, sec] = time.split(':');
	const milliseconds = (+min * 60) + +sec + 1; 
	return milliseconds
}