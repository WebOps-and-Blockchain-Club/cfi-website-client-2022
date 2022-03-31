/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  Button,
  Checkbox,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
// import AuthContext from "../../Utils/context";
// TypeScript users only add this code
// import { BaseEditor, createEditor, Descendant } from "slate";
// import { Editable, ReactEditor, Slate, withReact } from "slate-react";
// import { CustomElement } from "../../Types/slate";
import { useGetTagsQuery } from "../../generated/graphql";
import { CustomAutocomplete, CustomTextField } from "../Shared/InputField";
// import CustomTextField from "../Shared/TextField";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Editor } from "@tinymce/tinymce-react/lib/cjs/main/ts/components/Editor";
import Heading from "../Shared/Heading";
import * as yup from "yup";
import { useFormik } from "formik";
import { ClubsArr } from "../../Utils";

interface Probs {
  initialValues?: any | null;
  handleDraft: Function;
  handleSubmit?: Function | null;
  handlePreview?: Function | null;
}

const BlogForm = (probs: Probs) => {
  const { data, loading, error } = useGetTagsQuery();

  // const validationSchema = yup.object({
  //   title: yup.string().required("Title is required"),
  //   author: yup.string().required("Author is required"),
  //   description: yup.string().required("Description is required"),
  //   readingTime: yup.number().required("")
  // });

  const formik = useFormik({
    initialValues: probs.initialValues,
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <form style={{ width: "100%" }}>
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
            required
          />
        </Grid>
        <Grid item container gap={4}>
          <CustomTextField
            id="author"
            label="Author"
            variant="outlined"
            size="small"
            required
          />
          <CustomTextField
            id="readingTime"
            label="Reading Time"
            variant="outlined"
            size="small"
            type={"number"}
            required
            InputProps={{
              // inputProps: { min: 0, max: 10 },
              endAdornment: (
                <InputAdornment position="end" sx={{ color: "#d6d6d6" }}>
                  <Typography color={"#d6d6d6"}>min</Typography>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item container gap={4}>
          {data?.getTags && (
            <CustomAutocomplete
              multiple
              id="tags"
              size="small"
              options={data.getTags}
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
              style={{ width: 500 }}
              renderInput={(params) => (
                <CustomTextField {...params} label="Select Tags" />
              )}
            />
          )}
          <CustomAutocomplete
            id="club"
            size="small"
            options={ClubsArr}
            getOptionLabel={(option: any) => option}
            renderOption={(props, option /*, { selected }*/) => (
              <li {...props}>{option as any}</li>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Club" />
            )}
          />
        </Grid>

        <Grid item container>
          <Editor
            apiKey="mkq4wx2fqdpsudg39muuml92d69h1mo1gsbjspljadf570fm"
            init={{
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount hr",
              ],
              toolbar:
                "undo redo | fullscreen image link table code | formatselect | bold italic underline backcolor | hr alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",
              images_upload_handler: function (blobInfo, success, failure) {
                // success("https://cfi.iitm.ac.in/static/media/CFI%20Logo%20-%20White.e7ba08ee.png")
                failure("Invalid Input");
              },

              // "fullscreen |undo redo | bold italic | alignleft aligncenter alignright | code | link image code",
            }}
            initialValue={"123"}
          />
        </Grid>

        <Grid item container justifyContent={"space-evenly"}>
          <Button style={{ backgroundColor: "#d6d6d6" }} type="submit">
            SAVE DRAFT
          </Button>
          <Button style={{ backgroundColor: "#d6d6d6" }}>PREVIEW</Button>
          <Button style={{ backgroundColor: "#d6d6d6" }}>SUBMIT</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default BlogForm;
