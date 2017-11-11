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


