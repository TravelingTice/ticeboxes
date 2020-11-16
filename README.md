# ticeboxes

`Box` and `Flex` React components for bootstrap spacing classes

[![NPM](https://img.shields.io/npm/v/ticeboxes.svg)](https://www.npmjs.com/package/ticeboxes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ticeboxes

yarn add ticeboxes
```

## Usage

First of all, because these elements basically render div elements with bootstrap classes, it is advised to have bootstrap loaded in your page. I like to do it this way in a CRA or other React project in the `index.js` file:

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

### Box

You can use the `Box` component and put bootstrap margin and padding classes on it as attributes like so:

```tsx
import React from "react"

import { Box } from "ticeboxes"

const Example = () => {
  return <Box mt="5">Bootstrap div with margin top</Box>
}
```

### Flex

If you want to have `d-flex` on your div immediately, you can use the `Flex` component

```tsx
import React from 'react'

import { Flex } from 'ticeboxes'

const Example = () => {
  return <Flex justify-content="center">Content in this div is centered</Box>
}
```

## License

MIT © [TravelingTice](https://github.com/TravelingTice)
