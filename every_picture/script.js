(function(){
/* This is the JavaScript. First, I added constants to establish variables.*/ 
    const overlay1 = document.querySelector("#nfr_melt");
    const overlay2 = document.querySelector("#lynlapid_buzzkill");
    const closeButton = document.querySelector(".close-button");
    const openButton = document.querySelector(".overlay_button");
    const cdImage = document.querySelector(".cd-image");
    const notes = document.querySelectorAll(".note");
    const audio = document.querySelector("#album-song");

    const audio2 = overlay2.querySelector("#album-song");
    const cdImage2 = overlay2.querySelector(".cd-image");

    const area1 = document.querySelector('#area1');
    const area2 = document.querySelector('#area2');
    const area3 = document.querySelector('#area3');
    const area4 = document.querySelector('#area4');
    const area5 = document.querySelector('#area5');
    const area6 = document.querySelector('#area6');
    const area7 = document.querySelector('#area7');
    const area8 = document.querySelector('#area8');
    const area9 = document.querySelector('#area9');
    const selector = document.querySelector('.selector');

    // This is the section where users hover and it glows the CD

     area1.addEventListener('mouseover', function(){
        console.log('mouseover area1');
        area1.style.cursor = "pointer";
        selector.innerHTML = "<p>Melt - Not For Radio</p>";
    });
     area1.addEventListener('mouseout', function(){
        area1.style.cursor = "default";
        selector.innerHTML= "<p></p>"
    });
    area2.addEventListener('mouseover', function(){
        console.log('mouseover area2');
        area2.style.cursor = "pointer";
        selector.innerHTML = "<p>Buzzkill - Lyn Lapid</p>";
    });
     area2.addEventListener('mouseout', function(){
        area2.style.cursor = "default";
        selector.innerHTML= "<p></p>"
    });
    area3.addEventListener('mouseover', function(){
        console.log('mouseover area3');
        area3.style.cursor = "pointer";
        selector.innerHTML = "<p>Flower of the Soul - Liana Flores</p>";

    });
     area3.addEventListener('mouseout', function(){
        area3.style.cursor = "default";
        selector.innerHTML= "<p></p>"

    });
    area4.addEventListener('mouseover', function(){
        console.log('mouseover area4');
        area4.style.cursor="pointer";
        selector.innerHTML = "<p>Lamp Gensou - Lamp</p>";
    });
    area4.addEventListener('mouseout', function(){
        area4.style.cursor = "default";
        selector.innerHTML= "<p></p>"

    });

    area5.addEventListener('mouseover', function(){
        console.log('mouseover area5');
        area5.style.cursor="pointer";
        selector.innerHTML = "<p>Origami - Ichiko Aoba</p>";
        
    });
    area5.addEventListener('mouseout', function(){
        area5.style.cursor = "default";
        selector.innerHTML= "<p></p>"

    });

    area6.addEventListener('mouseover', function(){
        console.log('mouseover area6');
        area6.style.cursor = "pointer";
        selector.innerHTML = "<p>For Lovers - Lamp</p>";
    });
    area6.addEventListener('mouseout', function(){
        area6.style.cursor="default";
        selector.innerHTML= "<p></p>"
    });

    area7.addEventListener('mouseover', function(){
        console.log('mouseover area7');
        area7.style.cursor = "pointer";
        selector.innerHTML = "<p>Bewitched - Laufey (Japanese CD)</p>";
    });
    area7.addEventListener('mouseout', function(){
        area7.style.cursor = "default";
        selector.innerHTML= "<p></p>"

    })
    area8.addEventListener('mouseover', function(){
        console.log('mouseover area8');
        area8.style.cursor = "pointer";
        selector.innerHTML = "<p>A Matter of Time - Laufey</p>";
    });
    area8.addEventListener('mouseout', function(){
        area8.style.cursor="default";
        selector.innerHTML= "<p></p>"

    });
     area9.addEventListener('mouseover', function(){
        console.log('mouseover area8');
        area9.style.cursor = "pointer";
        selector.innerHTML = "<p>Everything I Know About Love - Laufey</p>";
    });
    area9.addEventListener('mouseout', function(){
        area9.style.cursor="default";
        selector.innerHTML= "<p></p>"

    });

area1.addEventListener('click', function(){

    notes.forEach(note => { 
        note.classList.remove("active");
    });

    overlay1.classList.add("show");

    cdImage.classList.remove("slide-out");
    void cdImage.offsetWidth;
    cdImage.classList.add("slide-out");

    const albumcard = overlay1.querySelector(".album-card");

    overlay1.style.backgroundColor = "rgba(3, 36, 24, 0.8)";
    albumcard.style.backgroundColor = "#f8f8f2";

    notes.forEach(note => {
        note.style.color = "#062e08";
    });
});

area2.addEventListener('click', function(){

    notes.forEach(note => { 
        note.classList.remove("active");
    });

    overlay2.classList.add("show");

    cdImage.classList.remove("slide-out");
    void cdImage.offsetWidth;
    cdImage.classList.add("slide-out");

    const albumcard = overlay2.querySelector(".album-card");

    overlay2.style.backgroundColor = "rgba(91, 10, 10, 0.8)";
    albumcard.style.backgroundColor = "#e0deee";

    notes.forEach(note => {
        note.style.color = "#a41818";
    });
});

    /* This opens the overlay */

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
