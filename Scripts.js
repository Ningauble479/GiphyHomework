
var games = ["Overwatch", "Halo", "Starcraft2", "Mortal Kombat"];


function rendergames() {


    var game = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        game + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })

      //
      .then(function(response) {
      console.log(response)
      var results = response.data;
      $("#gifs").text("")

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var gameImage = $("<img>");
        gameImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(gameImage);

        $("#gifs").append(gifDiv);
      }
    });
};


function renderButtons() {


  $("#buttons").empty();

  for (var i = 0; i < games.length; i++) {


    var a = $("<button>");

    a.addClass("game");

    a.attr("data-name", games[i]);

    a.text(games[i]);

    $("#buttons").append(a);
  }
}
  

$("#add-button").on("click", function(event) {
  event.preventDefault();

  var game = $("#add-buttons").val().trim();


  games.push(game);


  renderButtons();
});


$(document).on("click", ".game", rendergames);


renderButtons();