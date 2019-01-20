export default function diamond(n) {
  console.log("printing diamond for", n, "row");
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) pattern += " ";
    for (let p = 1; p <= i; p++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  for (let k = 0; k < n; k++) {
    for (let m = n; m > n - k; m--) pattern += " ";
    for (let r = n; r > k; r--) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

