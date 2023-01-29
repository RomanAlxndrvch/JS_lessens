function gooseFilter(birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let result = birds

    for (let i = geese.length - 1; i >= 0; i--) {
        result = result.filter(el => el !== geese[i])
    }

    return result
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))