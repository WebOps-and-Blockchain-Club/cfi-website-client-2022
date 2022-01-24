import { Box, Stack } from "@mui/material";
import React from "react";
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
          pt="25px"
          pb="25px"
        >
          <div className="image-div">
            <img
              className="item-image"
              src={props.imgSrc}
              alt={props.heading}
            />
          </div>
          <Stack
            direction="column"
            spacing={3}
            alignItems={{
              xs: "center",
              sm: "center",
              md: "flex-start",
              lg: "flex-start",
            }}
          >
            <a
              href={props.articleLink}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "unset" }}
            >
              <p className="item-head">{props.heading}</p>
            </a>
            <p style={{ textAlign: "center" }}>Publisher: {props.publisher}</p>
            <p style={{ textAlign: "center" }}>Published Date: {props.date}</p>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Item;
