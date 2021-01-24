var words = [
  "appel",
  "aldus",
  "afwas",
  "aftel",
  "aarde",
  "armen",
  "actie",
  "apart",
  "adres",
  "avond",
  "aders",
  "alarm",
  "boten",
  "balen",
  "beter",
  "bomen",
  "boren",
  "boven",
  "boxen",
  "brood",
  "broek",
  "brand",
  "breed",
  "benen",
  "beeld",
  "brief",
  "beten",
  "basis",
  "blauw",
  "beren",
  "buren",
  "banen",
  "bloed",
  "broer",
  "blond",
  "boter",
  "beleg",
  "breng",
  "baken",
  "beker",
  "blind",
  "bezig",
  "baden",
  "bedel",
  "bazen",
  "bazin",
  "baren",
  "beden",
  "beken",
  "bezem",
  "baard",
  "bidet",
  "breuk",
  "conus",
  "cello",
  "creme",
  "cloud",
  "cacao",
  "cadet",
  "cavia",
  "ceder",
  "combi",
  "china",
  "clown",
  "draai",
  "deden",
  "dalen",
  "derde",
  "delen",
  "dwaas",
  "daden",
  "dader",
  "dames",
  "diner",
  "datum",
  "dozen",
  "dreun",
  "duits",
  "dagen",
  "deren",
  "dwerg",
  "dwaal",
  "dwing",
  "druil",
  "droog",
  "draad",
  "dweil",
  "drank",
  "duren",
  "dwars",
  "drugs",
  "daten",
  "daler",
  "doorn",
  "disco",
  "degen",
  "droom",
  "dient",
  "drone",
  "dadel",
  "duwen",
  "druif",
  "deken",
  "deler",
  "elven",
  "eigen",
  "enger",
  "engel",
  "elder",
  "enkel",
  "effen",
  "email",
  "egaal",
  "fiets",
  "friet",
  "files",
  "forel",
  "films",
  "feest",
  "fruit",
  "falen",
  "flora",
  "fauna",
  "feeen",
  "freak",
  "forum",
  "fusie",
  "geven",
  "gaven",
  "groen",
  "graai",
  "getal",
  "grens",
  "grond",
  "groef",
  "graal",
  "gewei",
  "games",
  "grote",
  "groet",
  "garen",
  "gebak",
  "graag",
  "genre",
  "glans",
  "geluk",
  "geeuw",
  "horen",
  "heren",
  "halen",
  "hagel",
  "haren",
  "helen",
  "harde",
  "hemel",
  "hoofd",
  "huren",
  "hamer",
  "haken",
  "heden",
  "hotel",
  "hobby",
  "heler",
  "hoger",
  "ieder",
  "index",
  "immer",
  "icoon",
  "inlog",
  "inzet",
  "innig",
  "jovel",
  "jaren",
  "jicht",
  "jabot",
  "jacht",
  "jaden",
  "jagen",
  "jager",
  "japon",
  "jarig",
  "jawel",
  "jeans",
  "jemig",
  "jeugd",
  "joint",
  "jonas",
  "joule",
  "koken",
  "kreet",
  "koker",
  "kerst",
  "kegel",
  "koude",
  "kader",
  "krent",
  "kamer",
  "kaars",
  "kaart",
  "kraan",
  "krant",
  "keren",
  "kruid",
  "kerel",
  "kubus",
  "kraal",
  "kleur",
  "kroon",
  "klein",
  "korst",
  "klopt",
  "kabel",
  "kunst",
  "kopje",
  "krans",
  "klimt",
  "kater",
  "klink",
  "kudde",
  "kruis",
  "lopen",
  "laten",
  "lepel",
  "links",
  "laden",
  "leven",
  "lezen",
  "lucht",
  "lenen",
  "laser",
  "lente",
  "licht",
  "lader",
  "leder",
  "lunch",
  "lijst",
  "leger",
  "leden",
  "legen",
  "lagen",
  "lezer",
  "lever",
  "lingo",
  "loper",
  "luier",
  "lager",
  "leeuw",
  "maand",
  "malen",
  "maken",
  "media",
  "meter",
  "motor",
  "maten",
  "markt",
  "mazen",
  "molen",
  "meest",
  "meren",
  "model",
  "meden",
  "maden",
  "macht",
  "meeuw",
  "mager",
  "magen",
  "maren",
  "manen",
  "noord",
  "nieuw",
  "negen",
  "namen",
  "neven",
  "nodig",
  "naden",
  "neder",
  "nemen",
  "onder",
  "optel",
  "ovaal",
  "ovale",
  "onwel",
  "optie",
  "orden",
  "oppas",
  "ouder",
  "ophef",
  "oases",
  "palen",
  "plein",
  "pegel",
  "paars",
  "prijs",
  "piano",
  "pixel",
  "paden",
  "pasta",
  "pizza",
  "poten",
  "paard",
  "puber",
  "pauze",
  "preek",
  "polis",
  "pater",
  "proef",
  "panda",
  "penis",
  "prins",
  "pluto",
  "polen",
  "plint",
  "quota",
  "quant",
  "quark",
  "queue",
  "quilt",
  "quote",
  "robot",
  "reken",
  "raden",
  "regen",
  "radio",
  "rente",
  "regio",
  "rugby",
  "reden",
  "roken",
  "ruzie",
  "ruist",
  "regel",
  "racen",
  "races",
  "riool",
  "ramen",
  "radar",
  "roman",
  "rokje",
  "razen",
  "roede",
  "staan",
  "staal",
  "speel",
  "steeg",
  "stoel",
  "stook",
  "steek",
  "schep",
  "spijs",
  "stoep",
  "shirt",
  "samen",
  "sites",
  "sport",
  "spalk",
  "sjaal",
  "storm",
  "staat",
  "steun",
  "strak",
  "serie",
  "shows",
  "schat",
  "snoep",
  "sfeer",
  "smeer",
  "speer",
  "scene",
  "speld",
  "smeed",
  "smaak",
  "super",
  "stand",
  "steer",
  "smelt",
  "sedan",
  "skier",
  "sluis",
  "sneer",
  "steel",
  "truck",
  "terug",
  "typen",
  "talen",
  "taboe",
  "tegel",
  "taart",
  "tafel",
  "trouw",
  "teken",
  "teren",
  "taken",
  "treur",
  "tenen",
  "titel",
  "thuis",
  "tiara",
  "teder",
  "toets",
  "tabak",
  "trein",
  "tarwe",
  "telen",
  "teler",
  "uiten",
  "uilig",
  "uitje",
  "uiver",
  "ultra",
  "uniek",
  "uppie",
  "uraan",
  "uiers",
  "velen",
  "vloer",
  "video",
  "varen",
  "vegen",
  "veren",
  "vader",
  "vaten",
  "vuren",
  "vrouw",
  "vlees",
  "vogel",
  "vroeg",
  "vezel",
  "veins",
  "vorst",
  "veder",
  "vanaf",
  "vieze",
  "veger",
  "villa",
  "veler",
  "vrede",
  "vries",
  "woord",
  "wagen",
  "wonen",
  "waren",
  "warme",
  "weten",
  "water",
  "weren",
  "wazig",
  "wegen",
  "weven",
  "wezen",
  "weken",
  "wraak",
  "wilde",
  "wreed",
  "wrede",
  "wenst",
  "woest",
  "xenon",
  "yacht",
  "yucca",
  "zwaar",
  "zware",
  "zesde",
  "zagen",
  "zalig",
  "zomer",
  "zeden",
  "zwart",
  "zeven",
  "zicht",
  "zadel",
  "zweet",
  "zenuw",
  "zweer",
  "zweef",
  "zaden",
  "zaken",
  "zeker",
  "zever",
  "zeeen"
];

