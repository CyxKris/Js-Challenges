function job(data) {
  const myPromise = new Promise((resolve, reject) => {
    if (typeof data !== "number") {
      reject("Error: data must be a number");
    }

    if (!(data % 2)) {
      setTimeout(() => resolve("Data is an odd number"), 7000);
    } else {
      setTimeout(() => reject("Data is an even number"), 8000);
    }
  });

  // const resultData = await myPromise;
  // console.log("Promise gotten");

  // myPromise
  //   .then(success => console.log(success))
  //   .catch(failure => console.log(failure));
  
  return myPromise;
}

job(20);