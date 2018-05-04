function PlayerController() {
    // Private
    var playerService = new PlayerService();

    function drawPlayer(playerResult) {
        var template = '';
        for (let i = 0; i < playerResults.length; i++) {
            const playerResult = playerResults[i];
            template += `
    <div>
    <img src="${playerResult.photo}" alt="">
    <h1>Name: ${playerResult.name}</h1>
    <p>Position: ${playerResult.position}</p>
    <p>Team: ${playerResult.team}</p>
    <button onclick="controller.playerController.addToTeam(${playerResult.id})">Add to team</button>
  </div>
    `;
        }
        document.getElementById("nflPlayers").innerHTML = template;
    }

    function drawMyTeam(playerResult) {
        var template = '';
        for (let i = 0; i < playerResults.length; i++) {
            const playerResult = playerResults[i];
            template += `
            <div>
            <img src="${}" alt="">
    <h1>Name: ${playerResult.name}</h1>
    <p>Position: ${playerResult.position}</p>
    <p>Team: ${playerResult.team}</p>
            <button onclick="controller.playerController.removeFromTeam(${playerResult.id})">Remove from team</button>
          </div>
        `;
        }
        document.getElementById("myTeam").innerHTML = template;
    }

    // Public

    this.addToTeam = function addToTeam(id) {
        playerService.addMyTeam(id, drawMyTeam);
    };

    this.removeFromTeam = function removeFromTeam(id) {
        playerService.removeFromTeam(id, drawMyTeam)
    };

}


/*
    this.search = function search(e) {
        e.preventDefault();
        var searchTerm = e.target.player.value.toUpperCase()
        var teamSearch = nflService.getPlayersByTeam(searchTerm)
        var posSearch = nflService.getPlayersByPosition(searchTerm)
        var nameSearch = nflService.getPlayersByName(searchTerm)
        var teamAndPos = teamSearch.concat(posSearch)
        var resultArr = teamAndPos.concat(nameSearch)
        drawResults(resultArr)