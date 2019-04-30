window.onload = function changeImage(){
    var image1 = document.getElementById("thumbnails").getElementsByTagName("img");
    var image2 = document.getElementById("featured").getElementsByTagName("img");
    var figcaption = document.getElementById("featured").getElementsByTagName("figcaption");
    for (var i=0;i<image1.length;i++){
        image1[i].onclick = function () {
            image2[0].src = this.src.replace("small","medium");
            image2[0].title = this.title;
            figcaption[0].innerText = this.title;
        }
    }
    document.getElementById("featured").onmouseover = function () {
        change(0,80);
    };
    document.getElementById("featured").onmouseout = function () {
        change(80,0);
    }
};

function change(opacity, target){
    var timer = null;
    var speed = 1;
    var title = document.getElementById("featured").getElementsByTagName("figcaption");
    clearInterval(timer);
    timer = setInterval(
        function () {
            if (opacity<target){
                speed = 2;
            }
            else{
                speed = -2;
            }
            if (opacity===target){
                clearInterval(timer);
            }
            else {
                opacity = opacity + speed;
                title[0].style.opacity = opacity/100;
                title[0].style.filter = 'opacity(opacity='+opacity+')';
            }
        }, 10);
}