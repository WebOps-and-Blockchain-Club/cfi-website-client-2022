import {
  Grid,
  FormControl,
  InputLabel,
  Box,
  Select,
  OutlinedInput,
  Chip,
  MenuItem,
} from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetBlogsQuery } from "../../generated/graphql";
import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import ErrorDialog from "../Shared/Dialog/ErrorDialog";
import Loading from "../Shared/Dialog/Loading";
import Heading, { HeadingSub } from "../Shared/Heading";
import { CustomTextField } from "../Shared/InputField";
import BlogCard from "./BlogCard";
import { SelectChangeEvent } from "@mui/material/Select";
import { useGetTagsQuery, useGetClubsQuery } from "../../generated/graphql";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: tags } = useGetTagsQuery();
  const { data: clubs } = useGetClubsQuery();
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
  const Tag = tags?.getTags ? tags?.getTags.map((tag) => tag.name) : [];
  const Club = clubs?.getClubs ? clubs?.getClubs.map((club) => club.name) : [];
  const [tagName, settagName] = React.useState<string[]>([]);
  const [clubName, setclubName] = React.useState<string[]>([]);
  const setFilter = (event: SelectChangeEvent<typeof tagName>) => {
    const {
      target: { value },
    } = event;

    settagName(typeof value === "string" ? value.split(",") : value);
    if (value.length !== 0 && clubName.length !== 0) {
      setSearchParams({
        tag: typeof value === "string" ? value : value.join(),
        club: clubName.join(""),
      });
    } else if (value.length !== 0 && clubName.length === 0) {
      setSearchParams({
        tag: typeof value === "string" ? value : value.join(),
      });
    } else if (value.length === 0 && clubName.length !== 0) {
      setSearchParams({
        club: clubName.join(""),
      });
    } else {
      navigate("/blog");
    }
  };

  const setFilterClub = (event: SelectChangeEvent<typeof clubName>) => {
    const {
      target: { value },
    } = event;

    setclubName(typeof value === "string" ? value.split(",") : value);
    if (value.length !== 0 && tagName.length !== 0) {
      setSearchParams({
        club: typeof value === "string" ? value : value.join(),
        tag: tagName.join(""),
      });
    } else if (value.length !== 0 && tagName.length === 0) {
      setSearchParams({
        club: typeof value === "string" ? value : value.join(),
      });
    } else if (value.length === 0 && tagName.length !== 0) {
      setSearchParams({
        tag: tagName.join(""),
      });
    } else {
      navigate("/blog");
    }
  };
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
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
            mt={1}
          >
            <Grid item xs={8}>
              <div>
                <FormControl
                  sx={{ m: 1, width: 300, backgroundColor: "white" }}
                >
                  <InputLabel id="tag-filter">Tag Filter</InputLabel>
                  <Select
                    labelId="tag-filter"
                    id="tags"
                    multiple
                    value={tagName}
                    onChange={setFilter}
                    input={
                      <OutlinedInput
                        id="tag_filter"
                        sx={{ color: "primary" }}
                        label="Tag Filter"
                      />
                    }
                    renderValue={(selected) => {
                      return (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      );
                    }}
                  >
                    {Tag.map((tag) => (
                      <MenuItem key={tag} value={tag}>
                        {tag}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div>
                <FormControl
                  sx={{ m: 1, width: 300, backgroundColor: "white" }}
                >
                  <InputLabel id="club-filter">Club Filter</InputLabel>
                  <Select
                    labelId="club-filter"
                    id="clubs"
                    multiple
                    value={clubName}
                    onChange={setFilterClub}
                    input={
                      <OutlinedInput
                        id="club_filter"
                        sx={{ color: "primary" }}
                        label="Club Filter"
                      />
                    }
                    renderValue={(selected) => {
                      return (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      );
                    }}
                  >
                    {Club.map((club) => (
                      <MenuItem key={club} value={club}>
                        {club}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
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
