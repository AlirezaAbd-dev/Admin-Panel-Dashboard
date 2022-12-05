import {
    HomeOutlined,
    PeopleOutline,
    ContactsOutlined,
    ReceiptOutlined,
    PersonOutlined,
    HelpOutlined,
    BarChartOutlined,
    PieChartOutlined,
    TimelineOutlined,
    MapOutlined,
} from "@mui/icons-material";
import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material";

import SidebarItem from "./SidebarItem.jsx";
import {tokens} from "../../utils/tokens.js";

const SidebarItems = ({isCollapsed, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <SidebarItem
                title="Dashboard"
                to="/"
                icon={<HomeOutlined/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{m: "15px 0 5px 20px"}}
            >
                Data
            </Typography>
            <SidebarItem
                title="Manage Team"
                to="/team"
                icon={<PeopleOutline/>}
                selected={selected}
                setSelected={setSelected}
            />
            <SidebarItem
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlined/>}
                selected={selected}
                setSelected={setSelected}
            />
            <SidebarItem
                title="Invoices Balances"
                to="/invoices"
                icon={<ReceiptOutlined/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{m: "15px 0 5px 20px"}}
            >
                Pages
            </Typography>
            <SidebarItem
                title="Profile Form"
                to="/form"
                icon={<PersonOutlined/>}
                selected={selected}
                setSelected={setSelected}
            />
            <SidebarItem
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlined/>}
                selected={selected}
                setSelected={setSelected}
            />

            <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{m: "15px 0 5px 20px"}}
            >
                Charts
            </Typography>
            <SidebarItem
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlined/>}
                selected={selected}
                setSelected={setSelected}
            />
            <SidebarItem
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlined/>}
                selected={selected}
                setSelected={setSelected}
            />
            <SidebarItem
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlined/>}
                selected={selected}
                setSelected={setSelected}
            />
            <SidebarItem
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlined/>}
                selected={selected}
                setSelected={setSelected}
            />
        </Box>
    );
};

export default SidebarItems;
