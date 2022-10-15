function getData(targeturl, callback) {
    console.log('fired from the data miner module');

    fetch(targeturl) // pass in the path to the data source
        .then(res => res.json()) //convert json to plain js objct
        //the res is the data that we are retrieving from the resource
        .then(data => { // data is the converted json object -> now it's just data(js object)
            console.log(data);

            //run the callback when we get all of our data back and ready to go
            //this gets passed in by refrence when we invoke the dataMiner in main.js
            callback(data);
        })
    .catch(error => console.error(error));
    //catch any errors that might happen and report them to the dev
    
}

export { getData }