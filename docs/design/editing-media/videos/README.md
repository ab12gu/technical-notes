# Videos

## Video Formats

As of Jan 2026, you can really only use `.mp4` and `.gif`, though `.gif` is pretty big for a file.

| Format | What it is | Browser support | Notes |
|------|-----------|-----------------|-------|
| **.mp4** | Standard video container | ✅ Universal | Best for web |
| **.mov** | Apple video container | ⚠️ Limited | Common for editing, not ideal for web |
| **.webm** | Web-focused container | ⚠️ Partial | Smaller than MP4, Safari support inconsistent |
| **.mkv** | Flexible container | ❌ None | Not supported by browsers |
| **Animated WebP / AVIF** | Image sequences | ⚠️ Experimental | Short loops only, tooling fragile |
| **.gif** | Legacy image animation | ✅ Universal | Very large files |
| **.avi** | Legacy Microsoft container (1992) | ❌ None | Outdated, huge, not web-safe |

## Codecs (Coder/Decoder)

An `mp4` video is only a container. It ccan have a compression/codec of `H.264`, `HECV`, `AV1` etc, but only `H.264` will be supported by most browsers. The file metadata will state the codec.

- `H.264 (AVC)`**
    - industry standard
    - moderate file size
- `H.265 (HEVC)`
    - license/support issues, smaller than H.264
- `VP9, webm`
    - Google’s open alternative to HEVC
    - Smaller than H.264
    - Slower encoding
    - Only safari 17+, but not older devices
- `AV1`
    - best compression, but not iffy browser support
    - royality-free
    - Only safari 17+, but not older devices
-`ProRes`
    - Apple codec
    - large files for video production


## Changing Video Format

- `ffmpeg` or `ImageMagick`. See [photos](./../photos/README.md).


Convert to .mp4 while specifing h264 video format at no audio:

```bash
$ ffmpeg -i kiran-shedding-short.mov -c:v h264 -an kiran-shedding-ffmpeg.mp4
```


## Video Editing Software

- Adobe Suite/Illustrator
- [https://www.blackmagicdesign.com/products/davinciresolve](https://www.blackmagicdesign.com/products/davinciresolve)
- [https://www.instagram.com/](https://www.instagram.com/)
