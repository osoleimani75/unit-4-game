// create Object 
var crystalGame = {
    // variables 
    userTotal:0,
    wins:0, 
    losses:0,
    gameRandom:0,


    // Generate Number between min and max
    getNumber: function(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }, 


    // start to reset game and generate new game 
    playGame: function(){
        this.gameRandom = this.getNumber(19,120);
        $("#rand-Num").text(this.gameRandom);
        $("#numOfWin").text(this.wins);
        $("#numOfLoss").text(this.losses);  
        $("#sum-Num").text("");
        this.userTotal = 0;
        $(".crystal").animate({"margin-left":"60px"}, "slow");
        $("input").css("display", "none");
        $("#winsMsg").css("display", "none");
        $("#lossesMsg").css("display", "none");
        $('#blue').val(this.getNumber(1,12));
        $('#green').val(this.getNumber(1,12));
        $('#orange').val(this.getNumber(1,12));
        $('#purple').val(this.getNumber(1,12));
    },


    // show number of winner and losses
    showResult: function(){
        $("#numOfWin").text(this.wins);
        $("#numOfLoss").text(this.losses); 
    },
    
    
    // check result who is winner 
    checkResult: function(){
        if (this.gameRandom === this.userTotal){
            this.wins++;
            $(".crystal").animate({"margin-left":"0"}, "slow");
            $("input").css("display", "inline");
            $("#winsMsg").css("display", "inline");
        }
        else if (this.userTotal>this.gameRandom){
            this.losses++;
            $(".crystal").animate({"margin-left":"0"}, "slow");
            $("input").css("display", "inline");
            $("#lossesMsg").css("display", "inline");
        }
        this.showResult();
    }

}

 // main to run 
$(document).ready(function(){

    $("#startBtn").click(function(){
        crystalGame.playGame();
    });

    $(".crystal").click(function(){
        if($('input').css('display') == 'none'){
                var chValue = parseInt($(this).val());
            crystalGame.userTotal += chValue;
            console.log(parseInt($(this).val()));
            $("#sum-Num").text(crystalGame.userTotal);
            crystalGame.checkResult();
        }
    });
        
});