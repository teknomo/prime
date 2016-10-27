# prime
<h1>Prime.JS - JavaScript Number Theory Library</h1>
<p>(c) 2010-2016 Kardi Teknomo all rights reserved<br />
  <a href="http://people.revoledu.com/kardi/">http://people.revoledu.com/kardi/</a></p>
<p>See the demonstration of prime.js in <br />
  <a href="http://people.revoledu.com/kardi/tutorial/BasicMath/Prime/index.html">http://people.revoledu.com/kardi/tutorial/BasicMath/Prime/index.html</a></p>
<h2>Function List</h2>
<h3>ErastosthenesSieve(N1, N2)</h3>
<p>return array list of primes between N1 and N2</p>
<h3>IsPrime(N)</h3>
  <p>return 1 if input N is prime, return &gt; 1 if N is composite<br />
  return -1 if input N is non positive integer or N&lt;2</p>
<h3>PrimeFactorization(N)</h3>
  <p>return text prime factorization<br />
  return -1 if input N is non positive integer or N&lt;2<br />
  report repeated prime as exponent</p>
<h3>PrimeFactorization0(N)</h3>
  <p>return text prime factorization<br />
  return -1 if input N is non positive integer or N&lt;2<br />
  report repeated prime as repeated numbers</p>
<h3>FindDivisors(N)</h3>
  <p>return array contain list of divisors<br />
  return -1 if input N is non positive integer<br />
  note: more efficient algorithm</p>
<h3>IsDivisible(nominator,denominator)</h3>
  <p>return Boolean true if n is divisible by d<br />
  e.g. IsDivisible(22,4) = false<br />
  e.g. IsDivisible(20,5) = true</p>
<h3>IntDiv(nominator, denominator)</h3>
  <p>return quotient of integer division of two integers<br />
  e.g. IntDiv(22,4) = 5 because 22/4=5.5 -&gt; 5</p>
<h3>Remainder(nominator, denominator)</h3>
  <p>return remainder of integer division of two integers<br />
  e.g. Remainder(22,4) = 2 because 22 = 4 * 5 + 2</p>
<h3>IsCongruent(a,b,m)</h3>
  <p>return true if a is congruent to b module m<br />
  e.g. IsCongruent(7,2,5) = true because 5 divides (7-2)<br />
  e.g. IsCongruent(15,20,10) = false because 10 does not divides (15-20)</p>
<h3>gcd(m,n)</h3>
  <p>return greatest common divisor of two integers<br />
  e.g. gcd(12, 20) = 4<br />
  e.g. gcd(30, 18) = 6</p>
<h3>lcm(m,n)</h3>
  <p>return least common multiple of two integers<br />
  e.g. lcm(12, 20) = 60<br />
  e.g. lcm(30, 18) = 90</p>
<h3>IntLinearEquation(a,b)</h3>
  <p>return Integer Linear Equation ax+by=gcd(a,b)<br />
  e.g. 60x+22y =&gt; 60x+22y=2, x=-4, y=11</p>
<h3>LinearDiophantineEquation(a,b,c)</h3>
  <p>return the solution of Linear Diophantine Equation ax + by = c where a, b, c, x and y are integers<br />
  e.g. 5x-13y=4 ==&gt; -13<br />
</p>
<p>isPosInteger(inputVal)<br />
  <p>General purpose function to see if a suspected numeric input is a positive integer<br />
  Taken from JavaScript™ Bible 5th Edition by Danny Goodman and Michael Morrison<br />
</p>
