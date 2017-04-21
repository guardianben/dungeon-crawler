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
			player.Name = document.getElementsByName("TxName")[0].value;
			player.Health = player.Constitution * 5;
			player.Magic = player.Intelligence * 5;
			loadChar();
			toggle('gameScreen','newGame');
		}
	}
	else{
		document.getElementsByName("TxName")[0].style.background="#f00";
		alert("Please provide a name for your character.");
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function loadChar(){
	$("#selfName").empty();
	$("#selfName").append(player.Name);
	$("#selfHealth").empty();
	$("#selfHealth").append(player.Health);
	$("#selfMagic").empty();
	$("#selfMagic").append(player.Magic);
	$("#selfXp").empty();
	$("#selfXp").append(player.XP);
	$("#selfStr").empty();
	$("#selfStr").append(player.Strength);
	$("#selfAgi").empty();
	$("#selfAgi").append(player.Agility);
	$("#selfCon").empty();
	$("#selfCon").append(player.Constitution);
	$("#selfInt").empty();
	$("#selfInt").append(player.Intelligence);
	$("#selfWis").empty();
	$("#selfWis").append(player.Wisdom);
	$("#selfGold").empty();
	$("#selfGold").append(player.Gold);
	$("#selfHead").empty();
	if(equip.Head == false){
		$("#selfHead").append(nothing.Name);
	}
	else{
		$("#selfHead").append(equip.Head.Name);
	}
	$("#selfShoulder").empty();
	if(equip.Shoulders == false){
		$("#selfShoulder").append(nothing.Name);
	}
	else{
		$("#selfShoulder").append(equip.Shoulders.Name);
	}
	$("#selfChest").empty();
	if(equip.Chest == false){
		$("#selfChest").append(shirt.Name);
	}
	else{
		$("#selfChest").append(equip.Chest.Name);
	}
	$("#selfArms").empty();
	if(equip.Arms == false){
		$("#selfArms").append(nothing.Name);
	}
	else{
		$("#selfArms").append(equip.Arms.Name);
	}
	$("#selfLegs").empty();
	if(equip.Legs == false){
		$("#selfLegs").append(pants.Name);
	}
	else{
		$("#selfLegs").append(equip.Legs.Name);
	}
	$("#selfFeet").empty();
	if(equip.Feet == false){
		$("#selfFeet").append(nothing.Name);
	}
	else{
		$("#selfFeet").append(equip.Feet.Name);
	}
	$("#selfMainHand").empty();
	if(equip.Main_Hand == false){
		$("#selfMainHand").append(fists.Name);
	}
	else{
		$("#selfMainHand").append(equip.Main_Hand.Name);
	}
	$("#selfOffHand").append();
	if(equip.Off_Hand == false){
		$("#selfOffHand").append(fists.Name);
	}
	else{
		$("#selfOffHand").append(equip.Off_hand.Name);
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toggle(obj1,obj2){
	$("#" + obj2).hide();
	$("#" + obj1).show();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////