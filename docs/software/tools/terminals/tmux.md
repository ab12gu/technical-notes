# Tmux

Open-source terminal multiplexer, basically allows you to run multiple terminal sessions

- for some reason apple doesn't have this built into their terminals...
    - I guess they assume everyone is satisfied w/ tabs/windows

Alternative options are to use a plugin for defualt mac terminal zsh or use a non-native terminal like iterm2 or some modern niche one...

TL;DR: Allows you to run multiple command-line programs at once

## Shortcuts

`C-b` is notation for `ctrl + b`

When in tmux, pressing C-b / then ? shows the key bindings

```
C-b ? List key bindings
```

This is the best method to find out what the keybindings are instead of google/chatgpt/[github](https://github.com/tmux/tmux/wiki/Getting-Started).

## Split/Navigate Screens

```bash
# List active sessions
$ tmux ls

# Open session
$ tmux a -t <session_name_or_id>

# Vertical split:
$ ctrl b (let go) shift 5 

# Horizontal split
$ ctrl b (let go) shift "

# Switch between panes:
$ ctrl b (let go) <- or -> arrows

# Resize panes:
$ ctrl b (let go) :resize-pane -L 10   # shrink 10 cells left
$ ctrl b (let go) :resize-pane -R 10   # grow 10 cells right
# or can just use mouse and grab divider and drag
```

## Installation

Via homebrew
```
$ brew install tmux
```

## To Start

Run:

```
$ tmux
```

- [https://tmuxcheatsheet.com/](https://tmuxcheatsheet.com/)
- [https://en.wikipedia.org/wiki/Tmux](https://en.wikipedia.org/wiki/Tmux)


## Hyperlinks

- [https://github.com/tmux/tmux/wiki](https://github.com/tmux/tmux/wiki)
- [https://en.wikipedia.org/wiki/Tmux](https://en.wikipedia.org/wiki/Tmux)
