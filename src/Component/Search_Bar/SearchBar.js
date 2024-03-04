import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import "./searchStyle.css";

function SearchBar() {
  return (
    <div className="searchContainer">
      <SearchIcon color="action" />
      <input
        type="text"
        className="inputField"
        placeholder="Search your product..."
      />
    </div>
  );
}

export default SearchBar;
