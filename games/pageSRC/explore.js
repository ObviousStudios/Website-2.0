class elementButton{
    constructor(element,onClick){
        this.element = document.getElementById(element);
        this.onClick = onClick;
        this.element.onclick = () => {
            window.location.href = "https://obviousstudios.dev/games/view?gameId=" + this.onClick;
        }
    }
}

new elementButton("CMS","CMS");
new elementButton("WFTBS","WFTBS");
new elementButton("TAM","TAM");
new elementButton("AAR","AAR");
new elementButton("ZS","ZS");
new elementButton("ITFOTD","ITFOTD");
new elementButton("DUN","DUN");
new elementButton("SDUN","SDUN");