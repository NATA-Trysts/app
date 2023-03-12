const createContainer = () => {
  const portalId = 'pricingContainer'
  let element = document.getElementById(portalId)

  if (element) {
    return element
  }

  element = document.createElement('div')
  element.setAttribute('id', portalId)
  element.style.position = 'fixed'
  element.style.top = '0'
  element.style.left = '0'
  element.style.width = '100%'
  element.style.backgroundColor = 'red'
  element.style.zIndex = '2147483646' // smaller than notification container
  document.body.appendChild(element)

  return element
}

export { createContainer }
