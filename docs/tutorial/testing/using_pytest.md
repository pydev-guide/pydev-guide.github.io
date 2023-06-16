# Using pytest

`pytest` is a package that facilitates testing.

### Creating the tests folder

The first thing to do is to create a test folder in which all our tests will
live.

```text title="File Structure"
src/
└── pydev_tutorial/
└── pydev_tutorial/
    └── swallow.py
tests/
├── __init__.py
└── test_swallow.py
```

### Adding the test dependency group

We need to tell the world that our package uses pytest, this will help IDE and
continuous integration pipeline to run.

In your `pyproject.toml`, add the following lines:

```toml title="pyproject.toml"
[project.optional-dependencies]
# add dependencies used for testing here
test = ["pytest"]
```

This adds an **optional dependency group**, called `test`, which depends on
`pytest` and `pytest-cov`. We will discuss the later in the coverage chapter.

Let's also add some `pytest` options:

```toml title="pyproject.toml"
[tool.pytest.ini_options]
minversion = "6.0"
testpaths = ["tests"]
filterwarnings = ["error"]
```

The most important here is to tell `pytest` where to find the tests themselves.

### Install dependencies using the `test` group

Rather than installing `pytest` directly, we can use the fact that it is
now declared as a dependency group in our `pyproject.toml`:

```shell
pip install -e ".[test]"
```

This should install your package in editable mode, which is necessary to run
the tests later, but also install all `test` dependencies.

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
