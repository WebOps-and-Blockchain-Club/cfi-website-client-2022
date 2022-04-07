import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  CreateProjectInput,
  ProjectStatus,
  useCreateProjectMutation,
  useGetProjectQuery,
} from "../../generated/graphql";
import ProjectForm from "../Form/ProjectForm";
import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import CloseIcon from "@mui/icons-material/Close";

interface Probs {}

const NewProject = (probs: Probs) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  console.log(searchParams.get("id"));

  const [cError, setCError] = React.useState<string>();

  const { data, loading, error } = useGetProjectQuery({
    variables: {
      projectId: searchParams.get("id")!,
    },
    skip: !searchParams.get("id"),
  });

  const [
    createProjectMutation,
    { loading: createLoading, error: createError },
  ] = useCreateProjectMutation({
    onCompleted(data) {
      if (
        data?.createProject &&
        data.createProject.status === ProjectStatus.Draft
      ) {
        setSearchParams({ id: data.createProject.id });
      } else if (
        data?.createProject &&
        data.createProject.status === ProjectStatus.Public
      ) {
        navigate(`/sip/projects/${data.createProject.id}`);
      }
    },
  });

  const handleCreateProject = async (
    value: Partial<CreateProjectInput>,
    status: ProjectStatus,
    clubIds: string[]
  ) => {
    try {
      if (!value || !value.title) {
        setCError("Enter the title of the project");
      } else if (
        status === ProjectStatus.Public &&
        (!value.id ||
          !value.title ||
          !value.q1 ||
          !value.q2 ||
          !value.q3 ||
          !value.q4 ||
          !value.q5 ||
          !value.q6 ||
          clubIds.length === 0)
      ) {
        setCError("Enter all the required fields");
      } else {
        await createProjectMutation({
          variables: {
            createProjectInput: {
              id: searchParams.get("id"),
              title: value.title,
              q1: value.q1,
              q2: value.q2,
              q3: value.q3,
              q4: value.q4,
              q5: value.q5,
              q6: value.q6,
              q7: value.q7,
              status,
              clubIds,
            },
          },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CustomBox>
      <CustomGridPage>
        <Snackbar
          open={!!error || !!createError || !!cError}
          autoHideDuration={loading ? null : 6000}
          // onClose={handleClose}
          message={
            JSON.stringify(error) +
            JSON.stringify(createError) +
            loading +
            createLoading +
            cError
          }
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              // onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
        <ProjectForm
          initialValues={data}
          handleCreateProject={handleCreateProject}
        />
      </CustomGridPage>
    </CustomBox>
  );
};

export default NewProject;