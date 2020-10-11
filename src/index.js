module.exports = function check(str, bracketsConfig) {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        for (let count = 0; count < bracketsConfig.length; count++) {
            if (arr[i] === bracketsConfig[count][0] && arr[i + 1] === bracketsConfig[count][1]) {
                arr.splice(i, 2);
                i = -1;
            }
        }
    }
    return !arr.length;
}