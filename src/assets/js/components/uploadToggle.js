var upload1 = document.querySelector("#upload-1");
var upload1 = document.querySelector("#upload-2");
var upload1 = document.querySelector("#upload-3");

var crop = document.querySelector("input[name='crop']");
var fill = document.querySelector("input[name='fill']");
var contrast = document.querySelector("input[name='contrast']");

upload1.addEventListener("checked", function() {
        crop.style.display = "block";
        fill.style.display = "none";
        contrast.style.display = "none";  
});

upload2.addEventListener("checked", function() {
        fill.style.display = "block";
        crop.style.display = "none";
        contrast.style.display = "none";  
});

upload3.addEventListener("checked", function() {
        contrast.style.display = "block";
        fill.style.display = "none";
        crop.style.display = "none";
});