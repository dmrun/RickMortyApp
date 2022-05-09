import React, { useEffect, useState } from "react";
import { FormControlLabel, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FormControl, FormLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { CustomTable } from "../components/CustomTable/CustomTable";

//ExtraCustomCSS
const TextFieldCustom = styled(TextField)(({ theme }) => ({
  marginTop: 20,
  marginBottom: 20,
  display: "block",
}));
const FormControlCustom = styled(FormControl)(({ theme }) => ({
  marginTop: 20,
  marginBottom: 20,
  display: "block",
}));

let noteId = 0;

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title == "") {
      setTitleError(true);
    } else if (details == "") {
      setDetailsError(true);
    }

    const objNote = {
      id: noteId,
      title: title,
      details: details,
      category: category,
    };

    if (title && details) {
      setInputs(inputs.concat(objNote));
    }
    noteId += 1;
  };

  const handleDelete = async (id) => {
    const newNotes = inputs.filter((note) => note.id != id);
    setInputs(newNotes);
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextFieldCustom
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        ></TextFieldCustom>
        <TextFieldCustom
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        ></TextFieldCustom>

        <FormControlCustom>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel control={<Radio />} label="Money" value="money" />
            <FormControlLabel control={<Radio />} label="Todos" value="todos" />
            <FormControlLabel
              control={<Radio />}
              label="Reminders"
              value="reminders"
            />
            <FormControlLabel control={<Radio />} label="Work" value="work" />
          </RadioGroup>
        </FormControlCustom>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={
            <KeyboardArrowRightOutlinedIcon></KeyboardArrowRightOutlinedIcon>
          }
        >
          Submit
        </Button>
        <CustomTable notes={inputs} handleDelete={handleDelete} />
      </form>
    </Container>
  );
}

//import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
//import ButtonGroup from "@mui/material/ButtonGroup";
//import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";

{
  /* <Typography variant="h1" color="primary" align="center">
        Create a New Note
      </Typography> */
}
{
  /* <Typography color="secondary" noWrap>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        
      </Typography> */
}

{
  /* <Button type="submit">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">
        Submit2
      </Button>
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */
}

{
  /* Icons */
}
{
  /* <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="secondary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" fontSize="small" />
      <AcUnitOutlinedIcon color="error" fontSize="small" />
      <AcUnitOutlinedIcon color="disabled" fontSize="small" /> */
}

// fetch("http://localhost:8000/notes", {
//   method: "POST",
//   headers: { "Content-type": "application/json" },
//   body: JSON.stringify({ title, details, category }),
// }).then(() => navigate("/"));
