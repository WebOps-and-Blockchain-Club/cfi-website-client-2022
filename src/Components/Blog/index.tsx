import Grid from "@mui/material/Grid";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetBlogsQuery } from "../../generated/graphql";
import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import ErrorDialog from "../Shared/Dialog/ErrorDialog";
import Loading from "../Shared/Dialog/Loading";
import Heading, { HeadingSub } from "../Shared/Heading";
import { CustomTextField } from "../Shared/InputField";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = React.useState(searchParams.get("search"));
  const { data, loading, error } = useGetBlogsQuery({
    variables: {
      filters: {
        clubName: searchParams.get("club")?.split(","),
        tagNames: searchParams.get("tag")?.split(","),
        search: search,
      },
    },
  });

  const setClubNameFilter = (value: string) => setSearchParams({ club: value });
  const setTagNameFilter = (value: string) => setSearchParams({ tag: value });

  React.useEffect(() => {
    const timer = setTimeout(() => setSearch(searchParams.get("search")), 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("search")]);

  return (
    <CustomBox>
      <CustomGridPage>
        <Loading loading={!!loading} />
        <ErrorDialog message={!!error ? "Some Error Occurred" : null} />
        <Heading white="CFI " red="BLOGS" />
        <Grid item container py={{ xs: 4, sm: 5, md: 6, lg: 6 }}>
          <CustomTextField
            id="search"
            label="Search Blogs"
            variant="outlined"
            fullWidth
            value={searchParams.get("search")}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchParams({ search: e.target.value })
            }
          />
        </Grid>
        {data && (
          <Grid
            item
            container
            py={{ xs: 4, sm: 5, md: 6, lg: 6 }}
            gap={4}
            justifyContent="stretch"
          >
            {data.getBlogs.blogs?.length === 0 && (
              <HeadingSub white="NO BLOGS" red=" ADDED" />
            )}
            {data.getBlogs.blogs?.map((_blog) => (
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

export default Blog;
