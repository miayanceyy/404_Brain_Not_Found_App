<script>
    function startTracking() {
        if (navigator.geolocation) {
            // Start tracking user location
            setInterval(() => {
                navigator.geolocation.getCurrentPosition(handleLocation);
            }, 5000); // Update every 5 seconds
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function handleLocation(position) {
        const data = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        };
        
        // Display coordinates on the page
        document.getElementById("coordinates").innerText = 
            `Current location: ${data.latitude.toFixed(6)}, ${data.longitude.toFixed(6)}`;
            
        // Check if user is near any points of interest
        checkNearbyLocations(data.latitude, data.longitude);
    }
    
    // Example points of interest (replace with actual Clemson locations)
    const pointsOfInterest = [
        {name: "Tillman Hall", lat: 34.6796, lng: -82.8371, radius: 50, message: "You've discovered Tillman Hall!"},
        {name: "Death Valley Stadium", lat: 34.6785, lng: -82.8417, radius: 100, message: "Welcome to Death Valley!"},
        // Add more Clemson locations
    ];
    
    function checkNearbyLocations(lat, lng) {
        for (const poi of pointsOfInterest) {
            const distance = calculateDistance(lat, lng, poi.lat, poi.lng);
            if (distance < poi.radius) {
                document.getElementById("output").innerHTML = 
                    `<strong>${poi.message}</strong><br>You are ${Math.round(distance)} meters away.`;
                break;
            }
        }
    }
    
    // Calculate distance between two points in meters
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
</script>