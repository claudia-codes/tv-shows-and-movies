/**
 * Image Path is needed in both Media List and Media Details Page
 * I prefer HOCs to pass the data as oposed to requesting it twice
 */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMediaImageBasePath,
  selectMediaImageBasePath,
  selectCurrentMediaType,
} from "../store/mediaSlice";
import { configPath } from "../utils/urlComposer";

const withConfig = (WrappedComponent: React.FunctionComponent) => {
  const WithConfig = () => {
  const dispatch = useDispatch();
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
      // fetch only if not present already in store
      !currentMediaType && fetchConfig();
    }, [currentMediaType, dispatch, mediaImageBasePath]);

    return <WrappedComponent></WrappedComponent>
  };

  return WithConfig;
};

export default withConfig
