import React from "react";

const SearchBox = (props) => {
  return (
    <div>
      <label class="custom-field" aria-label="Enter Email">
        <input
          type="email"
          placeholder="Search movie"
          value={props.value}
          onChange={(event) => props.setSearchResult(event.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
