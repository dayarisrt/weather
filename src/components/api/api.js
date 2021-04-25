
const api_key ='b6137710c46bff93b29f85488688dda9';

export const weatherByCity = async (city) => {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sp&appid=${api_key}`);
    let data = await res.json();
    
    if(res.status === 200)
        return {data, msg:200 };
    else
    return {data: "", msg:200 };
}

