$(document).ready(function () {
  // Set the interval variable
  var interval;

  // Define a function to start the slider
  function startSlider() {
    // Set the interval to move the slider every 3 seconds
    interval = setInterval(function () {
      // Animate the slider to the left by 600px
      $("#slider ul").animate({ left: "-=600px" }, 1000, function () {
        // Move the first list item to the end of the list
        $("#slider li:first").appendTo("#slider ul");
        // Reset the left position to 0
        $("#slider ul").css("left", 0);
      });
    }, 3000);
  }

  // Define a function to stop the slider
  function stopSlider() {
    // Clear the interval
    clearInterval(interval);
  }

  // Start the slider when the document is ready
  startSlider();

  // Stop the slider when the stop button is clicked
  $("#stop").click(function () {
    stopSlider();
  });

  // Stop the slider when the mouse enters the slider
  $("#slider").mouseenter(function () {
    stopSlider();
  });

  // Start the slider when the mouse leaves the slider
  $("#slider").mouseleave(function () {
    startSlider();
  });
});
