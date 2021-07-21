// ************************* carousel slides ********************************
var slideIndex = [1, 1];
showSlides(1, 0);

function carousel(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var x = document.getElementsByClassName("slides");

  if (n > x.length) {
    slideIndex[no] = 1
  }

  if (n < 1) {
    slideIndex[no] = x.length
  }

  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex[no] - 1].style.display = "block";
}









var movieTitle;
var currentGenre = "Genre";
var slideIndex = [1, 1];
showSlides(1, 0);

function carousel(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var x = document.getElementsByClassName("slides");

  if (n > x.length) {
    slideIndex[no] = 1
  }

  if (n < 1) {
    slideIndex[no] = x.length
  }

  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex[no] - 1].style.display = "block";
}

function noResult(totalcount) {

  if (totalcount == 0) {
    document.getElementById("no-results").style.display = "block";
    console.log('totalcount in noResult' + totalcount);
  } else {
    document.getElementById("no-results").style.display = "none";
  }

}


function updateResults() {
  var query = document.getElementsByClassName('search-query')[0].value.trim().toLowerCase();
  var counter = 0;

  if (currentGenre == 'All' || currentGenre == 'Genre') {
    movieTitle = document.getElementsByClassName('movie-title');
  }
  if (currentGenre == 'Action') {
    movieTitle = document.getElementsByClassName('movies-action')[0].getElementsByClassName('movie-title');
  }
  if (currentGenre == 'Drama') {
    movieTitle = document.getElementsByClassName('movies-drama')[0].getElementsByClassName('movie-title');
  }
  if (currentGenre == 'Sci-Fi') {
    movieTitle = document.getElementsByClassName('movies-scifi')[0].getElementsByClassName('movie-title');
  }


  for (var name = 0; name < movieTitle.length; name++) {
    var compareMovieTitles = movieTitle[name].innerHTML.toLowerCase();

    if (compareMovieTitles.indexOf(query) === -1) {
      movieTitle[name].closest('div.movie').style.display = "none";
    } else {
      movieTitle[name].closest('div.movie').style.display = "inline-block";
      counter++;
    }
  }

  noResult(counter);
}

/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function genreChange() {
  document.getElementById("dropdown-content").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {

  if (!e.target.matches('#dropbtn')) {

    var dropdownContent = document.getElementById("dropdown-content");

    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
}


function getMediaPosters(selectedGenre) {
  var countMovies = 0;
  var movie;
  currentGenre = selectedGenre;
  //changing text in the dropdown depending on the genre selected
  document.getElementById("genreText").innerHTML = selectedGenre;

  if (selectedGenre == 'All') {
    document.getElementsByClassName('movies-action')[0].style.display = "inline";
    document.getElementsByClassName('movies-action')[0].style.display = "inline";
    document.getElementsByClassName('movies-drama')[0].style.display = "inline";
    document.getElementsByClassName('movies-scifi')[0].style.display = "inline";
    movie = document.getElementsByClassName("movies-list");
  }
  if (selectedGenre == 'Action') {
    document.getElementsByClassName('movies-action')[0].style.display = "inline";
    document.getElementsByClassName('movies-drama')[0].style.display = "none";
    document.getElementsByClassName('movies-scifi')[0].style.display = "none";
    movie = document.getElementsByClassName('movies-action')[0].getElementsByClassName("movies-list");
  }
  if (selectedGenre == 'Drama') {
    document.getElementsByClassName('movies-action')[0].style.display = "none";
    document.getElementsByClassName('movies-drama')[0].style.display = "inline";
    document.getElementsByClassName('movies-scifi')[0].style.display = "none";
    movie = document.getElementsByClassName('movies-drama')[0].getElementsByClassName("movies-list");
  }
  if (selectedGenre == 'Sci-Fi') {
    document.getElementsByClassName('movies-action')[0].style.display = "none";
    document.getElementsByClassName('movies-drama')[0].style.display = "none";
    document.getElementsByClassName('movies-scifi')[0].style.display = "inline";
    movie = document.getElementsByClassName('movies-scifi')[0].getElementsByClassName("movies-list");
  }


  var movieCount = movie.length;

  for (var count = 0; count < movieCount; count++) {
    if (movie[count].style.display == "block")
      countMovies++;
  }

  noResult(countMovies);
}
