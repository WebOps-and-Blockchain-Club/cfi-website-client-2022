import { Grid, IconButton, Snackbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { ProjectStatus, useGetMeSipQuery } from "../../generated/graphql";
import ProjectCard from "./Projects/ProjectCard";
import Heading from "../Shared/Heading";

interface Probs {}

const SIPUser = (probs: Probs) => {
  const navigate = useNavigate();

  const { data, loading, error } = useGetMeSipQuery();

  const setClubNameFilter = (value: string) => {
    navigate(`/sip/projects?club=${value}`);
  };

  const handleEdit = (value: string) => {
    navigate(`/sip/projects?add?id=${value}`);
  };

  return (
    <>
      <Snackbar
        open={!!error || !!loading}
        autoHideDuration={loading ? null : 6000}
        // onClose={handleClose}
        message={JSON.stringify(error) + loading}
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
      {data && (
        <>
          <Heading white="YOUR " red="PROJECTS" />
          <Grid
            item
            container
            py={{ xs: 4, sm: 5, md: 6, lg: 6 }}
            gap={4}
            justifyContent="center"
          >
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
        </>
      )}
    </>
  );
};

export default SIPUser;
