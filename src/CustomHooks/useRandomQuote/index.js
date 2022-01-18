import React, { useEffect, useState } from "react";

const useRandomQuote = () => {
  //Fetching Quote
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // Get a Ramdom Quote to render
  useEffect(() => {
    const fetchQuote = async () =>
      await fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setQuote(data[0].text);
          setAuthor(data[0].author);
        });
    fetchQuote();
  }, []);
  return {
    quote,
    author,
  };
};

export default useRandomQuote;

// const useRandomJoke = (firstName, lastName) => {
//   //useEffect to fetch a random joke
//   useEffect(() => {
//     const fetchJoke = async () =>
//       await fetch(
//         `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
//       )
//         .then((res) => res.json())
//         .then(({ value: { joke, id, categories } }) => {
//           setJoke(joke);
//           setId(id);
//           setCategorie(categories);
//         });
//     fetchJoke();
//   }, [firstName, lastName]);
//   return {
//     joke,
//     id,
//     categorie,
//   };
// };

// export default useRandomJoke;
