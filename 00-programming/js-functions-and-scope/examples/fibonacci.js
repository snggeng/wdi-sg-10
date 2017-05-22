function fibo(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else {
    return fibo(n-1) + fibo(n-2);
  }
}

for (var i=1; i<10; i++) {
  console.log(fibo(i));
}
