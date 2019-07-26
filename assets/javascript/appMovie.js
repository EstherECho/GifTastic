  
  // Initial array of movies
  var topics = [ ];

  // displayMovieInfo function re-renders the HTML to display the appropriate content
  function displayGiphInfo() {
  // var giph = $(this).attr("data-name");
  var queryURL ="https://api.giphy.com/v1/gifs/search?api_key=aEmDt5ON9DgG82JWzhfw0vorSP9zWX0h&q=people&limit=10&offset=0&rating=G&lang=en";
    
  // Creates AJAX call for the specific person button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
  .then(function(response) {
    // Creates a div to hold the movie
    // var display= $("<div>")
    // Retrieves the Rating Data
    var giphsReturned= [response.data];
        
    for (i=0; i<giphsReturned.length; i++) {
      var giphDiv = $("<div>");
      var giphTitle= response.data[i].title;
      var giphUrl = response.data[i].url;
      giphUrl.attr("src", giphUrl);
      var giphRating= response.data[i].rating;
      var p = $("<p>").text(giphTitle + "Rating: " + giphRating);
      var image = $("<img>");
      giphDiv.prepend(p);
      giphDiv.prepend(image);
      $("#giph-view").prepend(giphDiv);
      $(document).on("click", ".giph", giphDiv);
  }

})}

$("#add-giph").on("click", function(event) {
  event.preventDefault();
  // This line of code will grab the input from the textbox
  var giphsToAdd = $("#giph-input").val().trim();

  // The movie from the textbox is then added to our array
  giphsToAdd.push(topics);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();
});



// Calling the renderButtons function to display the intial buttons

// renderButtons();