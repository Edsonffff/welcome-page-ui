import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { LogOut, Loader2 } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // Redirect to login if not authenticated
        navigate("/login");
      }
      setLoading(false);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, [navigate]);

  // Handle logout with Firebase signOut
  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoggingOut(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-login-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl login-gradient flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="font-poppins font-semibold text-xl text-foreground">
              Dashboard
            </span>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2"
            disabled={loggingOut}
          >
            {loggingOut ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <LogOut className="h-4 w-4" />
            )}
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full login-gradient flex items-center justify-center">
            <span className="text-white font-bold text-3xl">
              {user?.email?.charAt(0).toUpperCase() || "U"}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-foreground font-poppins">
            Welcome! 🎉
          </h1>
          <p className="text-muted-foreground text-lg">
            You are successfully logged in as:
          </p>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-foreground font-medium text-lg">{user?.email}</p>
          </div>
          <p className="text-muted-foreground">
            This is your dashboard. You can add more features here.
          </p>
        </div>
      </main>
    </div>
  );
}
