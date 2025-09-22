function isAnagram(s, t) {
    // return false if their lengths are different
    if (s.length !== t.length) {
        return false;
    }
    let sMap = new Map();

    // map frequency of characters in string 's'
    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) {
            let count = sMap.get(s[i]);
            sMap.set(s[i], count + 1);
        }
        else {
            sMap.set(s[i], 1);
        }
    }

    // for each encounter of a character in 't', subtract 1 from it's frequency in sMap
    for (let i = 0; i < t.length; i++) {
        if (sMap.has(t[i])) {
            let count = sMap.get(t[i]);
            if (count <= 0) {
                return false;
            }
            sMap.set(t[i], count - 1);
        }
        else {
            return false;
        }
    }
    return true;
}

console.log(isAnagram("racecar", "carrace"));
console.log(isAnagram("racecar", "race"));
console.log(isAnagram("race", "racecar"));