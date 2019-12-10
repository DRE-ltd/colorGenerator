const { sin, cos, PI, ceil, floor, random } = Math;

exports.bojaRND = () => {
	let hex = `000000` + floor(random() * 0xffffff).toString(16);
	return `#` + hex.slice(-6);
};

exports.bojaHslaH = (range, red) => {
	let h = (360 / range) * red;
	let s = floor(random() * 100);
	let l = floor(random() * 100);
	let a = random();
	return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

exports.bojaHslaS = (range, red) => {
	let h = floor(random() * 360);
	let s = (100 / range) * red;
	let l = floor(random() * 100);
	let a = random();
	return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

exports.bojaHslaA = (range, red) => {
	let h = floor(random() * 360);
	let s = floor(random() * 100);
	let l = floor(random() * 100);
	let a = (1 / range) * red;
	return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

exports.bojaHsla = (range, red) => {
	let h = (360 / range) * red;
	let s = (100 / range) * red;
	let l = 60;
	let a = (1 / range) * red;
	return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

exports.rainbowColor = (range, i) => {
	let r = fetchComponent(range, i);
	let g = fetchComponent(range, i);
	let b = fetchComponent(range, i);

	return new boja(r, g, b).hex;
};

class boja {
	constructor(r, g, b) {
		(this.r = r), (this.g = g), (this.b = b);
	}
	get hex() {
		return `#` + byte2Hex(this.r) + byte2Hex(this.g) + byte2Hex(this.b);
	}
	get rgb() {
		return `rgb(${this.r.toString(10)},${this.g.toString(10)},${this.b.toString(
			10
		)})`;
	}
}

const byte2Hex = byte => {
	const nybHexString = `0123456789ABCDEF`;
	return (
		String(nybHexString.substr((byte >> 4) & 0x0f, 1)) +
		nybHexString.substr(byte & 0x0f, 1)
	);
};

const fetchComponent = (range, i, comp) =>
	ceil(sin(((2 * PI) / range) * i + 0) * 127 + 128);

// testing
console.log(this.rainbowColor(100, 4));
console.log(this.rainbowColor(100, 5));
console.log(this.rainbowColor(100, 6));
console.log(this.rainbowColor(100, 7));
console.log(this.rainbowColor(100, 466));
console.log(this.rainbowColor(100, 66));
