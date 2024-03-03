# Formatting code with ruff

Why manually bother to format your code when you can automate it?

```yaml title=".pre-commit-config.yaml"
repos:
    ...

  - repo: https://github.com/charliermarsh/ruff-pre-commit
    rev: v0.3.0
    hooks:
      - id: ruff-format

```
