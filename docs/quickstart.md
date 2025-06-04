---
icon: material/lightning-bolt
description: Get up and running with a modern Python project in a few minutes.
tags:
  - guides
  - how to
---

<!-- markdownlint-disable MD013 -->

# Quickstart Python Project

The goal of this page is to get you up and running quickly with a modern python
repository that you can use to develop and deploy your package.

This guide will create a _new_ project directory.

???question "What if I have an existing project?"

    There is no automated way to migrate an existing project to use this
    template.  We recommend creating a new project and copying over your
    existing source code and metadata manually:

    1. Follow the guide below to create a new project (using the same name as
       your existing project).
    2. Copy your existing source code into the new project. For example, if
       your existing project has a `src` directory, copy its contents into
       the new project's `src` directory.  If not, copy your top-level module
       into the new project's `src` directory (then, make sure to update any places
       in your repo that have hard-coded references to the module's path).
    3. Manually copy over the project metadata from your existing project's
       `setup.py`, `setup.cfg`, or `pyproject.tom` into the new `[project]` table
       of your new `pyproject.toml`.  If you use setuptools, their
       [Quickstart docs](https://setuptools.pypa.io/en/latest/userguide/quickstart.html)
       have good examples of metadata in each file format.
    4. From there, it will depend on your project structure & complexity.  You
       may need to manually copy over other files, such as `requirements.txt`,
       `requirements-dev.txt`, `Makefile`, etc.  You may also need to manually
       update your CI config files to use the new project structure.

## Create a project

Next, [install uv](https://docs.astral.sh/uv/getting-started/installation/) then run the following command to create a new project from the
[pydev-guide template](https://github.com/pydev-guide/pyrepo-copier).
Replace `<project-name>` with the desired path to your project, this
will be the name of the directory that will be created.

```bash
uvx copier copy --trust gh:pydev-guide/pyrepo-copier <project-name>
```

### Select a Mode

You will first be asked to select a "mode":

<div class="termy">

```console
$ copier copy gh:pydev-guide/pyrepo-copier my-project

// To opt in to the default tooling, press Enter.
// Use "Simple" for minimal tooling, or "Customize" to ask questions.

<font><b>🎤 Welcome! Please select a mode:</b></font>
<font>   (use arrow keys)</font>
<font color='#FFAF00'>  ≫ ✨ Fully featured - default tooling</font>
<font>    📦 Simple package - minimal tooling</font>
<font>    🙋‍♀️ Customize - ask me questions</font>
```

</div>

- :sparkles: **"Fully featured"** includes git-based versioning, automatic
  deployment, and a `pre-commit` config with `black`, `ruff`, `mypy`.
- :package: **"Simple package"**, gives you a minimal project with only the
  basic tooling, and manual versioning.
- :woman_raising_hand: If you select **"Customize"**, you will be asked a series
  of questions allowing you to customize the template to your needs.

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

- [x] [Initialize a Git Repository](#initialize-a-git-repository)
- [x] [Install the Project](#install-the-project)
- [x] [Run the Tests](#run-tests)
- [x] [Push to GitHub](#push-it-to-github)
- [x] [Deploy to PyPI](#deploy-to-pypi)

### Initialize a Git Repository

It's a good idea to keep your project under version control, so let's initialize
a git repository:

<div class="termy">

```console
$ cd my-project
$ git init -b main
Initialized empty Git repository in ./my-project/.git/
$ git add .
$ git commit -m "Initial commit"
[main (root-commit) 7d1f9bb] Initial Commit
 13 files changed, 498 insertions(+)
 create mode 100644 .copier-answers.yml
 create mode 100644 .github/ISSUE_TEMPLATE.md
 create mode 100644 .github/TEST_FAIL_TEMPLATE.md
 create mode 100644 .github/dependabot.yml
 create mode 100644 .github/workflows/ci.yml
 create mode 100644 .gitignore
 create mode 100644 .pre-commit-config.yaml
 create mode 100644 LICENSE
 create mode 100644 README.md
 create mode 100644 pyproject.toml
 create mode 100644 src/my_project/__init__.py
 create mode 100644 src/my_project/py.typed
 create mode 100644 tests/test_my_project.py
```

</div>

???question "Why do I see different files than you?"
    This console prompt shows the result of initializing the "✨ Fully featured" copier project,
    if you have selected any other option, you might have different files in your new project.

### Install the Project

To begin working on your project, you'll usually want to install it in editable mode
with `pip`:

???question "Editable mode?"
    [Editable installs](https://pip.pypa.io/en/stable/topics/local-project-installs/#editable-installs)
    (i.e. `pip install -e .`) allow you to install your
    project without copying any files into your environment's `site-packages`
    directory. Instead, the files in the development directory are added to
    Python’s import path; so any changes you make to your package will be
    included the next time you run/import your code. This approach is well
    suited for development and is also known as a “development installation”.

    [Read more at Real Python](https://realpython.com/what-is-pip/#installing-packages-in-editable-mode-to-ease-development)

<div class="termy">

```console
$ pip install -e .
Obtaining file:///home/user/my-project
Installing build dependencies ... done
---> 100%
...
Successfully built my-project
Installing collected packages: my-project
Successfully installed my-project-0.1.dev1+g7d1f9bb
```

</div>

### Run Tests

To run your tests, install the test dependencies with the `[test]`
[extra](https://packaging.python.org/en/latest/tutorials/installing-packages/#installing-extras)
that was included in the template. This also installs [`pytest`](https://pytest.org), which you
can then run:

<div class='termy'>

```console
// the quotes around ".[test]" here are just in case you're
// in a zsh terminal... but should work in all cases

$ pip install -e ".[test]"
$ pytest

<b>==================== test session starts ====================</b>
<font>platform darwin -- Python 3.11.0, pytest-7.2.2, pluggy-1.0.0</font>
<font>rootdir: /Users/talley/Desktop/my-project, </font>
<font>configfile: pyproject.toml, testpaths: tests</font>
<font>plugins: cov-4.0.0</font>
<font><b>collected 1 item</b></font>

<font>tests/test_my_project.py </font><font color="lime">.                            [100%]

===================== <b>1 passed</b> in 0.00s =====================</font>

```

</div>

!!!tip "Tests are important!"
    As you develop your code, make sure to add more tests to your `tests` directory!

### Push it to github

If you want to host your project on GitHub, you can create a new repository
and push your project there in one of two ways:

=== "using the github website"

    1. [Create a new repository on GitHub](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
    1. At the top of your repository on github.com's Quick Setup page,
       click :octicons-paste-24: to copy the remote repository URL.
    1. Add the new repository as a remote to your local repository, and push
       your local repo:

    <div class="termy">

    ```console
    $ git remote add origin PASTE_URL_HERE
    $ git push -u origin main
    ```

    </div>

=== "use the `gh` command line tool"

    1. [Install the `gh` command line tool](https://cli.github.com)
    2. Run [`gh repo create`](https://cli.github.com/manual/gh_repo_create):

    <div class="termy">

    ```console
    $ gh repo create --source=. --public --remote=origin --push

    <font color='green'>✓</font> Created repository githubuser/my-project on GitHub
    <font color='green'>✓</font> Added remote https://github.com/githubuser/my-project.git
    Enumerating objects: 20, done.
    Counting objects: 100% (20/20), done.
    Delta compression using up to 8 threads
    Compressing objects: 100% (16/16), done.
    Writing objects: 100% (20/20), 7.07 KiB | 7.07 MiB/s, done.
    Total 20 (delta 0), reused 0 (delta 0), pack-reused 0
    To https://github.com/githubuser/my-project.git
    * [new branch]      HEAD -> main
    branch 'main' set up to track 'origin/main'.
    <font color='green'>✓</font>  Pushed commits to https://github.com/githubuser/my-project.git

    ```

    </div>

!!!tip "Official Documentation"
    See [Adding locally hosted code to
    Github](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github?platform=mac)
    for complete details.

### Deploy to PyPI

It's probably a bit premature to be deploying just now :wink:, but when you are
ready, you can easily publish your package to the [Python Package Index
(PyPI)](https://pypi.org), enabling others to `pip install` it.

1. First, make sure you've bumped the version of your package:

    === "If you selected 'Fully Featured'"

        Your version is sourced from your git tags using
        [setuptools-scm](https://github.com/pypa/setuptools_scm/), so you don't need
        to edit your version anywhere in your source code. Simply create a new [annotated
        tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging) on the commit you would
        like to release:

        <div class="termy">

        ```console
        $ git tag -a v0.1.0 -m "my version 0.1.0"
        ```

        </div>

    === "If you selected 'Simple' mode"

        Update the version string in the `__init__.py` file in your top level module
        (this is the single source of truth for your package version).

        ```python title="src/my_project/__init__.py"
        __version__ = '0.1.0'  # update here
        ```

2. Next, you have two options to push to PyPI. In both cases, you will need to
   have first [registered an account on PyPI](https://pypi.org/account/register/).

    === "Automated Deployment from Github Actions"

        Both the "simple" and "fully featured" versions of this template includes an
        automated deployment workflow (in `.github/workflows/ci.yml`), that will
        automatically build and deploy your package to PyPI whenever you push a tagged
        commit.

        !!!info "One time setup"
            The first time you do this, you'll need to ...

            1. [Create an API token](https://pypi.org/help/#apitoken) in your
            PyPI account, if you don't already have one.
            2. [Create a secret on your github
            repository](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)
            named `TWINE_API_KEY`, and add the text of the token you created at PyPI.

                > *The name `TWINE_API_KEY` comes from the variable declared in the
                `workflows/ci.yml` file*

        If you haven't already done so, create an annotated git tag (using `-a`)
        on the commit you would like to release and push the commit
        with `--follow-tags` to github:

        <div class="termy">

        ```console
        $ git tag -a v0.1.0 -m "my version 0.1.0"
        $ git push --follow-tags
        ```

        </div>

    === "Manual deployment"

        If you don't have your package on Github, or you'd rather not
        deal with git or Github actions, you can always build and deploy
        your package the good old-fashioned way :smile::


        <div class="termy">

        ```console
        $ pip install build twine
        ---> 100%
        Successfully installed build twine

        $ python -m build

        <b>* Creating virtualenv isolated environment...
        * Installing packages in isolated environment... (hatchling)
        * Getting build dependencies for sdist...
        * Building sdist...
        * Building wheel from sdist
        * Creating virtualenv isolated environment...
        * Installing packages in isolated environment... (hatchling)
        * Getting build dependencies for wheel...
        * Building wheel...
        <font color='lime'>Successfully built my_project-0.1.0.tar.gz and my_project-0.1.0-py3-none-any.whl</font></b>

        $ twine upload dist/*
        Uploading distributions to https://upload.pypi.org/legacy/
        Enter your username:

        // Twine will prompt for your PyPI username and password.
        ```

        </div>

### Conclusion

Congratulations! You have now created a modern Python project that you can test and deploy
to users. If you are interested in understanding all the different tools and features present
in the ✨ "Fully featured" package, head to the [Python Repo Tutorial](tutorial/index.md). For
in-depth discussions on a variety of topics, check out the [Guides](index.md).
