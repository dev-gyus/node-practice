// Helper to determine if a given match position is already inside a <mark>...</mark> block
function isInsideMark(str, startIndex, matchLength) {
  const before = str.slice(0, startIndex)
  const after = str.slice(startIndex + matchLength)

  const lastOpenBefore = before.lastIndexOf('<mark>')
  const lastCloseBefore = before.lastIndexOf('</mark>')

  // We're potentially inside if the most recent <mark> opens after the most recent </mark>
  const openedAndNotClosedBefore = lastOpenBefore !== -1 && lastOpenBefore > lastCloseBefore

  if (!openedAndNotClosedBefore) return false

  // Ensure there is a closing </mark> after the match and it appears before any subsequent <mark>
  const nextCloseAfter = after.indexOf('</mark>')
  const nextOpenAfter = after.indexOf('<mark>')

  return nextCloseAfter !== -1 && (nextOpenAfter === -1 || nextCloseAfter < nextOpenAfter)

}

// let a = "the allias replace to somewhere big test like new allias some replace"
// const targetList = ['replace', 'allias', 'replace']
// targetList.forEach(target => {
//   const regEx = new RegExp(target, 'g')
//   let hasMatched = false
//   a = a.replace(regEx, (match, offset, string) => {
//     if (hasMatched) return match
//     const inside = isInsideMark(string, offset, match.length)
//     console.log(`match=${match} / origin = ${string} / offset=${offset} / insideMark=${inside}`)
//     if (inside) return match
//     hasMatched = true
//     return `<mark>${match}</mark>`
//   })
//   console.log(a)
// })


let b = "the allias replace to somewhere big test like new allias some replace"
const targetList2 = ['replace', 'allias', 'replace']
const regEx = new RegExp(targetList2.join('|'), 'g')
// let hasMatched = false
b = b.replace(regEx, (match, offset, string) => {
  // if (hasMatched) return match
  const inside = isInsideMark(string, offset, match.length)
  console.log(`match=${match} / origin = ${string} / offset=${offset} / insideMark=${inside}`)
  if (inside) return match
  // hasMatched = true
  return `<mark>${match}</mark>`
})
console.log(b)
