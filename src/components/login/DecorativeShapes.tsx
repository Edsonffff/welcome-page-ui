const DecorativeShapes = () => {
  return (
    <>
      {/* Large circles */}
      <div className="decorative-circle w-64 h-64 -top-20 -right-20 animate-float opacity-30" />
      <div className="decorative-circle w-48 h-48 bottom-20 -left-16 animate-float-delayed opacity-25" />
      <div className="decorative-ring w-40 h-40 top-1/3 -left-10 animate-pulse-slow" />
      <div className="decorative-ring w-32 h-32 bottom-1/4 right-10 animate-float opacity-40" />
      
      {/* Dots pattern */}
      <div className="absolute left-8 top-1/2 grid grid-cols-4 gap-2 opacity-40">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary-foreground/50"
          />
        ))}
      </div>

      {/* Wave lines */}
      <div className="absolute top-16 right-8 opacity-40">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
          {[0, 10, 20, 30].map((y) => (
            <path
              key={y}
              d={`M0 ${y + 5} Q20 ${y} 40 ${y + 5} T80 ${y + 5}`}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-primary-foreground/60"
            />
          ))}
        </svg>
      </div>

      {/* Chevrons */}
      <div className="absolute bottom-20 left-8 opacity-50">
        <svg width="30" height="60" viewBox="0 0 30 60" fill="none">
          {[0, 15, 30, 45].map((y) => (
            <path
              key={y}
              d={`M5 ${y} L15 ${y + 10} L25 ${y}`}
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-primary-foreground/70"
            />
          ))}
        </svg>
      </div>

      {/* Bottom right chevrons */}
      <div className="absolute -bottom-4 -right-4 opacity-40">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
          {[0, 18, 36, 54].map((y) => (
            <path
              key={y}
              d={`M10 ${y} L30 ${y + 12} L50 ${y}`}
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-shape-secondary"
            />
          ))}
        </svg>
      </div>
    </>
  );
};

export default DecorativeShapes;
