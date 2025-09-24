function groupAnagrams(strs) {
    let mapOfMaps = new Map();

    for (let i = 0; i < strs.length; i++) {
        let map = new Map();
        let str = strs[i];

        // create a map of the string for tracking each character's frequency
        for (let j = 0; j < str.length; j++) {
            if (map.has(str[j])) {
                let count = map.get(str[j]);
                map.set(str[j], count + 1);
            }
            else {
                map.set(str[j], 1);
            }
        }

        let size = strs[i].length;
        if(mapOfMaps.has(size)){
            let arrAtSize = mapOfMaps.get(size);
            arrAtSize.push(strs[i]);
            mapOfMaps.set(size, arrAtSize);
        }
        else{
            let arr = [];
            arr.push(str);
            mapOfMaps.set(size, arr);
        }
    }
    console.log(mapOfMaps);
}


let strs = ["act", "pots", "tops", "cat", "stop", "hat", "abc"]
console.log(groupAnagrams(strs));



/*

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

*/