import MediaDetails from "../components/MediaDetails";
import {
  getImagePath,
  getMediaDetailsPathByType,
  getMediaReccomendationsPathByType,
} from "../utils/urlComposer";
import { useSelector } from "react-redux";
import {
  selectMediaImageBasePath,
  selectCurrentMediaType,
} from "../store/mediaSlice";
import { useState, useEffect } from "react";
import MediaList from "../components/MediaList";
import { useParams } from "react-router-dom";

interface Props {}
const MediaDetailsPage: React.FunctionComponent<Props> = () => {
  const { mediaId } = useParams();
  const currentMediaType = useSelector(selectCurrentMediaType);
  const mediaImageBasePath = useSelector(selectMediaImageBasePath);
  const [media, setMedia] = useState(null);
  const [recommendedMedia, setRecommendedMedia] = useState(null);
  const [mediaPath, setMediaPath] = useState("");

  useEffect(() => {
    const fetchMediaDetails = async () => {
      try {
        if (mediaId) {
          const response = await fetch(
            getMediaDetailsPathByType(currentMediaType, mediaId)
          );
          const data = await response.json();
          setMedia(data);
        }
      } catch (error) {
        console.error("Error fetching media details: ", error);
      }
    };
    fetchMediaDetails();
  }, [currentMediaType, mediaId]);

  useEffect(() => {
    const fetchMediaRecommended = async () => {
      try {
        if (mediaId) {
          const response = await fetch(
            getMediaReccomendationsPathByType(currentMediaType, mediaId)
          );
          const data = await response.json();
          setRecommendedMedia(data.results);
        }
      } catch (error) {
        console.error("Error fetching recommended media: ", error);
      }
    };
    fetchMediaRecommended();
  }, [currentMediaType, mediaId]);

  useEffect(() => {
    console.log(mediaPath);

    if (media) {
      //@ts-ignore
      setMediaPath(getImagePath(mediaImageBasePath, media?.backdrop_path));
    }
  }, [media, mediaImageBasePath, mediaPath]);

  return (
    <>
      {media && (
        <MediaDetails media={media} mediaPath={mediaPath}></MediaDetails>
      )}
      <h3 style={{ color: "white", padding: 20 }}>{`Recommended ${currentMediaType}`}</h3>
      {recommendedMedia && <MediaList mediaList={recommendedMedia}></MediaList>}
    </>
  );
};

export default MediaDetailsPage;
