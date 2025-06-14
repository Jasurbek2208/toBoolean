# @jasurbek2208/toboolean
Lightweight utility to convert inputs to booleans, handling case-insensitive strings and edge cases.
## Install
```bash
npm install @jasurbek2208/toboolean
```
## Usage
```typescript
import { toBoolean, toBooleanOnly } from '@jasurbek2208/toboolean'

//toBoolean — more permissive:
toBoolean('true'|'str '|{age:2}|true|[1]|1)//true results
toBoolean(' FalSE '|''|{}|[]|0|null|undefined)//false results

//toBooleanOnly — strict string/boolean parsing:
toBooleanOnly('true'|true)//true results
//everything else is false
```
## API
### `toBoolean(text: string | boolean | number | object | null | undefined): boolean`
- **Input**: String, boolean, number, object, array, `null`, or `undefined`.
- **Returns**: `true` for `'true'` (case-insensitive), non-empty arrays/objects, or truthy non-strings; `false` otherwise.
### `toBooleanOnly(text: string | boolean | null | undefined): boolean`
- **Input**: String, boolean, `null`, or `undefined`.
- **Returns**: `true` if the input is the boolean `true` or the string `'true'` (case-insensitive); `false` otherwise.
## Features
- Case-insensitive, trims whitespace.
- Handles `null`,`undefined`, invalid inputs.
- Lightweight.