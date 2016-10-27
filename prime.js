////////////////////////////////////////
//
//  prime.js NUMBER THEORY LIBRARY
//
//  by Kardi Teknomo
// (c) 2010-2016 Kardi Teknomo all rights reserved
// http://people.revoledu.com/kardi/
//
////////////////////////////////////////


// return array list of primes between N1 and N2
// (c) 2010-2016 Kardi Teknomo all rights reserved
// http://people.revoledu.com/kardi/
function ErastosthenesSieve(N1, N2)
{
    N1=parseInt(N1);
	N2=parseInt(N2);
	var m = 0;
	var prime=new Array();
    if (N2<N1)
	{
		//swap
		var temp=N1;
		N1=N2;
		N2=temp;
	}
	
	for(var n = N1;n<=N2; n++)
	{
		i=IsPrime(n);
        if (i == 1)
		{
            prime[m] = n;
            m ++;
		}
	}
	
	return prime;
}


// return 1 if input N is prime, return > 1 if N is composite
// return -1 if input N is non positive integer or N<2
// (c) 2010-2016 Kardi Teknomo all rights reserved
// http://people.revoledu.com/kardi/
function IsPrime(N)
{
	if(isPosInteger(N) & N >=2 & N<MAXLIMIT)
	{
		Limit = Math.floor(Math.sqrt(N));
		for(var i=Limit; i>=2; i--)
		{
			if(N % i == 0)
			{
				break;
			}
		}
		return i;
	}
	else
	{
		return false;
	}
}

// return text prime factorization
// return -1 if input N is non positive integer or N<2
// (c) 2010-2016 Kardi Teknomo all rights reserved
// http://people.revoledu.com/kardi/
function PrimeFactorization(N)
{
	if(isPosInteger(N) & N >=2 & N<MAXLIMIT)
	{
		var p = 2;
		var i = 0;
		var arr = new Array();
		var txt = N + " = ";
		while (N >= p * p)
		{
			if (N % p == 0)
			{
				arr[i]=p;
				N = N / p;	//divide by prime number
				i++;
			}
			else
			{
				p++;
			}
		}
		arr[i]=N;
		
		// reporting		
		var e=0;
		for(var j=0; j<arr.length; j++)
		{
			b=arr[j];
			e++;
			if(arr[j]!=arr[j+1])
			{
				if(j==arr.length-1)
				{
					if(e>1)
					{
						txt += b + "^" + e;
					}
					else  // e==0
					{
						txt += b;
					}
				}
				else
				{
					if(e>1)
					{
						txt += b + "^" + e + " * ";
					}
					else  // e==0
					{
						txt += b + " * ";
					}
				}
				e=0;
			}
		}
		return txt;
	}
	else
	{
		return false;
	}
}




// return text prime factorization
// return -1 if input N is non positive integer or N<2
// report repeated prime as repeated numbers
// (c) 2010-2016 Kardi Teknomo all rights reserved
// http://people.revoledu.com/kardi/
function PrimeFactorization0(N)
{
	if(isPosInteger(N) & N >=2 & N<MAXLIMIT)
	{
		p = 2;
		txt = N + " = ";
		while (N >= p * p)
		{
			if (N % p == 0)
			{
				txt += p + " * ";
				N = N / p;	//divide by prime number
			}
			else
			{
				p++;
			}
		}
		txt += N;
		return txt;
	}
	else
	{
		return false;
	}
}

// return array contain list of divisors
// return -1 if input N is non positive integer
// note: more efficient algorithm
// (c) 2010-2016 Kardi Teknomo all rights reserved
// http://people.revoledu.com/kardi/
function FindDivisors(N)
{
	if(isPosInteger(N) & N<MAXLIMIT)
	{
		var arr= new Array();
		i = 0;
		Limit = Math.floor(Math.sqrt(N));
		for(var k=1; k<=Limit; k++)
		{
			if(N % k==0)
			{
				arr[i]= k;
				i++;  
			}
		}
		m=i--; // m = number of divisors <= sqr(N)
		if(IntDiv(N,arr[m-1])==arr[m-1])
		{
			// if N is a perfect square
			n=2*m-1; // number of divisors
			for(j=0; j<m-1; j++)
			{
				arr[m+j]=IntDiv(N,arr[m-j-2]);
			}
		}
		else
		{
			// if N is not a perfect square
			n=2*m;  // number of divisors
			for(j=0; j<m; j++)
			{
				arr[m+j]=IntDiv(N,arr[m-j-1]);
			}
		}
		return arr;
	}
	else
	{
		return false;
	}
}


// return array contain list of divisors
// return -1 if input N is non positive integer
// note: inefficient algorithm
// (c) 2010-2016 Kardi Teknomo all rights reserved
// http://people.revoledu.com/kardi/
function FindDivisorsInefficient(N)
{
	N=parseInt(N);
	if(isPosInteger(N) & N<MAXLIMIT)
	{
		var arr= new Array();
		i = 0;
		for(var k = 1; k<= N; k++)
		{
			if(N % k==0)
			{
				arr[i]= k;
				i++;
			}
		}
		return arr;
	}
	else
	{
		return false;
	}
}

