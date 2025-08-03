const groupAnagrams = strs => {
    const map = new Map();

    strs.forEach(str => {
        const sortedStr = [...str].sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    });

    return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));