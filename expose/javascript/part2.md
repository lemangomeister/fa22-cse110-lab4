# Part 2: A Little More of a Challenge
1. The console prints out **3**. **var** is global-scoped meaning that even though a **var** type variable is declared inside the inner most scope, any scope outside of its area of declaration can access it.
2. Console prints out **150** which is the discounted value of the third element of **discounted**. It only gives out the discounted last element because that was the most recent update **discountedPrice** received in the *for* loop.
3. Same output as #2. **finalPrice** is of type **var**. Thus, it can be accessed anywhere in the code. The value it prints out is the same reason as #2, the last iteration of the loop updates the variable, giving it the value **150**.
4. Technically speaking, it returns the array **discounted** which contains the discounted values of **prices**. However, since there is not a single print function "active" in the block of code, the command prompt shows nothing.
5. Nothing happens when **line 12** is executed. This is because the function is not actually being used as is the case in the previous four questions.
6. ReferenceError: discountedPrice is not defined. The variable we are trying to print out was declared inside the loop. Therefore, its scope is only inside the loop.
7. Console prints out **150**. **finalPrice** was declared in the same scope as the print function accessing it. As a result, the program runs with no errors.
8. The same thing happens as #4.
9. **i** is of type **let** and is declared inside a loop. Therefore, any form of accession *outside* the loop will result in an error.
10. **Line 12** executes and prints **3**, the length of **prices**. The variable was defined in the same scope as line 12. Therefore, the line is valid and no errors are thrown.
11. Returns an array of prices discounted by 50%. A **const** variable inside the loop being overwritten seems to not cause any errors and, thus, must be a valid line.
12. (a) student.name; (b) student['Grad Year']; (c) student.greeting(); (d) student["Favorite Teacher"].name; (e) student.courseLoad[0]
13. (a) 32, **+** concatenates instead of adding; (b) 1, **-** treats both operands as integers; (c) 3, **null** is synonymous to 0 in this case; (d) 3null, **+** converts both operands to string and concatenates them if at least one of the operands is a string; (e) 4, **true** is converted to integer value of 1 and added to 3; (f) 0, **false** and **null** are both equal to 0; (g) 3undefined, one operand is a string and the other is converted to string; (h) NaN, **undefined** has a numerical value of **NaN**, any arithmetic operations involving **undefined** will result in **NaN**
14. (a) true, comparing values of different types converts the values to numbers; (b) false, both operands are strings so the comparator compares them in lexicographical order, '2' is greater than '12', alphabetically; (c) true, same reason as (a); (d) false, **===** strict equality operator compares two values without type conversion; (e) false, **true** is converted to **1** and the resulting equality is false; (f) true, Boolean(x), where x is any number > 0, is true
15. **==** performs type conversion *then* performs equality check. Meanwhile, **===** only checks for equality *without* doing any type conversions beforehand.
16. part2-question16.js
17. 2,4,6; **modifyArray** pushes values from **array** into **newArr**, then the **callback** function does its job when values are already in **newArr**
18. part2-question18.js
19. 1 4 3 2