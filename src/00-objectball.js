function gameObject(){
    return{
      home: {
        teamName:"Brooklyn Nets",
        colors:["Black", "White"],
        players:{
          "Alan Anderson":{Number:0, Shoe:16, Points:22, Rebounds:12, Assists:12, Steals:3, Blocks:1, SlamDunks:1},
          "Reggie Evans":{Number:30, Shoe:14, Points:12, Rebounds:12, Assists:12, Steals:12, Blocks:12, SlamDunks:7},
          "Brook Lopez":{Number:11, Shoe:17, Points:17, Rebounds:19, Assists:10, Steals:3, Blocks:1, SlamDunks:15},
          "Mason Plumlee":{Number:1, Shoe:19, Points:26, Rebounds:12, Assists:6, Steals:3, Blocks:8, SlamDunks:5},
          "Jason Terry":{Number:31, Shoe:15, Points:19, Rebounds:2, Assists:2, Steals:4, Blocks:11, SlamDunks:1}
        },

      },
      away:{
        teamName:"Charlotte Hornets",
        colors:["Turquoise", "Purple"],
        players:{
          "Jeff Adrien":{Number:4, Shoe:18, Points:10, Rebounds:1, Assists:1, Steals:2, Blocks:7, SlamDunks:2},
          "Bismak Biyombo":{Number:0, Shoe:16, Points:12, Rebounds:4, Assists:7, Steals:7, Blocks:15, SlamDunks:10},
          "DeSagna Diop":{Number:0, Shoe:16, Points:12, Rebounds:4, Assists:7, Steals:7, Blocks:15, SlamDunks:10},
          "Ben Gordon":{Number:33, Shoe:15, Points:6, Rebounds:12, Assists:12, Steals:22, Blocks:5, SlamDunks:12}}
      }
    }

}

function numPointsScored(playerName){
    const gameData = gameObject();
    for (let team in gameData){
        if(gameData[team].players[playerName]){
            return gameData[team].players[playerName].Points;
        }

    }
    return "player not found";
}
function shoeSize(playerName) {
    const gameData = gameObject();
    for (let team in gameData) {
      if (gameData[team].players[playerName]) {
        // Return the shoe size from the "Shoe" property
        return gameData[team].players[playerName].Shoe;
      }
    }
    return "player not found";
  }
function teamNames(){
    const gameData = gameObject();
    let names = [];
    for (let team in gameData){
        name.push(gameData[team].teamName);
    }
    return names;
}
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { Number: 0, Shoe: 16, Points: 22, Rebounds: 12, Assists: 12, Steals: 3, Blocks: 1, SlamDunks: 1 },
          "Reggie Evans": { Number: 30, Shoe: 14, Points: 12, Rebounds: 12, Assists: 12, Steals: 12, Blocks: 12, SlamDunks: 7 },
          "Brook Lopez": { Number: 11, Shoe: 17, Points: 17, Rebounds: 19, Assists: 10, Steals: 3, Blocks: 1, SlamDunks: 15 },
          "Mason Plumlee": { Number: 1, Shoe: 19, Points: 26, Rebounds: 12, Assists: 6, Steals: 3, Blocks: 8, SlamDunks: 5 },
          "Jason Terry": { Number: 31, Shoe: 15, Points: 19, Rebounds: 2, Assists: 2, Steals: 4, Blocks: 11, SlamDunks: 1 }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { Number: 4, Shoe: 18, Points: 10, Rebounds: 1, Assists: 1, Steals: 2, Blocks: 7, SlamDunks: 2 },
          "Bismak Biyombo": { Number: 0, Shoe: 16, Points: 12, Rebounds: 4, Assists: 7, Steals: 7, Blocks: 15, SlamDunks: 10 },
          "DeSagna Diop": { Number: 0, Shoe: 16, Points: 12, Rebounds: 4, Assists: 7, Steals: 7, Blocks: 15, SlamDunks: 10 },
          "Ben Gordon": { Number: 33, Shoe: 15, Points: 6, Rebounds: 12, Assists: 12, Steals: 22, Blocks: 5, SlamDunks: 12 }
        }
      }
    };
  }

  function teamNames() {
    const gameData = gameObject();
    let names = [];
    for (let team in gameData) {
      names.push(gameData[team].teamName);
    }
    return names;
  }
  function teamColors(teamName) {
    const gameData = gameObject();

    for (let team in gameData) {

      if (gameData[team].teamName === teamName) {
        return gameData[team].colors;
      }
    }

    return "Team not found";
  }

  function playerNumbers(teamName) {
    const gameData = gameObject();
    for (let key in gameData) {
      if (gameData[key].teamName === teamName) {
        let numbers = [];
        const players = gameData[key].players;
        for (let player in players) {
          numbers.push(players[player].Number);
        }
        return numbers;
      }
    }
    return "Team not found";
  }

  function playerStats(playerName) {
    const gameData = gameObject();

    for (let team in gameData) {

      if (gameData[team].players[playerName]) {
        return gameData[team].players[playerName];
      }
    }
    return "Player not found";
  }
  function bigShoeRebounds() {
    const gameData = gameObject();
    let maxShoeSize = 0;
    let reboundsForLargest = 0;
    for (let team in gameData) {
      const players = gameData[team].players;

      for (let player in players) {
        const currentShoeSize = players[player].Shoe;

        if (currentShoeSize > maxShoeSize) {
          maxShoeSize = currentShoeSize;
          reboundsForLargest = players[player].Rebounds;
        }
      }
    }

    return reboundsForLargest;
   
  }
