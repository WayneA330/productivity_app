import { Box } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import InlineEdit from "../../components/InlineEdit";

const SpaceDetails = () => {
  const [value, setValue] = useState("");

  let params = useParams();

  return (
    <Box m={2}>
      <InlineEdit value={value} setValue={setValue} />
    </Box>
  );
};

export default SpaceDetails;
