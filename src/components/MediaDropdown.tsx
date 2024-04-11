
import { Media, MediaType } from "../utils/media.type";
import { setCurrentMediaType } from "../store/mediaSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { NavDropdown } from "react-bootstrap";

interface Props {
  mediaType: MediaType;
}

const MediaDropdown: React.FunctionComponent<Props> = ({ mediaType }) => {
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (newMediaType: MediaType) => {
      mediaType !== newMediaType && dispatch(setCurrentMediaType(newMediaType));
    },
    [dispatch, mediaType]
  );

  return (
    <NavDropdown title={mediaType}>
      <NavDropdown.Item onClick={() => handleClick(Media.movies)} href="#">
        {Media.movies}
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => handleClick(Media.shows)} href="#">
        {Media.shows}
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default MediaDropdown;
