import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import NoteCard from "../components/NoteCard/NoteCards";
import Masonry from "react-masonry-css";
import SearchBar from "../components/SearchBar/SearchBar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import DeleteIcon from "@mui/icons-material/Delete";

import { ExpandMore } from "@mui/icons-material";
import Filters from "../components/Filters/Filters";
import { Box } from "@mui/system";

// const filterData = (query, data) => {
//   if (!query) {
//     return data;
//   } else {
//     return data.filter((d) => d.name.toLowerCase().includes(query));
//   }
// };

let episodesList = Array.from(Array(53).keys());
episodesList.shift();

const filters = {
  status: ["Alive", "Dead", "Unknown"],
  species: [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ],
  gender: ["Female", "Male", "Genderless", "Unknown"],
};

export default function Episode() {
  const [characters, setChars] = useState([]);
  let [episodeId, setEpisodeId] = useState(1);
  let [info, setInfo] = useState([]);

  let api = `https://rickandmortyapi.com/api/episode/${episodeId}`;

  async function webServiceCall(api) {
    let data = await fetch(api).then((res) => res.json());
    setInfo(data);

    let a = await Promise.all(
      data.characters.map((x) => {
        return fetch(x).then((res) => res.json());
      })
    );
    setChars(a);
  }

  useEffect(() => {
    webServiceCall(api);
  }, [api]);

  // const dataFiltered = filterData(searchQuery, characters);

  // async function handleChangePage(event, newPage) {
  //   await setPage(newPage);
  //   webServiceCall(api, newPage);
  // }

  const handleChange = (event) => {
    setEpisodeId(event.target.value);
  };
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container className="containerChars">
      {/* Search Bar */}
      <div className="contentDiv">
        {/* Accordion for Filters */}
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Episodes</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={episodeId}
              onChange={handleChange}
            >
              {episodesList.map((elem) => (
                // console.log(elem),
                <MenuItem value={elem}>Episode {elem}</MenuItem>
              ))}
              {/* <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
        </Box>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {characters.map((char) => (
            <div key={char.id}>
              <NoteCard char={char} />
            </div>
          ))}
        </Masonry>
      </div>
      {/* <Pagination
        className="pagination"
        count={10}
        color="primary"
        page={page}
        onChange={handleChangePage}
      /> */}
    </Container>
  );
}
