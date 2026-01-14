# Large Files

Use [github LFS](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage)! Quick instructions on how to use on [Atlassian Support](https://support.atlassian.com/bitbucket-cloud/kb/moving-git-large-files-to-git-lfs-in-bitbucket-cloud/)

```bash
# From Attlassian support referenced above
$ git lfs migrate import --include="*.png,*.jpg" everything # Removes artifacts of files in git history
$ git push -force
```

This will change all your historical commits to reference the LFS version of the file :). 

To list lfs files in the repo after migration :):

```bash
$ git lfs ls-files | grep .jpeg
```

If running in `github actions`, you need to tell the repo to render git lfs files within the yaml file:

```bash
steps:
  - uses: actions/checkout@v4
    with:
      lfs: true # This line is crucial
```

Currently repo size 8gb due to images & videos. By default github gives you 10gb per repository and maybe allows you run over... unsure.

Check github repo size:  [How to see github size? - stack overflow discussion](https://stackoverflow.com/questions/8646517/how-can-i-see-the-size-of-a-github-repository-before-cloning-it)

1. [https://api.github.com/repos/ab12gu/mkdocs-notes](https://api.github.com/repos/ab12gu/mkdocs-notes)
    - Need to `ctrl-f` for `size`, and it shows you the size (including history) of repo
        - expressed in kilobytes (kb)
2. [https://github.com/settings/repositories](https://github.com/settings/repositories)

Need to port images/vids to github LFS (Large file system) for blog, because at 500mb as of 25-12-29.

Issue: When you port the files to git lfs, the files still remain stored in main repo in git history. Github and other sites tell you to use odl [`git-filter-repo`](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html) command, which is really not ideal. Use the following:

NOTE: the images may be added to a cache and mess up the lfs system when creating new clone!


Unsure if necessary but can clean repo further:

```bash
$ git reflog expire --expire=now --all && git gc --prune=now --aggressive
```

## Links 

- [Github repository limits](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits)
- [Git LFS size limits](https://docs.github.com/en/billing/concepts/product-billing/git-lfs)
- [https://github.com/github/git-sizer](https://github.com/github/git-sizer), github size breakdownA
- [Atlassian docs on LFS](https://www.atlassian.com/git/tutorials/git-lfs#what-is-git-lfs)
- [https://git-lfs.com/](https://git-lfs.com/)

## Installation

Github LFS [Installation](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage)

```bash
$ brew install git-lfs

# Update global git config
$ git lfs install

# Update system git config
$ git lfs install --system

# Go to repo

# Make sure you are in root of repo
$ git lfs track "*.psd"
> Tracking "*.psd"

# Remove file from 
$ git rm --cached filename.ext

```

The file `.gitattributes` specifies all files that are tracked in LFS storage.


