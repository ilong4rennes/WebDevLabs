function activeNav() {

  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {

    x.className += " responsive";

  } else {

    x.className = "topnav";

  }

}

let map;

async function initMap() {
 // The location of Aquarium
 const position1 = { lat: 40.48645132550352, lng: -79.92161274855921 };
 // The location of Andy Warhol Museum
 const position2 = { lat: 40.44851426857141, lng: -80.002533618433942 };
 // Request needed libraries.
 //@ts-ignore
 const { Map } = await google.maps.importLibrary("maps");
 const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

 // The map, centered at Aquarium
 map = new Map(document.getElementById("map"), {
   zoom: 11,
   center: position1,
   mapId: "DEMO_MAP_ID",
 });

 // The marker, positioned at Aquarium
 const marker1 = new AdvancedMarkerElement({
   map: map,
   position: position1,
   title: "Aquarium",
 });

 const marker2 = new AdvancedMarkerElement({
    map: map,
    position: position2,
    title: "Andy Warhol Museum",
  });
}

initMap();

 function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if (h>=5 && h<12) {
        E.innerHTML=" Good morning, I am Amanda Lu";
    } else if (h>=12 && h<18) {
        E.innerHTML+=" Good afternoon, I am Amanda Lu";
    } else if (h>=18 && h<20) {
        E.innerHTML=" Good evening, I am Amanda Lu";
    } else  {
        E.innerHTML="Good night, I am Amanda Lu";
    } }
 greetingFunc();

 function addYear() {
    var d= new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML+=y;
 }

 function showList() {
    document.getElementById("FavList").style.display = "block";
    document.getElementById("SeeMoreBTN").style.display = "none";
 }

 $("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();  
    $("#readMore").show();    
  });
   $("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();    
  });

  function validate() {
    var userName = document.getElementById("UserName");
    var userEmail = document.getElementById("UserEmail");
    var userText = document.getElementById("Usertext");
    var msg = document.getElementById("ValidateMsg");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
 }

//  // Initialize and add the map

// let map;

// async function initMap() {
//  // The location of Kawaii Gifts
//  const position = { lat: 40.451038962179354, lng: -79.93488633978815 };
//  // Request needed libraries.
//  //@ts-ignore
//  const { Map } = await google.maps.importLibrary("maps");
//  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//  // The map, centered at Kawaii Gifts
//  map = new Map(document.getElementById("map"), {
//    zoom: 12,
//    center: position,
//    mapId: "DEMO_MAP_ID",
//  });

//  // The marker, positioned at Kawaii Gifts
//  const marker = new AdvancedMarkerElement({
//    map: map,
//    position: position,
//    title: "Kawaii Gifts",
//  });
// }

// initMap();