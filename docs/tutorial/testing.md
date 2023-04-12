
# Testing with pytest

Testing is to programming what sport if to most people: everybody agrees it is
important but nobody has time for it. In this chapter, we will introduce the
minimum you need to perform tests with `pytest` and even enjoy it!

???question "Why not using `unittest`, the Python built-in testing library?"
    Although it is an additional dependency, `pytest` is often preferred
    because it leads to cleaner and easier to read tests, while unittest
    can lead to a lot of boilerplate code.

## Why testing?

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

## Adding code to be tested

Let's create some code to be tested. Imagine we want to model the speed of a
swallow carrying a cargo. We know from movies that there are multiple swallow
species and that they are not all migratories. So first, we could create an
`enum` to account for the species:

```python
from enum import Enum


class SwallowSpecies(str, Enum):
    AFRICAN = "african" # non-migratory
    EUROPEAN = "european" # migratory
```

Next, we want to define our swallow and its cargo, so let's define a class:

```python
class Swallow:
    def __init__(self, species: str, cargo_weight: float = 0) -> None:
        if cargo_weight < 0:
            raise ValueError("Cargo weight cannot be negative")

        if species.upper() != "AFRICAN" and species.upper() != "EUROPEAN":
            raise ValueError('Species must be either "african" or "european"')

        self.species = SwallowSpecies[species.upper()]
        self._cargo_weight = cargo_weight
```

We made `_cargo` private because we don't want negative weights to be set after
initialization. How to make sure of that? Let's prevent it in the `setter`:

```python
class Swallow:
    ...

    @property
    def cargo_weight(self) -> float:
        return self._cargo_weight

    @cargo_weight.setter
    def cargo_weight(self, value: float) -> None:
        if value < 0:
            raise ValueError("Cargo weight cannot be negative")
        self._cargo_weight = value
```

Right, now we cannot change the cargo weight. Let's finally add methods to
compute the speed or tell users whether the species is migratory:

```python
class Swallow:
    ...

    def get_speed(self) -> float:
        if self.cargo_weight >= 0.45:
            # the swallow is going backward, one pound is too heavy
            return -60.0 / (1 + self._cargo_weight)
        return 60.0 / (1 + self._cargo_weight)

    def is_migratory(self) -> bool:
        return self.species == SwallowSpecies.AFRICAN
```

Now that we have code, we can write tests that can verify it behaves as
expected!

!!!tip "The code could not be simpler, why test it?"
    What if you decided to add an Asian swallow that is migratory. You might
    modify `SwallowSpecies` and then the `Swallow.__init__` but forget to update
    `Swallow.is_migratory`. How would you know about the problem before running
    into it? By running tests automatically! Never underestimate our propension
    to forget things!

## Using pytest

`pytest` is a package that facilitates testing.

### Creating the tests folder

The first thing to do is to create a test folder in which all our tests will
live.

```text title="File Structure"
src/
└── pydev_tutorial/
    ├── __init__.py
    └── swallow.py
tests/
├── __init__.py
└── test_swallow.py
```

### Adding the test dependency group

We need to tell the world that our package uses pytest, this will help IDE and
continuous integration pipeline to run.

In your `pyproject.toml`, add the following lines:

```toml
[project.optional-dependencies]
# add dependencies used for testing here
test = ["pytest", "pytest-cov"]
```

This adds an **optional dependency group**, called `test`, which depends on
`pytest` and `pytest-cov`. We will discuss the later in the coverage chapter.

Let's also add some `pytest` options:

```toml
[tool.pytest.ini_options]
minversion = "6.0"
testpaths = ["tests"]
filterwarnings = ["error"]
```

The most important here is to tell `pytest` where to find the tests themselves.

### Our first test

In the `test_swallow.py` file, add the following test:

```python
def test_my_module():
    pass
```

Yes, a minimal test is that simple... It is a function that starts with
**test_** and does something. Obviously `pass` is not very interesting here.
But let's run it for the fun of it.

=== "Running tests with VSCode"

    1. Click on the flask ("Testing") on the left menu.
    2. Then click on "Configure Python Tests".
    3. A menu will open, select "pytest" and then the "tests" folder.
    4. Your tests should appear on the left area. Click on the green arrow to
    run a single test or all of them.

    !!!tip "VSCode can be silly and ignore your tests"
        In this case, run it via the console first!

=== "Running tests via the console"

    1. In your project folder run:
    <div class="termy">
    ```console
    $ pytest
    ======================================================== test session starts
    ========================================================
    platform darwin -- Python 3.10.10, pytest-7.3.0, pluggy-1.0.0
    rootdir: /Users/python.developer/git/pydev/pydev-tutorial
    configfile: pyproject.toml
    testpaths: tests
    plugins: cov-4.0.0
    collected 1 item

    tests/test_swallow.py ................                                [100%]

    ========================================================== 1 passed in 001s
    ==========================================================
    ```
    </div>

### Real tests

