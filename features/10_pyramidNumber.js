// Fungsi Logika: Harus mengembalikan nilai (return)
const generatePyramid = (tinggi) => {
    let result = "";
    for (let i = 1; i <= tinggi; i++) {
        let baris = "";
        for (let j = 1; j <= tinggi - i; j++) {
            baris += " ";
        }
        for (let k = 1; k <= i; k++) {
            baris += i + " ";
        }
        result += baris + "\n";
    }
    return result; 
};

export const pyramidNumber = async (rl) => {
    try {
        console.log('------ Pyramid Number ------');
        const inputTinggi = await rl.question('Masukkan tinggi piramida: ');
        const tinggi = Number(inputTinggi);

        if (isNaN(tinggi) || tinggi <= 0) {
            throw new Error('Masukkan angka positif yang valid!');
        }

        const hasil = generatePyramid(tinggi);
        console.log(`=== Hasil Piramida ===\n${hasil}`);
    } catch (err) {
        console.log('Error:', err.message || err);
    }
};