import { expect } from "chai";
import { createCounter } from "../src/counter.js";



describe('Counter', () => {
    let counter;
    beforeEach(() => {
        const number = 10
        counter = createCounter(number)
    });

    it('Return given number', () => {
        const expected = 10
        const actual = counter()
        expect(expected).to.be.equal(actual)
    });
    it('Return given number +2', () => {
        const expected = 12
        counter()
        counter()
        const actual = counter()
        expect(expected).to.be.equal(actual)
    });
})