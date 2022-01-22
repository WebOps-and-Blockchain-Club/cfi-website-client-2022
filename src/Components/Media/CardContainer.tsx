import React from "react";
import Item from "./Item";
import "./MediaStyles.css";
import MediaTitle from "./MediaTitle";

interface Props {
  data: any;
}

const CardContainer = (props: Props) => {
  return (
    <>
      {props.data.map((item: { year: string; data: any[] }) => {
        return (
          <>
            <div className="card-container-year">
              <h2>{item.year}</h2>
            </div>
            {item.data.map(
              (cardData: { heading: string; item_content: any[] }) => {
                return (
                  <div className="card-container">
                    <div style={{ padding: "50px 10px" }}>
                      <MediaTitle
                        red={cardData.heading.split("##")[1]}
                        white={cardData.heading.split("##")[0]}
                      />
                    </div>
                    {cardData.item_content.map(
                      (eachitem: {
                        heading: string;
                        publisher: string;
                        date: string;
                        imgSrc: string;
                        articleLink: string;
                      }) => {
                        return (
                          <Item
                            heading={eachitem.heading}
                            publisher={eachitem.publisher}
                            date={eachitem.date}
                            imgSrc={eachitem.imgSrc}
                            articleLink={eachitem.articleLink}
                          />
                        );
                      }
                    )}
                  </div>
                );
              }
            )}
          </>
        );
      })}
    </>
  );
};

export default CardContainer;
