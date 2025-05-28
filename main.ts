/**Converts input to boolean. Case-insensitive, trims whitespace.
*@param text - Input (string, boolean, number, object, null, undefined).
*@returns `true` for string "true" (case-insensitive), non-empty array/object, or truthy non-string; `false` otherwise.
*@example toBoolean("true") // true
*toBoolean("FalSE") // false
*toBoolean(null) // false
toBoolean(undefined) // false
toBoolean("random") // false
toBoolean(true) // true
toBoolean({}) // false
toBoolean({name:"Jasur"}) // true
toBoolean([]) // false
toBoolean([1]) // true
toBoolean(0) // false
toBoolean(1) // true
*@see{@link https://github.com/Jasurbek2208/toBoolean}*/
export const toBoolean=(text:boolean|string|number|Object|null|undefined):boolean=>typeof text==='boolean'?typeof text==='object'?text:Array?.isArray(text)?text?.length>0:Object?.keys(text)?.length>0:typeof text!=='string'?!!text:text?.trim()?.toLowerCase()==='true'