var body = document.getElementById('body')

var container = document.createElement('DIV');
container.id = 'container';

container.style.margin = '0px';
container.style.padding = '0px';
container.style.backgroundColor = '#0001e4';
container.style.width = '500px';
container.style.height = '400px';
container.style.position = 'relative';


var secondText = document.createElement('H2');
secondText.id = 'secondText';
secondText.innerHTML = 'User input';
secondText.style.position = 'absolute';
secondText.style.top = '125px';


var second = document.createElement('INPUT');
second.id = 'second';

second.style.position = 'absolute';
second.style.height = '30px';
second.style.top = '150px';
second.style.left = '150px';
second.style.width = '250px';

var button = document.createElement('BUTTON');
button.id = 'button';

button.style.width = '100px';
button.style.height = '25px';
button.style.position = 'absolute';
button.style.top = '200px';
button.style.left = '225px';
button.innerHTML = 'Check';
button.onclick = function() {
  Check();
};

var currentRow = 1;


var box = document.createElement('DIV');
box.id = 'box';

box.style.width = '500px';
box.style.backgroundColor = 'white';
box.style.height = '100px';
box.style.position = 'absolute';
box.style.top = '300px';



body.appendChild(container);
container1.appendChild(container);
container.appendChild(secondText);
container.appendChild(second);
container.appendChild(button);
container.appendChild(box);

function lingobordF(para) {
  for (var d = 1; d <= 5; d++) {
    for (var i = 1; i <= 5; i++) {
      var lingoButtons = document.createElement('BUTTON');
      lingoButtons.id = 'row' + d + '-lingoButton' + i;
      lingoButtons.style.display = 'none';
      if (d == 1) {
        lingoButtons.style.display = 'inline';
      }
      lingobord.appendChild(lingoButtons);
    }
  }
}
lingobordF();

var random = Math.floor(Math.random() * words.length);
var directWord = words[random];
var newWord = directWord.split('');

console.log(newWord);

for (var f = 1; f <= 5; f++) {
  var lingoButton = document.getElementById('row' + f + '-lingoButton1');
  lingoButton.style.backgroundColor = "green";
  lingoButton.innerHTML = newWord[0];
}

// console.log(directWord);

function Check(value) {
  var letterResult = [];
  var value = document.getElementById('second').value;
  var letters2 = value.split('');

  for (var a = 0; a < newWord.length; a++) {
    if (newWord[a] == letters2[a]) {
      letterResult[a] = true;
    } else {
      letterResult[a] = false;
    }
  }

  for (var i = 0; i < 5; i++) {
    var lingoButtons = document.getElementById('row' + currentRow + '-lingoButton' + (i + 1).toString())
    console.log(lingoButtons);
    lingoButtons.style.display = 'inline-block';
    lingoButtons.innerHTML = letters2[i];

    if (letterResult[i]) {
      lingoButtons.style.backgroundColor = "green";
      newWord[i] = '';
    }
  }
	console.log('done with green');

  for (var t = 0; t < 5; t++) {
		var lingoButtons = document.getElementById('row' + currentRow + '-lingoButton' + (t + 1).toString())
		lingoButtons.style.display = 'inline-block';
		lingoButtons.innerHTML = letters2[t];

		if (letterResult[t] == false && newWord.includes(letters2[t]) ) {
			lingoButtons.style.backgroundColor = "yellow";
			lingoButtons.style.borderRadius = '100px';
			newWord[newWord.indexOf(letters2[t])] = '';
			console.log(newWord);
		}
  }

  currentRow++;
  newWord = directWord.split('');

  if (directWord == value) {
    location.reload();
    alert('Good word');
  }
  // else if (currentRow <= 6) {
  //  location.reload();
  //  alert('Wrong word')
  //
  // }
}