It passes, but this does not give us any information about our code. Let's
replace it with actual tests:

```python
def test_migratory():
    """Test that the European swallow is migratory, while the African swallow is
    not."""
    european_swallow = Swallow(species="european")
    assert european_swallow.is_migratory()

    african_swallow = Swallow(species="african")
    assert not african_swallow.is_migratory()


def test_unladen_velocity():
    """Test that unladen swallows fly at 60 km/h."""
    european_swallow = Swallow(species="european", cargo_weight=0)
    assert european_swallow.get_speed() == 60.0

    african_swallow = Swallow(species="african")
    assert african_swallow.get_speed() == 60.0
```

These tests are naive (see next sections) but they work. Or... do they? That's
right, `test_migratory` should actually not pass.

???question "Why is that?"
    It seems we were a bit too fast writig our code and we made a mistake. Is
    it thecode or the test that is wrong? The European swallows should be
    migratory, which is what the tests checks. Indeed, there is a mistake in
    the code `return self.species == SwallowSpecies.AFRICAN` should actually be:
    `return self.species == SwallowSpecies.EUROPEAN`

    Good that we tested our code!

    Writing the tests before implementing the code is called
    **test-driven developement** and you might want take this approach when
    coding.

### Test with a combination of parameters

We called the tests "naive" before, simply because there are tons of features in
`pytest` that can improve your tests.

We tested both European and African species in the first test. Following this
logic, adding an Asian species will require adding an additional two lines
there. There should be a more elegant way.

In the second test, we only check a single value of `cargo_weight`, how do we
know if the other values also lead to correct results?

Let's investigate the decorator `@pytest.mark.parametrize`. This decorator,
placed before a test, helps giving a range of values to use as parameters to
the test. For instance:

```python
@pytest.mark.parametrize("species", ["european", "african"])
@pytest.mark.parametrize("cargo_weight", [0, 0.1, 0.2, 0.3, 0.4])
def test_swallow_velocity(species, cargo_weight):
    """Test that the velocity of the swallow is correct."""
    swallow = Swallow(species=species)
    swallow.cargo_weight = cargo_weight

    # Can you tell why this test is not good?
    assert swallow.get_speed() == pytest.approx(60.0 / (1 + cargo_weight))


@pytest.mark.parametrize(
    "species, is_migratory", [("european", True), ("african", False)]
)
def test_swallow_migration(species, is_migratory):
    """Test that the European swallow is migratory, while the African swallow is
    not."""
    swallow = Swallow(species=species)
    assert swallow.is_migratory() == is_migratory
```

As you might have noticed, a parameter defined in `@pytest.mark.parametrize`
needs to appear in the test function signature. Secondly, you can defined
multiple parameters in one decorator, their values are then passed as tuples
(`("african", False)`). If there are multiple `@pytest.mark.parametrize`
decorators, then all values of one are run against the values of the other!

Run the tests!

???question "Do you notice something wrong with the tests?"
    It seems we are testing the `cargo_weight` only until `0.4`, but in our
    code, the behaviour changes at `0.45`! That's a pretty big oversight.

    Tests are only as good as we write them! Try writing a test accounting for
    the change in values.

### Test for errors

Errors are often encountered in python and they are useful to tell users that
they are doing something wrong. `pytest` allows you to easily test if the
correct error is raised.

For instance, let's test initializaing a swallow with negative weight:

```python
@pytest.mark.parametrize("species", ["european", "african"])
def test_swallow_negative_cargo_weight(species):
    """Test that cargo weight cannot be negative."""
    swallow = Swallow(species=species)
    with pytest.raises(ValueError):
        swallow.cargo_weight = -1
```

### `pytest` fixtures

A particular useful thing in `pytest` are fixtures. These are default or custom
values that can be passed as parameters to your tests.

For instance, `pytest` has by default a `tmp_path` fixture, which can directly
be passed to your test:

```python
from pathlib import Path

def test_something(tmp_path)
    # save our file in a temporary folder created by pytest
    save_something(tmp_path, name='myfile.txt')

    # check that save_something worked
    assert (tmp_path / 'myfile.txt').exists()

    # do more checks about the correctness of the file
    ...

    # we don't need to delete the file, pytest will take care of the folder!
```

This is really powerful!

You can also create your own fixtures:

```python
@pytest.fixture
def unhappy_european_swallow():
    return Swallow(species="european", cargo_weight=0.45)


def test_swallow_going_home(unhappy_european_swallow):
    """Test that unhappy European swallows are going home."""
    assert unhappy_european_swallow.get_speed() < 0

```

### The `conftest.py` file

Your fixtures can be shared across multiple test files by simply defining them
in a separate file called `conftest.py`:

```text title="File Structure"
src/
└── pydev_tutorial/
    ├── __init__.py
    └── swallow.py
tests/
├── __init__.py
├── conftest.py
└── test_swallow.py
```

## Conclusion

Tests are very powerful and can prevent bugs from insidiously live in your code
without your knowledge. In the next section, [...]
