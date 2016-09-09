var msg = document.getElementById('recipes');
var vid = document.getElementById('youtube');
var namez = document.getElementById('final');
var btn = document.getElementById('appendBtn')
var carbYes = document.getElementById('switch_left1')
var carbNo = document.getElementById('switch_right2')
var swtYes = document.getElementById('switch_left3')
var swtNo = document.getElementById('switch_right4')
var frshYes = document.getElementById('switch_left')
var frshNo = document.getElementById('switch_right')

//the request----------------------------------------------------------//
// btn.addEventListener("click",callback)
// function callback(){

  var allNos = new XMLHttpRequest();
  allNos.onreadystatechange = function(){
    if(allNos.readyState === 4 && allNos.status < 400){
      var userInput = JSON.parse(allNos.responseText)
      var results = userInput.result
      // var ingred = userInput.result[6].ingredients
      // var drinkName = userInput.result[6].name
      // var youTbe = userInput.result[6].videos[0].video
       console.log("results3: ",results);
      // console.log("ingred2: ",ingred);
      // console.log("name2: ", drinkName);
      // console.log("youtube2: ",youTbe);
      //  if(carbNo.checked && swtNo.checked && frshNo.checked == true){
      //
      //    for (var i = 0; i < ingred.length; i++) {
      //      // bucket.push(ingred[i].id)
      //      // console.log("bucket: ",bucket);
      //      var add = document.createElement("li");
      //      // add.innerHTML = ""
      //      add.innerHTML = ingred[i].textPlain;
      //      msg.appendChild(add)
      //    }
      //    //adding youtube video******
      //    var addYoutube = document.createElement("p")
      //    addYoutube.innerHTML = '<iframe id="tube" width="47%" height="400vh" src="http://www.youtube.com/embed/"'+ youTbe + ">" + "</iframe>"
      //    console.log("tube: ", addYoutube);
      //    vid.appendChild(addYoutube)
      //    //end adding youtube video*****
      //   //  adding name *******
      //    var addName = document.createElement("h1")
      //    addName.innerHTML = drinkName
      //    namez.appendChild(addName)
      //   //  end adding name******
      // }else{
      //   return false
      // }

    }
  }
  allNos.open("GET","http://cors-anywhere.herokuapp.com/https://addb.absolutdrinks.com/tastes?apiKey=6efe02f32b424625b018db817dfe686d");
  allNos.send()
// }
