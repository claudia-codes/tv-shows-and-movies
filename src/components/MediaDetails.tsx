import { Card} from "react-bootstrap";
import { MediaItem } from "../utils/media.type";
import LazyLoad from "react-lazyload"
import "./MediaDetails.css";

interface Props {
  media: MediaItem;
  mediaPath: string;
}
const MediaDetails: React.FunctionComponent<Props> = ({ media, mediaPath }) => {
  return (
    <>
      {media && (
        <Card  data-bs-theme="dark" className="mediaDetails-card">
          <LazyLoad height={"90vh"} once>
          <Card.Img
            variant="top"
            src={mediaPath}
            alt={media?.title || media?.name}
          />
          </LazyLoad>
          <Card.Body className="mediaDetails-card">
            <Card.Title>
              <h1>{media?.title || media?.name} </h1>
            </Card.Title>
            <Card.Text>{media?.overview}</Card.Text>
            <Card.Text>Average score: {media?.vote_average}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default MediaDetails;
