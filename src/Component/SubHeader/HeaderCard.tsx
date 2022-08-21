import React from "react";
import Header from "../Redux/models/headerModel";

interface Props {
  header: Header;
}

const HeaderCard = ({ header }: Props) => {
  const { url, text } = header;
  return (
    <div className="px-3">
      <img className="w-2/4" src={url} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default HeaderCard;
