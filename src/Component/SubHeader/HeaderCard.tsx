import React from "react";
import Header from "../Redux/models/headerModel";

interface Props {
  header: Header;
}

const HeaderCard = ({ header }: Props) => {
  const { url, text } = header;
  return (
    <div>
      <img src={url} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default HeaderCard;
