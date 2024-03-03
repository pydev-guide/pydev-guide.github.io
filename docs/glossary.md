---
icon: material/book-open-outline
---
# Glossary of Python Terms

#### Code Formatter

:   Code Formatters like `ruff`, `black`, `yapf`, and `autopep8` are tools that
    automatically *modify* code to conform to a particular style guide. They
    help ensure that code looks consistent across multiple developers (e.g.
    indentation, spacing, etc.)

#### Linter

:   Linters like `ruff`, `flake8`, and `pylint` are tools that analyze code to
    find potential problems. They help ensure that code is correct and
    consistent across multiple developers (e.g. unused imports, undefined
    variables, etc.).  Generally speaking, linters do not modify code, but
    instead report problems that need to be fixed (though some linters like
    `ruff` or `autoflake` can also autofix some problems).

#### Build System

:   A tool used to package a Python project into a distributable format such
    as a wheel or source distribution ("sdist").
    Examples include `setuptools`, `poetry`, `hatchling`, etc.

#### Python Enhancement Proposal (PEP)

:  A design document providing information to the Python community, or
    describing a new feature for Python or its processes or environment.  PEPs
    provide a concise technical specification of the feature and a rationale for
    the feature. (See [What is a
    PEP?](https://peps.python.org/pep-0001/#what-is-a-pep) for details.)
