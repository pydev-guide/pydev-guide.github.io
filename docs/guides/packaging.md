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

### Why don't we use `python setup.py` anymore?

Within the last few years, all direct invocations of `setup.py` have become deprecated.
You may be thinking something along the lines of...

> `setup.py` has been working, why should I use anything else?

The simple answer is that directly invoking `setup.py` often doesn't work the way it should.
This can causes subtle, unfortunate breakages.

[PEP517](https://peps.python.org/pep-0517/) and [PEP518](https://peps.python.org/pep-0518/) are
standards upon which modern tools like `build` have been.
Standards compliant, purpose built tools are the future of Python packaging.

If you would like to read more about why directly invoking `setup.py` has been deprecated
please read this [fantastic article by Paul Ganssle](The following is a short summary of a
[fantastic article by Paul Ganssle](https://blog.ganssle.io/articles/2021/10/setup-py-deprecated.html).
