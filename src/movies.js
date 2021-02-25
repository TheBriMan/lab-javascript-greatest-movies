// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
    let allDirectors = movies.map(movie => movie.director);
    return allDirectors;
  }
  
  //getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    const spielbergDramaMovies = movies.filter(movie => movie.director == "Steven Spielberg" && movie.genre.includes("Drama"));
    return spielbergDramaMovies.length;
    }
    
    //howManyMovies(movies).length

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    let movieRatings = movies.reduce(function(sum, movie) {
      return sum + movie.rate
    }, 0);
    let avgRatings = movieRatings/array.length;
    return avgRatings;
  }
  
  //ratesAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));

function dramaMoviesRate(array) {
    let dramaRatings = dramaMovies.reduce(function(sum, movie) {
      return sum + movie.rate
    }, 0);
    let avgDramaRatings = dramaRatings/array.length;
    return avgDramaRatings;
  }
  
  //dramaMoviesRate(dramaMovies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    return array.sort(function(a, b) {
      if (a.year < b.year) return -1;
      if (a.year > b.year) return 1;
      if (a.year === b.year) return 0;
      }) ;
  }
  
  //orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    return array.sort(function(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      if (a.title === b.title) return 0;
      }) ;
  }
  
  //orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
