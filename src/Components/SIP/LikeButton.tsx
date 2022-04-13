import React, { useContext } from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  refetchGetMeSipQuery,
  refetchGetProjectQuery,
  refetchGetProjectsQuery,
  UserRole,
  useToggleLikeProjectMutation,
} from "../../generated/graphql";
import AuthContext from "../../Utils/context";
import ErrorDialog from "../Shared/Dialog/ErrorDialog";

interface Probs {
  projectId: string;
  likeCount: number;
  isLiked: boolean;
}

const LikeButton = (probs: Probs) => {
  const [likeCount, setLikeCount] = React.useState<number>();
  const [error, setError] = React.useState<string>();
  const [isLiked, setIsLiked] = React.useState<boolean>();
  const { state } = useContext(AuthContext)!;

  const [toggleLikeProjectMutation] = useToggleLikeProjectMutation({
    refetchQueries: [
      refetchGetMeSipQuery(),
      refetchGetProjectsQuery(),
      refetchGetProjectQuery({ projectId: probs.projectId }),
    ],
  });

  React.useEffect(() => {
    setLikeCount(probs.likeCount);
    setIsLiked(probs.isLiked);
  }, [probs.likeCount, probs.isLiked]);

  const toggleLike = () => {
    try {
      if (state?.user?.role === UserRole.User) {
        toggleLikeProjectMutation({
          variables: {
            projectId: probs.projectId,
          },
        });
        if (isLiked) setLikeCount(likeCount! - 1);
        else setLikeCount(likeCount! + 1);
        setIsLiked(!isLiked);
      } else {
        setError("Login to Continue");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {error && <ErrorDialog message={error} />}
      <Button
        variant="outlined"
        startIcon={isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        color="secondary"
        onClick={toggleLike}
      >
        {likeCount}
      </Button>
    </>
  );
};

export default LikeButton;
