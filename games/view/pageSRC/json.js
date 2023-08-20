const gameJson = {
    "CMS":{
        "Name":"Coffee Making Simulator",
        
        "Description":"A small game about making coffee that was made in about 2 days after an idea ObviousAlexC had while playing fortnite with Will.",
        
        "Gamejolt":"https://gamejolt.net/?token=fJ8FCmVWtDkdtwqpi32r8X8b2wZXp4",
        "Itch":"false",
        "Newgrounds":"false",
        "Scratch":"false",
        "Steam":"false",
        "Epic":"false",
        "GoG":"false",
        "Roblox":"false",
        "DirectPlay":{
            "Available":true,
            "url":""
        }
    },
    "WFTBS":{
        "Name":"Wait for the Bus Simulator",
        
        "Description":"An endurance test.",
        
        "Gamejolt":"false",
        "Itch":"false",
        "Newgrounds":"false",
        "Scratch":"false",
        "Steam":"false",
        "Epic":"false",
        "GoG":"false",
        "Roblox":"https://www.roblox.com/games/5595673644/Wait-for-the-bus-Simulator-Classic",
        "DirectPlay":{
            "Available":false,
            "url":""
        }
    },
    "TAM":{
        "Name":"The Arcade Machine",
        
        "Description":"A test to see if it would be possible to render 2 scenes simultaniously inside of the ROBLOX game engine. It is also partially an MMO as you can see 100 other players in the world.",
        
        "Gamejolt":"false",
        "Itch":"false",
        "Newgrounds":"false",
        "Scratch":"false",
        "Steam":"false",
        "Epic":"false",
        "GoG":"false",
        "Roblox":"https://www.roblox.com/games/9886858924/The-Arcade-Machine",
        "DirectPlay":{
            "Available":false,
            "url":""
        }
    },
    "AAR":{
        "Name":"An Alternate Reality",
        
        "Description":"A test to see how well infinite worlds would be possible in roblox. The test was successful after ObviousAlexC had managed to create multiple infinite worlds that intertwined with each other.",
        
        "Gamejolt":"false",
        "Itch":"false",
        "Newgrounds":"false",
        "Scratch":"false",
        "Steam":"false",
        "Epic":"false",
        "GoG":"false",
        "Roblox":"https://www.roblox.com/games/8844963168/The-Backrooms-An-Alternate-Reality-EXPERIMENTAL",
        "DirectPlay":{
            "Available":false,
            "url":""
        }
    },
    "ZS":{
        "Name":"Zen Sweeper",
        
        "Description":"Do you like minesweeper? Do you wish it was infinite? Well do we have the game for you! Experience the bueaty of minesweeper on an infinite plane.",
        
        "Gamejolt":"false",
        "Itch":"false",
        "Newgrounds":"false",
        "Scratch":"false",
        "Steam":"false",
        "Epic":"false",
        "GoG":"false",
        "Roblox":"false",
        "DirectPlay":{
            "Available":true,
            "url":""
        }
    },
    "ITFOTD":{
        "Name":"In the Field of the Damned",
        
        "Description":"A stray soul falls off the boat floating into the river Styx into the fields of the damned.",
        
        "Gamejolt":"false",
        "Itch":"false",
        "Newgrounds":"false",
        "Scratch":"false",
        "Steam":"false",
        "Epic":"false",
        "GoG":"false",
        "Roblox":"false",
        "DirectPlay":{
            "Available":true,
            "url":""
        }
    }
}

const placeholder = {
    "Name":"No game Identified",
    
    "Description":"404 not found",
    
    "Gamejolt":"false",
    "Itch":"false",
    "Newgrounds":"false",
    "Scratch":"false",
    "Steam":"false",
    "Epic":"false",
    "GoG":"false",
    "Roblox":"false",
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

const gameData = gameJson[game] || placeholder

console.log(gameData)