const d = new Date();
document.getElementById("date").innerHTML = d.toDateString();
    const api = {
  key: "96ac691d87bd7e4e064ffc9ee928ddf5",
  base: "https://api.openweathermap.org/data/2.5/"
}
    const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);
function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
    //console.log(searchbox.value);
  }
}
//AJAX  API 
function getResults (query) {
    var request = new XMLHttpRequest();
request.open('GET',"https://api.openweathermap.org/data/2.5/weather?q="+query+"&units=metric&appid=b739d23c5b442dc2f494c8a0c78af77f",true)
request.onload = function(){
   if(request.status >=200 && request.status<400){
       
       var data = JSON.parse(request.responseText);
       console.log(data);
    document.getElementById("temp").innerHTML=data.weather[0].main;
         document.getElementById("location").innerHTML= data.name;
       document.getElementById("temp1").innerHTML=data.main.temp;
       document.getElementById("max").innerHTML=data.main.temp_max;
       document.getElementById("min").innerHTML=data.main.temp_min;

    }
   else
   console.log("error");
};
request.send();
}



