# Project Metadata

The `[project]` section of the `pyproject.toml` file contains metadata about the
project itself. This metadata is used by tools like `pip` and `setuptools` to build and
install the project.

You can find the various fields description in the [Python Packaging User Guide](https://packaging.python.org/en/latest/specifications/core-metadata/).

## Example

```toml
[project]
name = "spam"
version = "2020.0.0"
description = "Lovely Spam! Wonderful Spam!"
readme = "README.md"
requires-python = ">=3.8"
license = { text = "BSD 3-Clause License" }
authors = [
  {name = "Some Viking", email = "erik.torgrimson@example.com"},
  {name = "Another Viking"},
  {email = "someone.else@valhalla.no"},
]
classifiers = [
  "Development Status :: 4 - Beta",
  "Programming Language :: Python"
]
dependencies = [
  "numpy",
  "gidgethub[httpx]>4.0.0",
  "django>2.1; os_name != 'nt'",
  "django>2.0; os_name == 'nt'",
]

[project.optional-dependencies]
gui = ["PyQt5"]
cli = [
  "rich",
  "click",
]

[project.urls]
homepage = "https://example.com"
repository = "https://github.com/me/spam.git"

[project.scripts]
spam-cli = "spam:main_cli"
```
