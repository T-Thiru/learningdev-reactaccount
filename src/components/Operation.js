import React from "react";

const Operation = (props) => {
  return (
    <div className="container-operation">
      <div className="ligneDetail">
        <p className="date">{props.detail.date}</p>
        <p className="detail">{props.detail.description}</p>
        <p className="montant">{props.detail.amount} $</p>
      </div>
    </div>
  );
};

export default Operation;
