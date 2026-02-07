const OrangeBlossomDivider = () => {
  return (
    <div className="flex items-center justify-center py-8 bg-background">
      <div className="flex items-center gap-4 max-w-md w-full px-8">
        {/* Left line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border"></div>
        
        {/* Orange blossom cluster - subtle and elegant */}
        <div className="relative flex items-center justify-center">
          {/* Center blossom */}
          <svg 
            viewBox="0 0 32 32" 
            className="w-8 h-8 text-accent"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Petals */}
            <ellipse cx="16" cy="8" rx="4" ry="6" fill="currentColor" opacity="0.9" />
            <ellipse cx="16" cy="24" rx="4" ry="6" fill="currentColor" opacity="0.9" />
            <ellipse cx="8" cy="16" rx="6" ry="4" fill="currentColor" opacity="0.9" />
            <ellipse cx="24" cy="16" rx="6" ry="4" fill="currentColor" opacity="0.9" />
            {/* Diagonal petals */}
            <ellipse cx="10" cy="10" rx="4" ry="5" fill="currentColor" opacity="0.7" transform="rotate(-45 10 10)" />
            <ellipse cx="22" cy="10" rx="4" ry="5" fill="currentColor" opacity="0.7" transform="rotate(45 22 10)" />
            <ellipse cx="10" cy="22" rx="4" ry="5" fill="currentColor" opacity="0.7" transform="rotate(45 10 22)" />
            <ellipse cx="22" cy="22" rx="4" ry="5" fill="currentColor" opacity="0.7" transform="rotate(-45 22 22)" />
            {/* Center */}
            <circle cx="16" cy="16" r="3" fill="hsl(35 60% 55%)" />
            <circle cx="16" cy="16" r="1.5" fill="hsl(35 70% 65%)" />
          </svg>
          
          {/* Small accent leaves */}
          <svg 
            viewBox="0 0 16 16" 
            className="w-4 h-4 absolute -left-3 top-1/2 -translate-y-1/2 text-accent/60"
            fill="currentColor"
          >
            <path d="M8 2C4 2 2 8 2 8s2 6 6 6c0-4-2-6-2-6s2-2 2-6z" />
          </svg>
          <svg 
            viewBox="0 0 16 16" 
            className="w-4 h-4 absolute -right-3 top-1/2 -translate-y-1/2 text-accent/60 scale-x-[-1]"
            fill="currentColor"
          >
            <path d="M8 2C4 2 2 8 2 8s2 6 6 6c0-4-2-6-2-6s2-2 2-6z" />
          </svg>
        </div>
        
        {/* Right line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border"></div>
      </div>
    </div>
  );
};

export default OrangeBlossomDivider;
