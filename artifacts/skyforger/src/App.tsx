import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import Facilities from "@/pages/Facilities";
import Faculty from "@/pages/Faculty";
import Gallery from "@/pages/Gallery";
import Achievements from "@/pages/Achievements";
import Admission from "@/pages/Admission";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function Router() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/courses" component={Courses} />
          <Route path="/facilities" component={Facilities} />
          <Route path="/faculty" component={Faculty} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/achievements" component={Achievements} />
          <Route path="/admission" component={Admission} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;