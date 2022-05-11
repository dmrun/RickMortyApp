import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Pagination, Typography } from "@mui/material";
import NoteCard from "../components/NoteCard/NoteCards";
import Masonry from "react-masonry-css";
import SearchBar from "../components/SearchBar/SearchBar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import DeleteIcon from "@mui/icons-material/Delete";

import { ExpandMore } from "@mui/icons-material";
import Filters from "../components/Filters/Filters";

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.name.toLowerCase().includes(query));
  }
};

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

export default function Characters() {
  const [characters, setChars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = React.useState(1);
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}&status=${status}&gender=${gender}&species=${species}`;
  async function webServiceCall(api, page) {
    let data = await fetch(api).then((res) => res.json());
    setChars(data.results);
  }

  useEffect(() => {
    webServiceCall(api, page);
  }, [api]);

  const dataFiltered = filterData(searchQuery, characters);

  async function handleChangePage(event, newPage) {
    await setPage(newPage);
    webServiceCall(api, newPage);
  }

  async function applyFilter(type, val) {}

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPage(1);
    window.location.reload(false);
  };

  return (
    <Container className="containerChars">
      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="contentDiv">
        {/* Accordion for Filters */}
        <Filters
          page={page}
          // status={status}
          setStatus={setStatus}
          setGender={setGender}
          setSpecies={setSpecies}
          setPage={setPage}
        />
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {dataFiltered.map((char) => (
            <div key={char.id}>
              <NoteCard char={char} />
            </div>
          ))}
        </Masonry>
      </div>
      <Pagination
        className="pagination"
        count={10}
        color="primary"
        page={page}
        onChange={handleChangePage}
      />
    </Container>
  );
}

// console.log(characters);

//   const handleDelete = async (id) => {
//     await fetch("http://localhost:8000/notes/" + id, { method: "DELETE" });

//     const newNotes = notes.filter((note) => note.id != id);
//     setNotes(newNotes);
//   };
