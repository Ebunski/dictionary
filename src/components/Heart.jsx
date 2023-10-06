import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useConstants from "/src/hooks/useConstants";
import useData from "/src/hooks/useData";
import { setFavourites} from "/src/store/appSlice";
import { Heart } from "react-feather";

export default function HeartIcon() {
  const dispatch = useDispatch();
  const { word } = useData();
  const { isMobile } = useSelector((st) => st.user);
  const { favourites } = useSelector((st) => st.app);
  const { purple, purpleBg } = useConstants();

  const isFavourite = favourites.findIndex((x) => x === word) !== -1;


useEffect(() => {
    console.log(favourites)
  }, [favourites]);

  return (
    <Heart size={32} fill={isFavourite ? purple : ""} color={purple} onClick = {() => dispatch(setFavourites(word))} />
  );
}
