/**
 * Converts a string representation of `true` or `false` into a boolean.
 * This function is case-insensitive and trims any extra whitespace.
 * It also handles null, undefined, and non-boolean strings gracefully.
 * @param text -The string to be converted to a boolean.
 *Can also accept `null`, `undefined`, or a boolean value.
 * @returns`true` if the input string equals "true" (case-insensitive),
 *`false` for all other inputs including `null`, `undefined`,
 *or non-boolean strings.
 * @example
 * toBoolean('true')//true
 * toBoolean('false')//false
 * toBoolean(' TRUE ')//true
 * toBoolean(' False ')//false
 * toBoolean(null)//false
 * toBoolean(undefined)//false
 * toBoolean('random text')//false
 */
export const toBoolean=(text:string|boolean|null|undefined):boolean=>typeof text==="boolean"?text:text===null||text===undefined?false:text?.trim()?.toLowerCase()==="true";