import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Pagination } from "@mui/material";
import NoteCard from "../components/NoteCard/NoteCards";
import Masonry from "react-masonry-css";
import SearchBar from "../components/SearchBar/SearchBar";

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.name.toLowerCase().includes(query));
  }
};

export default function Characters() {
  const [characters, setChars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = React.useState(1);

  let api = `https://rickandmortyapi.com/api/character/?page=`;

  async function webServiceCall(api, page) {
    let data = await fetch(api + page).then((res) => res.json());
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

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
