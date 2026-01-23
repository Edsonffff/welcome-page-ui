import Logo from "@/components/login/Logo";
import DecorativeShapes from "@/components/login/DecorativeShapes";
import LoginForm from "@/components/login/LoginForm";
import SocialIcons from "@/components/login/SocialIcons";

const Login = () => {
  const handleSignUpClick = () => {
    // Navigate to signup page or open signup modal
    console.log("Sign up clicked");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Gradient with decorations */}
      <div className="hidden lg:flex lg:w-1/2 login-gradient relative overflow-hidden">
        {/* Decorative shapes */}
        <DecorativeShapes />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <div className="animate-slide-in-left">
            <Logo />
          </div>

          {/* Welcome Text */}
          <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl font-bold text-primary-foreground leading-tight mb-4">
              Hello,
              <br />
              welcome!
            </h1>
            <p className="text-primary-foreground/80 max-w-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi risus.
            </p>
          </div>

          {/* Spacer */}
          <div />
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 bg-background relative">
        {/* Mobile Logo */}
        <div className="lg:hidden absolute top-6 left-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary" />
            <span className="font-bold text-primary">YOUR LOGO</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-md animate-fade-in">
          {/* Mobile Welcome */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back!</h1>
            <p className="text-muted-foreground">Sign in to continue</p>
          </div>

          {/* Login Form */}
          <div className="bg-card rounded-2xl shadow-xl p-8 border border-border/50">
            <LoginForm onSignUpClick={handleSignUpClick} />
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center">
            <SocialIcons />
          </div>
        </div>

        {/* Background decoration for mobile */}
        <div className="lg:hidden absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl" />
        <div className="lg:hidden absolute -top-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-br from-secondary/10 to-primary/10 blur-3xl" />
      </div>
    </div>
  );
};

export default Login;
