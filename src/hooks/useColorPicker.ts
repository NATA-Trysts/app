export const useColorPicker = () => {
  const applyPatternToString = (colorInput: string) => {
    // if hex has #, remove it
    if (colorInput[0] === '#') {
      colorInput = colorInput.slice(1)
    }

    if (colorInput.length === 3) {
      return colorInput
        .split('')
        .map((char) => char + char)
        .join('')
    }

    return colorInput
  }

  const checkValidHex = (colorInput: string) => {
    if (colorInput[0] === '#') {
      colorInput = colorInput.slice(1)
    }

    const hexRegex = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

    return hexRegex.test(colorInput)
  }

  const formatHex = (colorInput: string) => {
    // if hex does not include #, add it
    if (colorInput[0] !== '#') {
      colorInput = '#' + colorInput
    }

    return colorInput
  }

  return {
    applyPatternToString,
    checkValidHex,
    formatHex,
  }
}
