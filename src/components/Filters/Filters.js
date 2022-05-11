import { Button, Typography } from "@mui/material";
import React from "react";
import Status from "./Category/Status";
import DeleteIcon from "@mui/icons-material/Delete";
import Species from "./Category/Species";
import Gender from "./Category/Gender";

const Filters = ({ page, setPage, setStatus, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPage(1);
    window.location.reload(false);
  };
  return (
    <div id="accordion-section" className="accordion">
      <Typography variant="h6" className="title">
        Filters
      </Typography>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        color="primary"
        className="clearFilters"
        style={{
          marginLeft: "23%",
          marginBottom: "10px",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={clear}
      >
        Clear Filters
      </Button>
      <Status setPage={setPage} setStatus={setStatus} />
      <Species setPage={setPage} setSpecies={setSpecies} />
      <Gender setPage={setPage} setGender={setGender} />
    </div>
  );
};

export default Filters;
