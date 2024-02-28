const url = "https://dad-jokes.p.rapidapi.com/random/joke";
const apiKey = "89f6ee0d24msh502fcb4226f9842p13fbbcjsnae9b32886c94";
const apiHost = "dad-jokes.p.rapidapi.com";

const getRandomQuote = async () => {

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost,
      },
    });

    const responseText = await response.text();
    return JSON.parse(responseText);
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
};

const finalQuote = async () => {
  const result = await getRandomQuote();

  const setup = result.body[0].setup;
  const punchline = result.body[0].punchline;

  // console.log(result);
  console.log("SETUP: ", setup , "\nPUNCHLINE: ", punchline);
};

finalQuote();