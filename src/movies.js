// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
    let allDirectors = array.map(movie => movie.director);
    return allDirectors;
  }
  
  //getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    const spielbergDramaMovies = movies.filter(movie => movie.director == "Steven Spielberg" && movie.genre.includes("Drama"));
    return spielbergDramaMovies.length;
    }
    
    //howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (movies.length === 0) {
        return 0;
    } else {
    let movieRatings = array.reduce(function(sum, movie) {
        if ( movie.rate === "" || movie.rate === undefined) {
            return sum;
        }
        return sum + movie.rate
    }, 0);
    let avgRatings = movieRatings/array.length;
    return parseFloat(avgRatings.toFixed(2));
  }
}

  //ratesAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));

function dramaMoviesRate(array) {
    let dramaRatings = dramaMovies.reduce(function(sum, movie) {
      return sum + movie.rate
    }, 0);
    let avgDramaRatings = dramaRatings/array.length;
    return parseFloat(avgDramaRatings.toFixed(2));
  }
  
  //dramaMoviesRate(dramaMovies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    const newArray = movies.map((movie) => movie);
    return newArray.sort(function(a, b) {
      if (a.year - b.year) return -1;
      if (a.year > b.year) return 1;
      if (a.year === b.year) return 0;
      }) ;
  }
  
  //orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    const newArray = movies.map((movie) => movie);
    return newArray.sort(function(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      if (a.title === b.title) return 0;
      }) ;
  }
  
  //orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
