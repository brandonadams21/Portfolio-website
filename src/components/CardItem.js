import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <a
          className="cards__item__link"
          target="_blank"
          href="https://blog-gamma-one-96.vercel.app/"
          rel="noopener noreferrer"
        >
          <figure className="cards__item__pic-wrap">
            <img className="cards__item__img" alt="Projects" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">
              {props.text}
              <a 
                className="cardText"
                target="_blank"
                href="https://github.com/brandonadams21/blog/tree/main/blogger"
                rel="noopener noreferrer"
                style={{
                  float: "right",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                View Source Code
              </a>
            </h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
