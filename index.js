var superman = 
{
  name: "superman",
  power:"flight",
  color :"blue",
  strength : 10000,
  stealth:0

}
var batman =
{
  name:"batman",
  power:"martial arts",
  color:"black",
  strenght: 100,
  stealth: 1000
}
var greenLantern = 
{
  name:"greenLantern",
  power:"power ring",
  color:"green",
  strenght: 80,
  stealth: 200
}
var superheroes =[superman,batman,greenLantern];
console.log(superman.stealth);
console.log(batman.stealth);
console.log(superman.stealth < batman.stealth);
var n= superheroes.length
for(var i=0;i<n;i++)
{
 console.log("HeroName- "+superheroes[i].name+" CostumeColor- "+ superheroes[i].color);
}