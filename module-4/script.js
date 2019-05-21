/*
Solution of assignment 4:

Expected output:

Hello Umer
Good Bye Usman
Good Bye John
Good Bye Alex
Hello Paul
*/

(function() {
    var names = ["Umer", "Usman", "John", "Alex", "Paul"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
