//Coming back to this page in the big 'ol 25, definitely cleaned this shit up.
const gameConsts = () => {
    const impostersusPleaseWorkIBegJustWorkThisOneGodDamnTime = document.getElementById("sussyImposter.mp3");

    const LinkButtons = {
        Itch:document.getElementById("itch"),
        Newgrounds:document.getElementById("Newgrounds"),
        Gamejolt:document.getElementById("JameGolt"),
        Penguinmod: document.getElementById("Penguinmod"),
        Scratch:document.getElementById("Scratch"),
        Steam:document.getElementById("Steam"),
        GoG:document.getElementById("GalaxyOfGames"),
        Epic:document.getElementById("Epic"),
        Roblox:document.getElementById("Roblos"),
        DirectPlay:document.getElementById("Direct")
    };

    for (let platformName in LinkButtons) {
        if (!gameData[platformName]) impostersusPleaseWorkIBegJustWorkThisOneGodDamnTime.removeChild(LinkButtons[platformName]);
        else LinkButtons[platformName].onclick = () => { document.location.href = gameData[platformName]; };
    }

    impostersusPleaseWorkIBegJustWorkThisOneGodDamnTime.removeChild(LinkButtons.DirectPlay);
}

gameConsts();