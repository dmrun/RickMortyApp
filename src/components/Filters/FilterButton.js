import { Button } from "@mui/material";
import React from "react";

const FilterButton = ({ input, task, setPage, index, name }) => {
  return (
    <div>
      <style>
        {`
          .x:focus {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        {/* <label
          onClick={(x) => {
            task(input);
            updatePageNumber(1);
          }}
          className="btn btn-outline-primary"
          for={`${name}-${index}`}
        >
          {input}
        </label> */}
        <Button
          size="small"
          color="primary"
          onClick={(x) => {
            task(input);
            setPage(1);
          }}
          variant="outlined"
          className="btnFilter x"
          id={`${name}-${index}`}
        >
          {input}
        </Button>
      </div>
    </div>
  );
};
export default FilterButton;
