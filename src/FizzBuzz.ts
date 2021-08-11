export class FizzBuzz {
    CalculateFizzBuzz(input) {

        if (this.isPrimeNumber(input) && input <= 100 ) {
            if (this.numberIsDivisbleBy3(input)) return 'FizzWhiz';
            if (this.numberIsDivisbleBy5(input)) return 'BuzzWhiz';    
            return 'Whiz';
        }
        if (this.numberIsDivisbleBy3And5(input)) return 'FizzBuzz';
        if (this.numberIsDivisbleBy3(input)) return 'Fizz';
        if (this.numberIsDivisbleBy5(input)) return 'Buzz';
        

        return input;
    }

    isPrimeNumber(input) {
        if (input == 1)
            return false;
        for (let i = 2; i < input; i++) {
            if (input % i == 0)
                return false;
        }
        return true;
    }

    private numberIsDivisbleBy3And5(input) {
        if (input % 15 == 0)
            return true;
    }
    private numberIsDivisbleBy3(input) {
        if (input % 3 == 0)
            return true;
    }
    private numberIsDivisbleBy5(input) {
        if (input % 5 == 0)
            return true;
    }
}