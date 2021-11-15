import React from "react";

const Footer = () => {
  return (
    <div
      className={`footer flex flex-row h-16 shadow-md items-center justify-center px-4`}
      data-testid="footer"
    >
      <div className={"italic"}>
        &quot;It was my pleasure servicing you today!&quot; - Mike
      </div>
    </div>
  );
};

export default Footer;
