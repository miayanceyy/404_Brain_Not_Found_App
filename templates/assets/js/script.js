// Get reference to the paragraph where we'll display coordinates
const x = document.getElementById("demo");

// Function called when the "Try It" button is clicked
function getLocation() {
  // Show a message while we're fetching the location
  x.innerHTML = "Fetching your location...";
  
  // Check if geolocation is supported by the browser
  if (navigator.geolocation) {
    // If supported, get the current position
    navigator.geolocation.getCurrentPosition(showPosition, handleError);
  } else {
    // If not supported, show an error message
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// Function to display the position once it's retrieved
function showPosition(position) {
  // Display the latitude and longitude in the demo paragraph
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

// Function to handle any errors that occur during geolocation
function handleError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    default:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}