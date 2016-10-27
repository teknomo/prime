# prime
JavaScript Number Theory Library

(c) 2010-2016 Kardi Teknomo all rights reserved
http://people.revoledu.com/kardi/

See the demonstration of prime.js in 
http://people.revoledu.com/kardi/tutorial/BasicMath/Prime/index.html

Function List
ErastosthenesSieve(N1, N2) 
	return array list of primes between N1 and N2

IsPrime(N)
	return 1 if input N is prime, return > 1 if N is composite
	return -1 if input N is non positive integer or N<2

PrimeFactorization(N)
	return text prime factorization
	return -1 if input N is non positive integer or N<2
	report repeated prime as exponent

PrimeFactorization0(N)
	return text prime factorization
	return -1 if input N is non positive integer or N<2
	report repeated prime as repeated numbers

FindDivisors(N)
	return array contain list of divisors
	return -1 if input N is non positive integer
	note: more efficient algorithm

IsDivisible(nominator,denominator)
	return Boolean true if n is divisible by d
	e.g. IsDivisible(22,4) = false
	e.g. IsDivisible(20,5) = true

IntDiv(nominator, denominator)
	return quotient of integer division of two integers
	e.g. IntDiv(22,4) = 5 because 22/4=5.5 -> 5

Remainder(nominator, denominator)
	return remainder of integer division of two integers
	e.g. Remainder(22,4) = 2 because 22 = 4 * 5 + 2

IsCongruent(a,b,m)
	return true if a is congruent to b module m
	e.g. IsCongruent(7,2,5) = true because 5 divides (7-2)
	e.g. IsCongruent(15,20,10) = false because 10 does not divides (15-20)

gcd(m,n)
	return greatest common divisor of two integers
	e.g. gcd(12, 20) = 4
	e.g. gcd(30, 18) = 6

lcm(m,n)
	return least common multiple of two integers
	e.g. lcm(12, 20) = 60
	e.g. lcm(30, 18) = 90

IntLinearEquation(a,b)
	return Integer Linear Equation ax+by=gcd(a,b)
	e.g. 60x+22y => 60x+22y=2, x=-4, y=11

LinearDiophantineEquation(a,b,c)
	return the solution of Linear Diophantine Equation ax + by = c where a, b, c, x and y are integers
	e.g. 5x-13y=4 ==> -13

isPosInteger(inputVal)
	General purpose function to see if a suspected numeric input is a positive integer
	Taken from JavaScript™ Bible 5th Edition by Danny Goodman and Michael Morrison
