# Tmux

Open-source terminal multiplexer, basically allows you to run multiple terminal sessions

- for some reason apple doesn't have this built into their terminals...
    - I guess they assume everyone is satisfied w/ tabs/windows

Alternative options are to use a plugin for defualt mac terminal zsh or use a non-native terminal like iterm2 or some modern niche one...

TL;DR: Allows you to run multiple command-line programs at once

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


## Split/Navigate Screens

```
Vertical split:
$ ctrl b (let go) shift 5 

Switch between panes:
$ ctrl b (let go) <- or -> arrows

Resize panes:
$ ctrl b (let go) :resize-pane -L 10   # shrink 10 cells left
$ ctrl b (let go) :resize-pane -R 10   # grow 10 cells right
```

## Hyperlinks

- [https://github.com/tmux/tmux/wiki](https://github.com/tmux/tmux/wiki)
- [https://en.wikipedia.org/wiki/Tmux](https://en.wikipedia.org/wiki/Tmux)
