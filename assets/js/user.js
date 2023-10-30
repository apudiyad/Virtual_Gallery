const savedArtworkDiv = document.getElementById("savedArtworks");
if (localStorage.getItem("savedArtworks") != null) {
    htmlToInsert = "";
    imageArr = JSON.parse(localStorage.getItem("savedArtworks"))
    imageArr.forEach(element => {
        imageFile = getImgFile(element);
        if (imageFile) {
            htmlToInsert += "<div class=\"col-md-4\">"
                + "<div class=\"work-box\">"
                + "<a href=\"" + imageFile + "\" data-gallery=\"portfolioGallery\" class=\"portfolio-lightbox\">"
                + "<div class=\"work-img\">"
                + "<img src=\"" + imageFile + "\" alt=\"\" class=\"img-fluid\">"
                + "</div>"
                + "</a>"
                + "<div class=\"work-content\">"
                + "<div class=\"row\">"
                + "</div>"
                + "</div>"
                + "</div>"
                + "</div>";
        }
    });
    savedArtworkDiv.innerHTML = htmlToInsert;
}

function getImgFile(imageId) {
    fileName = "";
    switch (imageId) {
        case "M1":
            //fileName = "img/M1.png";
            break;
        case "M2":
            fileName = "img/M2.png";
            break;
        case "M3":
            fileName = "img/M3.png";
            break;
        case "M4":
            fileName = "img/M4.png";
            break;
        case "M7":
            fileName = "img/M7.png";
            break;
        case "M8":
            fileName = "img/M8.png";
            break;
        case "P1":
            fileName = "img/p1.png";
            break;
        case "P2":
            fileName = "img/p2.png";
            break;
        case "P3":
            fileName = "img/p3.png";
            break;
    }
    return fileName;
}