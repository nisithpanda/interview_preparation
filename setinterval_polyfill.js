import createSetTimeOut from './settimeout_polyfill.js'
function createInterval () {
    let intervalId = 0
    let intervalMap = {}
    var {setTimeoutPoly, clearTimeoutPoly} = createSetTimeOut()
    function setIntervalPoly(callback, delay) {
        let newId = intervalId++
        function reiterate() {
            intervalMap[newId] = setTimeoutPoly(function() {
                callback()
                
            console.log(intervalMap[newId])
            if (intervalMap[newId]) {
                reiterate()
            }
            }, delay)
        }
        reiterate()
        return newId
    }

    function clearIntervalPoly(id) {
        clearTimeoutPoly(intervalMap[id])
        delete intervalMap[id]
    }

    return {setIntervalPoly, clearIntervalPoly}
}

var {setIntervalPoly, clearIntervalPoly} = createInterval()

var count = 0
var myId = setIntervalPoly(function() {
    console.log("Welcome to jscafe")
    count++
    if (count >= 2) clearIntervalPoly(myId)
}, 1000)
