/**Converts input to boolean. Case-insensitive, trims whitespace.
*@param t - Input (string, boolean, number, object, null, undefined).
*@returns `true` for string 'true' (case-insensitive), non-empty array/object, or truthy non-string; `false` otherwise.
*@example //true results:
*toBoolean('true'|'str '|{age:2}|true|[1]|1)

//false results:
toBoolean(' FalSE '|''|{}|[]|0|null|undefined)
*@see{@link https://github.com/Jasurbek2208/toBoolean}*/export const toBoolean=(t:string|boolean|number|Object|null|undefined):boolean=>!!(t&&typeof t=='object'?(Array.isArray(t)?t?.length:Object.keys(t)?.length):typeof t!='string'?t:!!(t?.trim()&&(t?.trim()?.toLowerCase()=='true'||t?.trim()?.toLowerCase()!='false')))

/**Converts input to boolean. Case-insensitive, trims whitespace.
*@param t - Input (string, boolean, null, undefined).
*@returns `true` if the input is the boolean `true` or the string `'true'` (case-insensitive); `false` otherwise.
*@example //true results:
*toBooleanOnly('true'|true)

//everything else is false
*@see{@link https://github.com/Jasurbek2208/toBoolean}*/export const toBooleanOnly=(t:string|boolean|null|undefined):boolean=>!!(typeof t=='boolean'?t:typeof t=='string'?t?.trim()?.toLowerCase()=='true':false)