# Plugins

[https://dotfyle.com/neovim/plugins/top](https://dotfyle.com/neovim/plugins/top)

## Treesitter

More comprehensive syntax highlighting for files.

## Tree

Overrides Netrw

```nvim
:NvimTreeToggle
```

## Netrw

Build into vim by default, [Netrw](https://www.vim.org/scripts/script.php?script_id=1075) - [description](https://vonheikemen.github.io/devlog/tools/using-netrw-vim-builtin-file-explorer/)


Just type this into terminal (opens Netrw if nerdtree not installed/configured)

```bash
$ nvim .
$ vim . 
```

```nvim
:Ex
:Explorer
```

## NerdTree

### Installation

Add lines in `init.lua`:

```lua
-- now you can call require("lazy")
require("lazy").setup({
  -- list your plugins here, e.g., nvim-treesitter
  --
  {"nvim-treesitter/nvim-treesitter", branch = 'master', lazy = false, build = ":TSUpdate"},
  {"nvim-tree/nvim-tree.lua", branch = 'master', version = "*", lazy = false, },
})

require("nvim-treesitter.configs").setup {
    ensure_installed = {"tsx"},
    highlight = {enable = true },
}    

require("nvim-tree").setup {}
```

