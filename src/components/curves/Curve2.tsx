import React from "react";

const Curve: React.FC<{ color: string }> = ({ color = "green" }) => {
  return (
    <path
      d="M-371.388 1426.212c-58.846 70.665-115.115 150.816-168.328 241.04-73.433 124.638-140.965 268.562-201.147 433.808v249.904c47.376-137.976 99.077-262.103 154.414-373.47 508.087-1023.38 1321.414-975.544 1896.153-769.507.093-1.527.14-3.043.232-4.552.416-9.637.94-19.224 1.543-28.818-234.867-122.22-495.855-201.887-756.123-201.891-327.893-.011-654.641 126.42-926.744 453.486z"
      fill={color}
      fillRule="nonzero"
    />
  );
};

export default Curve;
