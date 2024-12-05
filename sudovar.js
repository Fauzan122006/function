function tambah() {
    let hasil = 0
    for(let i = 0; i < arguments.length; i++) {
        hasil += arguments[i]
    }
    return hasil
}

console.log(tambah(1, 2, 3, 4, 5))