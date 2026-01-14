# Contributing

## Forks

If you don't have direct access to a repo, you need to `fork` the repository and make changes locally. 

Once change is made, you can create a `pull request` into the owner's repository via GUI (thing i do atm) or via CLI (will do later)


### Pull changes

If the repo gets update, and you want to update your own repository, you need to [set upstream to owners/repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork):

```bash
$ git remote -v
$ git remote add upsteram <owners/repo>
$ git remote -v
$ git fetch upstream
$ git merge upstream/main
$ git push
```

[github/docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork)


