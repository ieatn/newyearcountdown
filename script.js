// ctrl option i to hover on multiple words
// option command arrow for multiline
const daysDiv = document.querySelector("#days")
const hourDiv = document.querySelector("#hours")
 const minDiv = document.querySelector("#mins")
 const secDiv = document.querySelector("#sec")
const newYear = '1 Jan 2023'
function countdown() {
    const newYearDate = new Date(newYear)
    const currentDate = new Date()
    const totalSeconds = (newYearDate-currentDate)/1000
    const days  = Math.floor(totalSeconds/3600/24)
    const hours = Math.floor(totalSeconds/3600) % 24
    const min   = Math.floor(totalSeconds/60) % 60
    const sec   = Math.floor(totalSeconds % 60)
    console.log(days, hours, min, sec)

    daysDiv.innerHTML = format(days)
    hourDiv.innerHTML = format(hours)
     minDiv.innerHTML = format(min)
     secDiv.innerHTML = format(sec)
}
// if time is less than 10, add an extra 0 in front
function format(time) {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(countdown, 1000)