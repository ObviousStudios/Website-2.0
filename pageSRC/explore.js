const exploreButtons = () =>{
    class ExploreButton{
        constructor(Element,Func){
            this.Element = document.getElementById(Element);
            this.Func = Func;

            this.Element.onclick = this.Func;
        }
    }
    new ExploreButton("gameBut",(event) => {
        window.location.href = "https://obviousstudios.dev/games/"
    });

    new ExploreButton("toolBut",(event) => {
        window.location.href = "https://obviousstudios.dev/tools/"
    });

    new ExploreButton("peepBut",(event) => {
        window.location.href = "https://obviousstudios.dev/team/"
    });

    new ExploreButton("blogBut",(event) => {
        window.location.href = "https://obviousstudios.dev/blog/"
    });
}

exploreButtons();