function Self(name,race,health,magic,xp,str,agi,con,Int,wis){
	this.Name = name;
	this.Race = race;
	this.Health = health;
	this.Magic = magic;
	this.XP = xp;
	this.Strength = str;
	this.Agility = agi;
	this.Constitution = con;
	this.Intelligence = Int;
	this.Wisdom = wis;
}

function Enemy(type,health,magic,challenge,defense,attack){
	this.Type = type;
	this.Health = health;
	this.Magic = magic;
	this.Challenge = challenge;
	this.Defense = defense;
	this.Attack = attack;
}