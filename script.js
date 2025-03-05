function playPresentation(videoId) {
    let video = document.getElementById(videoId);

    
    video.style.display = "block";
    video.play();

    
    video.onended = function () {
        video.style.display = "none";
    };

    
    document.addEventListener("keydown", function (event) {
        if (event.key === ">") {
            video.currentTime += 4; 
        }
        if (event.key === "<") {
            video.currentTime -= 4; 
        }
        if (event.key === "Escape") {
            video.pause();
            video.style.display = "none"; 
        }
    });
}
