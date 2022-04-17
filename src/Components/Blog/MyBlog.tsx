import Grid from "@mui/material/Grid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetMeBlogsQuery } from "../../generated/graphql";
import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import ErrorDialog from "../Shared/Dialog/ErrorDialog";
import Loading from "../Shared/Dialog/Loading";
import Heading, { HeadingSub } from "../Shared/Heading";
import BlogCard from "./BlogCard";

const MyBlog = () => {
  const navigate = useNavigate();

  const { data, loading, error } = useGetMeBlogsQuery();

  const setClubNameFilter = (value: string) => {
    navigate(`/blog?club=${value}`);
  };
  const setTagNameFilter = (value: string) => {
    navigate(`/blog?tag=${value}`);
  };

  return (
    <CustomBox>
      <CustomGridPage>
        <Loading loading={!!loading} />
        <ErrorDialog message={!!error ? "Some Error Occurred" : null} />
        <Heading white="YOUR " red="BLOGS" />
        {data && (
          <Grid
            item
            container
            py={{ xs: 4, sm: 5, md: 6, lg: 6 }}
            gap={4}
            justifyContent="center"
          >
            {data.getMe.blogs?.length === 0 && (
              <HeadingSub white="NO BLOGS" red=" ADDED" />
            )}
            {data.getMe.blogs?.map((_blog) => (
              <BlogCard
                blog={_blog}
                handleClubClick={setClubNameFilter}
                handleTagClick={setTagNameFilter}
              />
            ))}
          </Grid>
        )}
      </CustomGridPage>
    </CustomBox>
  );
};

export default MyBlog;
