import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPopularMedia,
  selectCurrentMediaType,
  setPopularMedia,
} from "../store/mediaSlice";
import {
  getMediaListPathByType,
} from "../utils/urlComposer";
import MediaCarousel from "../components/MediaCarousel";
import MediaList from "../components/MediaList";

const MediaListPage = () => {
  const dispatch = useDispatch();
  const popularMedia = useSelector(selectPopularMedia);
  const currentMediaType = useSelector(selectCurrentMediaType);

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
      <MediaCarousel mediaList={popularMedia}></MediaCarousel>
      <MediaList mediaList={popularMedia}></MediaList>
    </div>
  );
};

export default MediaListPage;
