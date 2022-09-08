var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

//HEAR CARD
var ImageIndex = 1;
showDivs (ImageIndex);

function plusDivs(n){
    showDivs(ImageIndex += n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("hear-pic");
    var y = document.getElementsByClassName("ico");
    var z = document.getElementsByClassName("quote");
    var a = document.getElementsByClassName("hear-id");
    if(n > x.length) {ImageIndex = 1}
    if(n < 1) {ImageIndex = x.length}
    for(i = 0; i < x.length; i++){
        x[i].style.display ="none";
        y[i].style.filter ="grayscale(100%)"
        z[i].style.display = "none";
        a[i].style.display = "none";
    }
    x[ImageIndex - 1].style.display ="block";
    y[ImageIndex - 1].style.filter ="none";
    z[ImageIndex - 1].style.display ="block";
    a[ImageIndex - 1].style.display ="block";
};
 


//LIFE CARDS SLIDER
var left = document.getElementById("l-left");
var right = document.getElementById("l-right");
var cardlife = document.getElementsByClassName("card-li");
var l = 0;

right.onclick = () => {
    l++;
    for(var i of cardlife)
    {
        //if(l==0){i.style.left =" 0px "; left.style.filter = "grayscale(100%)"; left.style.opacity="0.5";}
        if(l==1){i.style.left =" -440px"; left.style.filter = "grayscale(0%)"; left.style.opacity="1";}
        if(l==2){i.style.left =" -880px ";} 
        if(l==3){i.style.left =" -1320px "; right.style.filter = "grayscale(100%)"; right.style.opacity="0.5";}
        if(l>3){l=3;}
    }
};

left.onclick = () => {
    l--;
    for(var i of cardlife)
    {
        if(l==0){i.style.left =" 0px "; left.style.filter = "grayscale(100%)"; left.style.opacity="0.5";}
        if(l==1){i.style.left = " -440px ";}
        if(l==2){i.style.left = " -880px "; right.style.filter = "grayscale(0%)"; right.style.opacity="1";}
        //if(l==3){i.style.left = " -1320px ";}
        if(l<0){l=0;}
    }
};

