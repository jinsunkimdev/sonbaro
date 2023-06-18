if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        fetch('/restaurants/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ lat, lon }),
        });
    });
} else {
    console.log("Geolocation is not available in this browser");
}
