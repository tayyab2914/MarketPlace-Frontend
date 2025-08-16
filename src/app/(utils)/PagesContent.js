import { API_ALL_PAGES_CONTENT } from "@/apis/AdminApis";
import { setPagesContent } from "@/redux/actions/pagesContentActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PageContent = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getPageData = async () => {
    const res = await API_ALL_PAGES_CONTENT(token);
    const parsedContent =
      res && res?.content ? JSON.parse(res?.content || "{}") : {};
    dispatch(setPagesContent(parsedContent));
  };
  
  useEffect(() => {
    getPageData();
  }, []);
  return null;
};

export default PageContent;
