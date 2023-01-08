import React from "react";

import Stack from 'react-bootstrap/Stack';

function grid() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="bg-light border">First item</div>
      <div className="bg-light border">Second item</div>
      <div className="bg-light border">Third item</div>
    </Stack>
  );
}

export default grid;