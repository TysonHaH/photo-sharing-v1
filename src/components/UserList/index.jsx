import React from "react";
import {
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

/**
 * UserList: renders the list of users in the sidebar with links to user details
 */
function UserList() {
  const users = models.userListModel() || [];

  return (
    <div className="user-list-root">
      <Typography variant="h6" sx={{ p: 1 }}>
        Users
      </Typography>
      <Divider />
      <List component="nav">
        {users.map((item) => {
          const id = item._id || item.id || item.user_id || item.userId;
          const name = `${item.first_name || ""} ${item.last_name || ""}`.trim() || item.first_name || item.last_name || `User ${id}`;
          return (
            <React.Fragment key={id}>
              <ListItemButton component={RouterLink} to={`/users/${id}`}>
                <ListItemText primary={name} />
              </ListItemButton>
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
}

export default UserList;
