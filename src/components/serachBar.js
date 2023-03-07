import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
export const SearchBar = ({ setValue }) => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue, "hj");
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Button variant="outline-success" onClick={() => setValue(inputValue)}>
        Search Movie
      </Button>
    </Form>
  );
};
