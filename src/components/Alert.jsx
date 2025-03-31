const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 50,
  backgroundColor: "green",
  color: "white",
};

const getBgColor = (variant) => {
  switch (variant) {
    case "info":
      return "blue";
    case "success":
      return "green";
    case "error":
      return "red";
    case "warning":
      return "orange";
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const Alert = ({ children, variant }) => {
  return (
    <p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }}>
      {children}
    </p>
  );
};
