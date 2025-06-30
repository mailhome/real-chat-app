import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/page";
import ChatPage from "./pages/chat/page";
import ProfileUpdatePage from "./pages/profile-update/page";

const App = () => {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfileUpdatePage />} />
      </Routes>
    </>
   );
}
 
export default App;