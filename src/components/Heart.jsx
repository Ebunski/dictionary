import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useConstants from "/src/hooks/useConstants";
import useData from "/src/hooks/useData";
import { setFavourites } from "/src/store/appSlice";
import { Heart } from "react-feather";

export default function HeartIcon() {
  const dispatch = useDispatch();
  const { word } = useData();
  const { isMobile, darkMode, logged, user } = useSelector((st) => st.user);
  const { favourites } = useSelector((st) => st.app);
  const { purple, purpleBg } = useConstants();

  const isFavourite = favourites.findIndex((x) => x === word) !== -1;

  const addWordToFav = async (e) => {
    try {
      if (logged) {
        const res = await axios.post("/api/addtofavorites", {
          word,
          userId: user._id,
        });
        console.log(res);
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(favourites);
  }, [favourites]);

  return (
    <Heart
      size={32}
      fill={isFavourite ? purple : "transparent"}
      color={purple}
      onClick={() => {
        dispatch(setFavourites(word));
        addWordToFav();
      }}
    />
  );
}
