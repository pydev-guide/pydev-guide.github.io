# Deployment to PyPi

## Secrets

```yaml
name: CI

on:
  push:
    branches:
      - main
    tags:
      - "v*"
  pull_request:
  workflow_dispatch:
  schedule:
    # run every week (for --pre release tests)
    - cron: "0 0 * * 0"

jobs:
  ...

  deploy:
    name: Deploy
    needs: test
    if: >
      success()
      && startsWith(github.ref, 'refs/tags/')
      && github.event_name != 'schedule'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: 🐍 Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: "3.x"

      - name: 👷 Build
        run: |
          python -m pip install build
          python -m build

      - name: 🚢 Publish to PyPI
        uses: pypa/gh-action-pypi-publish@release/v1
        with:
          password: ${{ secrets.TWINE_API_KEY }}

      - uses: softprops/action-gh-release@v1
        with:
          generate_release_notes: true

```
