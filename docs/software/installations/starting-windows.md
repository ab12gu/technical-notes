# Starting Windows

## Package Manager

It's not really necessary to use a package manager to install software, but kindof nice to use general coding practices for installation/tracking.

Also less files to deal with and can use a script/list to use on other computers.

Built-in windows package manager is `winget`, but when you list all packages, it includes many preinstall windows packages, so too hard to track.

Best to use [chocolatey](https://chocolatey.org/):

```bash
$ winget install chocolatey
$ choco install <package-name>
$ choco list
$ choco list > choco-list.txt
```

