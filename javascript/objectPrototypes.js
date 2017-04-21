function Self(name,level,health,magic,xp,str,agi,con,Int,wis,rempoint,loc,gold){
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
	this.Location = loc;
	this.Gold = gold;
}

function Equipment(head,shoulders,chest,arms,legs,feet,mHand,oHand){
	this.Head = head;
	this.Shoulders = shoulders;
	this.Chest = chest;
	this.Arms = arms;
	this.Legs = legs;
	this.Feet = feet;
	this.Main_Hand = mHand;
	this.Off_Hand = oHand;
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
	this.Type = type; //type - equip location: head,shoulders,chest,legs,feet,arms,main hand,off hand,any hand,
	this.Name = name;
	this.Stats = stats; //stats - array [min-damage,max-damage,crit-chance,crit-multiplier,accuracy,defense]
	this.Level = level;
	this.Rarity = rarity;
}

var shirt = new Gear('chest','shirt',[false,false,false,false,false,0],1,0);
var pants = new Gear('legs','pants',[false,false,false,false,false,0],1,0);
var fists = new Gear('any hand','fists',[0,0,5,2,70,false],1,0);
var nothing = new Gear('special','nothing',[false,false,false,false,false,false],1,0);