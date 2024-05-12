import { useId } from "react";

import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const filters = useSelector(selectNameFilter);

  const onChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const id = useId();

  return (
    <div className={css["search-box"]}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        type="text"
        id={id}
        value={filters}
        onChange={onChange}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
