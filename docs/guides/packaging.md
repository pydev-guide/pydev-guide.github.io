# Packaging

There are a few different build systems that can be used to build Python
packages.  The most popular are:

- [setuptools](https://setuptools.readthedocs.io/en/latest/)
- [flit](https://flit.readthedocs.io/en/latest/)
- [poetry](https://python-poetry.org/)
- [hatchling](https://hatch.pypa.io/latest/)

## The build module

The `build` package is a simple and generic way to build Python packages.
It uses the `build-system` section of `pyproject.toml` to determine how to
build the package.  It is the recommended build system for Python packages
that are not using setuptools.

<https://pypa-build.readthedocs.io/en/stable/>

... why don't we use `python setup.py` anymore?
