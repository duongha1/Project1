function show(index){
    slides[index].style.display = 'block';
}
function hide(index){
    slides[index].style.display = 'none';
}
function hienThiSlideKeTiep(){
    hide(index);
    index++;
    if(index >= slides.length) index = 0;
    show(index);
}
let slides = document.getElementsByClassName('slides');
let index = 0;
show(index);
setInterval('hienThiSlideKeTiep()', 5000);