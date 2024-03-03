
# Summary

Tooling, testing, packaging... These are words floating around but they sound
like work and we all have enough of that already, so why bother? In the end, you
just want code that works and that can be used by people!

And that's exactly where tooling comes in. In this tutorial, we are going to
walk you through a set of tools. Each section is straightforward and shouldn't
take long to absorb. This is the pyramid scheme of programming: **for a small
investment you will get high returns**.

!!!tip "What are these tools for?"
    These tools are all about automating the tedious tasks and forcing you to
    perform the  dull chores bit by bit rather than just before release!

Here is a list of the main tools we will go over:

- `Conda`: virtual environments to code in a safe space.
- `git`: keep track of changes and benefit from all the advantages of Github.
- `VSCode`: a lightweight IDE to be more effective at writing and debugging
code.
- `pyproject.toml`: a single file with all your Python packaging information.
- `pytest`: get in the habit of writing tests to make your code bullet-proof.
- `ruff`: improve code quality using a linter and code formatter.
- `mypy`: enforce types, and never be surprised by inputs and outputs.
- `codecov`: find the blind spots of your tests.
- `pre-commit`: automate formatter, linter, or type checker before every commit.
- `Github actions`: automate everything everywhere all at once!

Apply these tools and you will see the result rapidly![^1]

!!! note "Example repositories"
    This tutorial guides you through the same tools that are automatically
    installed if you create a repository using
    [pyrepo-copier](https://github.com/pydev-guide/pyrepo-copier).

    Finally, in this tutorial we also create some code. The
    [pydev-tutorial](https://github.com/pydev-guide/pydev-tutorial) repository
    corresponds to what you will implement by following this step by step.

[^1]: Did you know that 9 out of 10 programmers recommend these tools?
