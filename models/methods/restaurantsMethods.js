// Methods for the restaurant's model
exports.calcRating = () => {
	const five = this.rating_5stars.length;
	const four = this.rating_4stars.length;
	const three = this.rating_3stars.length;
	const two = this.rating_2stars.length;
	const one = this.rating_1stars.length;

	const value = (five * 5) + (four * 4) + (three * 3) + (two * 2) + (one);
	const sum = five + four + three + two + one;

	return value / sum;
};