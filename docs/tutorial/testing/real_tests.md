# Test for real

It passes, but this does not give us any information about our code. Let's
replace it with actual tests:

```python
def test_migratory():
    """Test that the European swallow is migratory, while the African swallow is
    not."""
    european_swallow = Swallow(species="european")
    assert european_swallow.is_migratory()

    african_swallow = Swallow(species="african")
    assert not african_swallow.is_migratory()


def test_unladen_velocity():
    """Test that unladen swallows fly at 60 km/h."""
    european_swallow = Swallow(species="european", cargo_weight=0)
    assert european_swallow.get_speed() == 60.0

    african_swallow = Swallow(species="african")
    assert african_swallow.get_speed() == 60.0
```

These tests are naive (see next sections) but they work. Or... do they? That's
right, `test_migratory` should actually not pass.

???question "Why is that?"
    It seems we were a bit too fast writig our code and we made a mistake. Is
    it thecode or the test that is wrong? The European swallows should be
    migratory, which is what the tests checks. Indeed, there is a mistake in
    the code `return self.species == SwallowSpecies.AFRICAN` should actually be:
    `return self.species == SwallowSpecies.EUROPEAN`

    Good that we tested our code!

    Writing the tests before implementing the code is called
    **test-driven development** and you might want take this approach when
    coding.
