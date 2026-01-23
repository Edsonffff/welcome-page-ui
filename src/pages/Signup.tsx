import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Logo from "@/components/login/Logo";
import DecorativeShapes from "@/components/login/DecorativeShapes";
import SocialIcons from "@/components/login/SocialIcons";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Firebase error message mapping for user-friendly messages
  const getErrorMessage = (errorCode: string): string => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "This email is already registered. Please login instead.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/operation-not-allowed":
        return "Email/password accounts are not enabled.";
      default:
        return "An error occurred. Please try again.";
    }
  };

  // Handle signup with Firebase createUserWithEmailAndPassword
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);

    try {
      // Firebase signup - creates new user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard on successful signup
      navigate("/dashboard");
    } catch (err: any) {
      // Handle Firebase auth errors
      setError(getErrorMessage(err.code));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel - Gradient with decorative shapes */}
      <div className="hidden md:flex md:w-1/2 login-gradient relative overflow-hidden items-center justify-center p-12">
        <DecorativeShapes />
        <div className="relative z-10 text-white max-w-md animate-slide-in-left">
          <Logo />
          <h1 className="text-5xl font-bold mb-4 font-poppins leading-tight">
            Join us today!
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Create your account and start your journey with us.
          </p>
        </div>
      </div>

      {/* Right Panel - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-background">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          {/* Mobile Logo */}
          <div className="md:hidden flex justify-center mb-8">
            <div className="w-12 h-12 rounded-xl login-gradient flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground font-poppins">
              Create Account
            </h2>
            <p className="text-muted-foreground mt-2">
              Fill in the details to get started
            </p>
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-login"
                required
                disabled={isLoading}
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-login"
                required
                disabled={isLoading}
              />
            </div>

            {/* Confirm Password Input */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground font-medium">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input-login"
                required
                disabled={isLoading}
              />
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              className="w-full h-12 login-gradient text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          {/* Login Link */}
          <p className="text-center text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-login-primary font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

          {/* Social Icons */}
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
