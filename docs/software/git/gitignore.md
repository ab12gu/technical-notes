# .gitignore

Used at root of repo to stop large/unnecessary files to be tracked by git respository. 

Generally contains workspace setting files (unique to a person's desktop) and image/video files (too large for repo)

```bash
*.jpg
*.pdf
*.aux
*.DS_Store # specific to mac
```

For most languages and frameworks, `.gitignore` are standardized in this git repo: [https://github.com/github/gitignore/tree/main](https://github.com/github/gitignore/tree/main)

## Untrack Files (and remove from history)

Generally, I (and probably everyone) forgets to make this all inclusive when starting their repository. So you need to remove the `cached` files to stop current tracking:

```bash
$ git rm --cached path/to/file
$ git rm -r --cached folder/
```

And then you have run `git-filter-repo` to update history. And then you'll have to `force push` because history differs. 

```bash
$ brew install git-filter-repo
$ git filter-repo --path path/to/file --invert-paths
$ git filter-repo --path folder/ --invert-paths
```
