import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Communities from "./pages/Communities";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Resources from "./pages/Resources";
import BuyerRepresentation from "./pages/BuyerRepresentation";
import SellerServices from "./pages/SellerServices";
import HomeStaging from "./pages/HomeStaging";
import InvestmentProperties from "./pages/InvestmentProperties";
import RelocationAssistance from "./pages/RelocationAssistance";
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
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/services/buyer-representation" element={<BuyerRepresentation />} />
          <Route path="/services/seller-services" element={<SellerServices />} />
          <Route path="/services/home-staging" element={<HomeStaging />} />
          <Route path="/services/investment-properties" element={<InvestmentProperties />} />
          <Route path="/services/relocation-assistance" element={<RelocationAssistance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
