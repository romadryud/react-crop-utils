# react-crop-utils
Utilities for working with image cropping which may be useful. List of available utilities:

- [Base64 string to file](#Usage-base64StringToFile)
- [Get resized canvas](#Usage-getResizedCanvas)

# Install

`npm i react-crop-utils`

# Usage base64StringToFile

``` 
import { base64StringToFile } from "react-crop-utils"

// Return file 

base64StringToFile(base64String, filename)
```
# Parameters
### base64string
- Type: `string`

### filename
- Type: `string`
- Example: `"main.png"`. With quotes.
---
# Usage getResizedCanvas
```
import { getResizedCanvas } from "react-crop-utils"

// Return new resized canvas

getResizedCanvas(canvas, newWidth, newHeight)
```
# Parameters
### canvas
- Type: `HTMLCanvasElement`

### newWidth
- Type: `number`

### newHeight
- Type: `number`


# Author
Raman Aktsisiuk (romadryud@gmail.com)

## License
MIT