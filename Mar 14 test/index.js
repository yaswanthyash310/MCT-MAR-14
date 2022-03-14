const API_KEY = "ff213d7ae51c2b389d1cf08948836448";

const convert_fn = function(res){
    return res.json();
}
const show_data = function(original_data){
     const search_data = original_data.main;
      const parent_elem = document.getElementById('container');
      parent_elem.innerHTML=""
     var heading = document.getElementById('search');
     const div_elem = document.createElement('div')

     const temp = document.createElement('h2')
     const max = document.createElement('h2')

     const min = document.createElement('h2')
     const pressure = document.createElement('h2')
     temp.innerText = (`Temperature ${((search_data.temp)-273).toFixed(2)}°C`) ;
     max.innerText = (`MAX ${((search_data.temp_max)-273).toFixed(2)}°C`);
     min.innerText = (`MIN ${((search_data.temp_min)-273).toFixed(2)}°C`);
     pressure.innerText = (` Pressure ${search_data.pressure}`);

    div_elem.appendChild(temp);
    div_elem.appendChild(max);
    div_elem.appendChild(min);
    div_elem.appendChild(pressure);

    parent_elem.appendChild(div_elem);
}

const disp = function(){
    const temp_disp = document.getElementById('temp');
    temp_disp.innerText = temp ;
}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Shajapur&appid=${API_KEY}`).then(convert_fn).then(show_data);




const btn = document.getElementById('search_btn');


const search_fn = function(e){
    if(e.key == "Enter"){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${API_KEY}`).then(convert_fn).then(show_data);



    }
}
const btn_search= function(){
    const ip = document.getElementById('search');


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ip.value}&appid=${API_KEY}`).then(convert_fn).then(show_data);

}

btn.addEventListener('click',btn_search);
ip.addEventListener('keyup', search_fn);

