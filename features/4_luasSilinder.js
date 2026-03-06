
function hitungLuasSilinder(jariJari, tinggi) {
  const luas = 2 * Math.PI * jariJari * (jariJari + tinggi);
  const formatLuas = luas.toFixed(2);
  console.log(`luas Silinder anda adalah ${formatLuas}`)
}

export default hitungLuasSilinder // ✅ This is the actual function name