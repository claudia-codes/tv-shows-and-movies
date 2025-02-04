import ListGroup from "react-bootstrap/ListGroup";
import { MediaItem } from "../utils/media.type";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { getImagePath } from "../utils/urlComposer";
import { useSelector } from "react-redux";
import { selectMediaImageBasePath } from "../store/mediaSlice";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload"

import "./MediaList.css";

interface Props {
  mediaList: MediaItem[];
}
const MediaList: React.FunctionComponent<Props> = ({ mediaList }) => {
  const mediaImageBasePath = useSelector(selectMediaImageBasePath);
  const navigate = useNavigate();

  const handleClick = useCallback(
    (mediaId: string) => {
      navigate(`/details/${mediaId}`);
    },
    [navigate]
  );

  return (
    <ListGroup variant="flush" data-bs-theme="dark">
      {mediaList?.map((media: MediaItem) => (
        <ListGroup.Item key={media.id}>
          <Container className="mediaList-row" fluid>
            <Row>
              <Col>
                <LazyLoad height={200} once>
                  <Image
                    className="mediaList-image"
                    src={getImagePath(mediaImageBasePath, media.backdrop_path)}
                  />
                </LazyLoad>
              </Col>
              <Col xs={4}>
                <h4>{media?.title || media?.name}</h4>
                <div className="mediaList-shortOverview">{media?.overview}</div>
                <div>Average votes: {media?.vote_average}</div>
              </Col>
              <Col>
                <Button
                  variant="outline-secondary"
                  onClick={() => handleClick(media?.id)}
                >
                  Details &gt;
                </Button>{" "}
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default MediaList;
