const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];
function keepRunningTheEventLoop(){
    // First Check - Checking Any Pending Things Left like setTimeout, setInterval, setImmediate
    // Second Check - Any Pending OS Task ? e.g Like Server Listing to PORT
    // Third Check - Any Pending Long Running Operations? e.g Like Fs reading a very Big File Content
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}
// Event Loop
// Note : Every Iteration is called a Tick.
while(keepRunningTheEventLoop()){
    // 1. Checking Pending Timers, and call any callback fn is ready
    // 2. Checking Pending OS Task,and call any callback fn is ready
    // 3. Checking Pending Long Running Task,and call any callback fn is ready
    // 4. Pause Execution (Waiting) for if any Pending timer, pending os task , pending operation is done
    //5. Handle any close events
}
// Event Loop End and return back to the Terminal

