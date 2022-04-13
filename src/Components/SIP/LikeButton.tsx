import React from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  refetchGetMeSipQuery,
  refetchGetProjectQuery,
  refetchGetProjectsQuery,
  useToggleLikeProjectMutation,
} from "../../generated/graphql";

interface Probs {
  projectId: string;
  likeCount: number;
  isLiked: boolean;
}

const LikeButton = (probs: Probs) => {
  const [likeCount, setLikeCount] = React.useState<number>();
  const [isLiked, setIsLiked] = React.useState<boolean>();

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
      toggleLikeProjectMutation({
        variables: {
          projectId: probs.projectId,
        },
      });
    } catch (e) {
      console.log(e);
    }
    if (isLiked) setLikeCount(likeCount! - 1);
    else setLikeCount(likeCount! + 1);
    setIsLiked(!isLiked);
  };

  return (
    <Button
      variant="outlined"
      startIcon={isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      color="secondary"
      onClick={toggleLike}
    >
      {likeCount}
    </Button>
  );
};

export default LikeButton;
