import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Ara..."
      onChange={(e) => dispatch(changeFilter(e.target.value))}
    />
  );
};

export default SearchBox;
