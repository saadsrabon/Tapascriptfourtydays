// ✅ Map

// 1. key can be of any type
// 2. Map remembers the original order in which the elements were added to it
// ✅ Create & Initialize Map
const mymap = new Map([['name',45],['blood',"b+"]])
mymap.set("eye","blue")
console.log(mymap)
// ✅ Adding Map Entries
// ✅ How to Get Map Value?
console.log(mymap.get('name'))
// ✅ Map Keys
// ✅ Map Properties & Methods
// ✅ MapIterators

const user ={
    'name':"sa",
    'janka':"dsdfs",
}

console.log(Object.entries(user))

const userMap = new Map(Object.entries(user));
console.log(userMap)

console.log(Object.fromEntries(userMap));
