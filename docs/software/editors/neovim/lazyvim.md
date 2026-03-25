# LazyVim

Currently using [Lazy Vim](https://github.com/LazyVim/LazyVim), because it is faster than default packer manager...

You can also install plugins manually, but isn't worth it tbh...

## Install

Add the lines to `init.lua`

```lua
-- add lazy.nvim to runtimepath
vim.opt.rtp:prepend("~/.local/share/nvim/lazy/lazy.nvim")
```


```lua
-- now you can call require("lazy")
require("lazy").setup({
  -- list your plugins here, e.g., nvim-treesitter
  --
  {"nvim-treesitter/nvim-treesitter", branch = 'master', lazy = false, build = ":TSUpdate"},
  {"nvim-tree/nvim-tree.lua", branch = 'master', version = "*", lazy = false, },
})
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


