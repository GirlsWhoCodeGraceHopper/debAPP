function Round(proTeamCode, conTeamCode, proRoundPoints, conRoundPoints, whoWon) {
    //once connected to page 2 create ID's for all the different text boxes and set these variables equal to the inputted text within them..#FUN
    this.proTeamCode = proTeamCode;
    this.conTeamCode = conTeamCode;
    this.proRoundPoints = proRoundPoints;
    this.conRoundPoints = conRoundPoints;
    this.whoWon = whoWon;

    //returns winning team for this round
    this.gettingWins = function (roundObject) {
        //    if ($("#proWin").val() = true) {
        if (this.proRoundPoints > this.conRoundPoints) {
            return this.proTeamCode;
        } else {
            return this.conTeamCode;
        }
    };
}
//output teamCode and add else statement to print the conTeam if this statement is not true


function Tournament() {
    this.resultsDictionary = {};
    this.teamList = [];

   
    this.addPoints = function (roundObject) {
        //takes the value of that specific key (team) and adds the round points to it 
        if (this.resultsDictionary[roundObject.proTeamCode] === undefined || this.resultsDictionary[roundObject.conTeamCode] === undefined) {
            this.resultsDictionary[roundObject.proTeamCode] = [roundObject.proRoundPoints, 0];
            this.resultsDictionary[roundObject.conTeamCode] = [roundObject.conRoundPoints, 0];
            this.addWins(roundObject);
        } else {
            this.resultsDictionary[roundObject.proTeamCode][0] = this.resultsDictionary[roundObject.proTeamCode][0] + roundObject.proRoundPoints;
            this.resultsDictionary[roundObject.conTeamCode][0] = this.resultsDictionary[roundObject.conTeamCode][0] + roundObject.conRoundPoints;
            this.addWins(roundObject);
            //connect it to HTML (make HTML ID for points to add to dictionary)
        }
    };

     this.addWins = function (roundObject) { 
         console.log(roundObject.gettingWins());
         console.log(roundObject.proTeamCode);
        if (roundObject.gettingWins() === roundObject.proTeamCode) {
            this.resultsDictionary[roundObject.proTeamCode][1] = this.resultsDictionary[roundObject.proTeamCode][1] + 1;
        } else {
            console.log(roundObject.conTeamCode);
            console.log(this.resultsDictionary[roundObject.conTeamCode][1]);
            this.resultsDictionary[roundObject.conTeamCode][1] = this.resultsDictionary[roundObject.conTeamCode][1] + 1;
        }
    };

    this.rankTeams = function () {

    };

    //	this.display = function() {
    //$("#listofrounds").html("");
    //for (var i = 0; i < this.resultsList.length; i++) {
    //$("#listofrounds").append(
    //'<li>' + this.taskList[i].name + '</li>'
    //);
    //}
    //  };
}

var tourney = new Tournament();
console.log(tourney.resultsDictionary);
var round1 = new Round("10bs", "16LS", 25, 30, "p");
tourney.addPoints(round1);
console.log(tourney.resultsDictionary);
var round2 = new Round("10bC", "16LA", 14, 27, "p");
tourney.addPoints(round2);
console.log(tourney.resultsDictionary);