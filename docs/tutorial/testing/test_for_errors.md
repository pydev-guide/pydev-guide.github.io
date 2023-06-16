# Test for errors

Errors are often encountered in python and they are useful to tell users that
they are doing something wrong. `pytest` allows you to easily test if the
correct error is raised.

For instance, let's test initializing a swallow with negative weight:

```python
@pytest.mark.parametrize("species", ["european", "african"])
def test_swallow_negative_cargo_weight(species):
    """Test that cargo weight cannot be negative."""
    swallow = Swallow(species=species)
    with pytest.raises(ValueError):
        swallow.cargo_weight = -1
```
