const createContainer = () => {
  const portalId = 'keyboardContainer'
  let element = document.getElementById(portalId)

  if (element) {
    return element
  }

  element = document.createElement('div')
  element.setAttribute('id', portalId)
  element.style.position = 'fixed'
  element.style.top = '0'
  element.style.left = '0'
  document.body.appendChild(element)

  return element
}

const removeContainer = () => {
  const portalId = 'keyboardContainer'
  const element = document.getElementById(portalId)

  if (element) {
    document.body.removeChild(element)
  }
}

export { createContainer, removeContainer }
