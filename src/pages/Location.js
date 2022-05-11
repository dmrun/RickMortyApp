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

let locationsList = Array.from(Array(127).keys());
locationsList.shift();

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

export default function Location() {
  const [characters, setChars] = useState([]);
  let [number, setNumber] = useState(1);
  let [info, setInfo] = useState([]);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  async function webServiceCall(api) {
    let data = await fetch(api).then((res) => res.json());
    setInfo(data);

    let a = await Promise.all(
      data.residents.map((x) => {
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
    setNumber(event.target.value);
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
            <InputLabel id="demo-simple-select-label">Locations</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={number}
              onChange={handleChange}
            >
              {locationsList.map((elem) => (
                // console.log(elem),
                <MenuItem value={elem}>Location {elem}</MenuItem>
              ))}
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
    </Container>
  );
}
