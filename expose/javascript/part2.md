1. At line 12 it does console.log(i). i is a var so it has function scope. i was originally declared to 0, and is incremented upwards as long as i < prices.length, thus when i = prices.length it stops. Thus console.log(i) would be prices.length which is 3. So we expect the output:

```
3
```

2. At line 13 it prints discountedPrice, which exists since it was declared with var so it is function scope. It was last set to the last element of price * (1 - discount). The last price is 300 * (1 - 0.5) = 150

```
150
```

3. finalPrice is a var so it has function scope. In the last run of the for loop it is equal to Math.round(discountedPrice * 100) / 100. As seen in 2, discountedPrice is 150. So Math.round(150*100)/100 = 150 so we expect

```
150
```

4. This function would return the discounted array thats being built up. It is made with every item in the input prices array, multiplied by (1-discount) which is 0.5. Thus the array returned is [50, 100, 150].

```
[50, 100, 150]
```

5. At line 12 it attempts to print the variable i, however it was defined with a let statement in the for loop so its scope is only in the for loop. Thus an error occurs, since i is not defined.

6. At line 13 it attempts to print the variable discountedPrice, however it was defined with a let statement in the for loop so its scope is only in the for loop. Thus an error occurs, since discountedPrice is not defined.

7. Final price is in the scope of the entire function since it is a let statement at the top level of the function. The last time it is set, it is Math.round(discountedPrice * 100) / 100. discountedPrice is the last element in prices * (1-discount) which is 300*0.5 = 150. From there it gets multiplied by 100, rounded, and divided by 100 which yields 150. So we expect

```
150
```

8. This function would return the discounted array thats being built up. discounted was defined with let at the top level of the function, so it is in scope of the entire funciton including the return statement. It is made with every item in the input prices array, multiplied by (1-discount) which is 0.5. Thus the array returned is [50, 100, 150].

```
[50, 100, 150]
```

9. This function would throw an error since i was declared with a let statement in the for loop, and thus its scope ends after the for loop. The console.log(i) fails since i is not in scope.

10. length is delcared as a const with entire function scope, and the prices inputed has 3 elements so it prints 3.

```
3
```

11. This function will return the prices array inputed where each element has the discount calculated. Thus we get:

```
[50, 100, 150]
```

12. 
- A: student.name
- B: student['Grad Year']
- C: student.greeting()
- D: student['Favorite Teacher'].name
- E: student.courseLoad[0]

13. 
- A: '32' since 2 maps to a string so the expression is '3' + '2' which is string concatenation
- B: 1 since for - it converts both to numbers which is 3 - 2 which is 1
- C: 3, since null is converted to 0 when turning it into a number
- D: '3null', since null is converted to 'null' when casting it into a string
- E: 4, since true is casted to 1 when used in addition to a number
- F: 0, since both false and null are casted to 0 when added to eachother
- G: '3undefined', since undefined is converted to 'undefined' when casting it into a string (since it is added to a string)
- H: NaN, since undefined is converted to a number for the - operator, which is NaN, so '3' - NaN = NaN

14. 
- A: It returns true since lexicographically '2' is greater than '1' (converted from 1)
- B: It returns true since lexicographically '2' is less than '12'
- C: It returns true since lexicographically '2' and '2' are equivalent (right '2' gets converted from 2)
- D: For triple equals operands of different types always returns false, so this statement returns false
- E: Returns false since true is coerced to a number, which is 1 and 1 is not equal to 2
- F: true, since the boolean function of 2 returns true, and true === true is true

15. == compares equality with looser restrictions (allows for types to be converted) while === compares strict equality so the value and type must match to return true

16. Answer in file

17. The result is [2, 4, 6], since the function iterates over every element in the array, and pushes to a new array doSomething called on the element, which simply multiplies it by 2.

```
[2, 4, 6]
```

18. Answer in file

19. The output of this code is

```
1
4
3
2
```

Since it print 1 as normal, 2 with a 1 second delay, 3 with a 0 second delay and 4 as normal. The 2 is printed last, and even though 3 has no delay it still gets processed after the printing of 4 since the setTimeout is by default shifted down after non timed code.