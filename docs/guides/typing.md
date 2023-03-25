# Typing

Python is "dynamically typed" language. This means that you can do things like
this without any errors:

```python
def add(a, b):
    return a + b

print(add(1, 2)) # 3
print(add("Hello, ", "World")) # Hello, World
```

!!!tip "Duck typing"
    This is sometimes called [**duck typing**](https://en.wikipedia.org/wiki/Duck_typing):

    > *If it walks like a duck and quacks like a duck, then
    it must be a duck.*

    In the example above, the function `add` doesn't care what type of objects
    `a` and `b` are, as long as they support the `+` operator (i.e. they walk
    like something that supports `+` :joy:).

### More reading

<https://peps.python.org/pep-0484/>
<https://peps.python.org/pep-0483/>
