# @jasurbek2208/toboolean
Lightweight utility to convert inputs to booleans, handling case-insensitive strings and edge cases.

## Install
```bash
npm install @jasurbek2208/toboolean
```

## Usage
```typescript
import { toBoolean } from '@jasurbek2208/toboolean'

toBoolean('true')//true
toBoolean('FalSE')//false
toBoolean(null)//false
toBoolean(undefined)//false
toBoolean('random')//false
toBoolean(true)//true
toBoolean({})//false
toBoolean({ name: 'Jasur' })//true
toBoolean([])//false
toBoolean([1])//true
toBoolean(0)//false
toBoolean(1)//true
```

## API
### `toBoolean(text: string | boolean | number | object | null | undefined): boolean`
- **Input**: String, boolean, number, object, array, `null`, or `undefined`.
- **Returns**: `true` for `'true'` (case-insensitive), non-empty arrays/objects, or truthy non-strings; `false` otherwise.

## Features
- Case-insensitive, trims whitespace.
- Handles `null`, `undefined`, invalid inputs.
- Lightweight.

## Contribute
Submit issues/PRs to [github.com/Jasurbek2208/toBoolean](https://github.com/Jasurbek2208/toBoolean).