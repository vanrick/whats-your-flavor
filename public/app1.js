//-----------HIDE PAGES-------------------------------------------------//
function show(elementID) {
    var ele = document.getElementById(elementID);
    if (!ele) {
        alert("no such element");
        return;
    }
    var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}
//---------------------------------------------------------------------//
var msg = document.getElementById('recipes');
var vid = document.getElementById('youtube');
var namez = document.getElementById('final');
var btn = document.getElementById('appendBtn');
var carbYes = document.getElementById('switch_left1');
var carbNo = document.getElementById('switch_right2');
var swtYes = document.getElementById('switch_left3');
var swtNo = document.getElementById('switch_right4');
var hrbYes = document.getElementById('herb_left');
var hrbNo = document.getElementById('herb_right');
var frshYes = document.getElementById('switch_left');
var frshNo = document.getElementById('switch_right');
var spcyBtn = document.getElementById('spicyImg');
var bcnBtn = document.getElementById('bcnImg')
var bcnn = document.getElementById('bac')
// var incomp = document.getElementById('incomplete')
// console.log("carbyes: ",carbYes.checked);
// console.log("carbNo: ",carbNo.checked);

//----RANDOM INTEGER***************************//
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//the request----------------------------------------------------------//
btn.addEventListener("click",callback)
function callback(){
  var allYes = new XMLHttpRequest();
  allYes.onreadystatechange = function(){
    if(allYes.readyState === 4 && allYes.status < 400){
      var userInput = JSON.parse(allYes.responseText)
      var results1 = userInput.result[getRandomInt(0, userInput.result.length)]
      // console.log("full Result: ",results);
      var ingred = (results1).ingredients
      var drinkName = (results1).name
      var youTbe = (results1).videos[0].video

      console.log("results1: ", results1);
      // console.log("name: ", drinkName);
      // console.log("youtube: ",youTbe);
      // function reset_msg() {
      //   incomp.innerHTML = '';
      // }



      // if (carbYes.checked && swtYes.checked && frshYes.checked == true) {
        for (var i = 0; i < ingred.length; i++) {
          // bucket.push(ingred[i].id)
          // console.log("bucket: ",bucket);
          var add = document.createElement("li");
          // add.innerHTML = ""
          add.innerHTML = ingred[i].textPlain;
          msg.appendChild(add)
        }
        //adding youtube video******
        var addYoutube = document.createElement("p")
        addYoutube.innerHTML = '<iframe id="tube" width="47%" height="400vh" src="http://www.youtube.com/embed/'+ youTbe +'" ></iframe>'
        // console.log("tube: ", addYoutube);
        vid.appendChild(addYoutube)
        //end adding youtube video*****
        //adding name *******
        var addName = document.createElement("h1")
        addName.innerHTML = drinkName
        namez.appendChild(addName)
        //end adding name******




    }
  }
//url changing variables depending on options******************
  var fizz_type = carbYes.checked  ? "carbonated" : "not/carbonated"
  console.log("fizz: ", fizz_type);
  var swt_type = swtYes.checked  ? "tasting/sweet/" : "not/tasting/sweet"
  console.log("sweet: ", swt_type);
  var hrb_type = hrbYes.checked ? "tasting/herb" : "not/tasting/herb"
  console.log("herb: ", hrb_type);
  var frsh_type = frshYes.checked  ? "and/fresh" : "not/tasting/fresh"
  console.log("fresh: ", frsh_type);

  if (swtYes.checked  && hrbYes.checked){
    hrb_type = "and/herb";
  }else if(hrbNo.checked && frshYes.checked){
    frsh_type = "tasting/fresh"
  }
//END url changing variables depending on options******************
  allYes.open("GET",'http://cors-anywhere.herokuapp.com/https://addb.absolutdrinks.com/drinks/'+fizz_type+'/hasvideo/'+swt_type+'/'+hrb_type+'/'+frsh_type+'/not/tasting/spicy?apiKey=6efe02f32b424625b018db817dfe686d');
  allYes.send()
}
// /not/tasting/sweet/tasting/herb/not/tasting/fresh
//------------SPICY---------------------------------------------------//
spcyBtn.addEventListener("click",callback)
function callback(){
  var all1 = new XMLHttpRequest();
  all1.onreadystatechange = function(){
    if(all1.readyState === 4 && all1.status < 400){
      var userInput = JSON.parse(all1.responseText)
      var results2 = userInput.result[getRandomInt(0, userInput.result.length)]
      // console.log("full Result: ",results2);
      var ingred = (results2).ingredients
      var drinkName = (results2).name
      var youTbe = (results2).videos[0].video

      // console.log("spicy: ", ingred);
      // console.log("name: ", drinkName);
      // console.log("youtube: ",youTbe);



      msg.innerHTML = ""
      namez.innerHTML = ""
      vid.innerHTML = ""
      // if (carbYes.checked && swtYes.checked && frshYes.checked == true) {
        for (var i = 0; i < ingred.length; i++) {
          // bucket.push(ingred[i].id)
          // console.log("bucket: ",bucket);
          var add = document.createElement("li");
          // add.innerHTML = ""
          add.innerHTML = ingred[i].textPlain;
          msg.appendChild(add)
        }
        //adding youtube video******
        var addYoutube = document.createElement("p")
        addYoutube.innerHTML = '<iframe id="tube" width="45%" height="480vh" src="http://www.youtube.com/embed/'+ youTbe +'" ></iframe>'
        // console.log("tube: ", addYoutube);
        vid.appendChild(addYoutube)
        //end adding youtube video*****
        //adding name *******
        var addName = document.createElement("h1")
        addName.innerHTML = drinkName
        namez.appendChild(addName)
        //end adding name******




    }
  }

 // url changing variables depending on options******************
  var fizz_type = carbYes.checked  ? "carbonated" : "not/carbonated"
  console.log("fizz: ", fizz_type);
  var swt_type = swtYes.checked  ? "tasting/sweet/" : "not/tasting/sweet"
  console.log("sweet: ", swt_type);
  var hrb_type = hrbYes.checked ? "tasting/herb" : "not/tasting/herb"
  console.log("herb: ", hrb_type);
  var frsh_type = frshYes.checked  ? "and/fresh" : "not/tasting/fresh"
  console.log("fresh: ", frsh_type);
  var spcy_type = "and/spicy"

  if (swtYes.checked  && hrbYes.checked){
  hrb_type = "and/herb";
  }else if(hrbNo.checked && frshYes.checked){
  frsh_type = "tasting/fresh"
  }else if(frshNo.checked){
  spcy_type = "tasting/spicy"
   }
//END url changing variables depending on options******************
  all1.open("GET",'http://cors-anywhere.herokuapp.com/https://addb.absolutdrinks.com/drinks/'+fizz_type+'/hasvideo/'+swt_type+'/'+hrb_type+'/'+frsh_type+'/'+spcy_type+'?apiKey=6efe02f32b424625b018db817dfe686d');
  all1.send()
}

//BACON *********************************************************
// function myFunction() {
//     // var x = document.getElementById('myDIV');
//     if (bcnn.style.visibility === 'hidden') {
//         bcnn.style.visibility = 'visible';
//     } else {
//         bcnn.style.visibility = 'hidden';
//     }
// }
