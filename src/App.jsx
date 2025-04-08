import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import NotFound from "./pages/NotFound";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Envolvendo com BrowserRouter */}
     
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element ={<Dashboard/>}/>
        </Routes>
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
