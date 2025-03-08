// Add these location coordinates for Clemson landmarks
const huntLocations = [
    {id: "location1", name: "Tillman Hall", lat: 34.6796, lng: -82.8371, found: false},
    {id: "location2", name: "Death Valley Stadium", lat: 34.6785, lng: -82.8417, found: false},
    {id: "location3", name: "Hendrix Student Center", lat: 34.6755, lng: -82.8354, found: false},
    {id: "location4", name: "Fort Hill", lat: 34.6768, lng: -82.8376, found: false},
    {id: "location5", name: "Cooper Library", lat: 34.6772, lng: -82.8367, found: false}
  ];
  
  // Keep the existing getLocation and showPosition functions
  
  // Add this function to check for nearby locations
  function checkLocations(position) {
    const userLat = position.coords.latitude;
    const userLng = position.coords.longitude;
    let foundNew = false;
    
    for (let location of huntLocations) {
      if (!location.found) {
        const distance = calculateDistance(userLat, userLng, location.lat, location.lng);
        // If within 50 meters of a location
        if (distance < 50) {
          location.found = true;
          document.getElementById(location.id).innerHTML = "✅ " + location.name;
          document.getElementById(location.id).classList.add("found");
          updateProgress();
          foundNew = true;
        }
      }
    }
    
    if (foundNew) {
      // Play a sound or show notification
      alert("You found a new location!");
    }
  }
  
  // Calculate distance between points
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Earth radius in meters
    const φ1 = lat1 * Math.PI/180;
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;
  
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
    return R * c; // distance in meters
  }
  
  // Update the progress bar
  function updateProgress() {
    const foundCount = huntLocations.filter(loc => loc.found).length;
    const percentage = (foundCount / huntLocations.length) * 100;
    
    const progressBar = document.getElementById("hunt-progress");
    progressBar.style.width = percentage + "%";
    progressBar.innerHTML = foundCount + "/" + huntLocations.length;
    
    if (foundCount === huntLocations.length) {
      alert("Congratulations! You've completed the scavenger hunt!");
      // Could add additional rewards or completion actions here
    }
  }
  
  // Update the existing showPosition function to also check locations
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    
    // Also check if user is near any hunt locations
    checkLocations(position);
  }