const gameConsts = () => {
    const Gamejolt = gameData.Gamejolt
    const Itch = gameData.Itch
    const Newgrounds = gameData.Newgrounds
    const Scratch = gameData.Scratch
    const Steam = gameData.Steam
    const Epic = gameData.Epic
    const GalaxyOfGames = gameData.GoG
    const Roblox = gameData.Roblox
    const DirectPlay = gameData.DirectPlay

    const impostersusPleaseWorkIBegJustWorkThisOneGodDamnTime =document.getElementById("sussyImposter.mp3")

    const LinkButtons = {
        Itch:document.getElementById("itch"),
        Newgrounds:document.getElementById("Newgrounds"),
        Gamejolt:document.getElementById("JameGolt"),
        Scratch:document.getElementById("Scratch"),
        Steam:document.getElementById("Steam"),
        GalaxyOfGames:document.getElementById("GalaxyOfGames"),
        Epic:document.getElementById("Epic"),
        Roblox:document.getElementById("Roblos"),
        DirectPlay:document.getElementById("Direct")
    }

    if(Itch == "false"){
        impostersusPleaseWorkIBegJustWorkThisOneGodDamnTime.removeChild(LinkButtons.Itch)
    }else{
        LinkButtons.Itch.onclick = () => {
            document.location.href = Itch
        }
    }

    if(Newgrounds == "false"){
        impostersusPleaseWorkIBegJustWorkThisOneGodDamnTime.removeChild(LinkButtons.Newgrounds)
    }else{
        LinkButtons.Newgrounds.onclick = () => {
            document.location.href = Newgrounds
        }
    }

    if(Gamejolt == "false"){
        impostersusPleaseWorkIBegJustWorkThisOneGodDamnTime.removeChild(LinkButtons.Gamejolt)
    }else{
        LinkButtons.Gamejolt.onclick = () => {
            document.location.href = Gamejolt
        }
    }

    if(Scratch == "false"){
        impostersusPleaseWorkIBegJustWorkThisOneGodDamnTime.removeChild(LinkButtons.Scratch)
    }else{
        LinkButtons.Scratch.onclick = () => {
            document.location.href = Scratch
        }
    }
    
    if(Steam == "false"){
        impostersusPleaseWorkIBegJustWorkThisOneGodDamnTime.removeChild(LinkButtons.Steam)
    }else{
        LinkButtons.Steam.onclick = () => {
            document.location.href = Steam
        }
    }

    if(GalaxyOfGames == "false"){
        impostersusPleaseWorkIBegJustWorkThisOneGodDamnTime.removeChild(LinkButtons.GalaxyOfGames)
    }else{
        LinkButtons.GalaxyOfGames.onclick = () => {
            document.location.href = GalaxyOfGames
        }
    }

    if(Epic == "false"){
        impostersusPleaseWorkIBegJustWorkThisOneGodDamnTime.removeChild(LinkButtons.Epic)
    }else{
        LinkButtons.Epic.onclick = () => {
            document.location.href = Epic
        }
    }

    if(Roblox == "false"){
        impostersusPleaseWorkIBegJustWorkThisOneGodDamnTime.removeChild(LinkButtons.Roblox)
    }else{
        LinkButtons.Roblox.onclick = () => {
            document.location.href = Roblox
        }
    }

    impostersusPleaseWorkIBegJustWorkThisOneGodDamnTime.removeChild(LinkButtons.DirectPlay)
}

gameConsts()