import { createInterface } from "node:readline/promises";

import sayHelloWorld from "./features/1_greeting.js";
import pyramidNumber from "./features/10_pyramidTriangle.js";

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
        console.log("10. Pyramid Number")
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
                case "10":
                    const tinggiInput = await rl.question("Masukkan tinggi piramida: ")
                    const tinggi = parseInt(tinggiInput)

                    if(!isNaN(tinggi) & tinggi > 0) {
                        console.log(`===Hasil Piramida===`)
                        pyramidNumber(tinggi)
                    } else {
                        console.log("Masukkan anggka yang valid")
                    }
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