import React from "react";

const GoogleMap = () => {
  return (
    <div className=" overflow-hidden ">
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%",
          height: 0,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8932.35945885944!2d90.39764438232538!3d23.865492079565065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1751622075264!5m2!1sen!2sbd"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
