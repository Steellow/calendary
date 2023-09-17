# Calendary

_Calendary_ as in _calendar_ and _legendary_. A web app for generating printable wall calendars.

Super work-in-progress, no ETA for release :D Current version which might or might now work, and is available at [git.hanki.dev/calendary](https://git.hanki.dev/calendary).

## Inspo

I want to create something as smooth and customizable as [flowcv.io](https://flowcv.com/), but for calendars!

## Coventions

- In the code date related numbers start from 1, not 0
  - When using 0-based parameter it's always with `index`
  - For example, `month = 9` and `monthIndex = 8` would both be September
  - It's easier for me to wrap my head around in date loops when counting starts from 1

### FAQ

### How printing works?

By using javascript's own `windows.print()`. To see how the calendar gets printed and not the whole page, check [app.css](./src/app.css).

### How preview works?

By setting fixed size for the div where the calendar gets drawn. For A4 paper it's `width: 3508px; height: 2480px;`.
Since nobody has that big monitor it needs to be scaled down using `transform: scale()`.
The scale factor gets calculated from your window size, check [`calculateScaleFactor()`](./src/components/canvas.svelte).