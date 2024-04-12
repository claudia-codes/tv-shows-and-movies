import { Card} from "react-bootstrap";
import { MediaItem } from "../utils/media.type";
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
          <Card.Img
            variant="top"
            src={mediaPath}
            alt={media?.title || media?.name}
          />
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
