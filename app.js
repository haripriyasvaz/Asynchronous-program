//asynchronous programming using setTimeOut Function:

// Allows to run a set of codes after a specific time has passed
// Takes in two arguments and both are required.
//1.function 2. number of milliseconds you want to wait before the callback gets executed.

//Below is the example for an asynchronous node program: prints messages like a non blocking model..runs the codes parallely
//(synchronous program: runs the code one after the other)

 console.log('start of code')
 setTimeout(()=>console.log('Two second timer'),2000)
 setTimeout(()=>console.log('Zero second timer'),0)
 console.log('end of code')