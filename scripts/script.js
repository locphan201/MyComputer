const timeTag = document.getElementById("time");
const dateTag = document.getElementById("date");

function updateDateTime() {
    const currentDateTime = new Date();

    // Date
    const date = currentDateTime.getDate();
    const month = currentDateTime.getMonth();
    const year = currentDateTime.getFullYear();

    var fullDate = "";
    if (date < 10) {
        fullDate = `0${date}`
    } else {
        fullDate = `${date}`
    }

    if (month < 10) {
        fullDate += `/0${month}/${year}`
    } else {
        fullDate += `/${month}/${year}`
    }
    
    dateTag.textContent = fullDate;

    // Time
    const hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();
    
    var fullTime = "";
    if (hours < 10) {
        fullTime = `0${hours}`
    } else {
        fullTime = `${hours}`
    }

    if (minutes < 10) {
        fullTime += `:0${minutes}`
    } else {
        fullTime += `:${minutes}`
    }
    timeTag.textContent = fullTime;
}

updateDateTime()
setInterval(updateDateTime, 10000);