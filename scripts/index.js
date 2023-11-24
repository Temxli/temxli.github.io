// Use jQuery to add a mouseover event listener
$('#changeText').on('mouseover', function () {
    // Change the text content when the mouse is over the element
    $(this).text('Text changed!');
});

// Use jQuery to add a mouseout event listener
$('#changeText').on('mouseout', function () {
    // Revert the text content when the mouse is not over the element
    $(this).text('Hover over me');
});

// Array of image URLs
var imageArray = [
    { normal: 'media/gatemedia.png', hover: 'media/gatemedia-hover.png' },
    { normal: 'media/gatemedia2.png', hover: 'media/gatemedia2-hover.png' },
    { normal: 'media/gatemedia3.png', hover: 'media/gatemedia3-hover.png' },
    { normal: 'media/gatemedia4.png', hover: 'media/gatemedia4-hover.png' },
    { normal: 'media/gatemedia5.png', hover: 'media/gatemedia5-hover.png' },

    // Add more image objects as needed
];

// Function to get a random image URL
function getRandomImage() {
    var randomIndex = Math.floor(Math.random() * imageArray.length);
    return imageArray[randomIndex];
}

// Set the source of the image to a random image on page load
$(document).ready(function () {
    var randomImageObject = getRandomImage();
    $('#randomImage').attr('src', randomImageObject.normal);

    // Change the image on mouseover
    $('#randomImage').mouseover(function () {
        $(this).attr('src', randomImageObject.hover);
    });

    // Change the image back on mouseout
    $('#randomImage').mouseout(function () {
        $(this).attr('src', randomImageObject.normal);
    });
    $('#randomImage').click(function () {
        var clickSound = document.getElementById('clickSound');
        clickSound.play();
    });
});

$(document).ready(function () {
    // Function to filter anime cards based on search input
    function filterAnimeCards(searchTerm) {
        // Hide all anime cards
        $('.anime-card-container').hide();

        // Show anime cards that match the search term
        $('.anime-card-container:contains(' + searchTerm + ')').show();
    }

    // Event listener for search bar input
    $('input[type="search"]').on('input', function () {
        var searchTerm = $(this).val().toLowerCase();
        filterAnimeCards(searchTerm);
    });
});

// Custom jQuery selector for case-insensitive :contains
$.expr[":"].contains = $.expr.createPseudo(function (text) {
    return function (elem) {
        return $(elem).text().toLowerCase().indexOf(text) >= 0;
    };
});

// jQuery code to toggle light/dark mode
$(document).ready(function () {
    // Check for dark mode preference in local storage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Set initial mode based on preference
    if (isDarkMode) {
        $('body').addClass('dark-mode');
        $('#switch').prop('checked', true);
    }

    // Light/dark mode toggle change event
    $('#switch').change(function () {
        // Toggle dark mode class on body
        $('body').toggleClass('dark-mode');

        // Update dark mode preference in local storage
        const newMode = $('body').hasClass('dark-mode');
        localStorage.setItem('darkMode', newMode);
    });
});

// jQuery code to switch data-bs-theme attribute based on checkbox state
$(document).ready(function () {
    // Function to update the theme based on checkbox state
    function updateTheme() {
        var checkbox = $('#switch');
        var htmlElement = $('html');
        var themeImage = $('.theme-image');

        // Toggle between 'dark' and 'light' themes based on checkbox state
        if (checkbox.prop('checked')) {
            htmlElement.attr('data-bs-theme', 'dark');
            htmlElement.removeClass('light').addClass('dark');
            themeImage.hide();
            $('.theme-image.dark').show();
        } else {
            htmlElement.attr('data-bs-theme', 'light');
            htmlElement.removeClass('dark').addClass('light');
            themeImage.hide();
            $('.theme-image.light').show();
        }

        // Play a sound when the theme is switched (you can replace the sound path)
        var audio = new Audio("media/switch.mp3");
        audio.play();
    }

    // Initial setup
    updateTheme();

    // Attach the updateTheme function to the checkbox change event
    $('#switch').change(function () {
        updateTheme();
    });
});

$(document).ready(function () {
    // Handle form submission
    $("#commentForm").submit(function (event) {
        event.preventDefault();

        // Get user input
        var nickname = $("#nickname").val();
        var commentText = $("#comment").val();

        // Append comment to commentsList
        $("#commentsList").append(
            "<div class='card mt-3'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + nickname + "</h5>" +
            "<p class='card-text'>" + commentText + "</p>" +
            "</div>" +
            "</div>"
        );

        // Clear form fields
        $("#nickname").val("");
        $("#comment").val("");
    });
});

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))