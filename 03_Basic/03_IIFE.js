// Intermediate Invoke Function Expression (IIFE)
// IIFE excute immediately and use for to avoide the polution of global variable

// ({})(); first parenthesis is for IIFE and second for excution and the ; is for to stop excution
( function chai() {
    // named IIFE
    console.log('DB CONNECTED')
})();

// simple IIFE
( () => console.log('DB CONNECTED')
)();

// how to pass arugments
( (str) => console.log(`DB ${str} CONNECTED`)
)("is");


