      // Retrieves the release date
      // Creates an element to hold the release year
      var releaseReturned=$("<div>");
      // Displays the release year
      releaseReturned.text("Release date: " + response.Released);
      $("#giph-view").prepend(releaseReturned);
      // Retrieves the plot
      // Creates an element to hold the plot
      var plotReturned=$("<p>");
      // Appends the plot
      plotReturned.text(response.Plot);
      $("#giph-view").prepend(plotReturned);
      // Puts the entire Movie above the previous movies.
      var ratedReturned=$("<div>");
      ratedReturned.text("Rated: "+ response.Rated);
      $("#giph-view").prepend(ratedReturned);

      var posterReturned=$("<img>");
      posterReturned.attr("src", response.Poster);
      $("#giph-view").prepend(posterReturned);

      var titleReturned=$("<h1>");
      titleReturned.text(response.Title);
      $("#giph-view").prepend(titleReturned);

      var insertBreak=$("<br><hr>")
      $("#giph-view").prepend(insertBreak);

      var awardsReturned=$("<div>");
      awardsReturned.text("Awards: " + response.Awards);
      $("#giph-view").prepend(awardsReturned);

      var actorsReturned=$("<div>");
      actorsReturned.text("Actors: " + response.Actors);
      $("#giph-view").prepend(actorsReturned);

      var directorReturned=$("<div>");
      directorReturned.text("Director: " + response.Director);
      $("#giph-view").prepend(directorReturned);

      var genreReturned=$("<div>");
      genreReturned.text("Genre: " + response.Genre);
      $("#giph-view").prepend(genreReturned);
    });


// pausing giphs
<script type="text/javascript">
$(".gif").on("click", function() {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});
</script>


// button-triggered AJAX
<script type="text/javascript">
$("button").on("click", function() {
  var person = $(this).attr("data-person");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(personImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
});


{/* // magical cat button
// // Event listener for our cat-button */}
$("#cat-button").on("click", function() {

  // Storing our giphy API URL for a random cat image
  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats";

  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  // After the data from the AJAX request comes back
  .then(function(response) {

  // Saving the image_original_url property
  var imageUrl = response.data.image_original_url;

  // Creating and storing an image tag
  var catImage = $("<img>");

  // Setting the catImage src attribute to imageUrl
  catImage.attr("src", imageUrl);
  catImage.attr("alt", "cat image");

      // Prepending the catImage to the images div
      $("#images").prepend(catImage);
    });
})
