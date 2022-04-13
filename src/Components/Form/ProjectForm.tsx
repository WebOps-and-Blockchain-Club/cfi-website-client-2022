import React from "react";
import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import { CustomAutocomplete, CustomTextField } from "../Shared/InputField";
import Heading, { HeadingSub } from "../Shared/Heading";
import MarkDownEditor from "./Editor";
import {
  CreateProjectInput,
  GetProjectQuery,
  ProjectStatus,
  useGetClubsQuery,
} from "../../generated/graphql";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { SIPData } from "../../Assets/Data/SIP";

interface Probs {
  initialValues: GetProjectQuery | undefined;
  handleCreateProject: Function;
}

const ProjectForm = (probs: Probs) => {
  const [projectInput, setProjectInput] =
    React.useState<Partial<CreateProjectInput>>();

  type CreateProjectInputKeys = keyof typeof projectInput;
  const handleChange = (key: CreateProjectInputKeys, value: string) => {
    setProjectInput({ ...projectInput, [key]: value });
  };

  const { data } = useGetClubsQuery();

  const [selectedClubs, setSelectedClubs] = React.useState<
    { id: string; name: string }[]
  >([]);
  const [btnState, setBtnState] = React.useState<string>();

  const selectedClubsId = () => {
    const clubs: string[] = [];
    selectedClubs.map((club) => clubs.push(club.id));
    return clubs;
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (btnState === "DRAFT") {
      probs.handleCreateProject(
        projectInput,
        ProjectStatus.Draft,
        selectedClubsId()
      );
    }
    if (btnState === "SUBMIT") {
      probs.handleCreateProject(
        projectInput,
        ProjectStatus.Public,
        selectedClubsId()
      );
    }
  };

  React.useEffect(() => {
    if (probs.initialValues?.getProject) {
      setProjectInput(probs.initialValues?.getProject);
      setSelectedClubs(probs.initialValues.getProject.clubs);
    }
  }, [probs.initialValues?.getProject]);

  return (
    <form style={{ width: "100%" }} onSubmit={onSubmit}>
      <Grid
        container
        bgcolor={"primary.light"}
        borderRadius={"20px"}
        p={4}
        gap={4}
        justifyContent="center"
        boxShadow="5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);"
      >
        <Heading white="PROPOSE " red="PROJECT" />
        <Grid item container gap={4}>
          <CustomTextField
            id="title"
            label="Title"
            variant="outlined"
            size="small"
            required
            fullWidth
            value={projectInput?.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("title" as never, e.target.value)
            }
          />
        </Grid>
        {data && (
          <Grid item container gap={4}>
            <CustomAutocomplete
              id="club"
              size="small"
              aria-required
              multiple
              options={data.getClubs}
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
              style={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="Select Club" />
              )}
              value={selectedClubs}
              onChange={(event, value) => setSelectedClubs(value as any)}
            />
          </Grid>
        )}

        <HeadingSub white="QUESTION" red="NAIRE" />

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
            {SIPData.questions[0]}
          </Typography>
          <MarkDownEditor
            id="q1"
            value={projectInput?.q1!}
            onChange={handleChange}
          />
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
            {SIPData.questions[1]}
          </Typography>
          <MarkDownEditor
            id="q2"
            value={projectInput?.q2!}
            onChange={handleChange}
          />
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
            {SIPData.questions[2]}
          </Typography>
          <MarkDownEditor
            id="q3"
            value={projectInput?.q3!}
            onChange={handleChange}
          />
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
            {SIPData.questions[3]}
          </Typography>
          <MarkDownEditor
            id="q4"
            value={projectInput?.q4!}
            onChange={handleChange}
          />
        </Grid>

        <Grid item container justifyContent={"space-evenly"}>
          <Button
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
            type="submit"
            onClick={() => setBtnState("DRAFT")}
          >
            SAVE AS DRAFT
          </Button>
          <Button
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

export default ProjectForm;
