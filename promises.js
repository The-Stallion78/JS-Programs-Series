                                    // PROMISES
        // three states: Pending, fulfilled, rejected

function myDisplayer(some) {
    //document.getElementById("demo").innerHTML = some;
    console.log(some)
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK\n");
    } else {
      myReject("\nError");
    }
  });
  
  myPromise.then(
    function(value) {
        myDisplayer(value);
    }, function(error) {
        myDisplayer(error);
    }
  );
  console.log("-----------\n")

  let myPromise2 = new Promise(function(Resolve, reject) {
    console.log("Data Fetching...")
    setTimeout(function(){
        Resolve("I Love You!!")}, 3000)

  })

  myPromise2.then(function(value2) {
    console.log(value2)
  })


  