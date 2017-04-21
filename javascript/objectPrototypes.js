function Self(name,level,health,magic,xp,str,agi,con,Int,wis,rempoint,inv,loc,gold){
	this.Name = name;
	this.Level = level;
	this.Health = health;
	this.Magic = magic;
	this.XP = xp;
	this.Strength = str;
	this.Agility = agi;
	this.Constitution = con;
	this.Intelligence = Int;
	this.Wisdom = wis;
	this.pointsRemain = rempoint;
	this.Inventory = inv;
	this.Location = loc;
	this.Gold = gold;
}

function Enemy(type,health,magic,challenge,defense,attack,loc){
	this.Type = type;
	this.Health = health;
	this.Magic = magic;
	this.Challenge = challenge;
	this.Defense = defense;
	this.Attack = attack;
	this.Location = loc;
}

function Gear(type,name,stats,level,rarity){
	this.Type = type; //type - equip location: head,shoulders,chest,feet,arms,main hand,off hand
	this.Name = name;
	this.Stats = stats; //stats - array [min-damage,max-damage,crit-chance,crit-multiplier,accuracy,defense]
	this.Level = level;
	this.Rarity = rarity;
}