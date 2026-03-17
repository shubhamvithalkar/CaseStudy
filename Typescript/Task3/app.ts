let city: string = "Pune";
let temperature: number = 25
let isRaining=false

function weatherreport(city:string,temperature:number,isRaining:boolean): void{
    console.log(`In ${city}, the temperature is ${temperature} degrees and it is ${isRaining?'raining':'not raining'}`)

}

weatherreport(city,temperature,isRaining)