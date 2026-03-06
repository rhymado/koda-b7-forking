function pyramidNumber(tinggi) {
    for (let i = 1; i <= tinggi; i++) {
        let baris = "";
        for (let j = 1; j <= tinggi - i; j++) {
            baris += " ";
        }
        for (let k = 1; k <= i; k++) {
            baris += i + " ";
        }
        console.log(baris)
    }
}

export default pyramidNumber