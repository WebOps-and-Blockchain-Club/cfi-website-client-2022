import { Box, Card, getCardHeaderUtilityClass } from "@mui/material";
import React from "react";
import Item from './Item'
import './MediaStyles.css'

interface Props {
  data: any;
}



const CardContainer = (props: Props) => {
  return <>
  {props.data.map((item: { year: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; data: any[]; })=>{
    return (<>
      <div className='card-container-year'><h2 style={{color: 'red', margin: 0}}>{item.year}</h2></div>
      {item.data.map((cardData: { heading: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; item_content: any[]; })=>{
        return (<div className="card-container">
                <h2 className='card-heading-text'>{cardData.heading}</h2>
                {cardData.item_content.map((eachitem: { heading: string; publisher: string; date: string; imgSrc: string})=>{return <Item heading={eachitem.heading} publisher={eachitem.publisher} date={eachitem.date} imgSrc={eachitem.imgSrc}/>})}
                </div>)})}
    </>)
})}
  </>
};

export default CardContainer;























const dataa =[
  {
    heading: 'Heading 1 supposed to be hear',
    publisher: 'ABC Publisher',
    date: '16 December, 2021'
  },
  {
    heading: 'Heading 2 supposed to be hear',
    publisher: 'XYZ Publisher',
    date: '16 December, 2021'
  },
  {
    heading: 'Heading 3 supposed to be hear',
    publisher: 'PQR Publisher',
    date: '16 December, 2021'
  },
  {
    heading: 'Heading 4 supposed to be hear',
    publisher: 'ABC Publisher',
    date: '16 December, 2021'
  }
]