<script>
        function startTracking() {
            if (navigator.geolocation) {
                setInterval(() => {
                    navigator.geolocation.getCurrentPosition(sendLocation);
                }, 5000); // Update every 5 seconds
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }

        function sendLocation(position) {
            const data = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };

            fetch("http://127.0.0.1:5000/send_location", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById("output").innerText = "AI Response: " + data.response;
            })
            .catch(error => console.error("Error:", error));
        }
    </script>