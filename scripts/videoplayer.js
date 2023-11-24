$(document).ready(function () {
    // Handle navigation link clicks
    $("#trailerLink").click(function (event) {
        // Prevent default link behavior
        event.preventDefault();

        // Change video source to the trailer
        $("#videoSource").attr("src", "trailer.mp4");
        // Reload the video player
        $("#animePlayer")[0].load();
        // Update active link
        $("#trailerLink").addClass("active");
        $("#seriesLink").removeClass("active");
    });

    $("#seriesLink").click(function (event) {
        // Prevent default link behavior
        event.preventDefault();

        // Change video source to the series
        $("#videoSource").attr("src", "your-anime-video.mp4");
        // Reload the video player
        $("#animePlayer")[0].load();
        // Update active link
        $("#seriesLink").addClass("active");
        $("#trailerLink").removeClass("active");
    });
});


function handleRating(animeId, userRatingElement, ratingModalId) {
    // Load user rating from local storage
    var userRating = localStorage.getItem(animeId + "UserRating");
    if (userRating) {
        $(userRatingElement).text(userRating + " stars");
    }

    // Handle rating stars hover
    $(ratingModalId + " .rating .star").hover(
        function () {
            $(this).addClass("animated");
        },
        function () {
            $(this).removeClass("animated");
        }
    );

    // Handle rating stars click
    $(ratingModalId + " .rating .star").click(function () {
        var rating = $(this).data("rating");

        // Save rating to local storage
        localStorage.setItem(animeId + "UserRating", rating);

        // Update the displayed rating
        $(userRatingElement).text(rating + " stars");

        // Close the modal
        $(ratingModalId).modal("hide");

        // Play a sound (you can replace the sound path)
        var audio = new Audio("media/sound.mp3");
        audio.play();
    });
}

// Call the function for each anime
handleRating("boruto", "#borutoUserRating", "#borutoRatingModal");
handleRating("aot", "#aotUserRating", "#aotRatingModal");
handleRating("mha", "#mhaUserRating", "#mhaRatingModal");
handleRating("onePiece", "#onePieceUserRating", "#onePieceRatingModal");