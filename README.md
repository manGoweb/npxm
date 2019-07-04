# npxm (Node Package Version Manager)

It is similar to `npx` but cached.

## Usage

Do you want to use multiple versions of `mango-cli`? Be sure to start with mango-cli uninstalled.

```sh
npm i -g npxm

npxm
#> This is npxm@0.1.0

npxm install mango-cli
#> [npxm] Adding mango-cli
#> [npxm] Downloading mango-cli@3.1.2
#> …

npxm run mango-cli --version
#> [npxm] Adding mango-cli
#> [npxm] mango-cli@3.1.2 already installed.
#> [npxm] Running `mango --version` (mango-cli@3.1.2 at /Users/viliamkopecky/www/npxm/installed/mango-cli/3.1.2)
#> 3.1.2
```

## Run at specific version

```sh
npxm run mango-cli@2 --version
#> [npxm] Adding mango-cli@2
#> [npxm] Downloading mango-cli@2.7.1
#> …
#> [npxm] Running `mango --version` (mango-cli@2.7.1 at /Users/viliamkopecky/www/npxm/installed/mango-cli/2.7.1)
2.7.1
```

## Now you can build older projects with legacy mango-cli version

```sh
# In your project directory…

npxm mango-cli@1 install
#> [npxm] Adding mango-cli@1
#> [npxm] Downloading mango-cli@1.8.1

npxm mango-cli@1 build
#> [npxm] Adding mango-cli@1
#> [npxm] mango-cli@1.8.1 already installed.
#> [npxm] Running `mango build` (mango-cli@1.8.1 at /Users/viliamkopecky/www/npxm/installed/mango-cli/1.8.1)
#> mango-cli v1.8.1
#> …
```

## Link specific version as global

Using `npm link`.

```sh
mango --version
#> command not found: mango

# Links a package as global
npxm link mango-cli@2
#> [npxm] Adding mango-cli@2
#> [npxm] mango-cli@2.7.1 already installed.
#> [npxm] Linking mango-cli@2
#> …

mango --version
#> 2.7.1
```

## Other

```sh
# Cleans cache
npxm cleanup
```
