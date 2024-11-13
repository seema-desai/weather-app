let input=document.querySelector("#input1");
let imgbtn=document.querySelector("#img-btn");
let searchBtn=document.querySelector("#search");
let temp=document.querySelector(" .c >h1");
let cityname=document.querySelector(".c>p");
let wind=document.querySelector(".wind >p");
let humadity=document.querySelector(".humadity >p");
let array=[document.querySelector(".img-c"),document.querySelector(".c"),document.querySelector(".speed"),document.querySelector(".humadity")];

async function weatherCheck(city) {
    const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
    let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        let data= await response.json();
        console.log(data);
        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
          

          } 
       else{
    //show img of wether
        console.log(data.weather[0].main);
    if (data.weather[0].main == "Clouds") {
      imgbtn.src = "img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      imgbtn.src="img/clear.webp";
    } else if (data.weather[0].main == "Rain") {
      imgbtn.src = "img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      imgbtn.src = "img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      imgbtn.src = "img/mist.png";
    }
     console.log(data.main.temp)
    temp.innerHTML=data.main.temp + "*C";
    cityname.innerHTML=data.name;
    wind.innerHTML=data.wind.speed;
    humadity.innerHTML=data.main.humidity;
    
    document.querySelector(".error").style.display = "none";
       }
    
}

 searchBtn.addEventListener("click",() => {
 weatherCheck(input.value);
 });
//  searchBtn.addEventListener("click", () => {
//     weatherCheck(input.value);
//   });

