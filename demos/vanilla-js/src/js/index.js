import lottie from 'lottie-web/build/player/lottie_light'
import animationData from '../animations/boy-reading.json'
let lottieInstance = null

function initLottie (element) {
    const style = {
        window: '100%',
        height: '100%',
        overflow: 'hidden',
        outline: 'none'
    }
    const defaultConfig = {
        loop: true,
        autoplay: true,
        renderer: 'svg',
    }
    const options = {container: element,
    animationData,...defaultConfig}

    if (!lottieInstance && element) {
        element.style = style
        lottieInstance = lottie.loadAnimation(options)
    }
}

function main () {
    const targetElement = document.getElementById('lottie')
    initLottie(targetElement)
}

window.onload = main