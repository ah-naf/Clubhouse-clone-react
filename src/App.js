import "./App.css";
import PlantLayout from "./pages/Layouts/PlantLayout";
import Welcome from "./pages/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <PlantLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path='/invite' element={<PhoneConfirmation />} />
          <Route path='/code_confirm' element={<CodeConfirm />} />
          <Route path='/allow-notification' element={<AllowNotification />} />
        </Routes>
      </PlantLayout>
      <AppLayout>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
