import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar} from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentMediaType } from "../store/mediaSlice";
import MediaDropdown from "./MediaDropdown";

interface Props {}
const MainNavBar: React.FunctionComponent<Props> = () => {
  const currentMediaType = useSelector(selectCurrentMediaType);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Popular {currentMediaType}</Navbar.Brand>
        <MediaDropdown mediaType={currentMediaType}></MediaDropdown>
      </Container>
    </Navbar>
  );
};

export default MainNavBar;
