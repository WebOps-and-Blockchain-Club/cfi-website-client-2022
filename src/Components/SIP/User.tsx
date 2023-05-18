import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ProjectStatus, useGetMeSipQuery } from "../../generated/graphql";
import ProjectCard from "./Projects/ProjectCard";
import Heading, { HeadingSub } from "../Shared/Heading";
import Loading from "../Shared/Dialog/Loading";
import ErrorDialog from "../Shared/Dialog/ErrorDialog";

interface Probs {}

const SIPUser = (probs: Probs) => {
  const navigate = useNavigate();

  const { data, loading, error } = useGetMeSipQuery();

  const setClubNameFilter = (value: string) => {
    navigate(`/sip/projects?club=${value}`);
  };

  const handleEdit = (value: string) => {
    navigate(`/sip/projects/add?id=${value}`);
  };

  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();

  React.useEffect(() => {
    if (error) setErrorMessage("Some Error Occurred");
  }, [error]);

  return (
    <>
      <Loading loading={!!loading} />
      <ErrorDialog
        message={errorMessage}
        handleClose={() => setErrorMessage(undefined)}
      />
      {data && (
        <div id="your-projects">
          <Heading white="YOUR " red="PROJECTS" />
          <Grid
            item
            container
            py={{ xs: 4, sm: 5, md: 6, lg: 6 }}
            gap={4}
            justifyContent="center"
          >
            {data.getMe.projects?.length === 0 && (
              <HeadingSub white="NO PROJECTS" red=" ADDED" />
            )}
            {data.getMe.projects?.map((_project) => (
              <ProjectCard
                project={_project}
                handleClubClick={setClubNameFilter}
                handleEdit={
                  _project.status === ProjectStatus.Draft ? handleEdit : null
                }
              />
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};

export default SIPUser;
