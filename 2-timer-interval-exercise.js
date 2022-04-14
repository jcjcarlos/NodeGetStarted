(() => {
    let count = 0;


    const mySetIntervalWithLimits = function(limit) {
        let id = setInterval(() => {
            console.log(`Hello World with ${count + 1} seconds`);
            count++;
            if (count >= 5) {
                console.log("Done!")
                clearInterval(id);
            }
        }, 1000);

    }

    mySetIntervalWithLimits(5);

})()