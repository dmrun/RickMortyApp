import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import FilterButton from "../FilterButton";

const Gender = ({ setGender, setPage }) => {
  let gender = ["Female", "Male", "Genderless", "Unknown"];
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>Gender</AccordionSummary>
      <AccordionDetails>
        {gender.map((item, index) => (
          <FilterButton
            key={index}
            index={index}
            name="gender"
            task={setGender}
            setPage={setPage}
            input={item}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
export default Gender;
