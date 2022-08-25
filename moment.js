function worldClock(zone, region){
    var dst = 0
    var time = new Date()
    var gmtMS = time.getTime() + (time.getTimezoneOffset() * 60000)
    var gmtTime = new Date(gmtMS)
    var day = gmtTime.getDate()
    var month = gmtTime.getMonth()
    var year = gmtTime.getYear()
    if(year < 1000){
    year += 1900
    }
    var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", 
                    "September", "October", "November", "December")
    var monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
    if (year%4 == 0){
    monthDays = new Array("31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
    }
    if(year%100 == 0 && year%400 != 0){
    monthDays = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31")
    }
    
    var hr = gmtTime.getHours() + zone
    var min = gmtTime.getMinutes()
    var sec = gmtTime.getSeconds()
    
    if (hr >= 24){
    hr = hr-24
    day -= -1
    }
    if (hr < 0){
    hr -= -24
    day -= 1
    }
    if (hr < 10){
    hr = " " + hr
    }
    if (min < 10){
    min = "0" + min
    }
    if (sec < 10){
    sec = "0" + sec
    }
    if (day <= 0){
    if (month == 0){
        month = 11
        year -= 1
        }
        else{
        month = month -1
        }
    day = monthDays[month]
    }
    if(day > monthDays[month]){
        day = 1
        if(month == 11){
        month = 0
        year -= -1
        }
        else{
        month -= -1
        }
    }
    if (region == "NAmerica"){
        var startDST = new Date()
        var endDST = new Date()
        startDST.setMonth(3)
        startDST.setHours(2)
        startDST.setDate(1)
        var dayDST = startDST.getDay()
        if (dayDST != 0){
            startDST.setDate(8-dayDST)
            }
            else{
            startDST.setDate(1)
            }
        endDST.setMonth(9)
        endDST.setHours(1)
        endDST.setDate(31)
        dayDST = endDST.getDay()
        endDST.setDate(31-dayDST)
        var currentTime = new Date()
        currentTime.setMonth(month)
        currentTime.setYear(year)
        currentTime.setDate(day)
        currentTime.setHours(hr)
        if(currentTime >= startDST && currentTime < endDST){
            dst = 1
            }
    }
    if (region == "Europe"){
        var startDST = new Date()
        var endDST = new Date()
        startDST.setMonth(2)
        startDST.setHours(1)
        startDST.setDate(31)
        var dayDST = startDST.getDay()
        startDST.setDate(31-dayDST)
        endDST.setMonth(9)
        endDST.setHours(0)
        endDST.setDate(31)
        dayDST = endDST.getDay()
        endDST.setDate(31-dayDST)
        var currentTime = new Date()
        currentTime.setMonth(month)
        currentTime.setYear(year)
        currentTime.setDate(day)
        currentTime.setHours(hr)
        if(currentTime >= startDST && currentTime < endDST){
            dst = 1
            }
    }
    
    if (region == "SAmerica"){
        var startDST = new Date()
        var endDST = new Date()
        startDST.setMonth(9)
        startDST.setHours(0)
        startDST.setDate(1)
        var dayDST = startDST.getDay()
        if (dayDST != 0){
            startDST.setDate(22-dayDST)
            }
            else{
            startDST.setDate(15)
            }
        endDST.setMonth(1)
        endDST.setHours(11)
        endDST.setDate(1)
        dayDST = endDST.getDay()
        if (dayDST != 0){
            endDST.setDate(21-dayDST)
            }
            else{
            endDST.setDate(14)
            }
        var currentTime = new Date()
        currentTime.setMonth(month)
        currentTime.setYear(year)
        currentTime.setDate(day)
        currentTime.setHours(hr)
        if(currentTime >= startDST || currentTime < endDST){
            dst = 1
            }
    }
    if (region == "Cairo"){
        var startDST = new Date()
        var endDST = new Date()
        startDST.setMonth(3)
        startDST.setHours(0)
        startDST.setDate(30)
        var dayDST = startDST.getDay()
        if (dayDST < 5){
            startDST.setDate(28-dayDST)
            }
            else {
            startDST.setDate(35-dayDST)
            }
        endDST.setMonth(8)
        endDST.setHours(11)
        endDST.setDate(30)
        dayDST = endDST.getDay()
        if (dayDST < 4){
            endDST.setDate(27-dayDST)
            }
            else{
            endDST.setDate(34-dayDST)
            }
        var currentTime = new Date()
        currentTime.setMonth(month)
        currentTime.setYear(year)
        currentTime.setDate(day)
        currentTime.setHours(hr)
        if(currentTime >= startDST && currentTime < endDST){
            dst = 1
            }
    }
    if (region == "Israel"){
        var startDST = new Date()
        var endDST = new Date()
        startDST.setMonth(3)
        startDST.setHours(2)
        startDST.setDate(1)
        endDST.setMonth(8)
        endDST.setHours(2)
        endDST.setDate(25)
        dayDST = endDST.getDay()
        if (dayDST != 0){
        endDST.setDate(32-dayDST)
        }
        else{
        endDST.setDate(1)
        endDST.setMonth(9)
        }
        var currentTime = new Date()
        currentTime.setMonth(month)
        currentTime.setYear(year)
        currentTime.setDate(day)
        currentTime.setHours(hr)
        if(currentTime >= startDST && currentTime < endDST){
            dst = 1
            }
    }
    if (region == "Beirut"){
        var startDST = new Date()
        var endDST = new Date()
        startDST.setMonth(2)
        startDST.setHours(0)
        startDST.setDate(31)
        var dayDST = startDST.getDay()
        startDST.setDate(31-dayDST)
        endDST.setMonth(9)
        endDST.setHours(11)
        endDST.setDate(31)
        dayDST = endDST.getDay()
        endDST.setDate(30-dayDST)
        var currentTime = new Date()
        currentTime.setMonth(month)
        currentTime.setYear(year)
        currentTime.setDate(day)
        currentTime.setHours(hr)
        if(currentTime >= startDST && currentTime < endDST){
            dst = 1
            }
    }
    if (region == "Baghdad"){
        var startDST = new Date()
        var endDST = new Date()
        startDST.setMonth(3)
        startDST.setHours(3)
        startDST.setDate(1)
        endDST.setMonth(9)
        endDST.setHours(3)
        endDST.setDate(1)
        dayDST = endDST.getDay()
            var currentTime = new Date()
        currentTime.setMonth(month)
        currentTime.setYear(year)
        currentTime.setDate(day)
        currentTime.setHours(hr)
        if(currentTime >= startDST && currentTime < endDST){
            dst = 1
            }
    }
    if (region == "Australia"){
        var startDST = new Date()
        var endDST = new Date()
        startDST.setMonth(9)
        startDST.setHours(2)
        startDST.setDate(31)
        var dayDST = startDST.getDay()
        startDST.setDate(31-dayDST)
        endDST.setMonth(2)
        endDST.setHours(2)
        endDST.setDate(31)
        dayDST = endDST.getDay()
        endDST.setDate(31-dayDST)
        var currentTime = new Date()
        currentTime.setMonth(month)
        currentTime.setYear(year)
        currentTime.setDate(day)
        currentTime.setHours(hr)
        if(currentTime >= startDST || currentTime < endDST){
            dst = 1
            }
    }
    
        
    if (dst == 1){
        hr -= -1
        if (hr >= 24){
        hr = hr-24
        day -= -1
        }
        if (hr < 10){
        hr = " " + hr
        }
        if(day > monthDays[month]){
        day = 1
        if(month == 11){
        month = 0
        year -= -1
        }
        else{
        month -= -1
        }
        }
    return monthArray[month] + " " + day + ", " + year + "<br>" + hr + ":" + min + ":" + sec + " DST"
    }
    else{
    return monthArray[month] + " " + day + ", " + year + "<br>" + hr + ":" + min + ":" + sec
    }
    }
    
    function worldClockZone_GMT(){
    document.getElementById("GMT").innerHTML = worldClock(0, "Greenwich")
    setTimeout("worldclockZone_GMT()",1000)
    alert("GMT")
    }
    function worldClockZone_Vancouver(){
    document.getElementById("Vancouver").innerHTML = worldClock(-8, "NAmerica")
    setTimeout("worldclockZone_Vancouver()",1000)
    alert("Vancouver")
    }
    function worldClockZone_SanFrancisco(){
    document.getElementById("SanFrancisco").innerHTML = worldClock(-8, "NAmerica")
    setTimeout("worldclockZone_SanFrancisco()",1000)
    alert("SanFrancisco")
    }
    function worldClockZone_Seattle(){
    document.getElementById("Seattle").innerHTML = worldClock(-8, "NAmerica")
    setTimeout("worldclockZone_Seattle()",1000)
    alert("Seattle")
    }
    function worldClockZone_LosAngeles(){
    document.getElementById("LosAngeles").innerHTML = worldClock(-8, "NAmerica")
    setTimeout("worldclockZone_LosAngeles()",1000)
    alert("LosAngeles")
    }
    function worldClockZone_Denver(){
    document.getElementById("Denver").innerHTML = worldClock(-7, "NAmerica")
    setTimeout("worldclockZone_Denver()",1000)
    alert("Denver")
    }
    function worldClockZone_MexicoCity(){
    document.getElementById("MexicoCity").innerHTML = worldClock(-6, "NAmerica")
    setTimeout("worldclockZone_MexicoCity()",1000)
    alert("MexicoCity")
    }
    function worldclockZone_Houston(){
    document.getElementById("Houston").innerHTML = worldClock(-6, "NAmerica")
    setTimeout("worldclockZone_Houston()",1000)
    alert("Houston")
    }
    function worldClockZone_Minneapolis(){
    document.getElementById("Minneapolis").innerHTML = worldClock(-6, "NAmerica")
    setTimeout("worldclockZone_Minneapolis()",1000)
    alert("Minneapolis")
    }
    function worldClockZone_NewOrleans(){
    document.getElementById("NewOrleans").innerHTML = worldClock(-6, "NAmerica")
    setTimeout("worldclockZone_NewOrleans()",1000)
    alert("NewOrleans")
    }
     
    function worldClockZone_Chicago(){
    document.getElementById("Chicago").innerHTML = worldClock(-6, "NAmerica")
    setTimeout("worldclockZone_Chicago()",1000)
    alert("Chicago")
    }
    function worldClockZone_BuenosAiresy(){
    document.getElementById("BuenosAires").innerHTML = worldClock(-3, "BuenosAires")
    setTimeout("worldclockZone_BuenosAires()",1000)
    alert("BuenosAires")
    }
    function worldClockZone_SaoPauloy(){
    document.getElementById("SaoPaulo").innerHTML = worldClock(-3, "SAmerica")
    setTimeout("worldclockZone_SaoPaulo()",1000)
    alert("SaoPauloy")
    }
    function worldClockZone_RioDeJaneiro(){
    document.getElementById("RioDeJaneiro").innerHTML = worldClock(-3, "SAmerica")
    setTimeout("worldclockZone_RioDeJaneiro()",1000)
    alert("RioDeJaneiro")
    }
    function worldClockZone_Lisbon(){
    document.getElementById("Lisbon").innerHTML = worldClock(0, "Europe")
    setTimeout("worldclockZone_Lisbon()",1000)
    alert("Lisbon")
    }
    function worldClockZone_Dublin(){
    document.getElementById("Dublin").innerHTML = worldClock(0, "Europe")
    setTimeout("worldclockZone_Dublin()",1000)
    alert("Dublin")
    }
    function worldClockZone_Dubai(){
    document.getElementById("Dubai").innerHTML = worldClock(4, "Dubai")
    setTimeout("worldclockZone_Dubai()",1000)
    alert("Dubai")
    }
    function worldClockZone_Bangkok(){
    document.getElementById("Bangkok").innerHTML = worldClock(7, "Bangkok")
    setTimeout("worldclockZone_Bangkok()",1000)
    alert("Bangkok")
    }
    function worldClockZone_Jakarta(){
    document.getElementById("Jakarta").innerHTML = worldClock(7, "Jakarta")
    setTimeout("worldclockZone_Jakarta()",1000)
    alert("Jakarta")
    }
    function worldClockZone_HongKong(){
    document.getElementById("HongKong").innerHTML = worldClock(8, "HongKong")
    setTimeout("worldclockZone_HongKong()",1000)
    alert("HongKong")
    }
    function worldclockZone_Kamchatka(){
    document.getElementById("Kamchatka").innerHTML = worldClock(12, "Europe")
    setTimeout("worldclockZone_Kamchatka()",1000)
    alert("Kamchatka")
    }