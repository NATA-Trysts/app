const truncateText = (text: string | undefined, maxLength: number) => {
  if (text) return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text
  else return ''
}

export { truncateText }
