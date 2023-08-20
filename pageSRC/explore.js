class elementButton{
    constructor(element,onClick){
        this.element = document.getElementById(element);
        this.onClick = onClick;
        this.element.onclick = () => {
            window.location.href = this.onClick;
        }
    }
}

new elementButton("OAC","https://obviousstudios.dev/comingSoon/");
new elementButton("CORBAND","https://obviousstudios.dev/comingSoon/");
new elementButton("BRAYDONC","https://obviousstudios.dev/comingSoon/");
new elementButton("COLTEN","https://obviousstudios.dev/comingSoon/");
new elementButton("WILL","https://obviousstudios.dev/comingSoon/");