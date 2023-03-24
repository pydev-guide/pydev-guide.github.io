# Quickstart Python Project

If you're in a hurry, or you've been through this before,
this quickstart will get you up and running with a modern
Python project after answering a few questions.

## Install Copier

First install [Copier](https://copier.readthedocs.io/en/stable/),
which we will use to run the project template.

<div class="termy">

```console
$ pip install copier
---> 100%
Successfully installed copier
```

</div>

## Create a project

Next, run `copier gh:pydev-guide/pyrepo-copier <project-name>` to
create a new project from the
[pydev-guide template](https://github.com/pydev-guide/pyrepo-copier)
(replace `<project-name>`
with the desired path to your project).

### Select a Mode

You will first be asked to select a "mode":

<div class="termy">

```console
$ copier gh:pydev-guide/pyrepo-copier my-project

// To opt in to the default tooling, press Enter.
// Use "Simple" for minimal tooling, or "Customize" to ask questions.

<font><b>🎤 Welcome! Please select a mode:</b></font>
<font>   (use arrow keys)</font>
<font color='#FFAF00'>  ≫ ✨ Fully featured - default tooling</font>
<font>    📦 Simple package - minimal tooling</font>
<font>    🙋‍♀️ Customize - ask me questions</font>
```

</div>

- :sparkles: The **"Fully featured"** version includes git-based versioning and
   a`pre-commit` config with `black`, `ruff`, `mypy`.
- :package: If you select **"Simple package"**, you will get a minimal project
   with only the basic tooling, and manual versioning.
- :woman_raising_hand: If you select **"Customize"**, you will be asked a series
  of questions about your project, and the template will be customized to your
  needs.

### Enter Metadata

Next, answer the questions about yourself and your project:

<div class="termy">

```console
<font><b>🎤 Name of your project (prefer hyphens to underscores)</b></font>
$ my-project
<font><b>🎤 Name of your top level python module (what you will import)</b></font>
$ my_project
<font><b>🎤 Your full name (used in the project metadata)</b></font>
$ Python Fan
<font><b>🎤 Your email address (used in the project metadata)</b></font>
$ avid.coder@example.com
<font><b>🎤 A short description of the package</b></font>
$ A super awesome python package.

```

</div>

???question "What is the difference between the project name and the module name?"

    > tldr; from [PEP 8](https://www.python.org/dev/peps/pep-0008/#package-and-module-names):

    > - Project/package names should have dashes not underscores.
    > - Module names must not have dashes and can have underscores.

    The **project name** is the name of your package as it will appear on
    [PyPI](https://pypi.org), and what your users will type to install it with
    `pip`. Usually, it will be the same as the `<project-name>` directory you
    specified when you ran `copier gh:pydev-guide/pyrepo-copier <project-name>`.
    Use dashes, not underscores, in package names.

    The **module name** is the name of the Python module that you will *import*,
    and will be the name of the folder that contains your source code (*inside*
    the `<project-name>` directory).  Module names *must* be valid Python
    identifiers, so they may not contain dashes.

    Often, these two names are the same, but they don't have to be.  For example,
    `scikit-image` is the name of a package whose top level module name is
    `skimage` (which, admittedly, causes some confusion! :joy:).

## Post-Generation Tasks

After the project is generated, you will need to do a few things to get it
ready for development.
