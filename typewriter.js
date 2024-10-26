const sentence = "hello there from lighthouse labs";
let index = 0;
let timer = 0;

for (const char of sentence) {
  timer = timer + 100;
  index++;
  if (index < sentence.length) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
  } else {
    setTimeout(() => {
      process.stdout.write(char + '\n');
    }, timer);
  } 
}