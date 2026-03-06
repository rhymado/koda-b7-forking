export const isPalindrome = (x) => {
  const num = Number(x);

  if (x < 0) return false;

  let ans = 0;

  while (x > 0) {
    const last_digit = x % 10;
    ans = ans * 10 + last_digit;
    x = Math.floor(x / 10);
  }
  
  return num === ans;
};
