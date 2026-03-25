# LazyVim

Currently using [Lazy Vim](https://github.com/LazyVim/LazyVim), because it is faster than default packer manager...

You can also install plugins manually, but isn't worth it tbh...

## Install

I didn't use the standard [LazyVim.starter](https://www.lazyvim.org/installation) repo to install `LazyVim`...

To be honest, I did something clever that I can't find the source... But I think I just somehow cloned lazyvim into local (unsure how) and linked in `.config/nvim/init.lua`.

Default Unix file config/data folders are defined: [https://specifications.freedesktop.org/basedir/latest/#index](https://specifications.freedesktop.org/basedir/latest/#index)

1. Clone `LazyVim` into `.local` shown below
2. Add the lines to `init.lua`.
```lua
-- add lazy.nvim to runtimepath
vim.opt.rtp:prepend("~/.local/share/nvim/lazy/lazy.nvim")
```


## Update

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


