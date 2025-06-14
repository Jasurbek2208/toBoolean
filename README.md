# @jasurbek2208/toboolean
Lightweight utility to convert inputs to booleans, handling case-insensitive strings and edge cases.
## Install
```bash
npm install @jasurbek2208/toboolean
```
## Usage
```typescript
import { toBoolean } from '@jasurbek2208/toboolean'

//true results:
toBoolean('true')
toBoolean({age:2})
toBoolean(true)
toBoolean([1])
toBoolean(1)

//false results:
toBoolean(' FalSE ')
toBoolean(null)
toBoolean(undefined)
toBoolean('str')
toBoolean({})
toBoolean([])
toBoolean(0)
```
## API
### `toBoolean(text: string | boolean | number | object | null | undefined): boolean`
- **Input**: String, boolean, number, object, array, `null`, or `undefined`.
- **Returns**: `true` for `'true'` (case-insensitive), non-empty arrays/objects, or truthy non-strings; `false` otherwise.
## Features
- Case-insensitive, trims whitespace.
- Handles `null`,`undefined`, invalid inputs.
- Lightweight.