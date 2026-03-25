# Getting Started

Create a configuration file (different locations for windows/unix) <br>
[https://neovim.io/doc/user/starting/#init.lua](https://neovim.io/doc/user/starting/#init.lua) <br>
```nvim $VIMRUNTIME/example_init.lua```

Create our `init.lua` file [https://neovim.io/doc/user/lua-guide.html#lua-guide-config](https://neovim.io/doc/user/lua-guide.html#lua-guide-config)

1. Check if one is already exists
```bash
$ :echo stdpath('config')
```
2. Install [lazy.vim](https://www.lazyvim.org/) our package manager
    -  custom theme settings for `nvim`
3. Add  to init file: [github.com/ab12gu/dotfiles/tree/master/vim](https://github.com/ab12gu/dotfiles/tree/master/vim) <br>
Commands Docs: [neovim.io/doc/user/lua-guide/#lua-guide-vim-commands](https://neovim.io/doc/user/lua-guide/#lua-guide-vim-commands)
```bash
# vim script
$ :colorscheme (torte)

# Lua Script
$ vim.cmd("colorscheme torte") 
$ vim.o.number = true
```
4. Add plugins
```bash
Treesitter # fancier syntax highlighting (cause some files aren't supported in nvim by default)
telescope.nvim
```

## How to port .vimrc to init.lua

Create an `init.lua` file in `~/.config/nvim/`

For vim, you use the `:set` command, which in Lua is `vim.o`

```lua
vim.o.number = true -- in init.lua
:vim.o.number -- directly in nvim
```

To use other vim functions in lua

```lua
vim.api.nvim_set_hl(0, "LineNr", { ctermfg = "LightBlue", })
```

The vim.cmd runs vimscript rather than lua in-built functions, so its slower

```lua
vim.cmd("colorscheme elflord")
vim.cmd.colorscheme(elflord) -- same as above
```


