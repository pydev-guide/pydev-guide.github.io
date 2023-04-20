# Enforce types with mypy

```yaml title=".pre-commit-config.yaml"
repos:
  ...

  - repo: https://github.com/pre-commit/mirrors-mypy
    rev: v1.1.1
    hooks:
      - id: mypy
        files: "^src/"
        # # you have to add the things you want to type check against here
        # additional_dependencies:
        #   - numpy
```

```toml title="pyproject.toml"
# https://mypy.readthedocs.io/en/stable/config_file.html
[tool.mypy]
files = "src/**/"
strict = true
disallow_any_generics = false
disallow_subclassing_any = false
show_error_codes = true
pretty = true
```
