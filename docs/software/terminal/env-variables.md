# Environmental Variables

To view all environmental variables:

```bash
$ env
$ printev
```
[digitalocean.com/set-environmental-and-shell-variables-on-linux](https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-linux)

```bash
# Set Shell variable
$ set TEST_VAR="HELLO WORLD!"
$ echo $TEST_VAR
$ set | grep TEST_VAR

# Set env variable
$ export TEST_VAR
$ printenv | grep TEST_VAR
```

## Citations

- STUPID: Chapter 5 in GNU Bash manual [https://www.gnu.org/software/bash/manual/?](https://www.gnu.org/software/bash/manual/?)
- [support.apple/terminal](https://support.apple.com/guide/terminal/use-environment-variables-apd382cc5fa-4f58-4449-b20a-41c53c006f8f/2.15/mac/26)
