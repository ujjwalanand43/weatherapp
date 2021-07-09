const http = require("http");
const fs = require("fs");
const port = 80;
var requests = require('requests');
// const { createServer } = require('node:http')
const home = fs.readFileSync("index.html", "utf-8");
const getdata = (tempval, orgval) => {
    let temperature = tempval.replace("{%temp%}", (orgval.current.temp_c));
    // console.log(temperature)
    // temperature = temperature.replace(" {%mintemp%}",orgval.main.temp_min)
    // temperature = temperature.replace("{%maxtemp%}",orgval.main.temp_max)
    temperature = temperature.replace("{%location%}", orgval.location.name)
    temperature = temperature.replace("{%country%}", orgval.location.country)
    temperature = temperature.replace("{%condition%}", orgval.current.condition.text)
    temperature = temperature.replace("{%img%}", orgval.current.condition.icon)
    return temperature
}
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        // requests(
        //   "api.openweathermap.org/data/2.5/weather?q=Patna&appid=f643ca87cc457699983788e7df9387bc",
        // )
        // requests('http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=f643ca87cc457699983788e7df9387bc',)
        requests('https://api.weatherapi.com/v1/current.json?key=aec314c5ab754cf48a4213651212205&q=Patna&aqi=no', )
            // requests('http://api.weatherstack.com/current?access_key=710019df98098b0f22c529a40148ebca&query=25.639250,85.048920', )
            .on('data', (chunk) => {
                let json = JSON.parse(chunk)
                let arr = [json]
                    // 
                let realtimedata = arr.map((val) => getdata(home, val)).join("")
                    // console.log(realtimedata)
                res.write(realtimedata)
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);
                res.end()
                console.log('end');
            });
        //    console.log(req2)
    }
});
server.listen(port, "127.0.0.1");