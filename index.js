function arrayMap() {

    const arr = [];
    for (let i = 1; i<=100; i++) {
        arr.push(i);
    }
    return arr.map(function()) {
        return i*3;
    });
}

const result = arrayMap();


result.forEach(function(item, index, arr) {
    console.log(item);
});

arrayMap();

