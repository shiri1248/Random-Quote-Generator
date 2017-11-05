var quotes=[
  " The Way Get Started Is To Quit Talking And Begin Doing. -Walt Disney",
  "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. -Winston Churchill",
 "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up. -Vince Lombardi",
 "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.- Rob Siltanen",
 "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.”- Og Mandino",
 "We May Encounter Many Defeats But We Must Not Be Defeated.- Maya Angelou",
 "Don't cry because it's over, smile because it happened.-Dr.Seuss",
 "Be yourself; everyone else is already taken.- Oscar Wilde"]



function newQuote(){
	var randomNumber=Math.floor(Math.random() * (quotes.length));
document.getElementById("quoteDisplay").innerHTML=quotes[randomNumber];
}