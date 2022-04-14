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


//Challenge 2: With only const, one if and only setInterval
const max_time = 1000;

const recursiveSetInterval = function recursiveSetInterval(last_id_setInterval, time = 0, time_pulse = 100) {
    clearInterval(last_id_setInterval);
    if (time >= max_time) {
        return;
    }
    time += time_pulse;
    const id = setInterval(() => {
        [...Array(5)].forEach((() => console.log(`Hello World. ${time}`)));
        recursiveSetInterval(id, time);
    }, time);

}
recursiveSetInterval();