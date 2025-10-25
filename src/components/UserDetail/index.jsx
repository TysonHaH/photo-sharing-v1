import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * UserDetail: shows user information and a link to view their photos.
 */
function UserDetail() {
  const { userId } = useParams();

  // userId in routes matches the _id strings in the fake models
  const user = models.userModel(userId);

  if (!user) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h6">User not found</Typography>
          <Typography color="textSecondary">No user with id {String(userId)} exists.</Typography>
        </CardContent>
      </Card>
    );
  }

  const name = `${user.first_name || ""} ${user.last_name || ""}`.trim();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {name}
        </Typography>
        {user.location && (
          <Typography color="textSecondary">Location: {user.location}</Typography>
        )}
        {user.occupation && (
          <Typography>Occupation: {user.occupation}</Typography>
        )}
        {user.description && (
          <Typography sx={{ mt: 2 }}>{user.description}</Typography>
        )}

        <Button
          component={RouterLink}
          to={`/photos/${user._id}`}
          variant="contained"
          sx={{ mt: 2 }}
        >
          View Photos
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserDetail;
