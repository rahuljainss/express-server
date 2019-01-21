export default function equilateral(n: number): void {
  console.log("printing triangle for", n, "row");
  let pattern: string = "";
  let i: number = 1;
  let j: number = 1;
  let k: number = 1;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n - i; j++) pattern += " ";
    for (k = 1; k <= i; k++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
