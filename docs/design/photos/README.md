# Photos

For browser rendering, `jpeg` seems to render the fastest (has the fastest decoding time).

Instagram uses jpg (`png` for logos due to better color rendering), and gifs for loading screens. I figured this out by inspecting the elements on one of their [ig pages](https://www.instagram.com/p/DR5UD8VkZY6/). There is no use of modern compression algos, probably because rendering times are so important for their product/user rention. Memory is cheap!

![](images/instagram-filetype.avif)

However, jpeg has slower transfer speed to the client's browser since it has a relatively high file size. The opimization comes when you have the lowest combination of transfer and decode time, which seems to be with the newer compression algos. 

![](images/jpeg-speed-chart.avif)

- Source: [https://groups.google.com/a/webmproject.org/g/webp-discuss/c/hn3LwO6_bS0](https://groups.google.com/a/webmproject.org/g/webp-discuss/c/hn3LwO6_bS0)
- File format resolution tool [squoosh.app](https://squoosh.app/editor)
-  In development, [Webp2](https://chromium.googlesource.com/codecs/libwebp2/+/df4ec90a2befb79ed45cf8810e8ac93da7a47297/README.md)

## Converting Files

On mac, you can open images in preview and click export, but not newer file formats.

In cmd line, you can use [imagemagick](https://imagemagick.org/script/convert.php#gsc.tab=0)

## Common File Types

- jpeg (aka jpg)
    - lossy compression
    - nearly every digital camera stores files in this format
    - 8-bit greyscale, 24-bit color
- png
    - lossless compression
- gif
    - 8-bit palette
    - old format so not the greatest compression algos tbh

## Photo Compression

Two types of compression

- Lossless
    - reduce filesize without compromising image
    - larger than lossy
- Lossy

![](https://upload.wikimedia.org/wikipedia/commons/c/ce/Image_formats_by_scope.svg){: style="background-color: white;"}

## Less common file types

- JPEG 2000
    - better quality and smaller than jpeg, but more time to process
- Webp
    - released in 2010
    - lossy & lossless compression (isn't that just lossy then tho?)
- AVIF
    - New open source web image standard over webp?
    - Netflix first tried it
    - Single frame of video format AV1?
    - 12 bit colors
- HEIC (High Efficiency Image File)
    - Better than JPEG alt used by apple 

## Links

- [wiki/Image_file_format](https://en.wikipedia.org/wiki/Image_file_format)
