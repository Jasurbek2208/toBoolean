/**Converts input to boolean. Case-insensitive, trims whitespace.
*@param t - Input (string, boolean, number, object, null, undefined).
*@returns `true` for string 'true' (case-insensitive), non-empty array/object, or truthy non-string; `false` otherwise.
*@example toBoolean('true')//true
*toBoolean('FalSE')//false
*toBoolean(null)//false
toBoolean(undefined)//false
toBoolean('random')//false
toBoolean(true)//true
toBoolean({})//false
toBoolean({name:'Jasur'})//true
toBoolean([])//false
toBoolean([1])//true
toBoolean(0)//false
toBoolean(1)//true
*@see{@link https://github.com/Jasurbek2208/toBoolean}*/export const toBoolean=(t:boolean|string|number|Object|null|undefined):boolean=>!!(t&&typeof t=='object'?(Array.isArray(t)?t?.length:Object.keys(t)?.length):typeof t!='string'?t:t?.trim()?.toLowerCase()=='true')