let toggle = false;

        document.getElementById("moveButton").addEventListener("click", function() {
            const movableDiv = document.getElementById("floating-card");
            if (toggle) {
                // Set to initial position
                // movableDiv.style.top = "50px";
                movableDiv.style.left = "-300px";
            } else {
                // Set to new position
                // movableDiv.style.top = "200px";
                movableDiv.style.left = "0px";
            }
            // Toggle the state
            toggle = !toggle;
        });