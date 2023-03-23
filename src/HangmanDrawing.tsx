const HEAD = (
  <div
    key="HEAD"
    style={{
      height: "50px",
      width: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    key="BODY"
    style={{
      height: "100px",
      width: "10px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "0px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    key="RIGHT_ARM"
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      transformOrigin: "left bottom",
      rotate: "-30deg",
    }}
  />
);

const LEFT_ARM = (
  <div
    key="LEFT_ARM"
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      transformOrigin: "right bottom",
      rotate: "30deg",
    }}
  />
);

const RIGHT_LEG = (
  <div
    key="RIGHT_LEG"
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      transformOrigin: "left bottom",
      rotate: "60deg",
    }}
  />
);
const LEFT_LEG = (
  <div
    key="LEFT_LEG"
    style={{
      height: "10px",
      width: "100px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "0px",
      transformOrigin: "right bottom",
      rotate: "-60deg",
    }}
  />
);
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGusesses: number;
};
const HangmanDrawing = ({ numberOfGusesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGusesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
};

export default HangmanDrawing;
