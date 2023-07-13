# Testing coverage

Code coverage tells you how much of your code is ran by your tests. While this
is a crude metrics and does not ensure that your tests are good, at least
it points your towards blind spots in your tests!

So `coverage`, one more tool for testing? Fortunately there is a test coverage
plugin for `pytest`: `pytest-cov`.

## Adding pytest-cov

The first thing is to add the dependency:

```toml title="pyproject.toml"
[project.optional-dependencies]
# add dependencies used for testing here
test = ["pytest", "pytest-cov"]
```

Then, let's add some parameters to `coverage`:

```toml title="pyproject.toml"
# https://coverage.readthedocs.io/en/6.4/config.html
[tool.coverage.report]
exclude_lines = [
    "pragma: no cover",
    "if TYPE_CHECKING:",
    "@overload",
    "except ImportError",
    "\\.\\.\\.",
    "raise NotImplementedError()",
]
[tool.coverage.run]
source = ["src"]
```

Finally, let's grab the dependencies using the `test` dependency group:

```console
pip install -e ".[test]"
```

## Run your tests with coverage

Now you can check coverage report using the following `pytest` command:

<div class="termy">

```console
$ pytest --color=yes --cov --cov-report=html --cov-report=term-missing
====================== test session starts =========================
platform darwin -- Python 3.10.10, pytest-7.3.0, pluggy-1.0.0
rootdir: /Users/joran.deschamps/git/pydev/pydev-tutorial
configfile: pyproject.toml
testpaths: tests
plugins: cov-4.0.0
collected 17 items

tests/test_swallow.py .................                          [100%]

--------- coverage: platform darwin, python 3.10.10-final-0 ----------
Name                             Stmts   Miss  Cover   Missing
--------------------------------------------------------------

src/pydev_tutorial/__init__.py       7      2    71%   7-8
src/pydev_tutorial/swallow.py       26      2    92%   40, 43
--------------------------------------------------------------

TOTAL                               33      4    88%
Coverage HTML written to dir htmlcov

======================= 17 passed in 0.14s ========================
```

</div>

This should have created a `htmlcov` directory. Open `index.html` and click on
the files name to see which lines are missing in the test coverage!

In `__init__.py`, there are:

```python
except PackageNotFoundError:
    __version__ = "uninstalled"
```

This can be excluded using the `exclude_lines` in `pyproject.toml`. But in
general you don't want to exclude lines just because we didn't test for them!

???question "What lines are missing in `swallow.py`?"
    Check the missing lines and implement tests to reach 100% coverage!
