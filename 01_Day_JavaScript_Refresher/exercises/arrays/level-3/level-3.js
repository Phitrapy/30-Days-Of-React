const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log('1)')
const agesA = [...ages]
agesA.sort()
console.log(agesA);
console.log('min : ' + agesA[0]);
console.log('max : ' + agesA[agesA.length - 1]);

let median;
const agesA_disctinct = [... agesA].filter((val, ind, self) => self.indexOf(val) === ind);
if (agesA_disctinct.length % 2 === 0) {
  const vA = agesA_disctinct[(agesA_disctinct.length)/2 - 1]
  const vB = agesA_disctinct[(agesA_disctinct.length)/2];
  median = (vA + vB) /2
} else {
  median = agesA[(agesA.length-1)/2];
}
console.log('median : ' + median);

console.log('Second 1) (?)')
console.log(countries.slice(0, Math.min(countries.length, 10)))

console.log('2)')
let middleCountry = []
if (countries.length % 2 === 0 && countries.length > 0) {
  middleCountry.push(countries[(countries.length)/2 - 1]);
  middleCountry.push(countries[(countries.length)/2]);
} else {
  middleCountry.push(countries[(countries.length-1)/2]);
}
console.log('middleCountry : ' + middleCountry)

console.log('3)')
const offset = countries.length%2 === 0 ? 0 : 1
let arrayA = [...countries].slice(0, (countries.length)/2 + offset )
let arrayB = [...countries].slice((countries.length)/2 + offset, countries.length)
console.log(arrayA)
console.log(arrayB)




