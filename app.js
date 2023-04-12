function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPositon = introText.getBoundingClientRect().top;
    var screePosition = window.innerHeight / 1.3;

    if( introPositon < screePosition){
        introText.classList.add('intro-appear');
    }
}

    window.addEventListener('scroll',scrollAppear);