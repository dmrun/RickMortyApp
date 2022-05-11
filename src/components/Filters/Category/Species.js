import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import FilterButton from "../FilterButton";

const Species = ({ setSpecies, setPage }) => {
  let species = [
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
  ];
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>Species</AccordionSummary>
      <AccordionDetails>
        {species.map((item, index) => (
          <FilterButton
            key={index}
            index={index}
            name="species"
            task={setSpecies}
            setPage={setPage}
            input={item}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
export default Species;
