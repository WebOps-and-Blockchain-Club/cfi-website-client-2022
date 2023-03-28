import Grid from "@mui/material/Grid";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetProjectsQuery } from "../../../generated/graphql";
import CustomBox, { CustomGridPage } from "../../Shared/CustomBox";
import Heading, { HeadingSub } from "../../Shared/Heading";
import { CustomTextField } from "../../Shared/InputField";
import ProjectCard from "./ProjectCard";
import Loading from "../../Shared/Dialog/Loading";
import ErrorDialog from "../../Shared/Dialog/ErrorDialog";

interface Probs { }

const ProjectsList = (probs: Probs) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = React.useState(searchParams.get("search"));
  const { data, loading, error } = useGetProjectsQuery({
    variables: {
      filters: {
        clubNames: searchParams.get("club")?.split(","),
        search: search,
      },
    },
  });

  const setClubNameFilter = (value: string) => setSearchParams({ club: value });

  React.useEffect(() => {
    const timer = setTimeout(() => setSearch(searchParams.get("search")), 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("search")]);

  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();

  React.useEffect(() => {
    if (error) setErrorMessage("Some Error Occurred");
  }, [error]);

  return (
    <CustomBox>
      <CustomGridPage>
        <Loading loading={!!loading} />
        <ErrorDialog
          message={errorMessage}
          handleClose={() => setErrorMessage(undefined)}
        />
        <Heading white="PROPOSED " red="PROJECTS" />
        <Grid item container py={{ xs: 4, sm: 5, md: 6, lg: 6 }}>
          <CustomTextField
            id="search"
            label="Search Project"
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
            justifyContent="center"
          >
            {data.getProjects.projects?.length === 0 && (
              <HeadingSub white="NO PROJECTS" red=" FOUND" />
            )}
            {data.getProjects.projects?.map((_project) => (
              <ProjectCard
                project={_project}
                handleClubClick={setClubNameFilter}
              />
            ))}
          </Grid>
        )}
      </CustomGridPage>
    </CustomBox>
  );
};

export default ProjectsList;
