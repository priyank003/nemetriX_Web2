const Backdrop = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        color: "black",
        zIndex: "1000",
        backgroundColor: "rgb(0,0,0,0.8)",
      }}
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
