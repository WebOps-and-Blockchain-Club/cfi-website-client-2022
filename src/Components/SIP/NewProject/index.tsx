import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  CreateProjectInput,
  ProjectStatus,
  refetchGetMeSipQuery,
  refetchGetProjectsQuery,
  useCreateProjectMutation,
  useGetProjectQuery,
} from "../../../generated/graphql";
import ProjectForm from "./ProjectForm";
import CustomBox, { CustomGridPage } from "../../Shared/CustomBox";
import Loading from "../../Shared/Dialog/Loading";
import ErrorDialog from "../../Shared/Dialog/ErrorDialog";
import SuccessDialog from "../../Shared/Dialog/SuccessDialog";

interface Probs { }

const NewProject = (probs: Probs) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = React.useState<string>();

  const { data, loading, error } = useGetProjectQuery({
    variables: {
      projectId: searchParams.get("id")!,
    },
    skip: !searchParams.get("id"),
  });

  const [
    createProjectMutation,
    { data: createProjectData, loading: createLoading, error: createError },
  ] = useCreateProjectMutation({
    refetchQueries: [refetchGetMeSipQuery(), refetchGetProjectsQuery()],
  });

  const handleCreateProject = async (
    value: Partial<CreateProjectInput>,
    status: ProjectStatus,
    clubIds: string[]
  ) => {
    try {
      if (!value || !value.title) {
        setErrorMessage("Enter the title of the project");
      } else if (
        status === ProjectStatus.Public &&
        (!value.title ||
          !value.q1 ||
          !value.q2 ||
          !value.q3 ||
          clubIds.length === 0)
      ) {
        setErrorMessage("Enter all the required fields");
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
              status,
              clubIds,
              contact: value.contact!
            },
          },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const submitCallBack = () => {
    if (
      createProjectData?.createProject &&
      createProjectData.createProject.status === ProjectStatus.Draft
    ) {
      setSearchParams({ id: createProjectData.createProject.id });
    } else if (
      createProjectData?.createProject &&
      createProjectData.createProject.status === ProjectStatus.Public
    ) {
      navigate(`/sip/projects/${createProjectData.createProject.id}`);
    }
  };

  React.useEffect(() => {
    if (error) setErrorMessage("Some Error Occurred");
    if (createError) setErrorMessage("Some Error Occurred");
  }, [error, createError]);

  return (
    <CustomBox>
      <CustomGridPage>
        <Loading loading={!!loading || !!createLoading} />
        <ErrorDialog
          message={errorMessage}
          handleClose={() => setErrorMessage(undefined)}
        />
        {createProjectData?.createProject.id && (
          <SuccessDialog
            message={
              createProjectData?.createProject.status === ProjectStatus.Public
                ? "Project Proposed"
                : "Draft Saved"
            }
            callBack={submitCallBack}
          />
        )}
        <ProjectForm
          initialValues={data}
          handleCreateProject={handleCreateProject}
        />
      </CustomGridPage>
    </CustomBox>
  );
};

export default NewProject;
