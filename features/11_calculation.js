async function calculation(rl) {
    const panjang = Number(await rl.question("Masukkan panjang dalam satuan meter: "))

    const miliMeter = panjang * 1000
    const centiMeter = panjang * 100
    const kiloMeter = panjang / 1000
    console.log("Hasil Perhitungan Konversi Panjang dari meter ke:")
    console.log("Milimeter:", miliMeter)
    console.log("Centimeter:", centiMeter)
    console.log("Kilometer:", kiloMeter)
    return;
}

export default calculation