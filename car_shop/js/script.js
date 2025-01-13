let selectedModel = null;
let selectedColor = null;
let selectedAccessories = [];
let basePrice = 193500;


$(document).ready(function () {
    $(".select-model").click(function () {
        const model = $(this).data("model");
        const price = $(this).data("price");
        const image = $(this).data("image");

        // Construct the URL for the car profile page
        const url = `car-profile.html?model=${encodeURIComponent(model)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}`;
        console.log("Opening URL:", url); // Debugging

        // Open the URL in a new tab
        window.open(url, "_blank");
    });
});
