var btn = document.querySelector(".ganarate");
var animeArea = document.querySelector(".animeArea");
var ganarate = function () {
  var inputText = document.querySelector(".inputArea").value;
  var xmlRequest = new XMLHttpRequest();
  xmlRequest.open(`GET`, `https://api.jikan.moe/v3/search/anime?q=${inputText}`);
  xmlRequest.onloadstart = function () {
    console.log("loading...");
  }
  xmlRequest.onloadend = function () {
    var response = xmlRequest.responseText;
    var data = JSON.parse(response);
    data.results.forEach(element => {
      insertAnimeCard(element);
    });
  }
  xmlRequest.send();

  function insertAnimeCard(results) {
    animeArea.innerHTML += `<div class="card" style="width: 18rem; margin: 7px;">
        <img src="${results.image_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${results.title}</h5>
          <p class="card-text">${results.synopsis}</p>
        </div>
      </div>`
  }



  if (animeArea.innerHTML != 0) {
    animeArea.innerHTML = 0;
    data.results.forEach(element => {
      insertAnimeCard(element);
    });
  }

  document.querySelector("body").style.backgroundSize = "contain";
}
