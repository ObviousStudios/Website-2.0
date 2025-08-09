const gameJson = {
    "CMS":{
        "Name":"Coffee Making Simulator",
        
        "Description":"A small game about making coffee that was made in about 2 days after an idea ObviousAlexC had while playing fortnite with Will.",
        
        "Gamejolt":"https://gamejolt.net/?token=fJ8FCmVWtDkdtwqpi32r8X8b2wZXp4",
    },
    "WFTBS":{
        "Name":"Wait for the Bus Simulator",
        
        "Description":"An endurance test.",

        "Roblox":"https://www.roblox.com/games/5595673644/Wait-for-the-bus-Simulator-Classic",
    },
    "TAM":{
        "Name":"The Arcade Machine",
        
        "Description":"A test to see if it would be possible to render 2 scenes simultaniously inside of the ROBLOX game engine. It is also partially an MMO as you can see 100 other players in the world.",

        "Roblox":"https://www.roblox.com/games/9886858924/The-Arcade-Machine",
    },
    "AAR":{
        "Name":"An Alternate Reality",
        
        "Description":"A test to see how well infinite worlds would be possible in roblox. The test was successful after ObviousAlexC had managed to create multiple infinite worlds that intertwined with each other.",

        "Roblox":"https://www.roblox.com/games/8844963168/The-Backrooms-An-Alternate-Reality-EXPERIMENTAL",
    },
    "ZS":{
        "Name":"Zen Sweeper",
        
        "Description":"Do you like minesweeper? Do you wish it was infinite? Well do we have the game for you! Experience the bueaty of minesweeper on an infinite plane.",
        
        "Gamejolt":"https://gamejolt.com/games/zensweeperPM/900813",
    },
    "ITFOTD":{
        "Name":"In the Field of the Damned",
        
        "Description":"A stray soul falls into the river of Styx, right into The Fields of the Damned.",
        
        "Gamejolt":"https://gamejolt.com/games/IntheFieldoftheDamned/781474",
        "Itch":"https://obviousalexc.itch.io/in-the-field-of-the-damned",
        "Newgrounds":"https://www.newgrounds.com/portal/view/879531",
    },
    "DUN": {
        "Name":"Dungeonite",
        
        "Description":"A rogue-like made in under 2000 blocks.",
        
        "Gamejolt":"https://gamejolt.com/games/dungeonite/872155"
    },
    "SDUN": {
        "Name":"Super Dungeonite",
        
        "Description":"Dungeonite but with a 16-bit artstyle and more content.",
        
        "Penguinmod":"https://studio.penguinmod.com/?clones=Infinity&offscreen&limitless&nohqpen&size=256x240#1936836612"
    }
}

const placeholder = {
    "Name":"No game Identified",
    
    "Description":"404 not found",
    
    "Gamejolt":false,
    "Itch":false,
    "Newgrounds":false,
    "Scratch":false,
    "Steam":false,
    "Epic":false,
    "GoG":false,
    "Roblox":false,
    "Penguinmod":false,
    "DirectPlay":{
        "Available":false,
        "url":""
    }
}

const getparam = (parametername) => {
    let params = new URLSearchParams(window.location.search);
    return params.get(parametername);
}

const game = getparam("gameId")

const gameData = Object.assign({}, placeholder, gameJson[game] || placeholder)

console.log(gameData)