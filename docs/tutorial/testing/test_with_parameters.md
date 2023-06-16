
# Test with parameters

We called the tests "naive" before, simply because there are tons of features in
`pytest` that can improve your tests.

We tested both European and African species in the first test. Following this
logic, adding an Asian species will require adding an additional two lines
there. There should be a more elegant way.

In the second test, we only check a single value of `cargo_weight`, how do we
know if the other values also lead to correct results?

Let's investigate the decorator `@pytest.mark.parametrize`. This decorator,
placed before a test, helps giving a range of values to use as parameters to
the test. For instance:

```python
@pytest.mark.parametrize("species", ["european", "african"])
@pytest.mark.parametrize("cargo_weight", [0, 0.1, 0.2, 0.3, 0.4])
def test_swallow_velocity(species, cargo_weight):
    """Test that the velocity of the swallow is correct."""
    swallow = Swallow(species=species)
    swallow.cargo_weight = cargo_weight

    # Can you tell why this test is not good?
    assert swallow.get_speed() == pytest.approx(60.0 / (1 + cargo_weight))


@pytest.mark.parametrize(
    "species, is_migratory", [("european", True), ("african", False)]
)
def test_swallow_migration(species, is_migratory):
    """Test that the European swallow is migratory, while the African swallow is
    not."""
    swallow = Swallow(species=species)
    assert swallow.is_migratory() == is_migratory
```

As you might have noticed, a parameter defined in `@pytest.mark.parametrize`
needs to appear in the test function signature. Secondly, you can defined
multiple parameters in one decorator, their values are then passed as tuples
(`("african", False)`). If there are multiple `@pytest.mark.parametrize`
decorators, then all values of one are run against the values of the other!

Run the tests!

???question "Do you notice something wrong with the tests?"
    It seems we are testing the `cargo_weight` only until `0.4`, but in our
    code, the behaviour changes at `0.45`! That's a pretty big oversight.

    Tests are only as good as we write them! Try writing a test accounting for
    the change in values.
