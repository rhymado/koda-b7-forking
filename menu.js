import { createInterface } from "node:readline/promises";

import sayHelloWorld from "./features/1_greeting.js";
import { main } from "./features/8_calculator.js";
import isGenap from "./features/7_isGenap.js";
import convertCtoK from "./features/6_conversionCtoK.js";


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
        console.log("6. Konversi Celcius-Kelvin")
        console.log("7. Cek Ganjil Genap")
        console.log("8. Simple Calculator");
        console.log("9. to Lower Case")
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
                case "6":
                    convertCtoK(30)
                    break;
                case "7":
                    const angka = await rl.question("Masukkan angka : ")
                    console.log(isGenap(angka))
                    break;
                case "8":
                    await main(rl)
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
