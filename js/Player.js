const aboutVideo = document.querySelector('#aboutVideo')
const aboutVideoWrap = document.querySelector('#aboutVideoWrap')
function play(){
    if (aboutVideoWrap.className.includes('play')) {
        aboutVideo.pause()
    }else {
        aboutVideo.play()
    }
    aboutVideoWrap.classList.toggle('play')
}
try {aboutVideoWrap.onclick = play} catch {}
