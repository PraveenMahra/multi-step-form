import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import AppLayout from "./AppLayout";
import AddOns from "./AddOns";
import Summary from "./Summary";
import ThankYou from "./ThankYou";
import SelectPlan from "./SelectPlan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<PersonalInfo />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="select-plan" element={<SelectPlan />} />
          <Route path="add-ons" element={<AddOns />} />
          <Route path="summary" element={<Summary />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="*" element={<Navigate to="personal-info" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
