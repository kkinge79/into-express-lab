
const greatestMovies = [
  {text: 'Gremlins 2', year: 1990, ratings: '⭐️⭐️⭐️'},
  {text: 'Shrek 3', year: 2007, ratings: '⭐️⭐️⭐️⭐️'},
  {text: 'Dude wheres my car', year: 2000, ratings: '⭐️⭐️'},
  {text: 'Midsommar', year: 2019, ratings: '⭐️⭐️⭐️⭐️'},
  {text: 'Matrix', year: 1999, ratings: '⭐️⭐️⭐️⭐️'},
  {text: 'Flubber', year: 1997, ratings: '⭐️⭐️⭐️⭐️⭐️'},
  {text: 'A Night at the Roxbury', year: 1998, ratings: '⭐️⭐️⭐️⭐️'},
  {text: 'Shrek 2', year: 2004, ratings: '⭐️⭐️⭐️⭐️⭐️'},
  {text: 'Lord of the Rings: Twin Towers', year: 2002, ratings: '⭐️⭐️⭐️⭐️⭐️'},
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, greatestMovies)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}