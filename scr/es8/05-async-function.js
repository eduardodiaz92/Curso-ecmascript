const fbAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("AsynC!!"), 2000)
      : reject(new Error("Error!"));
  });
};

const anortherFn = async () => {
  const something = await fbAsync();
  console.log(something);
  console.log("hello");
};

console.log("Before");
anortherFn();
console.log("after");
