const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

// 1)
const a = []

// 2)
const b = [0, 1, 2, 3, 4, 5, 6]

// 3)
const bLength = b.length

// 4)
const [bFirst, bMiddle, bLast] = [b[0], b[(b.length-1)/2], b[b.length-1]]
console.log([bFirst, bMiddle, bLast])

// 5)
const mixedDataTypes = [1, '1', true, ['oh', 'my', 'gosh'], 'the end']
console.log(mixedDataTypes.length)

// 6)
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7)
console.log(itCompanies)

// 8)
console.log(itCompanies.length)

// 9)
console.log(itCompanies[0], itCompanies[(itCompanies.length-1)/2], itCompanies[itCompanies.length-1])

// 10)
itCompanies.forEach(c => console.log(c))

// 11)
console.log(itCompanies.map( c => c.toUpperCase()))

// 12)
console.log(itCompanies.join())

// 13)
console.log(itCompanies.indexOf('Facebook') !== -1 ? 'Facebook' : 'not found')

// 14)
const itCompaniesFiltered = []
itCompanies.forEach(c => {
  if(c.lastIndexOf('o') !== c.indexOf('o')) itCompaniesFiltered.push(c)
})
console.log('14) itCompaniesFiltered')
console.log(itCompaniesFiltered)

// 15)
console.log('15) sorted array')
const a15 = itCompanies
a15.sort()
console.log(a15)

// 16)
console.log('16)')
console.log(a15.reverse())

// 17)
console.log('17)')
const a17 = itCompanies
console.log(a17.slice(0, 3));

// 18)
console.log('18)')
const a18 = itCompanies
console.log(a18.slice(a18.length-4, a18.length-1))

// 19)
console.log('19)')
const a19 = itCompanies
console.log(a19.slice((a19.length-1)/2, (a19.length-1)/2 + 1))

// 20)
console.log('20)')
const a20 = itCompanies
console.log(a20);
a20.shift()
console.log(a20);

// 21)
console.log('21)')
let a21 = itCompanies
console.log(a21);
a21.splice((a21.length-1)/2, 1)
console.log(a21);

// 22)
console.log('22)')
const a22 = itCompanies
console.log(a22);
a22.pop()
console.log(a22);

// 23)
console.log('23)')
const a23 = itCompanies;
console.log(a23.splice());