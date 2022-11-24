const nameInverter = function(name) {
    const nameArr = name.split(' ');
    const nameRecurArr = [];
    for (let i = 0; i < nameArr.length; i++) {
        nameRecurArr[i] = nameArr[nameArr.length-i-1];
        nameRecurArr[i] = nameRecurArr[i].trim();
        // if (i == 1){
        //     nameRecurArr[1] = ` ${nameRecurArr[1]} `;
        // }
    }
    console.log(nameRecurArr.join());
    return nameRecurArr.join();

/*
if (!process.argv[2]){
    console.log('');
    return '';
} else {
    const Names = [];
    for (let i = process.argv.length-1; i > 1; i--) {
        Names.push(process.argv[i]);
    }
    console.log(...Names);
    return Names;
}
*/
}
module.exports = nameInverter;
