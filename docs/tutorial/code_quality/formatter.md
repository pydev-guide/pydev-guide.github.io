# Formatting code with black

Why manually bother to format your code when you can automate it?

```yaml title=".pre-commit-config.yaml"
repos:
    ...

  - repo: https://github.com/psf/black
    rev: 23.1.0
    hooks:
      - id: black

```
