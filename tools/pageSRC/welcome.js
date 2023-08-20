const Intro = () => {
    const WelcomeText = document.getElementById("WelcomeText")
    const originalText = WelcomeText.textContent
    WelcomeText.textContent = ""

    const titleText = "Tools"

    const typeoutTitle = () => {
        //add a basic interval
        let charid = 0
        let typeInterval = setInterval(() => {
            if(titleText.charAt(charid) == " "){
                charid += 1
                document.title += " " + titleText.charAt(charid)
                if (charid >= titleText.length){
                    // ! Destroy the interval
                    clearInterval(typeInterval)
                }
            }
            else{
                document.title += titleText.charAt(charid)
            }
            if (charid >= titleText.length){
                // ! Destroy the interval
                clearInterval(typeInterval)
            }
            charid += 1
        }, 250);
    }

    typeoutTitle()

    const typeout = (text, element) => {
        //add a basic interval
        let charid = 0
        let typeInterval = setInterval(() => {
            WelcomeText.textContent += originalText.charAt(charid)
            if (charid >= originalText.length){
                // ! Destroy the interval
                clearInterval(typeInterval)
            }
            charid += 1
        }, 62);
    }

    typeout(originalText,WelcomeText)
}

Intro()