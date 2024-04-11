import Carousel from "react-bootstrap/Carousel";
import { MediaItem } from "../utils/media.type";
import { Card } from "react-bootstrap";
import { getImagePath } from "../utils/urlComposer";
import { useSelector } from "react-redux";
import { selectMediaImageBasePath } from "../store/mediaSlice"
interface Props {
  mediaList: MediaItem[];
}

const MediaCarousel: React.FunctionComponent<Props> = ({ mediaList }) => {
  const mediaImageBasePath = useSelector(selectMediaImageBasePath);

  return (
    <Carousel>
      {mediaList?.map((media: MediaItem) => (
        <Carousel.Item>
          <Card>
            <Card.Img
              variant="top"
              src={getImagePath(mediaImageBasePath, media.backdrop_path)}
              alt={media?.title || media?.name}
            />
            <Card.Body>
              <Card.Title>{media?.title || media?.name} </Card.Title>
              <Card.Text>{media?.vote_average}</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MediaCarousel;
