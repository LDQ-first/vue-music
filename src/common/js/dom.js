export const hasClass = (el, className) => {
    let reg = `(^|\\s)${className}(\\s|$)`
    return el.className.match(reg)
}


export const addClass = (el, className) => {
    if (hasClass(el, className)) {
       return false
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}


export const getData = (el, name, val) => {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}




