function addPoint(stat,obj){
	if(player.pointsRemain > 0){
		player[stat]++;
		$("#" + obj).empty();
		$("#" + obj).append(player[stat]);
		player.pointsRemain--;
		$("#PointsRemain").empty();
		$("#PointsRemain").append(player.pointsRemain);
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function removePoint(stat,obj){
	if(player[stat] > 1){
		player[stat]--;
		$("#" + obj).empty();
		$("#" + obj).append(player[stat]);
		player.pointsRemain++;
		$("#PointsRemain").empty();
		$("#PointsRemain").append(player.pointsRemain);
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function confirmChar(){
	if(document.getElementsByName("TxName")[0].value != ""){
		if(confirm("Confirm your character.\n\nName: " + document.getElementsByName("TxName")[0].value + "\n\nStrength: " + player.Strength + "\nAgility: " + player.Agility + "\nConstitution: " + player.Constitution + "\nIntelligence: " + player.Intelligence + "\nWisdom: " + player.Wisdom) == true){
			player.Health = player.Constitution * 5;
			player.Magic = player.Intelligence * 5;
			toggle('gameScreen','newGame');
		}
	}
	else{
		document.getElementsByName("TxName")[0].style.background="#f00";
		alert("Please provide a name for your character.");
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toggle(obj1,obj2){
	$("#" + obj2).hide();
	$("#" + obj1).show();
}