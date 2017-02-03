import R from 'ramda'

const move = R.curry((oldIndex, newIndex, _arr) => {
  const arr = [..._arr]
  const length = arr.length
  if (newIndex >= length) return arr

  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0])
  return arr
})

export default move

