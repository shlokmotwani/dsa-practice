var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let i = 0; // greed factor pointer
    let j = 0; // cookie size pointer
    let contentChildCount = 0;

    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            contentChildCount++;
            i++;
            j++;
        }
        else {
            j++;
        }
    }
    return contentChildCount;
};

console.log(findContentChildren([1, 2, 3], [1, 1])) // 1
console.log(findContentChildren([1, 2], [1, 2, 3])) // 2
console.log(findContentChildren([1, 2, 3], [3])) // 1