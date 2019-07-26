// Function for displaying movie data
function renderButtons() {
    // Deletes the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#giph-input").empty();
    // Loops through the array of movies
    for (var i = 0; i < topics.length; i++) {
      // Then dynamicaly generates buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adds a class of movie to our button
      a.addClass("giph");
      // Added a data-attribute
      a.attr("data-name", topics[i]);
      // Provided the initial button text
      a.text(topics[i]);
      // Added the button to the buttons-view div
      $("#buttons-view").append(a);
    }
  }

  // This function handles events where the add movie button is clicked
  $("#add-giph").on("click", function(event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var giphstoAdd = $("#giph-input").val().trim();

    // The movie from the textbox is then added to our array
    giphstoAdd.push(topics);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Adding click event listeners to all elements with a class of "movie"
  $(document).on("click", ".giph", giphDiv)

  // Calling the renderButtons function to display the intial buttons

  renderButtons();









