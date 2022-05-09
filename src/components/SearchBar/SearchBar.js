import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

const SearchBar = ({ setSearchQuery }) => (
  <form className="searchBar">
    <TextField
      id="search-bar-temp"
      color="primary"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Enter character name"
      variant="outlined"
      placeholder="Search..."
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="search">
              <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
      style={{ width: "50%" }}
    />
  </form>
);

export default SearchBar;
