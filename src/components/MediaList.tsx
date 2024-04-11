import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPopularMedia,
  selectCurrentMediaType,
  setPopularMedia,
} from "../store/mediaSlice"; 
import { configPath, getImagePath, getMediaListPathByType } from "../utils/urlComposer";

const MediaList = () => {
  const dispatch = useDispatch();
  const popularMedia = useSelector(selectPopularMedia);
  const currentMediaType = useSelector(selectCurrentMediaType);
  const [mediaImageBasePath, setMediaImageBasePath] = useState("");

  useEffect(() => {
    //Get config and compose image base path
    const fetchConfig = async () => {
      try {
        const response = await fetch(configPath);
        const data = await response.json();
        setMediaImageBasePath(
          data?.images.secure_base_url + data?.images.poster_sizes.slice(-1) // last array of poster size is "original" size
        );
        console.log(mediaImageBasePath);
      } catch (error) {
        console.error("Error fetching config: ", error);
      }
    };
    fetchConfig();
  }, [mediaImageBasePath]);

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
    //don't fetch unless store is empty
    !popularMedia.length && fetchPopularMedia();
  }, [dispatch]);

  return (
    <div>
      <h2>Popular {currentMediaType}</h2>
      <ul>
        {popularMedia?.map(
          (media: {
            id: string;
            title?: string; 
            name?: string;
            vote_average: string;
            backdrop_path: string;
          }) => (
            <li key={media?.id}>
              {media?.title || media?.name} {media?.vote_average}
              <img
                src={getImagePath(mediaImageBasePath, media.backdrop_path)}
                alt="Cover"
                loading="lazy"
              ></img>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default MediaList;
