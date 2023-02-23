const createContainer = () => {
  const portalId = 'notifyContainer'
  let element = document.getElementById(portalId)

  if (element) {
    return element
  }

  element = document.createElement('div')
  element.setAttribute('id', portalId)
  element.style.position = 'fixed'
  element.style.top = '30px'
  element.style.left = '50%'
  element.style.transform = 'translateX(-50%)'
  element.style.zIndex = '2147483647'
  document.body.appendChild(element)

  return element
}

export { createContainer }
