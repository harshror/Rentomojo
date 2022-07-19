import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function DetailsCard(props) {
  return (
    <Card
      variant="contained"
      sx={{
        minWidth: 275,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.platform}
        </Typography>
        <Typography variant="body2">
          <Stack direction="row" spacing={1}>
              <Chip label={props.score} />
              <Chip label={props.editors_choice} />
              <Chip label={props.genre} />
          </Stack>
        </Typography>
      </CardContent>
    </Card>
  );
}
