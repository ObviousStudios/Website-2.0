async function footerScript (){
    const footer = document.getElementById("footer")
    const footerHTML = await fetch("https://obviousstudios.github.io/Website-Asset-Directory/html/footer.txt")
    console.log(footerHTML)
    footer.innerHTML = footerHTML 
}

footerScript()