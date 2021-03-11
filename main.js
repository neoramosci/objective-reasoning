// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(user) {
   return user.userRole === 'ADMIN';
}
/*
Function isAdminAlternate(user) {
    if ( user.userRole === 'ADMIN') {
        return true;
    } else {
        return false;
    }
}
*/

function getEmail(user){
    const lowerFirst = user.firstName.toLowerCase();
    const lowerLast = use.lastName.toLowerCase();

    return `${lowerFirst} ${lowerLast}@codeimmersives.com`;
}

function getPlaylistLength(playlistObject){
    return playlistObject.songs.length;
}

function getHardestHomework(homeworks) {
    let smallest = 100;
    let nameOfHardest = '';

     for (const item of homeworks) {
         if ( item.averageScore < smallest ) {
             nameOfHardest = item.name;
             smallest = item.averageScore;
         }
     }
     return nameOfHardest;
}

function createPhonebook(names, numbers) {
    const phonebook = [];

    for ( let i = 0; i < names.length; i++ ) {
        phonebook[names[i]] = numbers[i];
    }
    return phonebook;
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};