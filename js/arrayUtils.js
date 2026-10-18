export function generateRandomArray(size, min, max) {
	const result = [];

	for (let index = 0; index < size; index += 1) {
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		result.push(randomNumber);
	}

	return result;
}
