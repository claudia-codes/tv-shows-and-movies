import React from "react";
import Container from "react-bootstrap/Container";
import { Button, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentMediaType } from "../store/mediaSlice";
import MediaDropdown from "./MediaDropdown";
import { useLocation, useNavigate } from "react-router-dom";

const isPathIncluded = (pathname: string, requiredPath: string) =>
  pathname.includes(requiredPath);

interface Props {}
const MainNavBar: React.FunctionComponent<Props> = () => {
  const currentMediaType = useSelector(selectCurrentMediaType);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Button
          className={!isPathIncluded(pathname, "details") ? "invisible" : ""}
          variant="outline-outline"
          onClick={navigateBack}
        >
          &lt; Back
        </Button>
        <Navbar.Brand>Popular {currentMediaType}</Navbar.Brand>

        <MediaDropdown
          className={isPathIncluded(pathname, "details") ? "invisible" : ""}
          mediaType={currentMediaType}
        ></MediaDropdown>
      </Container>
    </Navbar>
  );
};

export default MainNavBar;
