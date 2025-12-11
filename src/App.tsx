import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Venues from "./pages/Venues";
import BeachVenues from "./pages/venues/BeachVenues";
import LuxuryHotelVenues from "./pages/venues/LuxuryHotelVenues";
import TraditionalVenues from "./pages/venues/TraditionalVenues";
import WeddingDresses from "./pages/WeddingDresses";
import DecorRentals from "./pages/DecorRentals";
import Catering from "./pages/Catering";
import WeddingPlanners from "./pages/WeddingPlanners";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venues/beach" element={<BeachVenues />} />
          <Route path="/venues/luxury-hotels" element={<LuxuryHotelVenues />} />
          <Route path="/venues/traditional" element={<TraditionalVenues />} />
          <Route path="/wedding-dresses" element={<WeddingDresses />} />
          <Route path="/decor-rentals" element={<DecorRentals />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/wedding-planners" element={<WeddingPlanners />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
