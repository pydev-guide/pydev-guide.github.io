---
icon: material/language-markdown-outline  # sets the header icon
description: "This is a demo of the markdown syntax."  # meta description
tags:
  - Some Tag
  - Some Other Tag
---

# Markdown Demo

!!!Note
    This is a demo of the markdown syntax used in this documentation. It is not
    part of the site.

```python linenums="1"  title="my_file.py"
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 2 * np.pi, 400) # (1)!
y = np.sin(x ** 2)
plt.plot(x, y)
plt.show()
```

1. This is a comment in the code block.

## Subheading

Markdown is a lightweight markup language with plain-text-formatting syntax. Its
design allows it to be converted to many output formats, but the original tool
by the same name only supports HTML. Markdown is often used to format readme
files, for writing messages in online discussion forums, and to create rich text
using a plain text editor.

## Lorem Ipsum

Lorem **ipsum dolor sit amet**, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.

## Tables

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

| Method      | Description                          |
| ----------- | ------------------------------------ |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |

## Lists

### Unordered

* Item 1
* Item 2
  * Item 2a
  * Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
    1. Item 3a
    1. Item 3b

## Tabs

=== "C"

    ```c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ```c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```

## Images

![Random Image](https://picsum.photos/200/300){ width="200" loading="lazy" }

## Links

<http://github.com> - automatic!
[GitHub](http://github.com)

## Blockquotes

As Kanye West said:

> We're living the future so
> the present is our past.

## Inline code

Run the command: `pip install my_package`

## Task Lists

* [x] @mentions, #refs, [links](index), **formatting**, and <del>tags</del> supported
* [x] list syntax required (any unordered or ordered list supported)
* [x] this is a complete item
* [ ] this is an incomplete item

## Emoji

@octocat :+1: This PR looks great - it's ready to merge! :rocket:

## Definition Lists

term
: definition

term2
: definition2

## Strikethrough

~~The world is flat~~

## Heading IDs

### My Great Heading {#custom-id}

## Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a
*separate paragraph*.

This line is also a separate paragraph, but... This line is only separated by a
single newline, so it's a separate line in the *same paragraph*.

## Admonitions

!!! note
    This is a note

!!! tip
    This is a tip

!!! bug
    This is a bug

!!! quote
    This is a quote

!!! example

    ```python title="some_file.py"
    from my_package import my_function
    ```

!!! abstract
    This is an abstract

!!! warning
    This is a warning

!!! danger
    This is a danger

!!! success
    This is a success

!!! question
    This is a question

!!! failure
    This is a failure

!!! info
    This is a info

!!! note "This has a custom title"
    This is a note

!!! note ""
    This one has no title

??? info "Click to expand"
    `???` makes for collapsible content

see docs on [Custom
Admonitions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#custom-admonitions)
for customizing the icon

### Inline Admonitions

(must be declared prior to the block they are next to)

!!! info inline end "Lorem ipsum"

    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nulla et euismod nulla.
    Curabitur feugiat, tortor non consequat
    finibus, justo purus auctor massa, nec
    semper lorem quam in massa.

```markdown
!!! info inline end "Lorem ipsum"

    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nulla et euismod nulla.
    Curabitur feugiat, tortor non consequat
    finibus, justo purus auctor massa, nec
    semper lorem quam in massa.
```

## Keyboard keys

++ctrl+cmd+f++

## Buttons

[Subscribe to our newsletter](index){ .md-button .md-button--primary }

with icons

[Send :fontawesome-solid-paper-plane:](index){ .md-button }
