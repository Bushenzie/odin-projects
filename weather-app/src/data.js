
const link = `https://api.openweathermap.org/data/2.5/weather?appid=f853431833e546c01617d6e726787121`

export async function GetData(city,units) {
    let data = await fetch(`${link}&units=${units}&q=${city}`);
    let parsed = await data.json();
    
    return {
        city: parsed.name,
        temp: Math.round(parsed.main.temp),
        feels_like: Math.round(parsed.main.feels_like),
        state: parsed.weather[0].main,
    }
}