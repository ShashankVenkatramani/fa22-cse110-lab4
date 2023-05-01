1. It prints out

```
values added:  20
```

Since result = 10 + 10 and it is printed right after

2. It prints out

```
final result:  20
```

Since result = 10 + 10 and result has function scope so its accessible in line 13

3. It prints out

```
values added:  20
```

Since result = 10 + 10 and it is printed right after

4. It throws an error since let result is code block scope and is thus only available in the if block. After the if is done when trying to do console.log, result is no longer defined so its an error.

5. It never reaches line 9, the code returns an error since a const cannot have its value changed and line 7 attempts to change result which is a const.

6. It never reaches line 13, the code returns an error since a const cannot have its value changed and line 7 attempts to change result which is a const.

