import "./SearchBar.scss";
import SearchIcon from "../../assets/Icons/search-24px.svg";

function SearchBar() {
  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        type="text"
        id="searchBar"
        placeholder="Search..."
      />
      <img className="searchBar__icon" src={SearchIcon} alt="Search Icon" />
    </div>
  );
}

export default SearchBar;
