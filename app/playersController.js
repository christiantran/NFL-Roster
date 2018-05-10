function PlayerController() {
    // Private
    var playerService = new PlayerService();

    function drawPlayers(players) {
        var template = "<h1>NFL Players</h1>";
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            template += `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <img class="card-img-top" src="${player.photo}" alt="Card image cap">
    <h1 class="card-title">${player.fullname}</h1>
    <p class="card-text">${player.position}</p>
    <p class="card-text">${player.pro_team}</p>
    <button class="btn btn-outline-danger" onclick="app.controllers.playerController.addToTeam(${player.id})">Add to team</button>
    </div>
    </div>
    `;
            //<a href="#" class="btn btn-primary">Go somewhere</a>
        }
        document.getElementById("nflPlayers").innerHTML = template;
    }

    function drawMyTeam(players) {
        var template = "<h1>My Team</h1>";
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            template += `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <img class="card-img-top" src="${player.photo}" alt="Card image cap">
    <h1 class="card-title">${player.fullname}</h1>
    <p class="card-text">${player.position}</p>
    <p class="card-text">${player.pro_team}</p>
    <button class="btn btn-outline-danger" onclick="app.controllers.playerController.removeFromTeam(${player.id})">Remove from team</button>
    </div>
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

    /*this.search = function search(e) {
        e.preventDefault();
        var name = e.target.player.value;
        playerService.getPlayersByName(name, drawPlayers)
    };*/

    this.search = function search(id) {
        id.preventDefault();
        var query = id.target.query.value
        var results = playerService.search(query)
        drawPlayers(results)
    }
}