import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { MenuOutlined } from "@mui/icons-material";

import SidebarItems from "../../components/sidebar/SidebarItems";
import UserProfile from "../../components/sidebar/UserProfile";
import SidebarHeader from "../../components/sidebar/SidebarHeader";
import SidebarLayout from "../../../layouts/SidebarLayout";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <SidebarLayout>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <SidebarHeader
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />

          <UserProfile isCollapsed={isCollapsed} />

          <SidebarItems
            isCollapsed={isCollapsed}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </ProSidebar>
    </SidebarLayout>
  );
};

export default Sidebar;
