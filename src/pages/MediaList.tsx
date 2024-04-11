import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPopularMedia,
  selectCurrentMediaType,
  setPopularMedia,
  setMediaImageBasePath,
  selectMediaImageBasePath,
} from "../store/mediaSlice";
import {
  configPath,
  getMediaListPathByType,
} from "../utils/urlComposer";
import MediaDropdown from "../components/MediaDropdown";
import MediaCarousel from "../components/MediaCarousel";

const MediaList = () => {
  const dispatch = useDispatch();
  const popularMedia = useSelector(selectPopularMedia);
  const currentMediaType = useSelector(selectCurrentMediaType);
  const mediaImageBasePath = useSelector(selectMediaImageBasePath);

  useEffect(() => {
    //Get config and compose image base path
    const fetchConfig = async () => {
      try {
        const response = await fetch(configPath);
        const data = await response.json();
        dispatch(setMediaImageBasePath(data));
      } catch (error) {
        console.error("Error fetching config: ", error);
      }
    };
    fetchConfig();
  }, [dispatch, mediaImageBasePath]);

  useEffect(() => {
    // Fetch popular movies or popular tv shows
    const fetchPopularMedia = async () => {
      try {
        const response = await fetch(getMediaListPathByType(currentMediaType));
        const data = await response.json();
        dispatch(setPopularMedia(data.results));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    !popularMedia.length && fetchPopularMedia(); // refetch data only if they don't exist in store
  }, [dispatch, currentMediaType, popularMedia.length]);

  return (
    <div>
      <h2>Popular {currentMediaType}</h2>
      <MediaDropdown mediaType={currentMediaType}></MediaDropdown>
      <MediaCarousel mediaList={popularMedia}></MediaCarousel>
    </div>
  );
};

export default MediaList;
