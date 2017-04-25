function addPoint(stat,bol){
	if(player.pointsRemain > 0){
		player[stat]++;
		player.pointsRemain--;
		if(bol == true){
			beginUpdate(stat);
		}
		else{
			updateSubStats(stat);
		}
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function removePoint(stat,bol){
	if(player[stat] > 1){
		player[stat]--;
		player.pointsRemain++;
		if(bol == true){
			beginUpdate(stat);
		}
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function beginUpdate(stat){
	$("#" + stat + "Span").empty();
	$("#" + stat + "Span").append(player[stat]);
	$("#PointsRemain").empty();
	$("#PointsRemain").append(player.pointsRemain);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function updateSubStats(stat){
	switch(stat){
		case 'Constitution':
			player.Health = player.Constitution * 5;
			player.CurrentHealth = player.CurrentHealth + 5;
			loadChar();
			break;
		
		case 'Intelligence':
			player.Magic = player.Intelligence * 5;
			player.CurrentMagic = player.CurrentMagic + 5;
			loadChar();
			break;
		
		default:
			loadChar();
	}
	
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function confirmChar(){
	if(document.getElementById("TxName").value != ""){
		if(confirm("Confirm your character.\n\nName: " + document.getElementById("TxName").value + "\n\nStrength: " + player.Strength + "\nAgility: " + player.Agility + "\nConstitution: " + player.Constitution + "\nIntelligence: " + player.Intelligence + "\nWisdom: " + player.Wisdom) == true){
			player.Name = document.getElementById("TxName").value;
			player.Health = player.Constitution * 5;
			player.CurrentHealth = player.Health;
			player.Magic = player.Intelligence * 5;
			player.CurrentMagic = player.Magic;
			loadChar();
			toggle('gameScreen','newGame');
		}
	}
	else{
		document.getElementById("TxName").style.background="#f00";
		alert("Please provide a name for your character.");
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function updateStat(stat){
	$("#self" + stat).empty();
	$("#self" + stat).append(player[stat]);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function updateGear(gear){
	$("#self" + gear).empty();
	
	if(equip[gear] != false){
		$("#self" + gear).append(equip[gear].Name);
	}
	else{
		switch(gear){
			case 'Chest':
				$("#self" + gear).append(shirt.Name);
				break;
			
			case 'Legs':
				$("#self" + gear).append(pants.Name);
				break;
			
			case 'MainHand':
				$("#self" + gear).append(fists.Name);
				break;
			
			case 'OffHand':
				$("#self" + gear).append(fists.Name);
				break;
			
			default:
				$("#self" + gear).append(nothing.Name);
		}
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function loadChar(){
	var statArray = ['Name','Level','CurrentHealth','Health','CurrentMagic','Magic','Xp','Strength','Agility','Constitution','Intelligence','Wisdom','Gold'];
	var gearArray = ['Head','Shoulders','Chest','Arms','Legs','Feet','MainHand','OffHand'];
	
	for(var i=0;i<statArray.length;i++){
		updateStat(statArray[i]);
	}
	
	for(var i=0;i<gearArray.length;i++){
		updateGear(gearArray[i]);
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toggle(obj1,obj2){
	$("#" + obj2).hide();
	$("#" + obj1).show();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkLevel(){
	if(player.Xp >= 1000 * player.Level * player.Level){
		player.Level++;
		player.pointsRemain += 5;
		$(".LevelUp").show();
	}
}