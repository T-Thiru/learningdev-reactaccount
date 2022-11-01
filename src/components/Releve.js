import React from "react";
import Operation from "./Operation";

const Releve = (props) => {
  return (
    <div className="wrapper">
      <div
        className={`releve-header color${props.account.color.replace("#", "")}`}
      >
        <p className="accountType">{props.account.name}</p>
        <p>
          {props.account.balance} <span className="currency">$</span>
        </p>
      </div>
      <div className="minWrapper">
        {props.account.operations.map((x) => {
          return (
            <>
              <Operation detail={x} />
            </>
          );
        })}

        <button className="btn">see more</button>
      </div>
    </div>
  );
};

export default Releve;
