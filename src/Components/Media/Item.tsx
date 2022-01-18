import { Box, Stack, Card, CardMedia } from "@mui/material";
import React from "react";
import img from "../../../public/logo512.png";
import "./MediaStyles.css";

interface Props {
  heading: string;
  publisher: string;
  date: string;
  imgSrc: string;
  articleLink: string;
}

const Item = (props: Props) => {
  return (
    <>
      <Box className="item-card" sx={{ width: "85%" }}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          spacing={2}
        >
          <div className="image-div">
            <img
              className="item-image"
              src={props.imgSrc}
              alt={props.heading}
            />
          </div>
          <Stack style={{ margin: 15 }} direction="column" spacing={3}>
            <h3 className="item-head">
              <a href={props.articleLink} target="_blank" rel="noreferrer">{props.heading}</a>
            </h3>
            <p>Publisher: {props.publisher}</p>
            <p>Published Date: {props.date}</p>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Item;
