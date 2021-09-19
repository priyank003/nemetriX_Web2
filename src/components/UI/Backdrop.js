const Backdrop = (props) => {
  return (
    <div
      style={{
        height: "120vh",
        width: "100%",
        background: "#80c47f80",
        position: "absolute",
      }}
    >
      {props.children}
    </div>
  );
};

export default Backdrop;
