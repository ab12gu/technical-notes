# Large Files

Currently repo size 8gb due to images & videos. By default github gives you 10gb per repository and maybe allows you run over... unsure.

Check github repo size:  [How to see github size? - stack overflow discussion](https://stackoverflow.com/questions/8646517/how-can-i-see-the-size-of-a-github-repository-before-cloning-it)

1. [https://api.github.com/repos/ab12gu/mkdocs-notes](https://api.github.com/repos/ab12gu/mkdocs-notes)
    - Need to `ctrl-f` for `size`, and it shows you the size (including history) of repo
        - expressed in kilobytes (kb)
2. [https://github.com/settings/repositories](https://github.com/settings/repositories)

Need to port images/vids to github LFS (Large file system) for blog, because at 500mb as of 25-12-29.

## Links 
- [Github repository limits](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits)
- [Git LFS size limits](https://docs.github.com/en/billing/concepts/product-billing/git-lfs)
- [https://github.com/github/git-sizer](https://github.com/github/git-sizer), github size breakdownA


## Installation

Github LFS [Installation](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage)

```bash
$ brew install git-lfs

# Update global git config
$ git lfs install

# Update system git config
$ git lfs install --system

```


