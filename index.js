const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5)

const copyToClipboard = (text) => navigator.clipboard?.writeText && navigator.clipboard.writeText(text)

const getUnique = (arr) => [...new Set(arr)]

const scrollToTop = (el) => el.scrollIntoView({ behavior: "smooth", block: "start" })

const addToArr = (arr, v) => {
    if (Array.isArray(v)) arr.push(...v)
    else arr.push(v)
}
  
const faDate = date => {
    if (date && date !== '0001-01-01T00:00:00')
      return new Date(date).toLocaleDateString('fa-IR')
    return null
}
  
const faMoney = mny => {
    if (+mny % 1 !== 0) return mny
    else return Number(mny).toLocaleString()
}
  
const createObjWithDefaultValues = (self, defaults, options) => {
    const res = Object.assign({}, defaults, options)
    Object.keys(defaults).forEach((k) => {
      self[k] = res[k]
    })
}
  
const deleteKeyFromObj = (obj, ...keys) => {
    keys.forEach((k) => {
      delete obj[k]
    })
}
  
const deleteObjFromArr = (arr, key, id) => {
    if (Array.isArray(arr)) {
      const doomedObj = arr.find((obj) => obj[key] === id)
      const doomedObjIndex = arr.indexOf(doomedObj)
      arr.splice(doomedObjIndex, 1)
    }
  }
  
const divideCreditCardNumbersByFour = num => {
    if (num) return num.toString().replace(/(\d{4}(?!\s))/g, '$1 ')
}
  
const getArraysMutualObjects = (arr1, arr2) => {
    return arr1.filter(function (n) {
      return arr2.indexOf(n) !== -1
    })
  }
  
  const generateQueryStringFromAnObject = obj => {
    let q = ''
    for (const [key, value] of Object.entries(obj)) {
      if (value && value !== null) q += `${key}=${value}&&`
    }
    return q
}
  
const replaceObjInArr = (array, oldObjIndex, newObj) => {
    array.splice(oldObjIndex, 1, newObj)
}
