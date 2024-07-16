// let promise = fetch (url, [options])

let URL ="https://jsonplaceholder.typicode.com/users"
// let promise = fetch(URL)
// console.log (promise)

const getData = async () => {
    console.log ("getting First API's data ....")
    let response =  await fetch (URL);
    if (response.ok) {
        var data = await response.json();
    } else {
        console.log ("HTTP-Error" + response.status)
    }
    //document.write(data)
    console.log(data)
}

getData()   // function call
// =========================================


let URL2 = "https://jsonplaceholder.typicode.com/comments";

const getData2 = async () => {
    console.log ("getting Second API's Data...")
    let response2 = await fetch (URL2);
    if (response2.ok) {
        var data2 = await response2.json();
    } else {
        console.log ("HTTP-Error")
    }
    console.log(data2)
}

getData2()  // function call
// =========================================