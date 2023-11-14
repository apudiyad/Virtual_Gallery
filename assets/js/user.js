const savedArtworkDiv = document.getElementById("savedArtworks");
if (localStorage.getItem("savedArtworks") != null) {
    htmlToInsert = "";
    imageArr = JSON.parse(localStorage.getItem("savedArtworks"))
    imageArr.forEach(element => {
        image = getImgFile(element);
        if (image) {
            htmlToInsert += "<div class=\"col-md-4\">"
                + "<div class=\"work-box\">"
                + "<a href=\"" + image[1] + "\" data-gallery=\"portfolioGallery\" class=\"portfolio-lightbox\">"
                + "<div class=\"work-img\">"
                + "<img src=\"" + image[0] + "\" alt=\"\" class=\"img-fluid\">"
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
    file = "";
    fileUrl = "";
    switch (imageId) {
        case "M1":
            file = "img/M1.png";
            fileUrl = "artwork_image1.html"
            break;
        case "M2":
            file = "img/M2.png";
            fileUrl = "artwork_image2.html"
            break;
        case "M3":
            file = "img/M3.png";
            fileUrl = "artwork_image3.html"
            break;
        case "M4":
            file = "img/M4.png";
            fileUrl = "artwork_image4.html"
            break;
        case "M7":
            file = "img/M7.png";
            fileUrl = "artwork_image7.html"
            break;
        case "M8":
            file = "img/M8.png";
            fileUrl = "artwork_image8.html"
            break;
        case "P1":
            file = "img/p1.png";
            fileUrl = "artwork_imageP1.html"
            break;
        case "P2":
            file = "img/p2.png";
            fileUrl = "artwork_imageP2.html"
            break;
        case "P3":
            file = "img/p3.png";
            fileUrl = "artwork_imageP3.html"
            break;
        case "P5":
            file = "img/Artist2_work/p5.png";
            fileUrl = "artwork_imageP1.html"
            break;
        case "P6":
            file = "img/Artist2_work/p6.png";
            fileUrl = "artwork_imageP2.html"
            break;
        case "P7":
            file = "img/Artist2_work/p7.png";
            fileUrl = "artwork_imageP7.html"
            break;
        case "F1":
            file = "img/Artist3_work/f1.png";
            fileUrl = "artwork_imageF1.html"
            break;
        case "F2":
            file = "img/Artist3_work/f2.png";
            fileUrl = "artwork_imageF2.html"
            break;
        case "F3":
            file = "img/Artist3_work/f3.png";
            fileUrl = "artwork_imageF3.html"
            break;
        case "F4":
            file = "img/Artist3_work/f4.png";
            fileUrl = "artwork_imageF4.html"
            break;
        case "F5":
            file = "img/Artist3_work/f5.png";
            fileUrl = "artwork_imageF5.html"
            break;
        case "F6":
            file = "img/Artist3_work/f6.png";
            fileUrl = "artwork_imageF6.html"
            break;

    }
    var image = [file, fileUrl];
    return image;
}