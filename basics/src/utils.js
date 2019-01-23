const printName = (name = 'stranger') => {
  const greeting = 'Hello'
  const isType = typeof name === 'string'
  if (isType) {
    console.log(`${name} is valid name, say ${greeting}`)
  } else {
    console.log(`${name} is invalid!`)
  }
}

module.exports = {
  printName,
}
