export const DeveloperIllustration = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 300" fill="none">
    {/* Background circle */}
    <circle cx="150" cy="150" r="120" fill="url(#developerGradient)" opacity="0.1" />
    
    {/* Head */}
    <circle cx="150" cy="120" r="50" fill="#fbbf24" stroke="url(#developerGradient)" strokeWidth="2" />
    
    {/* Eyes */}
    <circle cx="135" cy="110" r="4" fill="#1f2937" />
    <circle cx="165" cy="110" r="4" fill="#1f2937" />
    
    {/* Smile */}
    <path d="M130 130 Q150 145 170 130" stroke="#1f2937" strokeWidth="3" fill="none" strokeLinecap="round" />
    
    {/* Laptop */}
    <rect x="80" y="180" width="140" height="80" rx="8" fill="#1f2937" stroke="url(#developerGradient)" strokeWidth="2" />
    <rect x="90" y="190" width="120" height="60" rx="4" fill="#0f172a" />
    
    {/* Screen content - code lines */}
    <rect x="100" y="200" width="60" height="3" rx="1" fill="#8b5cf6" />
    <rect x="100" y="210" width="80" height="3" rx="1" fill="#3b82f6" />
    <rect x="100" y="220" width="40" height="3" rx="1" fill="#06b6d4" />
    <rect x="100" y="230" width="70" height="3" rx="1" fill="#10b981" />
    
    {/* Arms */}
    <ellipse cx="120" cy="160" rx="8" ry="20" fill="#fbbf24" transform="rotate(-20 120 160)" />
    <ellipse cx="180" cy="160" rx="8" ry="20" fill="#fbbf24" transform="rotate(20 180 160)" />
    
    {/* Hands on keyboard */}
    <circle cx="110" cy="175" r="6" fill="#fbbf24" />
    <circle cx="190" cy="175" r="6" fill="#fbbf24" />
    
    {/* Floating code symbols */}
    <text x="60" y="100" fill="#8b5cf6" fontSize="16" opacity="0.6">&lt;/&gt;</text>
    <text x="220" y="120" fill="#3b82f6" fontSize="14" opacity="0.5">{ }</text>
    <text x="50" y="200" fill="#06b6d4" fontSize="12" opacity="0.4">( )</text>
    <text x="240" y="180" fill="#10b981" fontSize="18" opacity="0.7">💻</text>
    
    {/* Happy particles */}
    <circle cx="80" cy="80" r="2" fill="#fbbf24" opacity="0.8" />
    <circle cx="220" cy="90" r="1.5" fill="#8b5cf6" opacity="0.6" />
    <circle cx="70" cy="140" r="1" fill="#3b82f6" opacity="0.5" />
    
    <defs>
      <linearGradient id="developerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="50%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
  </svg>
)