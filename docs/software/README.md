# Software

## Mac Commands

Update default app for code files (remove xcode... too slow):

```bash
$ brew install duti
$ osascript -e 'id of app "Zed"' # find bundle id for app
$ duti -s com.microsoft.VSCode .py all
$ duti -s dev.zed.Zed .js all
```

Or you can right click file `get info` and change default application to open file type

## Webdev


Kill a localhost that I forgot to close in prior session

```bash
$ lsof -i :8000     # check if port is active
$ kill <PID>        # kill that port
```

Open source html in browser (hotkey to viewsource)
```bash
cmd + u
```

- [Django Project Structure](https://medium.com/django-unleashed/django-project-structure-a-comprehensive-guide-4b2ddbf2b6b8)

## Webdev database build

- [ytb - Fireship - I replaced my entire tech stack with Postgres...](https://www.youtube.com/watch?v=3JW732GrMdg)
- [https://supabase.com](https://supabase.com)
