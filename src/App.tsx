
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo, useEffect } from "react";
import { loadStyreneFont } from "@/utils/fontLoader";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectsPage from "./pages/Projects";
import NotFound from "./pages/NotFound";

const App = () => {
  const queryClient = useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: false,
      },
    },
  }), []);

  useEffect(() => {
    // Load Styrene font on app initialization
    loadStyreneFont().then(() => {
      console.log('Styrene font loaded successfully');
    }).catch(() => {
      console.warn('Failed to load Styrene font, using fallback');
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/bharathPortfolio">
          <div className="min-h-screen font-styrene dotted-grid">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
