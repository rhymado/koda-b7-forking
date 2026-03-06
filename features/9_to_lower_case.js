const toLowerCase = function () {
  let word = 'Hello';
  let res = '';
  for (let i = 0; i < word.length; i++) {
    let charCode = word.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode += 32;
    }
    res += String.fromCharCode(charCode);
  }
  console.log(`
    ----------------------
    Sebelum diubah : ${word}
    Setelah diubah : ${res}
    ----------------------

    `);

  return res;
};
export default toLowerCase;
