import React from "react";

const useRandomQuote = (RANDOM_INDEX) => {
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
          setQuote(data);
        });
    fetchQuote();
  }, []);
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
