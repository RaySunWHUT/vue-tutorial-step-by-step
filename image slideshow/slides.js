var i = 0;
var images = [];
var time = 3000;


// image list
images[0] = './images/img1.jpg';
images[1] = './images/img2.jpg';
images[2] = './images/img3.jpg';
images[3] = './images/img4.jpg';
images[4] = './images/img5.jpg';

// change image
function slide() {

    document.slides.src = images[i];

    if (i < images.length - 1) {

        i++;

    } else {

        i = 0;

    }

    setTimeout("slide()", time);

    window.onload = slide;

}

slide()