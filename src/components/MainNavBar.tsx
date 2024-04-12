import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentMediaType } from "../store/mediaSlice";
import MediaDropdown from "./MediaDropdown";
import { useLocation } from "react-router-dom";

const isMediaSelectionEnabled = (pathname: string) => !pathname.includes("details")
interface Props {}
const MainNavBar: React.FunctionComponent<Props> = () => {
  const currentMediaType = useSelector(selectCurrentMediaType);
  const { pathname } = useLocation();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Popular {currentMediaType}</Navbar.Brand>
        {isMediaSelectionEnabled(pathname) && <MediaDropdown mediaType={currentMediaType}></MediaDropdown>}
      </Container>
    </Navbar>
  );
};

export default MainNavBar;
