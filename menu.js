import { createInterface } from "node:readline/promises";

import sayHelloWorld from "./features/1_greeting.js";
import luasSilinder from "./features/4_luasSilinder.js";
import { main } from "./features/8_calculator.js";
import isGenap from "./features/7_isGenap.js";
import convertCtoK from "./features/6_conversionCtoK.js";
import toLowerCase from "./features/9_toLowerCase.js";
import { pyramidNumber } from "./features/10_pyramidNumber.js";



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
        console.log("4. Hitung Luas Silinder")
        console.log("6. Konversi Celcius-Kelvin")
        console.log("7. Cek Ganjil Genap")
        console.log("8. Simple Calculator");
        console.log("9. To Lower Case");
        console.log("10. TPyramid Number");
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
                case "4":
                    const jariJari = await rl.question("Masukkan jari jari : ")
                    const tinggi = await rl.question("Masukkan tinggi : ")
                    luasSilinder(jariJari,tinggi)
                    break;
                case "6":
                    const celcius = await rl.question("Masukkan suhu Celcius : ")
                    console.log(convertCtoK(celcius))                  
                    break;
                case "7":
                    const angka = await rl.question("Masukkan angka : ")
                    console.log(isGenap(angka))
                    break;
                case "8":
                    await main(rl)
                    break;
                case "9":
                    const word = await rl.question("Masukkan huruf : ")
                    toLowerCase(word)
                    break;
                case "10":
                    await pyramidNumber(rl)
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