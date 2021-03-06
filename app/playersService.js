function PlayerService() {
    var playersData = [];
    var myTeam = [];
    /*for (var i = 0; i < 20; i++) {
        playersData.push(Math.random());
    }*/

    /*var loading = true;
    var playerService = new PlayerService(ready);

    function ready() {
        loading = false;
    }*/

    this.getPlayersByTeam = function (teamName) {
        return playersData.filter(function (player) {
            if (player.team == teamName) {
                return true;
            }
        });
    }

    this.getPlayersByPosition = function (position) {
        return playersData.filter(function (player) {
            if (player.position == position) {
                return true;
            }
        });
    }

    this.getPlayersByName = function (name, cb) {
        var filteredPlayers = playersData.filter(function (player) {
            if (player.fullname.includes(name)) {
                return true;
            }
        });
        return cb(filteredPlayers)
    }

    this.addToTeam = function addToTeam(id, cb) {
        var filteredPlayers = playersData.filter(function (player) {
            if (player.id == id) {
                myTeam.push(player)
            }
        });
        return cb(myTeam)
    };

    this.removeFromTeam = function removeFromTeam(id, cb) {
        var filteredPlayers = playersData.filter(function (player) {
            if (player.id == id) {
                myTeam.splice(player)
            }
        });
        return cb(myTeam)
    };
    //return callback(userTeam, false)

    this.search = function search(query) {
        var searches = query.toLowerCase()
        var filteredSearches = playersData.filter(function (player) {
            return player.fullname.toLowerCase().includes(searches) || player.pro_team.toLowerCase().includes(searches) || player.position.toLowerCase().includes(searches)
        })
        return filteredSearches

    }

    function loadPlayersData() {
        //check if the player already has a copy of the NFL playersData
        var localData = localStorage.getItem('playersData');
        //if they do, pull from there
        if (localData) {
            playersData = JSON.parse(localData);
            //return will short-circuit the loadPlayersData function
            //this will prevent the code below from ever executing
            console.log(playersData)
            return
        }
        //if not go get that data
        var url = "https://bcw-getter.herokuapp.com/?url=";
        var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
        var apiUrl = url + encodeURIComponent(endpointUri);

        $.getJSON(apiUrl, function (data) {
            playersData = data.body.players;
            console.log('Player Data Ready')
            console.log('Writing Player Data to localStorage')
            localStorage.setItem('playersData', JSON.stringify(playersData))
            console.log('Finished Writing Player Data to localStorage')
        });
    }
    loadPlayersData(); //call the function above every time we create a new service
}
