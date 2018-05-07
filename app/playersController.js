function PlayerController() {
    // Private
    var playerService = new PlayerService();

    function drawPlayers(players) {
        var template = "<h1>NFL Players</h1>";
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            template += `
            <div>
    <img src="${player.photo}" alt="">
    <h1>Name: ${player.fullname}</h1>
    <p>Position: ${player.position}</p>
    <p>Team: ${player.pro_team}</p>
    <button class="btn btn-primary" onclick="app.controllers.playerController.addToTeam('${player.id}')">Add to team</button>
    </div>
    `;
        }
        document.getElementById("nflPlayers").innerHTML = template;
    }

    function drawMyTeam(players) {
        var template = "<h1>My Team</h1>";
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            template += `
            <div>
    <img src="${player.photo}" alt="">
    <h1>Name: ${player.fullname}</h1>
    <p>Position: ${player.position}</p>
    <p>Team: ${player.pro_team}</p>
    <button onclick="app.controllers.playerController.removeFromTeam(${player.id})">Remove from team</button>
    </div>
    `;
        }
        document.getElementById("myTeam").innerHTML = template;
    }

    this.addToTeam = function addToTeam(id) {
        playerService.addToTeam(id, drawMyTeam)
    };

    this.removeFromTeam = function removeFromTeam(id) {
        playerService.removeFromTeam(id, drawMyTeam)
    };

    this.search = function search(e){
        e.preventDefault ();
        var name = e.target.player.value;
        playerService.getPlayersByName(name, drawPlayers)
    }


}