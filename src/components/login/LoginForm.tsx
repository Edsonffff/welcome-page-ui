import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface LoginFormProps {
  onSignUpClick?: () => void;
}

const LoginForm = ({ onSignUpClick }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate login - replace with actual Firebase auth
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome back! Redirecting to dashboard...",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email Input */}
      <div className="relative">
        <label className="block text-sm text-muted-foreground mb-2 font-medium">
          Email address
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@mail.com"
            className="input-login pl-12"
            autoComplete="email"
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="relative">
        <label className="block text-sm text-muted-foreground mb-2 font-medium">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••••"
            className="input-login pl-12 pr-12"
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            className="border-primary data-[state=checked]:bg-primary"
          />
          <label
            htmlFor="remember"
            className="text-sm text-muted-foreground cursor-pointer"
          >
            Remember me
          </label>
        </div>
        <a
          href="#"
          className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
        >
          Forgot password?
        </a>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary-login flex-1 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Logging in...
            </span>
          ) : (
            "Login"
          )}
        </button>
        <button
          type="button"
          onClick={onSignUpClick}
          className="btn-secondary-login flex-1"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
