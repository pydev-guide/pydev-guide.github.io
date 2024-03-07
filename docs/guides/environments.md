# Virtual Environments

There are a few ways to manage virtual environments for Python development.
The most popular are:

- [venv](https://docs.python.org/3/library/venv.html)
- [conda](https://docs.conda.io/en/latest/)

In this guide we are going to learn how to use virtual environments to manage
Python installation(s).
Specifically,
[conda environments](https://docs.conda.io/projects/conda/en/latest/user-guide/concepts/environments.html#conda-environments)
managed with
[micromamba](https://mamba.readthedocs.io/en/latest/user_guide/micromamba.html).

## Why virtual environments?

Python is ubiquitous, it's probably used in lots of different places on your
computer already.
Code written for specific versions of either the Python language or Python
packages won't necessarily work with different versions.

A virtual environment is a little box you can put Python and various packages
into. The box is isolated from the rest of your system such that what you do
inside the box won't affect what's going on outside the box.

## Why *micromamba*?

`micromamba` is a pure C++ reimplementation of `conda`. This makes it extremely
fast and portable. One of the easiest ways to mess up a conda installation is
to install a bunch of stuff into the base environment. `micromamba` doesn't
give you a base environment, so you can't mess it up.

## Install *micromamba*

### Run the installer

Install `micromamba`, the executable we will use to manage our virtual
environments.

=== "MacOS/Linux"

    Download and run the official micromamba installer.

    <div class="termy">
    ```console
    $ "${SHELL}" <(curl -L micro.mamba.pm/install.sh)
    ---> 100%

    // You will be asked whether you want to initialise your shell.
    // Respond "Y".

    Init shell? [Y/n] Y

    // You will be asked where you want to install micromamba.
    // Using the default is recommended.

    Prefix location? [~/micromamba]

    // You will need to restart your shell for changes to take effect.

    Please restart your shell to activate micromamba.
    ```

    </div>

    Next, setup `micromamba` to download packages from
    [*conda-forge*](https://conda-forge.org/)
    a community driven package repository.

    <div class="termy">

    ```console
    $ micromamba config append channels conda-forge
    $ micromamba config append channels nodefaults
    $ micromamba config set channel_priority strict
    ```

    </div>

=== "Windows"

    todo: add windows guide

###  Set up an alias

!!!tip "set up an alias for micromamba"
    `micromamba` replaces `conda`. Set up an alias if you want to type `conda`
    at the prompt.

=== "bash"

    ```bash title="~/.bashrc"
    alias conda="micromamba"
    ```

=== "zsh"

    ```zsh title="~/.zshrc"
    alias conda="micromamba"
    ```

=== "PowerShell"

    ```PowerShell title="$Home\Documents\PowerShell\Microsoft.PowerShell_profile.ps1"
    Set-Alias conda mamba
    ```

We will use `conda` at the prompt rather than `micromamba` for the rest of this
guide.

## Usage

### Creating and activating environments

Run the following to create and activate an environment called `my-env`
with Python 3.10.

<div class="termy">

    ```console
    $ conda create --name my-env python=3.10

    // To work in the environment we first need to activate it.

    $ conda activate my-env

    // Your prompt will indicate your current environment.

    $ (my-env) ➜

    // Let's check that we have the correct Python version.

    $ (my-env) ➜ python --version
    Python 3.10.10

    ```

</div>

### Installing packages

You can install most packages into your environment with `conda` or `pip`.
Install what you can with `conda`. If a package is available on
[PyPI](https://pypi.org/) but not [conda-forge](https://conda-forge.org/)
then use `pip`.

=== "conda"

    <div class="termy">

    ```console
    $ (my-env) ➜ conda install numpy
    ```

    </div>

=== "pip"

    <div class="termy">

    ```console
    $ (my-env) ➜ pip install numpy
    ```

    </div>

### Deactivating environments

We can deactivate an environment with

<div class="termy">

    ```console
    $ (my-env) ➜ conda deactivate

    // You are no longer in 'my-env'.

    $
    ```

</div>

### Removing environments

We can remove an environment with

<div class="termy">

    ```console
    $ conda env remove --name my-env

    // Your environment no longer exists

    $ conda activate my-env
    Cannot activate, prefix does not exist at:
    '/Users/pydev/micromamba/envs/'
    ```

</div>

### Running from outside an environment

You can run use software in a specific environment from outside the
environment.

<div class="termy">

    ```console
    $ conda run --name my-env <command>
    ```

</div>

This is useful for workflows which rely on software with incompatible
dependencies.

### Tips

!!!tip "Get comfy! 🧸"
    Getting comfortable with the creation, destruction, activation and
    deactivation of environments at will is liberating. Practice now!

!!!tip "One environment per project 🌍"
    Working with one environment per project is a useful ideal.
    A general purpose environment can be useful for quick scripts and analysis.

## Closing

That's it! Working in virtual environments empowers you to install things
without worrying about messing up your whole system.
