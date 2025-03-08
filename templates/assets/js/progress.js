// Store locations and their found status
const huntLocations = [
    {id: "location1", name: "Tillman Hall", found: false},
    {id: "location2", name: "Death Valley Stadium", found: false},
    {id: "location3", name: "Hendrix Student Center", found: false},
    {id: "location4", name: "Fort Hill", found: false},
    {id: "location5", name: "Cooper Library", found: false}
  ];
  
  // Function to toggle a location as found/not found when clicked
  function toggleLocation(locationId) {
    // Find the location in our array
    const location = huntLocations.find(loc => loc.id === locationId);
    
    if (location) {
      // Toggle the found status
      location.found = !location.found;
      
      // Update the display
      const locationElement = document.getElementById(locationId);
      
      if (location.found) {
        locationElement.innerHTML = "✅ " + location.name;
        locationElement.style.backgroundColor = "#E0F7E0";
      } else {
        locationElement.innerHTML = "🔒 " + location.name;
        locationElement.style.backgroundColor = "#f9f9f9";
      }
      
      // Update progress bar
      updateProgress();
    }
  }
  
  // Function to update the progress bar
  function updateProgress() {
    const foundCount = huntLocations.filter(loc => loc.found).length;
    const percentage = (foundCount / huntLocations.length) * 100;
    
    document.getElementById("hunt-progress").style.width = percentage + "%";
    document.getElementById("hunt-progress").innerHTML = foundCount + "/" + huntLocations.length;
    
    if (foundCount === huntLocations.length) {
      alert("Congratulations! You've completed the scavenger hunt!");
    }
  }
  
  // Initialize click handlers for locations when the document is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Set initial names for locations
    for (const location of huntLocations) {
      const element = document.getElementById(location.id);
      if (element) {
        element.innerHTML = "🔒 " + location.name;
        
        // Add click handler
        element.style.cursor = "pointer";
        element.addEventListener('click', function() {
          toggleLocation(location.id);
        });
      }
    }
  });