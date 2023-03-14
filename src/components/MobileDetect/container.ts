const createContainer = () => {
  const portalId = 'smallScreenContainer'
  let element = document.getElementById(portalId)

  if (element) {
    return element
  }

  element = document.createElement('div')
  element.setAttribute('id', portalId)
  element.style.position = 'fixed'
  // full screen
  element.style.top = '0'
  element.style.left = '0'
  element.style.width = '100%'
  element.style.height = '100%'
  // max value of z-index
  element.style.zIndex = '2147483646'
  document.body.appendChild(element)

  return element
}

const removeContainer = () => {
  const portalId = 'smallScreenContainer'
  const element = document.getElementById(portalId)

  if (element) {
    document.body.removeChild(element)
  }
}

export { createContainer, removeContainer }
