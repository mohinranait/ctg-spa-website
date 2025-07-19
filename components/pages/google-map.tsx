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
        }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59035.36801078346!2d91.75826618556218!3d22.364557464850737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8fba7f4c433%3A0x760072b069ba7c63!2sKhulshi!5e0!3m2!1sen!2sbd!4v1752748887817!5m2!1sen!2sbd"
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
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
