# Shortcuts

[https://en.wikipedia.org/wiki/Shortcuts_(Apple)](https://en.wikipedia.org/wiki/Shortcuts_(Apple))

Visual scripting application (programming adjacent) by Apple to create marcos running on their Apple devices to complete or automate tasks. Started through the University of Michigan Hackathon in 2014. 

I run my automated texts through there! Earlier, was recommended to use [Twilio](https://www.twilio.com/en-us). But costs like 1 cent per text!

- [https://support.apple.com/guide/shortcuts/welcome/ios](https://support.apple.com/guide/shortcuts/welcome/ios)

### Tracking

There is no documentation for tracking shortcut apps. 

However, apple did build a cli tool to track them via `putil`. "Hackers" have made their own documentation for this command as well :), [https://theapplewiki.com/wiki/Plutil](https://theapplewiki.com/wiki/Plutil).

NOTE: Actually shortcuts has some metadata that doesn't allow the utility to work! Need to cut down file.

But you can always referance the manpage for the cli tool:

```
$ man plutil
$ plutil -convert xml1 filename.plist
```

Shortcuts plists nest deeply and reorder on export), some people give up on meaningful diffs and instead commit the binary .shortcut as an opaque blob (git-lfs if it's large) alongside a manually maintained CHANGES.md describing what changed in each version, screenshot each major version, and let commit messages carry the actual history.

## Throttle

throttled or blocked, usually well under 100 texts in a short window

eSIM/Number sharing (like Apple Watch cellular, or some carriers' multi-device plans) — this mostly relays calls/texts to a secondary device, it doesn't let a second device independently send SMS through the network as if it were the primary

Dual-SIM on the iPhone itself — doesn't help, since it's still iOS-sandboxed either way

- AT&T - 15 SMS/minute
- T-Mobile - 1,000 a day
- People report: 10-30 rapid, identical-looking texts in a short window

## Alternatives

[Automator](https://en.wikipedia.org/wiki/Automator_(macOS)) (seems to becoming deprioritized to shortcuts) is the traditional automation method for macOS starting in 2005. Able to run various scripting languages such as [AppleScript](https://en.wikipedia.org/wiki/AppleScript), JavaScript, or shell scripts. 

There are some external tools that allow you to write in `swift` that compiles to shortcut.

- [https://apps.apple.com/us/app/jellycuts/id1522625245](https://apps.apple.com/us/app/jellycuts/id1522625245)
    - [https://github.com/OpenJelly/Open-Jellycuts](https://github.com/OpenJelly/Open-Jellycuts)
    - [https://www.jellycuts.com/](https://www.jellycuts.com/)
    - Allows extra usage to shortcuts in general
    - seems not popular...
- [https://github.com/damionrashford/clean-shortcuts](https://github.com/damionrashford/clean-shortcuts)
    - seems not popular...
