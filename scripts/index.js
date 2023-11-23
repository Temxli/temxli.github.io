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