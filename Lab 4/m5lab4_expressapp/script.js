const friends = [
    { id: 1, name: 'Phoebe', gender: 'female'},
    { id: 2, name: 'Joey', gender: 'male'},
    { id: 3, name: 'Chandler', gender: 'male'},
    { id: 4, name: 'Monica', gender: 'female'},
    { id: 5, name: 'Ross', gender: 'male'},
    { id: 6, name: 'Rachael', gender: 'female'}
]

let matchingFriends = [...friends]

let friendId = 9;

let friendIndex = matchingFriends.findIndex(friend => friend.id == friendId)

if(friendIndex) {
    console.log("true");
}