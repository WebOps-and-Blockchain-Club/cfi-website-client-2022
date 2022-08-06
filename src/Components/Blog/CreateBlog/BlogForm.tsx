import React from "react";
import {
  Button,
  CardMedia,
  Checkbox,
  Grid,
  InputAdornment,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  BlogStatus,
  CreateBlogInput,
  GetBlogQuery,
  useGetClubsQuery,
  useGetTagsQuery,
} from "../../../generated/graphql";
import { CustomAutocomplete, CustomTextField } from "../../Shared/InputField";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Heading from "../../Shared/Heading";
import MarkDownEditor from "../../Form/Editor";

interface Probs {
  initialValues: GetBlogQuery | undefined;
  handleCreateBlog: Function;
  handleSaveAndPreview: Function;
}

const BlogForm = (probs: Probs) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const { data: tags } = useGetTagsQuery();
  const { data: clubs } = useGetClubsQuery();

  const [blogInput, setBlogInput] = React.useState<Partial<CreateBlogInput>>();

  type CreateBlogInputKeys = keyof typeof blogInput;
  const handleChange = (key: CreateBlogInputKeys, value: any) => {
    setBlogInput({ ...blogInput, [key]: value });
  };

  const [selectedTags, setSelectedTags] = React.useState<
    { id: string; name: string }[]
  >([]);
  const [selectedClub, setSelectedClub] = React.useState<{
    id: string;
    name: string;
  }>();
  const [previewImg, setPreviewImg] = React.useState<string>();
  const [btnState, setBtnState] = React.useState<string>();

  const selectedTagsId = () => {
    const clubs: string[] = [];
    selectedTags.map((tag) => clubs.push(tag.id));
    return clubs;
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (btnState === "DRAFT") {
      probs.handleCreateBlog(
        { ...blogInput, clubId: selectedClub?.id },
        BlogStatus.Draft,
        selectedTagsId()
      );
    } else if (btnState === "PREVIEW") {
      probs.handleSaveAndPreview(
        { ...blogInput, clubId: selectedClub?.id },
        BlogStatus.Draft,
        selectedTagsId()
      );
    } else if (btnState === "SUBMIT") {
      probs.handleCreateBlog(
        { ...blogInput, clubId: selectedClub?.id },
        BlogStatus.Pending,
        selectedTagsId()
      );
    }
  };

  React.useEffect(() => {
    if (probs.initialValues?.getBlog) {
      if (probs.initialValues.getBlog.tags)
        setSelectedTags(probs.initialValues.getBlog.tags);
      if (probs.initialValues.getBlog.club)
        setSelectedClub(probs.initialValues.getBlog.club);
      if (probs.initialValues?.getBlog?.image?.url) {
        setBlogInput({
          ...probs.initialValues?.getBlog,
          imageUrl: probs.initialValues?.getBlog?.image?.url,
        });
        setPreviewImg(probs.initialValues?.getBlog?.image?.url);
      } else {
        setBlogInput(probs.initialValues?.getBlog);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [probs.initialValues?.getBlog]);

  return (
    <form style={{ width: "100%" }} onSubmit={onSubmit}>
      <Grid
        container
        bgcolor={"primary.light"}
        borderRadius={"20px"}
        p={4}
        gap={4}
        justifyContent="center"
      >
        <Heading white="CREATE " red="BLOG" />
        <Grid item container gap={4}>
          <CustomTextField
            id="title"
            label="Title"
            variant="outlined"
            size="small"
            required
            fullWidth
            value={blogInput?.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("title" as never, e.target.value)
            }
          />
        </Grid>
        <Grid item container gap={4}>
          <CustomTextField
            id="description"
            label="Description"
            variant="outlined"
            size="small"
            multiline
            fullWidth
            value={blogInput?.description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("description" as never, e.target.value)
            }
          />
        </Grid>
        <Grid item container gap={4}>
          {tags?.getTags && (
            <CustomAutocomplete
              multiple
              id="tags"
              size="small"
              options={tags.getTags}
              fullWidth
              disableCloseOnSelect
              getOptionLabel={(option: any) => option.name}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {(option as any).name}
                </li>
              )}
              renderInput={(params) => (
                <CustomTextField {...params} label="Select Tags" />
              )}
              value={selectedTags}
              onChange={(event, value) => setSelectedTags(value as any)}
            />
          )}
        </Grid>
        <Grid item container gap={4}>
          <CustomTextField
            id="author"
            label="Author"
            variant="outlined"
            size="small"
            sx={{ flex: 1, minWidth: matches ? "100%" : "unset" }}
            value={blogInput?.author}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("author" as never, e.target.value)
            }
          />
          <CustomTextField
            id="readingTime"
            label="Reading Time"
            variant="outlined"
            size="small"
            type={"number"}
            sx={{ flex: 1, minWidth: matches ? "100%" : "unset" }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ color: "primary.contrastText" }}
                >
                  <Typography color={"primary.contrastText"}>min</Typography>
                </InputAdornment>
              ),
            }}
            value={blogInput?.readingTime}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("readingTime" as never, Number(e.target.value))
            }
          />
          {clubs && (
            <CustomAutocomplete
              id="club"
              size="small"
              sx={{ flex: 1, minWidth: matches ? "100%" : "unset" }}
              options={clubs.getClubs}
              getOptionLabel={(option: any) => option.name}
              renderOption={(props, option /*, { selected }*/) => (
                <li {...props}>{(option as any).name}</li>
              )}
              renderInput={(params) => (
                <CustomTextField {...params} label="Select Club" />
              )}
              value={
                !!selectedClub
                  ? { id: selectedClub?.id, name: selectedClub?.name }
                  : null
              }
              onChange={(event, value) => setSelectedClub(value as any)}
            />
          )}
        </Grid>

        <Grid
          item
          container
          gap={4}
          alignItems="center"
          justifyContent="center"
        >
          {previewImg && (
            <CardMedia
              component="img"
              image={previewImg}
              alt="newsimg"
              sx={{
                borderRadius: "20px",
                verticalAlign: "middle",
                objectFit: "cover",
                height: matches ? "50vw" : "250px",
                width: matches ? "62.5vw" : "312.5px",
              }}
            />
          )}
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="blog-img-upload-btn"
            type="file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.files![0]);
              handleChange("imageData" as never, e.target.files![0]);
              const objectUrl = URL.createObjectURL(e.target.files![0]);
              setPreviewImg(objectUrl);
            }}
          />
          <label htmlFor="blog-img-upload-btn">
            <Button
              component="span"
              sx={{
                padding: "5px 20px",
                color: "primary.contrastText",
                backgroundColor: "secondary.dark",
                fontWeight: "bold",
                fontSize: "16px",
                ":hover": {
                  backgroundColor: "secondary.main",
                  color: "primary.contrastText",
                },
              }}
              startIcon={<PhotoCamera />}
            >
              {previewImg ? "Re-Select Image" : "Select Image"}
            </Button>
          </label>
          <Typography
            color="primary.contrastText"
            fontSize={"14px"}
            m={0}
            textAlign={"justify"}
          >
            Recommended Size: 4:5
          </Typography>
        </Grid>

        <Grid item container gap={4} direction="column">
          <Typography
            gutterBottom
            component="div"
            color="primary.contrastText"
            fontSize={{
              xs: "16px",
              sm: "18px",
            }}
            m={0}
            textAlign={"justify"}
          >
            Get Started with your blog content,
          </Typography>
          <MarkDownEditor
            id="content"
            value={blogInput?.content!}
            onChange={handleChange}
          />
        </Grid>

        <Grid item container gap={4}>
          <Button
            sx={{
              flex: "1",
              padding: "5px 20px",
              color: "primary.contrastText",
              backgroundColor: "secondary.dark",
              fontWeight: "bold",
              fontSize: "16px",
              ":hover": {
                backgroundColor: "secondary.main",
                color: "primary.contrastText",
              },
            }}
            type="submit"
            onClick={() => setBtnState("DRAFT")}
          >
            SAVE AS DRAFT
          </Button>
          <Button
            sx={{
              flex: "1",
              padding: "5px 20px",
              color: "primary.contrastText",
              backgroundColor: "secondary.dark",
              fontWeight: "bold",
              fontSize: "16px",
              ":hover": {
                backgroundColor: "secondary.main",
                color: "primary.contrastText",
              },
            }}
            type="submit"
            onClick={() => setBtnState("PREVIEW")}
          >
            SAVE & PREVIEW
          </Button>
          <Button
            sx={{
              flex: "1",
              padding: "5px 20px",
              color: "primary.contrastText",
              backgroundColor: "secondary.dark",
              fontWeight: "bold",
              fontSize: "16px",
              ":hover": {
                backgroundColor: "secondary.main",
                color: "primary.contrastText",
              },
            }}
            type="submit"
            onClick={() => setBtnState("SUBMIT")}
          >
            SUBMIT
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default BlogForm;
