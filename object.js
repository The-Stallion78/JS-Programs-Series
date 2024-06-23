                                // OBJECTS

     const Info = {
        firstname: "Khizar Hayat",
        lastname: "Khan",
        age: 22,
        gender: "Male",
        wealth : "$292",
        nationality : "Pakistani",
        occupation: "Pakistan Administrative Service (PAS)",
        address: "Sector Siddique Akbar, near  Haripur International Hospital, Terbella Road KTS, Haripur Hazara, KPK",

            // Nested Objects Concept
        myInterests : {
            hobbies: ["Reading", "Coding", "Listening Music", "Traveling"],
            fitness: ["Running", "Healthy Food", "Fresh Mind", "Daily Exercise"],
            Sports : ["Cricket", "Badminton", "Running"],
            goals : ["PAS", "Rich Millionaire", "MERN Developer"]
        },

            // Object Methods (Function used as an object property is called method)
        Name : function () {
            return "His name is: " + this.firstname + " " + this.lastname + "." + " This boy is gonna be a highly dignified CSP-PAS officer in civil service of Pakistan. Insha Allah! \n" + " ==========================\n"
        }
    }
    
    Info.Income = "$178";   // adding property 
    delete Info.Income // deleting property 
    delete Info.address

    console.log("Show your Personal Information: ", Info)
    console.log("Name is: ",Info.firstname) // accessing a single property


            // Accessing Nested object's Elements
   console.log("-------------------------\n")
   console.log("My Hobbies are: ", Info.myInterests.hobbies)
   console.log("My Fitness routine: ", Info.myInterests.fitness)

            // Accessing the object method
    console.log("-------------------------\n")
    console.log("Tell me about this person: \n", Info.Name())
     
    // Building text from Objects
    let text = "";
        for (let x in Info) {
        text += Info[x] + " ";
        };
    console.log(text)

    
    // OBJECT CONSTRUCTOR FUNCTION

    







