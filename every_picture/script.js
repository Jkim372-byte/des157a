(function(){
/* This is the JavaScript. First, I added constants to establish variables.*/ 
    const overlay1 = document.querySelector("#nfr_melt");
    const overlay2 = document.querySelector("#lynlapid_buzzkill");
    const overlay3 = document.querySelector("#lianaflores_fots");
    const overlay4 = document.querySelector('#lamp_gensou');
    const overlay5 = document.querySelector('#ia_origami');
    const overlay9 = document.querySelector('#laufey_eikal');
    const overlay6 = document.querySelector('#lamp_fl');
    const overlay7 = document.querySelector('#laufey_bewitched');
    const overlay8 = document.querySelector('#laufey_amot');
    const photos = document.querySelectorAll('.cd-photo');

    const closeButtons = document.querySelectorAll(".close-button");
    const openButton = document.querySelector(".overlay_button");
    const cdImages = document.querySelectorAll(".cd-image");
    const notes = document.querySelectorAll(".note");
    const audios = document.querySelectorAll("audio");

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
        selector.innerHTML = "<p>Bewitched: Goddess Edition (Japanese CD)- Laufey</p>";
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
        console.log('mouseover area9');
        area9.style.cursor = "pointer";
        selector.innerHTML = "<p>Everything I Know About Love - Laufey</p>";
    });
    area9.addEventListener('mouseout', function(){
        area9.style.cursor="default";
        selector.innerHTML= "<p></p>"

    });

area1.addEventListener('click', function(){

    closeAllOverlays();
    notes.forEach(note => { 
        note.classList.remove("active");
    });

    overlay1.classList.add("show");

    cdImages.forEach(cdImage => {
        cdImage.classList.remove("slide-out");
        void cdImage.offsetWidth;
        cdImage.classList.add("slide-out");
    });

    const albumcard = overlay1.querySelector(".album-card");

    overlay1.style.backgroundColor = "rgba(3, 36, 24, 0.8)";
    albumcard.style.backgroundColor = "#f8f8f2";

    notes.forEach(note => {
        note.style.color = "#062e08";
    });
});

area2.addEventListener('click', function(){

    closeAllOverlays();
    notes.forEach(note => { 
        note.classList.remove("active");
    });

    overlay2.classList.add("show");

    cdImages.forEach(cd => {
        cd.classList.remove("slide-out");
        void cd.offsetWidth;
        cd.classList.add("slide-out");
    });

    animateOverlayPhoto(overlay2);

    const albumcard = overlay2.querySelector(".album-card");
    if (albumcard) {
        albumcard.style.width = "940px";
    }

    overlay2.style.backgroundColor = "rgba(158, 38, 38, 0.8)";
    albumcard.style.backgroundColor = "#e6e0f1";

    notes.forEach(note => {
        note.style.color = "#ab1a1a";
    });
});

area3.addEventListener('click', function(){
     closeAllOverlays();
    notes.forEach(note => { 
        note.classList.remove("active");
    });

    overlay3.classList.add("show");

    cdImages.forEach(cd => {
        cd.classList.remove("slide-out");
        void cd.offsetWidth;
        cd.classList.add("slide-out");
    });

    animateOverlayPhoto(overlay3);

    const albumcard = overlay3.querySelector(".album-card");
    if (albumcard) {
        albumcard.style.width = "940px";
    }

    overlay3.style.backgroundColor = "rgba(255, 174, 168, 0.8)";
    albumcard.style.backgroundColor = "#faf6f8";

    notes.forEach(note => {
        note.style.color = "#690c28";
    });
});

area4.addEventListener('click', function(){
     closeAllOverlays();
    notes.forEach(note => { 
        note.classList.remove("active");
    });

    overlay4.classList.add("show");

    cdImages.forEach(cd => {
        cd.classList.remove("slide-out");
        void cd.offsetWidth;
        cd.classList.add("slide-out");
    });

    animateOverlayPhoto(overlay4);
     const albumcard = overlay4.querySelector(".album-card");

    overlay4.style.backgroundColor = "rgba(166, 23, 13, 0.8)";
    albumcard.style.backgroundColor = "#efeada";

    notes.forEach(note => {
        note.style.color = "#b21414";
    });
});

area5.addEventListener('click', function(){
     closeAllOverlays();
    notes.forEach(note => { 
        note.classList.remove("active");
    });

    overlay5.classList.add("show");

    cdImages.forEach(cd => {
        cd.classList.remove("slide-out");
        void cd.offsetWidth;
        cd.classList.add("slide-out");
    });

    animateOverlayPhoto(overlay5);

    const albumcard = overlay5.querySelector(".album-card");



    overlay5.style.backgroundColor = "rgba(255, 227, 167, 0.8)";
    albumcard.style.backgroundColor = "rgb(250, 250, 244)";

    notes.forEach(note => {
        note.style.color = "#f2c50e";
    });
});

