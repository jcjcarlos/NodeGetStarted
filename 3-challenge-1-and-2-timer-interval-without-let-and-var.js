const recursiveSetTimeout = function(callback, time_pulse, time_in_miliseconds = 0) {
    time_in_miliseconds = time_in_miliseconds + time_pulse;
    if (callback(time_in_miliseconds)) {
        setTimeout(recursiveSetTimeout, time_in_miliseconds, callback, time_pulse, time_in_miliseconds);
    }
}

function challengesOneAndTwo() {

    //Challenge 1: Print "Hello World" without let or var, incrementing 1 second each time
    recursiveSetTimeout(function(current_time) {
        console.log(`Hello World: ${current_time/1000}`);
        return true;
    }, 1000);

    //Challenge 2 with Challenge 1 constraints: Print "Hello World " + delay, repeating for 5 times, for each 100 miliseconds increment in delay
    recursiveSetTimeout(function messageRepeat5Times(current_time) {
        [...Array(5)].forEach((() => console.log(`Hello World. ${current_time}`)));
        return current_time < 300;
    }, 100);

}


//Challenge 2: With const, one if and only setInterval
const recursiveSetInterval = function recursiveSetInterval(time = 0, time_pulse = 100, ids_setInterval_list = []) {
    time += time_pulse
    ids_setInterval_list.push(setInterval(recursiveSetInterval, time, time, time_pulse, ids_setInterval_list));
    [...Array(5)].forEach((() => console.log(`Hello World. ${time}`)));
    if (time >= 300) {
        ids_setInterval_list.forEach(value => clearInterval(value))
    }
}

recursiveSetInterval();