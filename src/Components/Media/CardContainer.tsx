import React from "react";
import Item from "./Item";
import "./MediaStyles.css";

interface Props {
  data: any;
}

const CardContainer = (props: Props) => {
  return (
    <>
      {props.data.map(
        (item: {
          year:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          data: any[];
        }) => {
          return (
            <>
              <div className="card-container-year">
                <h2 style={{ color: "#d6d6d6", margin: 0 }}>{item.year}</h2>
              </div>
              {item.data.map(
                (cardData: {
                  heading:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  item_content: any[];
                }) => {
                  return (
                    <div className="card-container">
                      <h2 className="card-heading-text">{cardData.heading}</h2>
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
        }
      )}
    </>
  );
};

export default CardContainer;
