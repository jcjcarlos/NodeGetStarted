(() => {
    let count = 0;


    const mySetInterval = function(limit) {
        let id = setInterval(() => {
            console.log(`Hello World with ${count + 1} seconds`);
            count++;
            if (count >= 5) {
                clearInterval(id);
            }
        }, 1000);

    }

    mySetInterval(5);

})()