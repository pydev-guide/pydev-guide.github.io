# Testing coverage

## pytest-cov

```toml title="pyproject.toml"
# https://coverage.readthedocs.io/en/6.4/config.html
[tool.coverage.report]
exclude_lines = [
    "pragma: no cover",
    "if TYPE_CHECKING:",
    "@overload",
    "except ImportError",
    "\\.\\.\\.",
    "raise NotImplementedError()",
]
[tool.coverage.run]
source = ["src"]
```
