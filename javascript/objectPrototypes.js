function Self(name,health,magic,xp,str,agi,con,Int,wis,rempoint){
	this.Name = name;
	this.Health = health;
	this.Magic = magic;
	this.XP = xp;
	this.Strength = str;
	this.Agility = agi;
	this.Constitution = con;
	this.Intelligence = Int;
	this.Wisdom = wis;
	this.pointsRemain = rempoint;
}

function Enemy(type,health,magic,challenge,defense,attack){
	this.Type = type;
	this.Health = health;
	this.Magic = magic;
	this.Challenge = challenge;
	this.Defense = defense;
	this.Attack = attack;
}

function Gear(type,name,stats,level,rarity){//stats - array [min-damage,max-damage,crit-chance,crit-multiplier,accuracy,defense] || type - equip location: head,shoulders,chest,feet,arms,main hand,off hand
	this.type = type;
	this.name = name;
	this.stats = stats;
	this.level = level;
	this.rarity = rarity;
}