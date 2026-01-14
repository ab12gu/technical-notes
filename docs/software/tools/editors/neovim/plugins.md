# Plugins

## LazyVim

Currently using [Lazy Vim](https://github.com/LazyVim/LazyVim), because it is faster than default packer manager...

You can also install plugins manually, but isn't worth it tbh...

### Update LazyVim

Recommended to keep autoupdate in vimrc, but makes vimrc too long...

Update via terminal:
```bash
$ cd ~/.local/share/nvim/lazy/lazy.nvim
$ git pull origin stable
```

OR update directly in nvim
```vim
:Lazy update
:Lazy update nvim-treesitter
```

Located:
```bash
$ cd ./.local/share/nvim/lazy/
```
