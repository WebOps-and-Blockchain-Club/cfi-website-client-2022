import { Grid, Checkbox, useTheme, useMediaQuery, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetBlogsQuery } from "../../generated/graphql";
import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import ErrorDialog from "../Shared/Dialog/ErrorDialog";
import Loading from "../Shared/Dialog/Loading";
import Heading, { HeadingSub } from "../Shared/Heading";
import { CustomAutocomplete, CustomTextField } from "../Shared/InputField";
import { useCreateClubMutation, useGetClubsQuery } from "../../generated/graphql";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import AuthContext from "../../Utils/context";
import { UserRole } from "../../generated/graphql";
import { useNavigate } from "react-router-dom";
import SuccessDialog from "../Shared/Dialog/SuccessDialog";
import BlogCard from "../Blog/BlogCard/index";

const Blog = () => {
  const theme = useTheme();
  const navigate= useNavigate();
  const { state }= useContext(AuthContext)!;
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  const [name, setName]= React.useState<string>('');
  const [email, setEmail]= React.useState<string>('');

  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();
  const [createClubMutation, {data, error, loading}]= useCreateClubMutation();
  const {data: clubs, error: clubs_error, loading: clubs_loading}= useGetClubsQuery();

  const handleClick =async () => {
    if (state?.user?.role === UserRole.Admin) {
      await createClubMutation({
        variables: {
          createClubInput: {
            email: email,
            name: name,
          }
        }
      })
    }
    else setErrorMessage("Login to Continue");
  };

  React.useEffect(()=> {
    if (error && error.message.includes('duplicate key value violates unique constraint')) {
      setErrorMessage("This club has already been added");
    }
    else if (error) {
      setErrorMessage(error.message);
    }
  }, [error])

  const handleCallback= () => window.location.reload();


  return (
    <CustomBox>
      <CustomGridPage>
        <ErrorDialog
          message={errorMessage}
          handleClose={() => {
            setErrorMessage(undefined)
            window.location.reload();
          } 
          }
        />
        {data?.createClub && (
          <SuccessDialog message="Added Successfully" callBack={handleCallback} />
        )}
        <Heading white="CFI " red="CLUBS" />
        <Grid item container py={{ xs: 4, sm: 5, md: 6, lg: 6 }} gap={2}>
          <CustomTextField
            id="search"
            label="Add Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        <CustomTextField
            id="search"
            label="Add Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
            }
        /> 
        </Grid>
        <Grid item container gap={4}>
            <Button
            size="small"
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
            onClick={()=> handleClick()}
          >
            SAVE CLUB DETAILS
          </Button>
        </Grid>
        {clubs && (
          <Grid
            item
            container
            py={{ xs: 4, sm: 5, md: 6, lg: 6 }}
            gap={4}
            justifyContent="stretch"
          >
            {clubs.getClubs.length === 0 && (
              <HeadingSub white="NO CLUBS" red=" ADDED" />
            )}
            {clubs.getClubs.length !== 0 && (
              <HeadingSub white="CLUBS" red=" ADDED" />
            )}
            {clubs.getClubs.map((_club) => (
              <Card
                sx={{
                width: "100%",
                borderRadius: "20px",
                display: "flex",
                flexDirection: matchesLG ? "column" : "row",
                backgroundColor: "primary.light",
                boxShadow:
                  "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
              }}
              >
                <CardContent
                  sx={{
                    px: "30px",
                    py: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                  style={{
                    paddingBottom: "20px",
                  }}
                  >
                    <HeadingSub white={_club.name} red="" />
                    <Typography
                      component="div"
                      color="primary.contrastText"
                      sx={{
                        textAlign: "justify",
                        fontSize: matches ? "12px" : "14px",
                      }}>
                        {_club.email}
                      </Typography>
                  </CardContent>
              </Card>
            ))}
          </Grid>
        )}
      </CustomGridPage>
    </CustomBox>
  );
};

export default Blog;
