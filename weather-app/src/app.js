import { Elements } from "./elements";
import { GetData } from "./data";


let units = "metric"; 
let symbol = "°C";

GetData("Prague",units).then(data => {
    Elements.status_div.textContent = data.state;
    Elements.city_div.textContent = data.city;
    Elements.temp_div.textContent = data.temp + symbol;
    Elements.feels_like_div.textContent = data.feels_like + symbol;
})

//Units
Elements.input_units_imperial.addEventListener("change",()=> {
    symbol =  "°F";
    units = "imperial";
    Elements.input_units_metric.checked = false;
})

Elements.input_units_metric.addEventListener("change",()=> {
    symbol =  "°C";
    units = "metric";
    Elements.input_units_imperial.checked = false;
})


//Submit
Elements.input_button.addEventListener("click",()=> {

    //Data Fetch
    GetData(Elements.input_field.value,units)
        .then(data => {
            Elements.status_div.textContent = data.state;
            Elements.city_div.textContent = data.city;
            Elements.temp_div.textContent = data.temp + symbol;
            Elements.feels_like_div.textContent = data.feels_like + symbol;
        }).catch(err => {
            console.log(err);
            console.log("city not found");
        })

    //Clearing 
    Elements.input_field.value = "";

})
