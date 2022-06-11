import { Grid, Checkbox, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetBlogsQuery } from "../../generated/graphql";
import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import ErrorDialog from "../Shared/Dialog/ErrorDialog";
import Loading from "../Shared/Dialog/Loading";
import Heading, { HeadingSub } from "../Shared/Heading";
import { CustomAutocomplete, CustomTextField } from "../Shared/InputField";
import BlogCard from "./BlogCard";
import { useGetTagsQuery, useGetClubsQuery } from "../../generated/graphql";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const Blog = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("search"));

  const { data: tags } = useGetTagsQuery();
  const { data: clubs } = useGetClubsQuery();
  const { data, loading, error } = useGetBlogsQuery({
    variables: {
      filters: {
        clubName: searchParams.get("club")?.split(","),
        tagNames: searchParams.get("tag")?.split(","),
        search: search,
      },
    },
  });
  const Tag = tags?.getTags ? tags?.getTags.map((tag) => tag.name) : [];
  const Club = clubs?.getClubs ? clubs?.getClubs.map((club) => club.name) : [];

  React.useEffect(() => {
    const timer = setTimeout(() => setSearch(searchParams.get("search")), 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("search")]);

  const handleFilter = (key: keyof typeof obj, value: string) => {
    let obj: { search?: string; tag?: string; club?: string } = {};
    if (searchParams.get("search"))
      obj = { ...obj, search: searchParams.get("search")! };
    if (searchParams.get("tag"))
      obj = { ...obj, tag: searchParams.get("tag")! };
    if (searchParams.get("club"))
      obj = { ...obj, club: searchParams.get("club")! };
    if (value) obj = { ...obj, [key]: value };
    if (!value) delete obj[key];
    setSearchParams(obj);
  };
  const setClubNameFilter = (value: string) => handleFilter("club", value);
  const setTagNameFilter = (value: string) => handleFilter("tag", value);

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
              handleFilter("search", e.target.value)
            }
          />
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
            mt={1}
          >
            <Grid item container gap={4}>
              <CustomAutocomplete
                multiple
                id="tag-filter"
                size="small"
                options={Tag}
                sx={{ flex: 1, minWidth: matches ? "100%" : "unset" }}
                disableCloseOnSelect
                getOptionLabel={(option: any) => option}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option as any}
                  </li>
                )}
                renderInput={(params) => (
                  <CustomTextField {...params} label="Filter By Tags" />
                )}
                value={
                  !!searchParams.get("tag")
                    ? searchParams.get("tag")?.split(",")
                    : []
                }
                onChange={(event, value) =>
                  handleFilter("tag", (value as any).join(","))
                }
              />
              <CustomAutocomplete
                multiple
                id="club-filter"
                size="small"
                options={Club}
                sx={{ flex: 1, minWidth: matches ? "100%" : "unset" }}
                disableCloseOnSelect
                getOptionLabel={(option: any) => option}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option as any}
                  </li>
                )}
                renderInput={(params) => (
                  <CustomTextField {...params} label="Filter By Clubs" />
                )}
                value={
                  !!searchParams.get("club")
                    ? searchParams.get("club")?.split(",")
                    : []
                }
                onChange={(event, value) =>
                  handleFilter("club", (value as any).join(","))
                }
              />
            </Grid>
          </Grid>
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
