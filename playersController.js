function PlayersController() {
    // Private
    var playersService = new PlayersService(drawPlayers);

    function drawPlayers(playerResults) {
        var template = "<h1>NFL Players</h1>";
        for (let i = 0; i < playerResults.length; i++) {
            const playerResult = playerResults[i];
            template += `
            <div>
    <img src="${playerResults.photo}" alt="">
    <h1>Name: ${playerResults.name}</h1>
    <p>Position: ${playerResults.position}</p>
    <p>Team: ${playerResults.team}</p>
    <button onclick="controller.playersController.addToTeam(${playerResults.id})">Add to team</button>
    </div>
    `;
        }
        document.getElementById("nflPlayers").innerHTML = template;
    }

    function drawMyTeam(playerResults) {
        var template = "<h1>My Team</h1>";
        for (let i = 0; i < playerResults.length; i++) {
            const playerResult = playerResults[i];
            template += `
            <img src="${playerResults.photo}" alt="">
    <h1>Name: ${playerResults.name}</h1>
    <p>Position: ${playerResults.position}</p>
    <p>Team: ${playerResults.team}</p>
    <button onclick="controller.playersController.removeFromTeam(${playerResults.id})">Remove From team</button>
        `;
        }
        document.getElementById("myTeam").innerHTML = template;
    }

    // Public

    this.addToTeam = function addToTeam(id) {
        playersService.addToTeam(id, drawMyTeam)
    };

    this.removeFromTeam = function removeFromTeam(id) {
        playersService.removeFromTeam(id, drawMyTeam)
    };

}