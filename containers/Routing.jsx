import { Route, Routes } from "react-router-dom";
import Bar from "../src/scenes/bar";
import Contacts from "../src/scenes/contacts";
import Dashboard from "../src/scenes/dashboard";
import FAQ from "../src/scenes/faq";
import Form from "../src/scenes/form";
import Geography from "../src/scenes/geography";
import Invoices from "../src/scenes/invoices";
import Line from "../src/scenes/line";
import Pie from "../src/scenes/pie";
import Team from "../src/scenes/team";

const Routing = () => {
    return (
        <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line/>} />
              <Route path="/geography" element={<Geography/>} />
            </Routes>
    );
}

export default Routing;
