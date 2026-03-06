function checkAngka(number) {
  if (typeof number !== 'number') return "Error: Input wajib angka.";
  return number % 2 === 0 ? "Genap" : "Ganjil";
}

// Ini adalah kunci utama modularitas!
export default checkAngka;