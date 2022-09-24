
function countApplesAndOranges(start, end, aTree, bTree, apples, banana) {
  let aCount = 0, bCount = 0
  for (let i = 0; i < apples.length; i++)
    if (apples[i] + aTree >= start && apples[i] + aTree <= end) aCount++
  for (let i = 0; i < banana.length; i++)
    if (banana[i] + bTree >= start && banana[i] + bTree <= end) bCount++
  return [aCount, bCount]

}
console.log(countApplesAndOranges(7, 12, 3, 15, [4, -2, 6, 2], [-6, -9, 2, -1]))
