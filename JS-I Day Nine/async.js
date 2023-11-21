async function fetchAPIData(apikey) {
    try {
        let result = await dummyAPI(apikey);
        console.log(result);
    } catch (error) {
        console.log("Error : " + error.message)
    }
}

function dummyAPI(apikey) {
    const pr = new Promise(function (resolve, reject) {
        if (apikey) {
            setTimeout(function () {
                return resolve([5, 7, 8, 9, 10]);
            }, 5000)
        } else {
            let error = new Error("Invalid API Key");
            reject(error)
        }
    });
    return pr;
}

fetchAPIData(false);