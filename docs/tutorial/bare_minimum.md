
# The Bare Minimum

Before we add a bunch of tooling that makes our package easier to maintain over
time, it's informative to see the absolute minimum needed to create a Python
package.

We need:

1. a directory with a `pyproject.toml` file
1. a Python module or package

```text title="File Structure"
my-package/
├── my_module.py
└── pyproject.toml
```

The `pyproject.toml` contains the metadata for the package, and instructions
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
   setuptools, this section would look like:

    ```toml
    [build-system]
    requires = ["setuptools", "wheel"]
    build-backend = "setuptools.build_meta"
    ```

And the python module/package contains your code:

> *In fact, even the python file is optional, but then why are we here? :joy:*

```python title="my_module.py"
# your code here
print("Hello, world!")
```

!!!tip  "That's it!"
    Really, everything beyond this is **optional**, and there to make your life
    easier as a maintainer.

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

And even **deploying** to PyPI is just a couple lines away:

```bash
# run from inside the my-package directory
pip install build
python -m build
twine upload dist/*
```

!!!question "What about conda?"
    We'll cover publishing to and installing from conda later.
