# Large Files

Use [github LFS](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage)! Quick instructions on how to use on [Atlassian Support](https://support.atlassian.com/bitbucket-cloud/kb/moving-git-large-files-to-git-lfs-in-bitbucket-cloud/)

## ISSUES

Github LIMITS free version to have `10gb bandwidth` monthly. No method to escape this without paying extra so ensure not excessive clones for repo needed cause each clone will eat up bandwidth (unsure if builds in CI/CD count)

- Random people were cloning website and using up bandwidth
- Also the bandwidth was eaten when using github actions to deploy webpage
    - couldn't deploy with pointer... dumb

Solution: Host on some online server or build your own server

## Cloning repo with Git LFS

Check `.gitatrributes` if there is git LFS tracking.

```bash
$ git lfs ls-files
$ git lfs pull
```

### Adding Files

Anytime you add a file to repo (after attaching `git lfs`) you will need to run `git lfs push` to push the file to repo.

## Repo Size

Check github repo size:  [How to see github size? - stack overflow discussion](https://stackoverflow.com/questions/8646517/how-can-i-see-the-size-of-a-github-repository-before-cloning-it)

1. [https://github.com/settings/repositories](https://github.com/settings/repositories)
2. [https://api.github.com/repos/ab12gu/mkdocs-notes](https://api.github.com/repos/ab12gu/mkdocs-notes), under `size` in kilobytes (kb)


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
$ git lfs track "*.psd" ## Track file or file types
> Tracking "*.psd" 

# Remove file from cache
$ git rm --cached filename.ext

```

The file `.gitattributes` specifies all files that are tracked in LFS storage.

## Remove tracked files from commit history

```bash
# From Attlassian support referenced above
$ git lfs migrate import --include="*.png,*.jpg" everything # Removes artifacts of files in git history
$ git push --force
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

## Rationale of starting

Currently mkdocs repo size is `8gb` due to images & videos. By default github gives you 10gb per repository and maybe allows you run over... unsure.

After porting images/vids to github LFS, got it down to under 500mb.

## Remove files in commit history (extended)

**Issue:** When you port the files to git lfs, the files still remain stored in main repo in git history. Github and other sites tell you to use odl [`git-filter-repo`](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html) command, which is really not ideal. Use `git migrate` instead, noted above.

**NOTE:** the images may be added to a cache and mess up the lfs system when creating new clone!

- Add `.cache` to `.gitignore`

Unsure if necessary but can clean repo further:

```bash
$ git reflog expire --expire=now --all && git gc --prune=now --aggressive
$ git prune # removes all unattached files
```

## Links 

- [Github repository limits](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits)
- [Git LFS size limits](https://docs.github.com/en/billing/concepts/product-billing/git-lfs)
- [https://github.com/github/git-sizer](https://github.com/github/git-sizer), github size breakdown
- [Atlassian docs on LFS](https://www.atlassian.com/git/tutorials/git-lfs#what-is-git-lfs)
- [https://git-lfs.com/](https://git-lfs.com/)


