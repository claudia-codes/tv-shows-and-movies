import Dropdown from "react-bootstrap/Dropdown";
import { Media, MediaType } from "../utils/media.type";
import { setCurrentMediaType } from "../store/mediaSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

interface Props {
    mediaType: MediaType
}

const MediaDropdown: React.FunctionComponent<Props> = ({ mediaType }) => {
    const dispatch = useDispatch();
  const handleClick = useCallback(
    (newMediaType: MediaType) => { 
        mediaType !== newMediaType && dispatch(setCurrentMediaType(newMediaType));
    },
    [mediaType]
  );

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {mediaType}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleClick(Media.movies)} href="#">
          {Media.movies}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick(Media.shows)} href="#">
          {Media.shows}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MediaDropdown;
