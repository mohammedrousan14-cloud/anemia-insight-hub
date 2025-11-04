import { Link, useLocation } from "react-router-dom";
import { Activity } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
            <Activity className="w-6 h-6 text-primary" />
            <span>Anemia Diagnosis</span>
          </Link>
          
          <div className="flex gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/diagnosis"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/diagnosis") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Diagnosis
            </Link>
            <Link
              to="/information"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/information") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Information
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
