import Carousel from "react-bootstrap/Carousel";
import { MediaItem } from "../utils/media.type";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { getImagePath } from "../utils/urlComposer";
import { useSelector } from "react-redux";
import { selectMediaImageBasePath } from "../store/mediaSlice";
import Skeleton from "react-loading-skeleton";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "./MediaCarousel.css";

interface Props {
  mediaList: MediaItem[];
}

const MediaCarousel: React.FunctionComponent<Props> = ({ mediaList }) => {
  const mediaImageBasePath = useSelector(selectMediaImageBasePath);
  const [imageLoaded, setImageLoaded] = useState(false);

  const navigate = useNavigate();

  const handleClick = useCallback(
    (mediaId: string) => {
      navigate(`details/${mediaId}`);
    },
    [navigate]
  );

  return (
    <Carousel data-bs-theme="dark" className="mediaCarousel">
      {mediaList?.map((media: MediaItem) => (
        <Carousel.Item key={media?.id}>
          <Card>
            <Card.Img
              variant="top"
              src={getImagePath(mediaImageBasePath, media.backdrop_path)}
              alt={media?.title || media?.name}
              onLoad={() => setImageLoaded(true)}
            />

            {!imageLoaded && <Skeleton className="mediaCarousel-skeleton" />}

            <Card.Body className="mediaCarousel-cardBody">
              <Container>
                <Row className="mediaCarousel-actions">
                  <Col>
                    <Card.Text>
                      <h1>{media?.title || media?.name} </h1>
                    </Card.Text>
                  </Col>
                  <Col md={10}>
                    <Button
                      variant="outline-link"
                      onClick={() => handleClick(media?.id)}
                    >
                      Show more &gt;
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MediaCarousel;
