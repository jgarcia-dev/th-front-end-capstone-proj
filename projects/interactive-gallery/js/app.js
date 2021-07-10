baguetteBox.run('.gallery');

function search() {
    let userInput, filteredInput, galleryPics, i, captionTxt;

    userInput = document.getElementById("search-bar");
    filteredInput = userInput.value.toLowerCase();
    galleryPics = document.getElementById("grid").getElementsByTagName("a");
   
    // for every caption text in gallery pictures
    // check caption against filtered input, if match show picture, else hide
    for (i = 0; i < galleryPics.length; i++) {
        
        captionTxt = galleryPics[i].getAttribute("data-caption");

        if ( captionTxt.toLowerCase().indexOf(filteredInput) > -1 ) {
            galleryPics[i].style.display = "";
        } else {
            galleryPics[i].style.display = "none";
        }
    }
}