
export const HexagonImage = ({ src, size = 320, borderWidth = 10 }) => {
    const hexWidth = size;
    const hexHeight = (size * Math.sqrt(3)) / 2; // ≈ 0.866 * size
  
    const outerBorder = borderWidth;
    const middleBorder = borderWidth;
    const innerBorder = borderWidth;
  
    // Adjust sizes proportionally for height and width at each layer:
    const middleWidth = hexWidth - 2 * outerBorder;
    const middleHeight = hexHeight - 2 * outerBorder;
  
    const innerWidth = middleWidth - 2 * middleBorder;
    const innerHeight = middleHeight - 2 * middleBorder;
  
    const imageWidth = innerWidth - 2 * innerBorder;
    const imageHeight = innerHeight - 2 * innerBorder;
  
    const hexClipPath =
      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
  
    return (
      <div
        style={{
          width: hexWidth,
          height: hexHeight,
          backgroundColor: "white",
          padding: outerBorder,
          clipPath: hexClipPath,
          WebkitClipPath: hexClipPath,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: middleWidth,
            height: middleHeight,
            backgroundColor: "#3B82F6",
            padding: middleBorder,
            clipPath: hexClipPath,
            WebkitClipPath: hexClipPath,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: innerWidth,
              height: innerHeight,
              backgroundColor: "white",
              padding: innerBorder,
              clipPath: hexClipPath,
              WebkitClipPath: hexClipPath,
              overflow: "hidden",
            }}
          >
            <img
              src={src}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                clipPath: hexClipPath,
                WebkitClipPath: hexClipPath,
              }}
            />
          </div>
        </div>
      </div>
    );
  };