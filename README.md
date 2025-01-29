# @jasurbek2208/toboolean
A lightweight utility package for converting string representations of `true` or `false` into boolean values. This package handles various edge cases, including case-insensitive strings, null/undefined inputs, and invalid strings.

## Installation
```bash
npm install @jasurbek2208/toboolean
```

## Usage

### Importing the Function
```typescript
import { toBoolean } from "@jasurbek2208/toboolean";
```

### Function Signature
```typescript
toBoolean(text: string | boolean | null | undefined): boolean
```

### Parameters
- **`text`**: The input to be converted to a boolean. Accepts:
  - A `string` (e.g., `'true'`, `'false'`)
  - A `null` or `undefined` value
  - A boolean (`true` or `false`)

### Returns
- `true` if the input string equals `"true"` (case-insensitive).
- `false` for all other inputs, including `null`, `undefined`, and invalid strings.
---

## Examples

### Convert String to Boolean
```typescript
toBoolean("true");//Returns: true
toBoolean("false");//Returns: false
```

### Case-Insensitive and Trims Whitespace
```typescript
toBoolean("  TRUE  ");//Returns: true
toBoolean("  False ");//Returns: false
```

### Handle Null and Undefined
```typescript
toBoolean(null);//Returns: false
toBoolean(undefined);//Returns: false
```

### Invalid or Non-Boolean Strings
```typescript
toBoolean("random text");//Returns: false
toBoolean("yes");//Returns: false
```

### Boolean Input (Already Boolean)
```typescript
toBoolean(true);//Returns: true
toBoolean(false);//Returns: false
```
---

## Why Use `toBoolean`?
- **Case Insensitivity**: Works with variations like `'TRUE'`, `'True'`, or `'true'`.
- **Error Prevention**: Safely handles invalid inputs without throwing errors.
- **Whitespace Trimming**: Processes inputs like `' true '` correctly.
- **Flexibility**: Handles `null`, `undefined`, and boolean values directly.
- **Lightweight**: Minimal overhead for your project.
---

## Contributing
Feel free to contribute by submitting issues or creating pull requests. Make sure to follow the contribution guidelines.

### Development
Clone the repository:
```bash
git clone https://github.com/Jasurbek2208/toBolean.git
```