# Linting with ruff

```yaml title=".pre-commit-config.yaml"
repos:
  ...

  - repo: https://github.com/charliermarsh/ruff-pre-commit
    rev: v0.3.0
    hooks:
      - id: ruff
        args: [--fix]

```

```toml title="pyproject.toml"
# https://github.com/charliermarsh/ruff
[tool.ruff]
line-length = 88
target-version = "py38"
# https://beta.ruff.rs/docs/rules/
extend-select = [
    "E",    # style errors
    "W",    # style warnings
    "F",    # flakes
    "D",    # pydocstyle
    "I",    # isort
    "U",    # pyupgrade
    # "S",    # bandit
    "C",    # flake8-comprehensions
    "B",    # flake8-bugbear
    "A001", # flake8-builtins
    "RUF",  # ruff-specific rules
]
# I do this to get numpy-style docstrings AND retain
# D417 (Missing argument descriptions in the docstring)
# otherwise, see:
# https://beta.ruff.rs/docs/faq/#does-ruff-support-numpy-or-google-style-docstrings
# https://github.com/charliermarsh/ruff/issues/2606
extend-ignore = [
    "D100", # Missing docstring in public module
    "D107", # Missing docstring in __init__
    "D203", # 1 blank line required before class docstring
    "D212", # Multi-line docstring summary should start at the first line
    "D213", # Multi-line docstring summary should start at the second line
    "D401", # First line should be in imperative mood
    "D413", # Missing blank line after last section
    "D416", # Section name should end with a colon
]

[tool.ruff.per-file-ignores]
"tests/*.py" = ["D", "S"]
"setup.py" = ["D"]
```
