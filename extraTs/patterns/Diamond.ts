export default function diamond(n: number): void {
  console.log('printing diamond for', n, 'row');
  let pattern: string = '';
  let i: number = 1;
  let j: number = 1;
  let p: number = 1;
  let k: number = 0;
  let m: number = 0;
  let r: number = 0;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n - i; j++) {
      pattern += ' '; }
    for (p = 1; p <= i; p++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  for (k = 0; k < n; k++) {
    for (m = n; m > n - k; m--) {
      pattern += ' '; }
    for (r = n; r > k; r--) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  console.log(pattern);
}
