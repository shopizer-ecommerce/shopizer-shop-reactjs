export function setLocalData(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // console.log("error", error)
  }
}

export function removeLocalData(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    // console.log("error", error)
  }
}
export function getLocalData(key) {
  try {
    let data = localStorage.getItem(key);
    return data
  } catch (error) {
    // console.log("error", error)
  }
}

export function isValidValue(value) {
  if (typeof (value) === "undefined" || value === null || value === "") {
    return false
  }
  return true
}
export function isCheckValueAndSetParams(params, value) {
  if (typeof (value) === "undefined" || value === null || value === "") {
    return ''
  }
  return params + value
}
export function hasProperty(object, key) {
  if (Array.isArray(object) || typeof (key) != 'string' || !object) {
    return false
  } else {
    return object.hasOwnProperty(key)
  }
}
export function isValidObject(items) {
  if (Object.keys(items).length > 0) {
    return true
  } else {
    return false
  }
}
export function getValueFromObject(object, key) {
  if (hasProperty(object, key)) {
    if (isValidValue(object[key])) {
      return object[key]
    }
  }
  return ''
}
// export function getFormDataObj(obj) {
//   let formData = new FormData()
//   for (let i in obj) {
//     if (obj.hasOwnProperty(i)) {
//       let element = obj[i];
//       formData.append(i, element)
//     }
//   }
//   return formData
// }