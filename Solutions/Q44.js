//Demonstrate Deep Copy vs Shallow Copy
/*
    Shallow Copy = Outer object copy hota hai, nested objects share hote hain.
    Deep Copy = Outer aur nested sab kuch copy hota hai, kuch bhi share nahi hota.
    Jab Ham Kehte Hain Ki Nested object shared hai, to iska matlab hai:
    Dono variables memory me same object ko point kar rahe hain.
*/

// Original Object
let user = {
    name: "Rasshi",
    address: {
        city: "Gorakhpur"
    }
};

console.log("Original:", user);

// Shallow Copy
let shallowCopy = { ...user };

shallowCopy.address.city = "Lucknow";

console.log("\nAfter Shallow Copy Modification:");
console.log("Original:", user);
console.log("Shallow Copy:", shallowCopy);