import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import FilterButton from "../FilterButton";

const Status = ({ setStatus, setPage }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>Status</AccordionSummary>
      <AccordionDetails>
        {status.map((item, index) => (
          <FilterButton
            key={index}
            index={index}
            name="status"
            task={setStatus}
            setPage={setPage}
            input={item}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
export default Status;
