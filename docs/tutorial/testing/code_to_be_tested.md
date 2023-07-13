# Adding code

Let's create some code to be tested. Imagine we want to model the speed of a
swallow carrying a cargo. We know from movies that there are multiple swallow
species and that they are not all migratories. So first, we could create an
`enum` to account for the species:

```python
from enum import Enum


class SwallowSpecies(str, Enum):
    AFRICAN = "african" # non-migratory
    EUROPEAN = "european" # migratory
```

Next, we want to define our swallow and its cargo, so let's define a class:

```python
class Swallow:
    def __init__(self, species: str, cargo_weight: float = 0) -> None:
        if cargo_weight < 0:
            raise ValueError("Cargo weight cannot be negative")

        if species.upper() != "AFRICAN" and species.upper() != "EUROPEAN":
            raise ValueError('Species must be either "african" or "european"')

        self.species = SwallowSpecies[species.upper()]
        self._cargo_weight = cargo_weight
```

We made `_cargo` private because we don't want negative weights to be set after
initialization. How to make sure of that? Let's prevent it in the `setter`:

```python
class Swallow:
    ...

    @property
    def cargo_weight(self) -> float:
        return self._cargo_weight

    @cargo_weight.setter
    def cargo_weight(self, value: float) -> None:
        if value < 0:
            raise ValueError("Cargo weight cannot be negative")
        self._cargo_weight = value
```

Right, now we cannot change the cargo weight. Let's finally add methods to
compute the speed or tell users whether the species is migratory:

```python
class Swallow:
    ...

    def get_speed(self) -> float:
        if self.cargo_weight >= 0.45:
            # the swallow is going backward, one pound is too heavy
            return -60.0 / (1 + self._cargo_weight)
        return 60.0 / (1 + self._cargo_weight)

    def is_migratory(self) -> bool:
        return self.species == SwallowSpecies.AFRICAN
```

Now that we have code, we can write tests that can verify it behaves as
expected!

!!!tip "The code could not be simpler, why test it?"
    What if you decided to add an Asian swallow that is migratory. You might
    modify `SwallowSpecies` and then the `Swallow.__init__` but forget to update
    `Swallow.is_migratory`. How would you know about the problem before running
    into it? By running tests automatically! Never underestimate our propension
    to forget things!