area9.addEventListener('click', function(){
     closeAllOverlays();
    notes.forEach(note => { 
        note.classList.remove("active");
    });

    overlay9.classList.add("show");

    cdImages.forEach(cd => {
        cd.classList.remove("slide-out");
        void cd.offsetWidth;
        cd.classList.add("slide-out");
    });

    animateOverlayPhoto(overlay9);

    const albumcard = overlay9.querySelector(".album-card");
    overlay9.style.backgroundColor = "rgba(139, 158, 81, 0.8)";
    albumcard.style.backgroundColor = "rgb(250, 250, 244)";

    notes.forEach(note => {
        note.style.color = "#0cd1d1";
    });
});

area6.addEventListener('click', function(){
     closeAllOverlays();
    notes.forEach(note => { 
        note.classList.remove("active");
    });

    overlay6.classList.add("show");

    cdImages.forEach(cd => {
        cd.classList.remove("slide-out");
        void cd.offsetWidth;
        cd.classList.add("slide-out");
    });

    animateOverlayPhoto(overlay6);

    const albumcard = overlay6.querySelector(".album-card");
    overlay6.style.backgroundColor = "rgba(120, 154, 201, 0.8)";
    albumcard.style.backgroundColor = "rgb(250, 250, 244)";

    notes.forEach(note => {
        note.style.color = "#195cb9";
    });
});

area7.addEventListener('click', function(){
     closeAllOverlays();
    notes.forEach(note => { 
        note.classList.remove("active");
    });

    overlay7.classList.add("show");

    cdImages.forEach(cd => {
        cd.classList.remove("slide-out");
        void cd.offsetWidth;
        cd.classList.add("slide-out");
    });

    animateOverlayPhoto(overlay7);

    const albumcard = overlay7.querySelector(".album-card");
    overlay7.style.backgroundColor = "rgba(32, 26, 120, 0.8)";
    albumcard.style.backgroundColor = "rgb(243, 243, 239)";

    notes.forEach(note => {
        note.style.color = "#dd1414";
    });
});

area8.addEventListener('click', function(){
     closeAllOverlays();
    notes.forEach(note => { 
        note.classList.remove("active");
    });

    overlay8.classList.add("show");

    const albumcard2 = overlay8.querySelector(".album-card");
    if (albumcard2) {
        albumcard2.style.width = "940px";
    }

    cdImages.forEach(cd => {
        cd.classList.remove("slide-out");
        void cd.offsetWidth;
        cd.classList.add("slide-out");
    });

    animateOverlayPhoto(overlay8);

    const albumcard = overlay8.querySelector(".album-card");
    overlay8.style.backgroundColor = "rgba(34, 81, 191, 0.8)";
    albumcard.style.backgroundColor = "rgb(242, 242, 248)";

    notes.forEach(note => {
        note.style.color = "#1c109c";
    });
});

    function closeAllOverlays() {
        [overlay1, overlay2, overlay3, overlay4, overlay5, overlay9, overlay6, overlay7, overlay8].forEach(overlay => {
            if (overlay) {
                overlay.classList.remove("show");
            }
        });

        audios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });

        cdImages.forEach(cd => {
            cd.classList.remove("spinning");
        });

        photos.forEach(photo => {
            photo.classList.remove("slide-out");
        });

        // const overlay3card = overlay3 ? overlay3.querySelector('.album-card') : null;
        // if (overlay3card) {
        //     overlay3card.style.width = "";
        // }

        notes.forEach(note => {
            note.classList.remove("active");
        });
    }

    closeButtons.forEach(button => {
        button.addEventListener("click", closeAllOverlays);
    });

    cdImages.forEach(cdImage => {
        cdImage.addEventListener("click", function() {
            const overlay = cdImage.closest(".overlay");
            const audio = overlay ? overlay.querySelector("audio") : null;

            if (audio) {
                audio.play();
            }
            notes.forEach(note => {
                note.classList.add("active");
            });

            cdImage.classList.remove("slide-out");
            cdImage.classList.add("spinning");
        });
    });

    audios.forEach(audio => {
        audio.addEventListener("ended", function() {
            const overlay = audio.closest(".overlay");
            const cdImage = overlay ? overlay.querySelector(".cd-image") : null;

            if (cdImage) {
                cdImage.classList.remove("spinning");
                cdImage.style.transform = "translateX(160px)";
            }
            notes.forEach(note => {
                note.classList.remove("active");
            });
        });
    });

    function animateOverlayPhoto(overlay) {
        const photo = overlay ? overlay.querySelector(".cd-photo") : null;
        if (photo) {
            photo.classList.remove("slide-out");
            void photo.offsetWidth;
            photo.classList.add("slide-out");
        }
    }

})();
