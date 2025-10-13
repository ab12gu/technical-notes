# NVim

- [https://neovim.io/](https://neovim.io/)

## Getting Started 

Create a configuration file for neovim editor

- [https://neovim.io/doc/user/lua-guide.html#lua-guide-config](https://neovim.io/doc/user/lua-guide.html#lua-guide-config)

Check if one exists already in neovim

```bash
:echo stdpath('config')
```

### Writing Lua for config

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





### From ytb video these are what you need to get started:

- Create our `init.lua` file
- Install `lazy.vim` our package manager 
    - custom theme settings for `nvim`
- Add colorscheme to init file: `colorscheme (catppuccin)` 
- Add plugins
    - `telescope.nvim`
    - `Treesitter`

## Lua

- [https://neovim.io/doc/user/luaref.html#luaref](https://neovim.io/doc/user/luaref.html#luaref)
- [https://neovim.io/doc/user/lua.html#lua-concepts](https://neovim.io/doc/user/lua.html#lua-concepts)

## Vim

- [https://vimhelp.org/ - HTML version of the Vim help pages](https://vimhelp.org/)
- [https://vimhelp.org/vim_faq.txt.html](https://vimhelp.org/vim_faq.txt.html)
- [https://www.vim.org/](https://www.vim.org/)
- [https://www.vim.org/web.php](https://www.vim.org/web.php)
- [https://www.iopb.res.in/vimbook-OPL.pdf](https://www.iopb.res.in/vimbook-OPL.pdf)
- [file:///Users/abhaygupta/Downloads/VimLikeAPro-sample.pdf](file:///Users/abhaygupta/Downloads/VimLikeAPro-sample.pdf)
- [https://learnvimscriptthehardway.stevelosh.com/](https://learnvimscriptthehardway.stevelosh.com/)

