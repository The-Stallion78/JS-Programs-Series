                            // MAPS

// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.
// Passing an Array to 'new Map()'


    var arr = [4, 6, 7, 9]
    var arr2 = arr.map(test)

    function test(values) {
      return values * 10
    }

    //document.getElementById("demo").innerHTML = "New String: "+ arr2;
    console.log("New string: ", arr2)


    /* 
        Map.get()
        You get the value of a key in a map with the get() method
        
        Map.set()
        You can add elements to a map with the set() method

        Map.size
        The size property returns the number of elements in a map

        Map.delete()
        The delete() method removes a map element

        Map.clear()
        The clear() method removes all the elements from a map

        Map.has()
        The has() method returns true if a key exists in a map

        Map.forEach()
        The forEach() method invokes a callback for each key/value pair in a map

        Map.entries()
        The entries() method returns an iterator object with the [key,values] in a map

        
    */