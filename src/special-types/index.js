var w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: function () {
        console.log("I think therefore I am");
    },
};
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === "object" && w !== null) {
    w.runANonExistentMethod();
}
console.log("hello world");
