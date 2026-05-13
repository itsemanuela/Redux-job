import { useDispatch, useSelector } from "react-redux";
import { Star, StarFill } from "react-bootstrap-icons";

const FavoriteButton = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.list);
  const isFav = favorites.some((fav) => fav._id === data._id);

  return (
    <span
      style={{ cursor: "pointer" }}
      onClick={() => {
        if (isFav) {
          dispatch({ type: "REMOVE_FAVORITES", payload: data._id });
        } else {
          dispatch({ type: "ADD_TO_FAVORITES", payload: data });
        }
      }}
    >
      {isFav ? <StarFill color="gold" /> : <Star color="gold" />}
    </span>
  );
};

export default FavoriteButton;
