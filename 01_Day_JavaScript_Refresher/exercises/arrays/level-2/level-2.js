console.log('1)')

console.log('2)')
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ');
console.log(words)
console.log(words.length)

console.log('3)')
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat')
if (!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar')
if (shoppingCart.includes('Honey')) shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
if (shoppingCart.includes('Tea')) shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)

console.log('4)')
countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('Ethiopia');

console.log('5)')
if (webTechs.includes('Sass')){
  console.log('Sass is a CSS preprocess')
} else {
  webTechs.push('Sass')
  console.log(webTechs)
}

console.log('6)')
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
console.log(backEnd.concat(frontEnd));

