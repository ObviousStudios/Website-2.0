const Intro = () => {
    const WelcomeText = document.getElementById("WelcomeText")
    const originalText = WelcomeText.textContent
    WelcomeText.textContent = ""

    const typeout = (text, element) => {
        //add a basic interval
        let charid = 0
        let typeInterval = setInterval(() => {
            WelcomeText.textContent += originalText.charAt(charid)
            if (charid >= originalText.length){
                clearInterval(typeInterval)
            }
            charid += 1
        }, 62);
    }

    typeout(originalText,WelcomeText)
}

Intro()