function playerController() {
    // Private
    var playerService = new PlayerService(drawPlayer);
  
    function drawPlayer(chars) {
      var template = "<h1>NFL Players</h1>";
      for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        template += `
    <div>
    <img class="playerPic" src="${}" alt="">
    <h1>Name: ${char.name}</h1>
    <p>Position: ${char.position}</p>
    <p>Team: ${char.team}</p>
    <button onclick="controllers.playerController.addToTeam(${
        char.id})">Add to team</button>
  </div>
    `;
      }
      document.getElementById("playerCharacters").innerHTML = template;
    }

    function drawMyTeam(chars) {
        var template = "<h1>My Team</h1>";
        for (let i = 0; i < chars.length; i++) {
          const char = chars[i];
          template += `
            <div>
            <img class="playerPic" src="${}" alt="">
            <h1>Name: ${char.name}</h1>
            <p>Position: ${char.position}</p>
            <p>Team: ${char.team}</p>
            <button onclick="controllers.playerController.addToTeam(${char.id})">Remove from team</button>
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