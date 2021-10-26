
const greatestMovies = [
  {text: 'Gremlins 2', greatestMovies: true, _id: 125223},
  {text: 'Shrek 3', greatistMovies: false, _id: 127904},
  {text: 'Dude wheres my car', greatestMovies: false, _id: 139608},
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