const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-primary-foreground/90" />
        <div className="absolute top-1 right-0 w-3 h-3 rounded-full bg-primary-foreground/60" />
      </div>
      <div className="text-primary-foreground font-semibold text-lg tracking-wide">
        <span className="font-normal">YOUR</span>
        <br />
        <span className="font-bold">LOGO</span>
      </div>
    </div>
  );
};

export default Logo;
