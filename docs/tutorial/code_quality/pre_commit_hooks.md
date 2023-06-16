# pre-commit

Clean your room before going out!

```text title="File Structure"
src/
└── pydev_tutorial/
    ├── __init__.py
.pre-commit-config.yaml
```

```yaml title=".pre-commit-config.yaml"
repos:
  - repo: https://github.com/abravalheri/validate-pyproject
    rev: v0.12.1
    hooks:
      - id: validate-pyproject
```