// convert content of array into text
// (c) 2010-2016 Kardi Teknomo all rights reserved
// http://people.revoledu.com/kardi/
function PrintArray(arr)
{
	var txt="";
	for(var i=0;i<arr.length-1; i++)
	{
		txt += arr[i] + ",";
	}
	txt += arr[arr.length-1];
	return txt;
}


// general purpose function to see if a suspected numeric input
// is a positive integer
// taken from JavaScript™ Bible 5th Edition by Danny Goodman and Michael Morrison
function isPosInteger(inputVal) {
	inputStr = inputVal.toString();
	for (var i = 0; i < inputStr.length; i++) {
		var oneChar = inputStr.charAt(i);
		if (oneChar < "0" || oneChar > "9") {
			return false;
		}
	}
	return true;
}


// general purpose function to return Boolean true if n is divisible by d
// e.g. IsDivisible(22,4) = false
// e.g. IsDivisible(20,5) = true
// (c) 2010-2016 Kardi Teknomo all rights reserved
// http://people.revoledu.com/kardi/
function IsDivisible(nominator,denominator)
{
	return (nominator % denominator==0);
}



// general purpose function to return quotient of integer division of two integers
// e.g. IntDiv(22,4) = 5 because 22/4=5.5 -> 5
// (c) 2010-2016 Kardi Teknomo all rights reserved
// http://people.revoledu.com/kardi/
function IntDiv(nominator, denominator)
{
	 return Math.floor(nominator/denominator);
}

// general purpose function to return remainder of integer division of two integers
// e.g. Remainder(22,4) = 2 because 22 = 4 * 5 + 2
// (c) 2010-2016 Kardi Teknomo all rights reserved
// http://people.revoledu.com/kardi/
function Remainder(nominator, denominator)
{
	return nominator % denominator;
	//return nominator-denominator*IntDiv(nominator, denominator);
}

// general purpose function to return true if a is congruent to b module m
// e.g. IsCongruent(7,2,5) = true because 5 divides (7-2)
// e.g. IsCongruent(15,20,10) = false because 10 does not divides (15-20)
// (c) 2010-2016 Kardi Teknomo all rights reserved
// http://people.revoledu.com/kardi/
function IsCongruent(a,b,m)
{
	return IsDivisible(a-b,m)
}


// general purpose function to return greatest common divisor of two integers
// e.g. gcd(12, 20) = 4
// e.g. gcd(30, 18) = 6
// (c) 2010-2016 Kardi Teknomo all rights reserved
// http://people.revoledu.com/kardi/
function gcd(m,n)
{
	if(n==0)
		return m;
	else
	{
		var k=1;
		while (k!=0)
		{
			k = m % n;
			m = n;
			n = k;
		}
		return m;
	}
}

// general purpose function to return least common multiple of two integers
// e.g. lcm(12, 20) = 60
// e.g. lcm(30, 18) = 90
// (c) 2010-2016 Kardi Teknomo all rights reserved
// http://people.revoledu.com/kardi/
function lcm(m,n)
{
	g=gcd(m,n)
	if(g==0)
		return 0;
	else
		return m*n/g;
}


//general purpose function to return Integer Linear Equation ax+by=gcd(a,b)
// e.g. 60x+22y => 60x+22y=2, x=-4, y=11
function IntLinearEquation(a,b)
{
	var x=1;	var g=a;	var v=0;	var w=b;
	while (w!=0)
	{
		var q = IntDiv(g, w);
		var t = Remainder(g, w);
		var s = x - q*v;
		x = v; 	g = w;
		v = s;  w = t;
	}
	if(b==0)
	{
		g=gcd(a,b);
		y=1;
		if(a==0)
			x=1;
	}
	else
		y=(g-a*x)/b;
	
	return Array(g,x,y);
}

// return -1 if no solution
// still incorrect!!!!!!!!!!!!!
function IntIntegerLinearCongruentEquation(a,b,m)
{
	var g1=gcd(a,m);
	if(IsDivisible(g1,b))
	{
		return false;   //no solution
	}
	else
	{
		arr=IntLinearEquation(a,m);
		alert(arr);
		g=arr[0];
		x=arr[1];
		y=arr[2];
		x0=b*x/g;
		alert(x0);
		var arrSolution=new Array();
		for(var k=0; k<g; k++)
		{
			arrSolution[k]=x0+(k*m/g);
		}
		alert(arrSolution);
		return arrSolution;
	}
}


function LinearDiophantineEquation(a,b,c)
{
	var g=gcd(a,b);
	alert(g);
	if(IsDivisible(c,g)==false)
	{
		alert("no solution");
		return false;   //no solution
	}
	else
	{
		alert("has solution");
		arr=IntLinearEquation(a,c);
		alert(arr);
		g=arr[0];
		x=arr[1];
		y=arr[2];
		x0=b*x/g;
		alert(x0);
		return x0;
		//
		/*var arrSolution=new Array();
		for(var k=0; k<g; k++)
		{
			arrSolution[k]=x0+(k*c/g);
		}
		alert(arrSolution);
		return arrSolution; */
	}
}
