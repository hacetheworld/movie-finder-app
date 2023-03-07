import { useState, useEffect, createContext } from "react";

export const moiveContex = createContext();

export const MovieContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [wishList, setWishList] = useState([]);
  // const [user, setUser] = useState(false);
  const API_KEY = "209e42e2c66ab2cba7c280981a877ace";
  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US&page=2`
    );
    // https://api.themoviedb.org/3/movie/1?api_key=209e42e2c66ab2cba7c280981a877ace
    const resData = await res.json();
    console.log(resData, "in contextapi");
    setData(resData.results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const value = { data, wishList, setWishList };
  return <moiveContex.Provider value={value}>{children}</moiveContex.Provider>;
};
