import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import Logo from "@/components/login/Logo";
import DecorativeShapes from "@/components/login/DecorativeShapes";
import SocialIcons from "@/components/login/SocialIcons";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Firebase error message mapping for user-friendly messages
  const getErrorMessage = (errorCode: string): string => {
    switch (errorCode) {
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/user-disabled":
        return "This account has been disabled.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later.";
      case "auth/invalid-credential":
        return "Invalid email or password. Please check and try again.";
      default:
        return "An error occurred. Please try again.";
    }
  };

  // Handle login with Firebase signInWithEmailAndPassword
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Firebase login - authenticates user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard on successful login
      navigate("/dashboard");
    } catch (err: any) {
      // Handle Firebase auth errors
      setError(getErrorMessage(err.code));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen login-gradient relative overflow-hidden flex items-center justify-center p-6">
      {/* Background decorative shapes */}
      <DecorativeShapes />

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Welcome text */}
        <div className="flex-1 text-white animate-slide-in-left">
          <Logo />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins leading-tight">
            Welcome!
          </h1>
          <div className="w-12 h-1 bg-white/50 mb-6 rounded-full" />
          <p className="text-white/70 text-sm leading-relaxed max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="mt-8 px-6 py-2 rounded-full border border-accent text-accent text-sm font-medium hover:bg-accent hover:text-white transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Right side - Glass login card */}
        <div className="w-full max-w-md glass-card rounded-2xl p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white font-poppins">
              Sign <span className="text-accent">in</span>
            </h2>
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="bg-destructive/20 border border-destructive/30 text-destructive-foreground px-4 py-3 rounded-xl text-sm mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/80 font-medium text-sm">
                User Name
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="TechTree"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-lg h-11 focus:border-accent focus:ring-accent/30"
                required
                disabled={isLoading}
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white/80 font-medium text-sm">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-lg h-11 focus:border-accent focus:ring-accent/30"
                required
                disabled={isLoading}
              />
            </div>

            {/* Submit Button - orange/pink gradient */}
            <Button
              type="submit"
              className="w-full h-12 font-semibold rounded-xl text-white transition-all duration-300 shadow-lg hover:opacity-90 hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, hsl(15 85% 55%), hsl(35 90% 55%))',
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Submit"
              )}
            </Button>

            {/* Social Icons */}
            <SocialIcons />

            {/* Sign Up Link */}
            <p className="text-center text-white/60 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-accent hover:underline font-medium">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
