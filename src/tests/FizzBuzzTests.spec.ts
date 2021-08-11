import { FizzBuzz } from "../FizzBuzz";
import each from 'jest-each'

describe("FizzBuzz", () => {
    each([
        [1, 2, 4],
    ]).it('GivenInputNotDivisibleBy3And5AndNotAPrimeNumber_ShouldReturnTheNumber', (input) => {
        // Arrange
        let fizzB = createFizzBuzz();
        //  Act
        let result = fizzB.CalculateFizzBuzz(input);
        // Assert
        expect(result).toEqual(input);
    });

    each([
        [2, 7, 11],
    ]).it('GivenInputNotDivisibleBy3And5AndIsAPrimeNumber_ShouldReturnWhiz', (input) => {
        // Arrange
        let fizzB = createFizzBuzz();
        //  Act
        let result = fizzB.CalculateFizzBuzz(input);
        // Assert
        expect(result).toEqual('Whiz');
    });

    each([
        [15, 30, 75],
    ]).it('GivenInputDivisibleBy3And5_ShouldReturnFizzBuzz', (input) => {
        // Arrange
        let fizzB = createFizzBuzz();
        // Act
        let result = fizzB.CalculateFizzBuzz(input);
        // Assert
        expect(result).toEqual('FizzBuzz');
    });

    each([
        [6, 9, 12],
    ]).it('GivenInputDivisibleBy3AndIsNotAPrimeNumber_ShouldReturnFizz', (input) => {
        // Arrange
        let fizzB = createFizzBuzz();
        // Act
        let result = fizzB.CalculateFizzBuzz(input);
        // Assert
        expect(result).toEqual('Fizz');
    });

    each([
        [10, 20, 25],
    ]).it('GivenInputDivisibleBy5AndIsNotAPrimeNumber_ShouldReturnBuzz', (input) => {
        // Arrange
        let fizzB = createFizzBuzz();
        // Act
        let result = fizzB.CalculateFizzBuzz(input);
        // Assert
        expect(result).toEqual('Buzz');
    });

    each([
        [2, 7, 97],
    ]).it('GivenInputIsPrimeNumberAndIsNotDivisibleBy3Or5_ShouldReturnWhiz', (input) => {
        // Arrange
        let fizzB = createFizzBuzz();        
        // Act
        let result = fizzB.CalculateFizzBuzz(input);
        // Assert
        expect(result).toEqual('Whiz');
    });

   it('GivenInputDivisibleBy3AndIsAPrimeNumber_ShouldReturnFizzWhiz', () => {
        // Arrange
        let fizzB = createFizzBuzz();
        // Act
        let result = fizzB.CalculateFizzBuzz(3);
        // Assert
        expect(result).toEqual('FizzWhiz');
    });

    it('GivenInputDivisibleBy5AndIsAPrimeNumber_ShouldReturnBuzzWhiz', () => {
        // Arrange
        let fizzB = createFizzBuzz();
        // Act
        let result = fizzB.CalculateFizzBuzz(5);
        // Assert
        expect(result).toEqual('BuzzWhiz');
    });

});


function createFizzBuzz() {
    return new FizzBuzz();
}
