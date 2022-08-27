
//read more read less button
function readMoreReadLess() {

  var linebreak = document.getElementById("linebreak");

  var mores = document.getElementById("more");

  var texts = document.getElementById("myBtn");

//more text shows when button is pressed
  if (linebreak.style.display === "none") {
    linebreak.style.display = "inline";
    texts.innerHTML = "Read more"; 
    mores.style.display = "none";


//less text shows when button is pressed
  } else {

    linebreak.style.display = "none";
    texts.innerHTML = "Read less"; 
    mores.style.display = "inline";

  }
}




//lightbox
const lightbox = document.createElement("div")
lightbox.id = "lightbox"
document.body.appendChild(lightbox)

//gets all images on page
const images = document.querySelectorAll("img")
//loops images
images.forEach(image => {
//when clicking on image makes lightbox active
  image.addEventListener("click", e => {
    lightbox.classList.add("active")
    const img = document.createElement("img")
    img.src = image.src
    //removes multiple images when clicked
    while(lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild)
    }
    //displays image when clicked
    lightbox.appendChild(img)

  })
})
//when clicking away image goes away
lightbox.addEventListener("click", e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove("active")
})


//table with pictures
function createTable(){

//creates array
var autpic = new Array();



autpic.push(["Picture Number", "Title", "Picture"]);
autpic.push([1, "Red Leaf", "aut1.jpg"]);
autpic.push([2, "Autumn House", "aut2.jpg"]);
autpic.push([3, "Autumn Stairs", "aut3.jpg"]);
autpic.push([4, "Autumn Tree", "aut4.jpg"]);
autpic.push([5, "Autumn Forest", "aut5.jpg"]);


        var tbl = document.createElement("TABLE");
        tbl.border = "1";

      
       
       
        var columnCount = autpic[0].length;
//adding header row
        var row = tbl.insertRow(-1);




        for (var i = 0; i < columnCount; i++) {
            var head = document.createElement("TH");
            head.innerHTML = autpic[0][i];
            row.appendChild(head);
        }

        //adding data rows
        for (var i = 1; i < autpic.length; i++) {

          row = tbl.insertRow(-1);
          for (var j = 0; j < columnCount; j++) {

              var cell = row.insertCell(-1);
              if (j < 2) {
                  cell.innerHTML = autpic[i][j];
              } else {

                  var img = document.createElement("IMG");
                  img.src = autpic[i][j];
                  cell.appendChild(img);

              }
          }
      }

      var tablez = document.getElementById("tablez");
      tablez.innerHTML = "";
      tablez.appendChild(tbl);

  }

  //handlebars
function handlepictures(){
  var data= {
    title: "Some facts about photography",
    //my list of facts
    list: [
      {name: "The Largest Camera Collection Consists of 4,425 Cameras"},
      {name: "The First Photo of a Person Was Accidental"},
      {name: "The First Digital Camera was Invented in 1975"},
      {name: "The First Digital Camera Weighed 4x More Than a Modern DSLR"},
      {name: "The First Color Photograph Was Taken in 1861"},
      {name: "The First Projected Image Was Through a Camera Obscura"},
      {name: "Potassium Chloride and Aluminum Made the First Flashes"},
      {name: "The Worlds Most Expensive Photograph Sold for $4.3 Million"},
      {name: "The Daguerreotype Was the First Camera Capable of Recording an Image"},
      {name: "Kodak Doesnt Mean Anything"},
    ],
    footer: "What do you think?"
   
  };
  var template = Handlebars.compile(document.querySelector("#template").innerHTML);
  //fills in data into the template
  var filled = template(data);
  document.querySelector("#output").innerHTML = filled;



 


  }
  
