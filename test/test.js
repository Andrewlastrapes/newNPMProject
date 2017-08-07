


const expect = require("chai").expect;
const Calculator = require("../calculator");

let calc = new Calculator();


describe("Can do arithmetic", () => {
	describe("Can add numbers", () => {
		it("Can add two positive integers", () => {
			expect(calc.add(1, 1)).to.equal(2);
		})
		it("Can add to zero", () => {
			expect(calc.add(1, 0)).to.equal(1);
		});
		it("Can subtract two positive numbers", () => {
			expect(calc.subtract(2, 1)).to.equal(1)
		})
		it("Can divide two positive numbers", () => {
			expect(calc.divide(6, 3)).to.equal(2);
		})
		it("Can multiply two positive numbers", () => {
			expect(calc.multiply(5, 3)).to.equal(15);
		})
	})
	describe("Can add numbers asynchronously", () => {
		it("Can add two integers asynchronously"), (done) =>{
			calc.AddAsync(3, 2, (val) => {
				if (val === 5){
					done();
				} else {
					done(new Error("nope"));
				}
			}).to.equal(5);
		}
	})
});
