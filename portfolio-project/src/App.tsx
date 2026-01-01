import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";

import Education from "./pages/Education/Education";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/education" />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;