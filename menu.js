import { createInterface } from "node:readline/promises";
import sayHelloWorld from "./features/1_greeting.js";
import checkAngka from "./features/5_cekAngka.js";

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
        console.log("5. Mengecek Angka")
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
                   const askQuestion = await rl.question("Masukkan angka yang ingin dicek: ");
                   const angkaValid = Number(askQuestion);
                   console.log(checkAngka(angkaValid));
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