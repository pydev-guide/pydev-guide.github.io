
# `pytest` fixtures

A particular useful thing in `pytest` are fixtures. These are default or custom
values that can be passed as parameters to your tests.

For instance, `pytest` has by default a `tmp_path` fixture, which can directly
be passed to your test:

```python
from pathlib import Path

def test_something(tmp_path)
    # save our file in a temporary folder created by pytest
    save_something(tmp_path, name='myfile.txt')

    # check that save_something worked
    assert (tmp_path / 'myfile.txt').exists()

    # do more checks about the correctness of the file
    ...

    # we don't need to delete the file, pytest will take care of the folder!
```

This is really powerful!

You can also create your own fixtures:

```python
@pytest.fixture
def unhappy_european_swallow():
    return Swallow(species="european", cargo_weight=0.45)


def test_swallow_going_home(unhappy_european_swallow):
    """Test that unhappy European swallows are going home."""
    assert unhappy_european_swallow.get_speed() < 0

```

## The `conftest.py` file

Your fixtures can be shared across multiple test files by simply defining them
in a separate file called `conftest.py`:

```text title="File Structure"
src/
└── pydev_tutorial/
    ├── __init__.py
    └── swallow.py
tests/
├── __init__.py
├── conftest.py
└── test_swallow.py
```
