
# The Bare Minimum

Before we add a bunch of tooling that makes our package easier to maintain over
time, it's informative to see the **absolute minimum** needed to create a Python
package.

## Project Structure

For a basic modern Python package, you need:

1. A directory containing a `pyproject.toml` file (much more on this soon)
1. Some code: a Python module or package

```text title="File Structure"
my-package/
├── my_module.py
└── pyproject.toml
```

!!!tip  "That's it!"
    Really, everything beyond this is **optional**, and there to make your life
    easier as a maintainer.

The **`pyproject.toml`** contains the metadata for the package, and instructions
for how to build it:

```toml title="pyproject.toml"
[build-system]
requires = ["hatchling"]  # (1)!
build-backend = "hatchling.build"

[project]
name = "my-package"
version = "0.0.1"
```

1. There are a few different build systems that can be used to build Python
   packages. We use `hatchling` here, and discuss other options later.  For
   `setuptools`, this section would look like:

    ```toml
    [build-system]
    requires = ["setuptools", "wheel"]
    build-backend = "setuptools.build_meta"
    ```

The python **module/package** contains your code:

```python title="my_module.py"
# your code here
```

> *Technically, even the python file is optional, but then why are we here? :joy:*

## Installing

With that, you already have a Python package that can be **installed** locally with
`pip`:

```bash
# run from inside the my-package directory
pip install .

# run from anywhere
pip install /path/to/my-package
```

## Publishing

**Deploying** to [PyPI](https://pypi.org) (so that others can `pip install` your
package) is just a couple lines away:

```bash
# run from inside the my-package directory
pip install build twine

python -m build # (1)!

twine upload dist/* # (2)!
```

1. [`build`](https://pypa-build.readthedocs.io) is a modern Python build
   frontend that creates a wheel and/or source distribution. (If you are used to
   running `python setup.py sdist bdist_wheel`, this replaces that step)
2. `twine` is a tool that uploads packages to [PyPI](https://pypi.org).

!!! question "What about conda?"
    We'll cover publishing to and installing from conda later.

## Next Steps

While this is sufficient for creating an installable Python package and publishing
it to PyPI, it leaves a lot to be desired in terms of maintainability (how do we
know that the code works? how do we track changes?). In the
next sections, we'll fill in some additional metadata and add some tooling to
make our lives easier.
