// console.log('command line argument uno: ', process.argv[2]);
// console.log('command line argument dos: ', process.argv[3]);

for (let i = 2; i < process.argv.length; i++) {
  console.log(`command line argument ${i}: ${process.argv[i]}`);
}
