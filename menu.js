import { createInterface } from "node:readline/promises";
import sayHelloWorld from "./features/1_greeting.js";
import hitungDiskon from "./features/5_hitungDiskon.js";
import isGenap from "./features/7_isGenap.js";


async function menu() {
    let exit = false
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    })
    do {
        console.log("======================")
        console.log("Selamat Datang di Menu")
        console.log("Silahkan pilih dari dibawah ini:")
        console.log("1. Hello World")
        console.log("5. Hitung Diskon");
        console.log("7. Cek Ganjil Genap")
        console.log("0. Exit")

        try {
            const input = await rl.question("Masukkan pilihan anda: ")
            if (input === '0') {
                exit = true
                console.log("🙏 Selamat tinggal 🙏")
                rl.close()
                return
            }
            switch (input) {
                case "1":
                    sayHelloWorld()
                    break;
                case "5":
                    const inputHarga = await rl.question("Masukkan harga awal: ");
                    const inputDiskon = await rl.question("Masukkan Diskon: ");
                    const hargaAkhir = Number(inputHarga);
                    const diskonAngka = Number(inputDiskon);
                    const hasilAkhir = hitungDiskon(hargaAkhir, diskonAngka);
                    console.log("Jumlah Diskon:" + hasilAkhir);
                    break;
                case "7":
                    const angka = await rl.question("Masukkan angka : ")
                    console.log(isGenap(angka))
                    break;
                default:
                    console.log("pilihan anda masih dalam tahap perkembangan\n")
                    break;
            }
        } catch (err) {
            throw err
        }
    } while (!exit)
}

menu()