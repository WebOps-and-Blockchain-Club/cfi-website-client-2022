import { Box } from "@mui/material";
import React from 'react'
import { isPropertySignature } from "typescript";
import CardContainer from './MediaComponents/CardContainer'
import data from './media_data'

interface Props {}

const Media = (props : Props) => {
    return <>
        <h1 style={{textAlign: 'center', margin: 80, fontSize: 40}}>MEDIA</h1>
        <CardContainer data={data}></CardContainer>
    </>
}

export default Media;