(function(){
/* This is the JavaScript. First, I added constants to establish variables.*/ 
    const overlay = document.querySelector(".overlay");
    const closeButton = document.querySelector(".close-button");
    const openButton = document.querySelector(".overlay_button");
    const cdImage = document.querySelector(".cd-image");
    const notes = document.querySelectorAll(".note");
    const audio = document.querySelector("#album-song");

    const area1 = document.querySelector('#area1');
    const area2 = document.querySelector('#area2');
    const area3 = document.querySelector('#area3');
    const area4 = document.querySelector('#area4');
    const area5 = document.querySelector('#area5');
    const area6 = document.querySelector('#area6');
    const area7 = document.querySelector('#area7');
    const area8 = document.querySelector('#area8');
    const area9 = document.querySelector('#area9');
    
// This adds mouseover event listeners to the areas. When the user hovers over an area, it will log a message to the console indicating which area is being hovered over. This can be useful for debugging or for adding interactivity to the webpage.
    area1.addEventListener('mouseover', function(){
        console.log('mouseover area1');
    });
    area2.addEventListener('mouseover', function(){
        console.log('mouseover area2');
    });
    area3.addEventListener('mouseover', function(){
        console.log('mouseover area3');
    });
    area4.addEventListener('mouseover', function(){
        console.log('mouseover area4');
    });
    area5.addEventListener('mouseover', function(){
        console.log('mouseover area5');
    });
    area6.addEventListener('mouseover', function(){
        console.log('mouseover area6');
    });
    area7.addEventListener('mouseover', function(){
        console.log('mouseover area7');
    });
    area8.addEventListener('mouseover', function(){
        console.log('mouseover area8');
    });
    area9.addEventListener('mouseover', function(){
        console.log('mouseover area9');
    });

    /* This opens the overlay */
    openButton.addEventListener("click", function() {
        notes.forEach(note => { 
            note.classList.remove("active");
        });
        overlay.classList.add("show");

        /* Restart slide animation */
        cdImage.classList.remove("slide-out");
        void cdImage.offsetWidth;
        cdImage.classList.add("slide-out");
    });

    /* This closes the overlay */
    closeButton.addEventListener("click", function() {
        overlay.classList.remove("show");

        audio.pause();
        audio.currentTime = 0;
        cdImage.classList.remove("spinning");
        notes.forEach(note => {
            note.classList.remove("active");
        });
    });

    /* CLICK CD */
    cdImage.addEventListener("click", function() {
    audio.play();
    notes.forEach(note => {
        note.classList.add("active");
    });

    cdImage.classList.remove("slide-out");
    cdImage.classList.add("spinning");
});

    /* STOP spinning when audio ends */
 audio.addEventListener("ended", function() {

    cdImage.classList.remove("spinning");
    cdImage.style.transform = "translateX(160px)";
    notes.forEach(note => {
        note.classList.remove("active");
    });

});
})();