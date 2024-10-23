// It's all about how to fetch the data from github api by using the legacy "XMLhttpRequest (XHR) object" in javascript...
// github provides the free api that contains basic information about the users present on github... 
// for practice purpose we can use this free api...



const requestUrl = 'https://api.github.com/users/Shailesh2003-arch' //api that you want to fetch data from... (Prefer storing the url into a constant or variable instead of hardcoding)...

const xhr = new XMLHttpRequest(); // creating instance of XMLHttpRequest...
xhr.open('GET',requestUrl); // open() is one of the  configuring method, which specifies the Http method ('GET','POST',payloads,etc)  with the url...

xhr.send(); //  Once the configuration is done, the send() method dispatches the request to the server. For GET requests, this can be an 
            //  empty call, but for POST or PUT requests, you can send data in the body. 

        // Monitor the Request’s Progress: The onreadystatechange event handler monitors the state of the request. The readyState property changes as the request progresses, and the value of readyState tells you the current state of the request.

        // readyState values:
        // 0: UNSENT - The request has been created, but the open() method has not yet been called.
        // 1: OPENED - The open() method has been called.
        // 2: HEADERS_RECEIVED - The send() method has been called, and the headers and status are available.
        // 3: LOADING - The response body is being downloaded.
        // 4: DONE - The request is complete.


xhr.onreadystatechange = function(){ // continuosly tracks the state of the httprequest...
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        const data = JSON.parse(this.responseText);
        // console.log(data); commenting the object as for of now !...
        // here now our data has all the properties...
        // we can access anything from the api...
        console.log(data.followers); // logs the folllower of myself...
        // 0 indicates 0 followers...
        console.log(data.location);// gives the user's location...
        console.log(data.avatar_url); // returns the profile pic's url...

    }

}