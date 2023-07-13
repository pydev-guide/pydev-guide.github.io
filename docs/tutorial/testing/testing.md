
# Why test?

Testing is to programming what sport is to most people: everybody agrees it is
important but nobody has time for it. In this chapter, we will introduce the
minimum you need to perform tests with `pytest` and even enjoy it!

???question "Why not using `unittest`, the Python built-in testing library?"
    Although it is an additional dependency, `pytest` is often preferred
    because it leads to cleaner and easier to read tests, while unittest
    can lead to a lot of boilerplate code.

## Testing

Testing consist in writing small functions that test:

- whether small units of your code function as expected
- whether these small units integrate well together
- whether your code takes care of edge cases
- whether your code's inputs and outputs are correctly treated

Running your tests allow checking that new changes to the code base did
not break anything in your code (at least what your are testing for!).

!!!tip "There are side-effects to writing tests!"
    As you write tests, you get to experience what it takes to use your
    library and this might lead you to ***refactor*** parts of your code;
    refactoring is an important part of a software life-cycle!
