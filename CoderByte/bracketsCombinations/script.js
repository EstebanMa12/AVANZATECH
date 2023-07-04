function BracketCombinations(num) {
if (num === 0) {
    return 1;
} else if (num < 0) {
    return 0;
} else {
    let combinations = 0;
    for (let i = 0; i < num; i++) {
    combinations += BracketCombinations(i) * BracketCombinations(num - i - 1);
    }
    return combinations;
}

}