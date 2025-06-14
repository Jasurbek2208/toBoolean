/**Converts input to boolean. Case-insensitive, trims whitespace.
*@param t - Input (string, boolean, number, object, null, undefined).
*@returns `true` for string 'true' (case-insensitive), non-empty array/object, or truthy non-string; `false` otherwise.
*@example //true results:
*toBoolean('true ')
toBoolean(true)
toBoolean([1])
toBoolean(1)
toBoolean({age:2})

//false results:
toBoolean('FalSE')
toBoolean(null)
toBoolean(undefined)
toBoolean('str')
toBoolean({})
toBoolean([])
toBoolean(0)
*@see{@link https://github.com/Jasurbek2208/toBoolean}*/export const toBoolean=(t:string|boolean|number|Object|null|undefined):boolean=>!!(t&&typeof t=='object'?(Array.isArray(t)?t?.length:Object.keys(t)?.length):typeof t!='string'?t:t?.trim()?.toLowerCase()=='true')