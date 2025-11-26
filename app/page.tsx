"use client";
import React, { useState } from 'react';

// Custom component to simulate Lucide icons, as external libraries cannot be imported in a single file environment.
const Icon = ({ name, className = 'w-5 h-5', strokeColor = 'currentColor' }: { name: string, className?: string, strokeColor?: string }) => {
  const defaultStrokeWidth = "2";
  const defaultLinecap = "round";
  const defaultLinejoin = "round";

  switch (name) {
    case 'Sun': return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={defaultStrokeWidth} strokeLinecap={defaultLinecap} strokeLinejoin={defaultLinejoin}>
        <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
      </svg>
    );
    case 'Moon': return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={defaultStrokeWidth} strokeLinecap={defaultLinecap} strokeLinejoin={defaultLinejoin}>
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
      </svg>
    );
    case 'User': return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={defaultStrokeWidth} strokeLinecap={defaultLinecap} strokeLinejoin={defaultLinejoin}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    );
    case 'ChevronLeft': return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={defaultStrokeWidth} strokeLinecap={defaultLinecap} strokeLinejoin={defaultLinejoin}>
        <path d="m15 18-6-6 6-6"/>
      </svg>
    );
    case 'AlertTriangle': return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={defaultStrokeWidth} strokeLinecap={defaultLinecap} strokeLinejoin={defaultLinejoin}>
        <path d="M12 2L1 21h22L12 2z"/><path d="M12 9v4"/><path d="M12 17h.01"/>
      </svg>
    );
    case 'Lightbulb': return (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={defaultStrokeWidth} strokeLinecap={defaultLinecap} strokeLinejoin={defaultLinejoin}>
        <path d="M15 14c.2-1 .6-1.5 1-2s-.7-1.4-2-2.3c-2.8-2-4.2-4-4.2-6.3a4.2 4.2 0 0 1 8.4 0c0 2.3-1.4 4.3-4.2 6.3-1.3.9-2 1.4-2 2.3s.2 1 .4 1.5M11 19h2M12 21v-2"/>
      </svg>
    );
    case 'Number1Circle': return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={defaultStrokeWidth} strokeLinecap={defaultLinecap} strokeLinejoin={defaultLinejoin}>
            <path d="M13 19V7c0-1.1-.9-2-2-2H9"/><circle cx="12" cy="12" r="10"/>
        </svg>
    );
    case 'Number2Circle': return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={defaultStrokeWidth} strokeLinecap={defaultLinecap} strokeLinejoin={defaultLinejoin}>
            <path d="M10 9.5c0-.9.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5.5.9.5 2.1 0 3-1.1 1.7-2 3.1-2 4.5h3"/><circle cx="12" cy="12" r="10"/>
        </svg>
    );
    case 'Number3Circle': return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={defaultStrokeWidth} strokeLinecap={defaultLinecap} strokeLinejoin={defaultLinejoin}>
            <path d="M10 9.5c0-.9.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h1c.8 0 1.5.7 1.5 1.5"/><circle cx="12" cy="12" r="10"/>
        </svg>
    );
    case 'Number4Circle': return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={defaultStrokeWidth} strokeLinecap={defaultLinecap} strokeLinejoin={defaultLinejoin}>
            <path d="M14 19V7h-4l-2 4"/><circle cx="12" cy="12" r="10"/>
        </svg>
    );
    case 'Number5Circle': return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={defaultStrokeWidth} strokeLinecap={defaultLinecap} strokeLinejoin={defaultLinejoin}>
            <path d="M15 10H9v4c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-3"/><circle cx="12" cy="12" r="10"/>
        </svg>
    );
    case 'Check': return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={defaultStrokeWidth} strokeLinecap={defaultLinecap} strokeLinejoin={defaultLinejoin}>
            <polyline points="20 6 9 17 4 12"/>
        </svg>
    );
    case 'X': return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={defaultStrokeWidth} strokeLinecap={defaultLinecap} strokeLinejoin={defaultLinejoin}>
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
    );
    case 'Number6Circle': return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={defaultStrokeWidth} strokeLinecap={defaultLinecap} strokeLinejoin={defaultLinejoin}>
            <circle cx="12" cy="12" r="10"/><path d="M15 8c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2"/>
        </svg>
    );
    default: return <span className={className}>?</span>;
  }
};


// Navigation Bar Component
const NavBar: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Learning Path', href: '#' },
    { name: 'Challenges', href: '#' },
    { name: 'My Courses', href: '#' },
    { name: 'Achievements', href: '#' },
    { name: 'Buddy', href: '#' },
    { name: 'Lexicon', href: '#' },
  ];
  
  const navBg = theme === 'dark' ? 'bg-[#24134a]' : 'bg-white shadow-md';
  const linkText = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';
  const logoText = theme === 'dark' ? 'text-white' : 'text-indigo-600';
  const hoverBg = theme === 'dark' ? 'hover:bg-purple-700' : 'hover:bg-gray-100';
  const iconColor = theme === 'dark' ? 'text-yellow-400' : 'text-gray-600';

  return (
    <nav className={`flex items-center justify-between px-6 py-3 ${navBg} transition-colors duration-300`}>
      {/* Logo */}
      <div className={`text-xl font-bold ${logoText} tracking-wider`}>
        MLera
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-sm font-medium">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`${linkText} hover:text-purple-400 transition-colors`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleTheme}
          className={`${iconColor} p-1 rounded-full ${hoverBg} transition-colors`}
        >
          <Icon name={theme === 'dark' ? 'Sun' : 'Moon'} />
        </button>
        <button className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} p-1 rounded-full ${hoverBg} transition-colors`}>
          <Icon name="User" />
        </button>
      </div>
    </nav>
  );
};

// Breadcrumbs Component
const Breadcrumbs: React.FC<{ theme: string }> = ({ theme }) => {
  const path = [
    { name: 'Home', active: false },
    { name: 'Learning Path', active: false },
    { name: 'Content', active: true },
  ];

  const textColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const activeColor = theme === 'dark' ? 'text-purple-300' : 'text-indigo-600';
  const separatorColor = theme === 'dark' ? 'text-gray-500' : 'text-gray-400';

  return (
    <div className={`p-6 text-sm ${textColor} flex items-center space-x-1`}>
      {path.map((item, index) => (
        <React.Fragment key={item.name}>
          <a
            href="#"
            className={`hover:text-purple-400 transition-colors ${
              item.active ? activeColor + ' font-semibold' : ''
            }`}
          >
            {item.name}
          </a>
          {index < path.length - 1 && (
            <span className={separatorColor + ' mx-1'}>/</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

// Module Progress Bar Component
const ProgressBar: React.FC<{ current: number; total: number; theme: string }> = ({ current, total, theme }) => {
  const percentage = (current / total) * 100;
  const bgColor = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300';
  const progressColor = theme === 'dark' ? 'bg-purple-500' : 'bg-indigo-500';

  return (
    <div className={`w-full h-2 rounded-full ${bgColor} overflow-hidden mt-2`}>
      <div
        className={`h-full ${progressColor} transition-all duration-500 ease-out`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

// --- Content Card Components ---

// Shared ContentCard styling structure
const ContentCard: React.FC<{ title: string; icon: 'AlertTriangle' | 'Number1Circle' | 'Number2Circle' | 'Number3Circle' | 'Number4Circle' | 'Number5Circle' | 'Number6Circle'; iconColor: string; children: React.ReactNode; theme: string; titleSize?: string }> = ({
  title,
  icon,
  iconColor,
  children,
  theme,
  titleSize = 'text-[22px]' // Default to 22px
}) => {
  const cardBg = theme === 'dark' ? 'bg-[#1e0e47]' : 'bg-white';
  const cardBorder = theme === 'dark' ? 'border-gray-800' : 'border-gray-300';
  const titleText = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const cardIconColor = iconColor;
  const cardIconBg = iconColor;

  return (
    <div className={`p-6 rounded-xl ${cardBg} border ${cardBorder} shadow-xl transition-colors duration-300`}>
      <div className="flex items-start mb-4">
        <div className={`flex-shrink-0 p-1.5 rounded-full ${cardIconBg} bg-opacity-10`} style={{ borderColor: iconColor, borderWidth: '2px', borderStyle: 'solid' }}>
          <Icon name={icon} className="w-6 h-6" strokeColor={cardIconBg} />
        </div>
        <h2 className={`font-bold ${titleText} ml-3 pt-1 ${cardIconColor} ${titleSize}`}>
          {title}
        </h2>
      </div>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

// Card 1: What is Linear Regression?
const IntroCard: React.FC<{ theme: string }> = ({ theme }) => {
  const bodyText = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const accentColor = theme === 'dark' ? 'text-purple-300' : 'text-indigo-600';
  const nestedCardBg = theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-200';
  const nestedCardText = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';

  return (
    <ContentCard
      title="What is Linear Regression?"
      icon="AlertTriangle"
      iconColor="text-yellow-400"
      theme={theme}
      titleSize="text-[22px]"
    >
      <div className={`text-base leading-relaxed ${bodyText}`}>
        <p className="mb-6">
          Linear Regression is one of the most fundamental and widely used techniques in the field of machine learning and statistics. At its
          core, it's a method for modeling the relationship between a <span className={`font-semibold ${accentColor}`}>dependent variable (often denoted as 'Y')</span> and one or more <span className={`font-semibold ${accentColor}`}>independent
          variables (X)</span> by fitting a linear equation to the observed data.
        </p>

        {/* Nested Definition Card */}
        <div className={`mt-4 p-5 rounded-lg border-l-4 border-yellow-400 ${nestedCardBg} transition-colors duration-300`}>
            <div className="flex items-center mb-2">
                <Icon name="Lightbulb" className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="font-bold text-yellow-400 ml-2">Definition:</span>
            </div>
            <p className={nestedCardText}>
                Linear Regression is a <span className={`font-semibold ${accentColor}`}>supervised learning</span> algorithm that predicts a continuous output value based on one or more input 
                <span className={`font-semibold ${accentColor}`}> features</span>, assuming a linear relationship between the inputs and the output.
            </p>
        </div>
      </div>
    </ContentCard>
  );
};

// Card 2: Mathematical Formulation
const MathFormulationCard: React.FC<{ theme: string }> = ({ theme }) => {
  const bodyText = theme === 'dark' ? 'text-gray-300' : 'text-gray-300';
  const accentColor = theme === 'dark' ? 'text-purple-300' : 'text-indigo-600';
  const equationBg = theme === 'dark' ? 'bg-black/20' : 'bg-gray-200';
  const equationText = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';

  return (
    <ContentCard
      title="Mathematical Formulation"
      icon="Number2Circle"
      iconColor="text-red-400"
      theme={theme}
      titleSize="text-xl" // Slightly smaller title as per the image
    >
      <div className={`text-base leading-relaxed ${bodyText}`}>
        <p className="mb-6">
          The simplest form of Linear Regression (<span className="font-semibold">Simple Linear Regression</span>) can be expressed as:
        </p>

        {/* Equation Block (Using standard HTML/JSX) */}
        <div className={`p-6 rounded-lg ${equationBg} text-center mb-6 border-yellow-400`}>
            <p className={`font-serif text-2xl md:text-3xl ${equationText} font-light border-yellow-400`}>
                Y = &beta;<sub>0</sub> + &beta;<sub>1</sub>X + &epsilon;
            </p>
        </div>

        <p className="mb-4 font-semibold">Where:</p>
        
        <ul className="list-none space-y-2 pl-0">
          <li className="flex items-start">
            <span className={`text-red-400 mr-2 font-bold text-lg`}>&rarr;</span>
            Y is the dependent variable (what we're trying to predict)
          </li>
          <li className="flex items-start">
            <span className={`text-red-400 mr-2 font-bold text-lg`}>&rarr;</span>
            X is the independent variable (our input feature)
          </li>
          <li className="flex items-start">
            <span className={`text-red-400 mr-2 font-bold text-lg`}>&rarr;</span>
            &beta;<sub>0</sub> is the Y-intercept (the value of Y when X = 0)
          </li>
          <li className="flex items-start">
            <span className={`text-red-400 mr-2 font-bold text-lg`}>&rarr;</span>
            &beta;<sub>1</sub> is the slope (how much Y changes when X increases by 1 unit)
          </li>
          <li className="flex items-start">
            <span className={`text-red-400 mr-2 font-bold text-lg`}>&rarr;</span>
            &epsilon; (<span className="italic">epsilon</span>) represents the error term (the part of Y that can't be explained by the model)
          </li>
        </ul>

        <div className={`mt-8 pt-4 border-t border-gray-700/50`}>
          <p>
            The goal of Linear Regression is to find the values of <span className={`font-semibold ${accentColor}`}>&beta;<sub>0</sub> and &beta;<sub>1</sub></span> that minimize the sum of squared differences between the
            actual Y values and the values predicted by our model.
          </p>
        </div>
      </div>
    </ContentCard>
  );
};

// Card 3: Intuition behind LR
// LRGraph component uses SVG to mimic the scatter plot
const LRGraph: React.FC<{ theme: string }> = ({ theme }) => {
    const isDark = theme === 'dark';
    const svgBg = isDark ? '#10032e' : '#e5e7eb'; // Darker than card bg for contrast / light gray for light mode
    const axisColor = isDark ? '#6b7280' : '#4b5563'; // Gray for axes
    const gridColor = isDark ? '#374151' : '#d1d5db'; // Lighter gray for grid
    const pointColor = isDark ? '#3b82f6' : '#2563eb'; // Blue for data points
    const lineColor = '#ef4444'; // Red for best-fit line
    const titleBg = 'linear-gradient(90deg, #f97316, #a855f7)'; // Orange to Purple gradient

    // Data points (Study Hours, Exam Score) normalized to a 0-100 range for SVG viewbox
    const rawData = [
        [1, 35], [2, 40], [3, 50], [4, 60], [5, 75], [6, 78], [6.5, 82], [7, 90]
    ];
    // Line points (y = 8.5x + 30) for x=1 to x=7
    const lineData = [
        [1, 38.5], [7, 89.5]
    ];

    // SVG coordinate system setup (ViewBox is 0, 0, 700, 500)
    const padding = 50;
    const graphWidth = 600;
    const graphHeight = 400;
    const scaleY = (y: number) => graphHeight - ((y - 30) / (90 - 30)) * graphHeight; // Scale Y from [30, 90] range to [0, 400]
    const scaleX = (x: number) => (x / 7) * graphWidth; // Scale X from [0, 7] range to [0, 600]

    const LegendItem: React.FC<{ color: string, label: string }> = ({ color, label }) => (
        <div className="flex items-center space-x-2 text-xs">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{label}</span>
        </div>
    );

    return (
        <div className="rounded-xl overflow-hidden shadow-2xl">
            {/* Title Bar (Gradient) */}
            <div className="p-4 text-center text-lg font-semibold text-white" style={{ backgroundImage: titleBg }}>
                Relationship Between Study Hours and Exam Scores
            </div>

            {/* Legend */}
            <div className="flex justify-center space-x-6 p-3 bg-black/10">
                <LegendItem color={pointColor} label="Student Data" />
                <LegendItem color={lineColor} label="Best Fit Line" />
            </div>

            {/* SVG Graph Container */}
            <svg viewBox={`0 0 ${graphWidth + padding * 2} ${graphHeight + padding * 2}`} 
                 className="w-full h-auto" 
                 style={{ backgroundColor: svgBg }}>

                {/* Translate the graph area */}
                <g transform={`translate(${padding}, ${padding})`}>
                    {/* Grid Lines (Horizontal for Y-axis) */}
                    {[30, 40, 50, 60, 70, 80, 90].map(yVal => (
                        <line 
                            key={yVal}
                            x1={0} y1={scaleY(yVal)} 
                            x2={graphWidth} y2={scaleY(yVal)} 
                            stroke={gridColor} 
                            strokeWidth="0.5" 
                            strokeDasharray="4 4" 
                        />
                    ))}

                    {/* Grid Lines (Vertical for X-axis) */}
                    {[1, 2, 3, 4, 5, 6, 7].map(xVal => (
                        <line 
                            key={xVal}
                            x1={scaleX(xVal)} y1={0} 
                            x2={scaleX(xVal)} y2={graphHeight} 
                            stroke={gridColor} 
                            strokeWidth="0.5" 
                            strokeDasharray="4 4" 
                        />
                    ))}
                    
                    {/* X-Axis (Bottom) and Y-Axis (Left) */}
                    <line x1={0} y1={graphHeight} x2={graphWidth} y2={graphHeight} stroke={axisColor} strokeWidth="2" />
                    <line x1={0} y1={0} x2={0} y2={graphHeight} stroke={axisColor} strokeWidth="2" />

                    {/* Y-Axis Labels */}
                    {[30, 40, 50, 60, 70, 80, 90].map(yVal => (
                        <text 
                            key={`y-${yVal}`}
                            x={-5} y={scaleY(yVal)} 
                            fontSize="12" 
                            textAnchor="end" 
                            fill={axisColor}
                        >
                            {yVal}
                        </text>
                    ))}

                    {/* X-Axis Labels */}
                    {[1, 2, 3, 4, 5, 6, 7].map(xVal => (
                        <text 
                            key={`x-${xVal}`}
                            x={scaleX(xVal)} y={graphHeight + 15} 
                            fontSize="12" 
                            textAnchor="middle" 
                            fill={axisColor}
                        >
                            {xVal}
                        </text>
                    ))}
                    
                    {/* Best Fit Line */}
                    <line 
                        x1={scaleX(lineData[0][0])} y1={scaleY(lineData[0][1])} 
                        x2={scaleX(lineData[1][0])} y2={scaleY(lineData[1][1])} 
                        stroke={lineColor} 
                        strokeWidth="3" 
                        strokeLinecap="round"
                    />

                    {/* Data Points */}
                    {rawData.map(([x, y]) => (
                        <circle 
                            key={`${x}-${y}`}
                            cx={scaleX(x)} 
                            cy={scaleY(y)} 
                            r="4" 
                            fill={pointColor}
                        />
                    ))}

                    {/* Axis Labels (Text) */}
                    <text x={graphWidth / 2} y={graphHeight + padding - 5} textAnchor="middle" fontSize="14" fill={axisColor}>
                        Study Hours
                    </text>
                    <text x={-graphHeight / 2} y={-padding + 15} textAnchor="middle" transform="rotate(-90)" fontSize="14" fill={axisColor}>
                        Exam Score
                    </text>

                </g>
            </svg>
        </div>
    );
};

const IntuitionCard: React.FC<{ theme: string }> = ({ theme }) => {
  const bodyText = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const accentColor = theme === 'dark' ? 'text-purple-300' : 'text-indigo-600';
  
  return (
    <ContentCard
      title="Intuition behind LR"
      icon="Number3Circle"
      iconColor="text-pink-400"
      theme={theme}
      titleSize="text-xl"
    >
      <div className={`text-base leading-relaxed ${bodyText}`}>
        <p className="mb-6">
          Imagine you're trying to understand the relationship between study hours and exam scores. Intuitively, you might expect that more
          study hours lead to higher scores. Linear Regression formalizes this intuition by finding the straight line that best represents
          this relationship.
        </p>

        {/* Graph */}
        <div className="mb-6">
            <LRGraph theme={theme} />
        </div>

        <p className="pt-2">
          In the visualization above, each point represents a student's study hour (<span className={`font-semibold ${accentColor}`}>x-axis</span>) and their exam score (<span className={`font-semibold ${accentColor}`}>y-axis</span>). The straight line is the
          "<span className={`font-semibold ${accentColor}`}>Best Fit</span>" line determined by Linear Regression, which minimizes the overall distance between the line and all data points.
        </p>
      </div>
    </ContentCard>
  );
};

// Card 4: Understanding the Cost Function (MSE)
const CostFunctionCard: React.FC<{ theme: string }> = ({ theme }) => {
  const bodyText = theme === 'dark' ? 'text-gray-300' : 'text-gray-300';
  const accentColor = theme === 'dark' ? 'text-purple-300' : 'text-indigo-600';
  const equationBg = theme === 'dark' ? 'bg-black/20' : 'bg-gray-200';
  const equationText = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';

  return (
    <ContentCard
      title="Understanding the Cost Function (MSE)"
      icon="Number4Circle"
      iconColor="text-orange-400"
      theme={theme}
      titleSize="text-xl"
    >
      <div className={`text-base leading-relaxed ${bodyText}`}>
        <p className="mb-6">
          To find the best-fitting line, we need a way to measure how well any given line fits our data. The cost function quantifies how "wrong"
          our model's predictions are compared to the actual values. In linear regression, we typically use the <span className={`font-semibold ${accentColor}`}>Mean Squared Error (MSE)</span> as our
          cost function.
        </p>

        <p className="mb-4">
          For a dataset with <span className="italic">n</span> observations, the MSE is calculated as:
        </p>

        {/* MSE Equation Block 1 (General Formula) */}
        <div className={`p-6 rounded-lg ${equationBg} text-center mb-6 border-yellow-400`}>
            <p className={`font-serif text-2xl md:text-3xl ${equationText} font-light border-yellow-400`}>
                MSE = 
                <span className="inline-flex flex-col items-center mx-2 text-xl font-medium">
                    <span className="border-b border-current pb-1">1</span>
                    <span className="pt-1">n</span>
                </span>
                <span className="text-3xl">&sum;</span>
                <span className="inline-flex flex-col items-center mx-1 text-sm">
                  <span className="-mb-1">n</span>
                  <span className="text-xs">i=1</span>
                </span>
                 (y<sub>i</sub> - &hat;y<sub>i</sub>)<sup>2</sup>
            </p>
        </div>

        <p className="mb-4 font-semibold">Where:</p>
        
        <ul className="list-none space-y-2 pl-0">
          <li className="flex items-start">
            <span className={`text-red-400 mr-2 font-bold text-lg`}>&rarr;</span>
            <span className="italic">n</span> is the number of observations
          </li>
          <li className="flex items-start">
            <span className={`text-red-400 mr-2 font-bold text-lg`}>&rarr;</span>
            y<sub>i</sub> is the actual value of the dependent variable for observation i
          </li>
          <li className="flex items-start">
            <span className={`text-red-400 mr-2 font-bold text-lg`}>&rarr;</span>
            &hat;y<sub>i</sub> is the predicted value for observation i
          </li>
        </ul>

        <p className="my-6">
          Substituting our linear regression equation into MSE formula:
        </p>

        {/* MSE Equation Block 2 (Substituted Formula) */}
        <div className={`p-6 rounded-lg ${equationBg} text-center mb-6`}>
            <p className={`font-serif text-2xl md:text-3xl ${equationText} font-light`}>
                MSE = 
                <span className="inline-flex flex-col items-center mx-2 text-xl font-medium">
                    <span className="border-b border-current pb-1">1</span>
                    <span className="pt-1">n</span>
                </span>
                <span className="text-3xl">&sum;</span>
                <span className="inline-flex flex-col items-center mx-1 text-sm">
                  <span className="-mb-1">n</span>
                  <span className="text-xs">i=1</span>
                </span>
                [y<sub>i</sub> - (&beta;<sub>0</sub> + &beta;<sub>1</sub>x<sub>i</sub>)]<sup>2</sup>
            </p>
        </div>
        
        <p className={`mt-8 pt-4 border-t border-gray-700/50`}>
          We've defined the cost function (typically Mean Squared Error), the next step in Linear Regression is to minimize this error by finding the
          optimal values of the parameters:
        </p>
        
        <ul className="list-none space-y-2 pl-0 pt-4">
             <li className="font-semibold">&beta;<sub>0</sub> (intercept)</li>
             <li className="font-semibold">&beta;<sub>1</sub> (slope)</li>
        </ul>

        {/* Continuation content */}
        <p className={`mt-8 pt-4 font-semibold text-lg ${accentColor}`}>
            There are two main techniques used to find these optimal parameters:
        </p>
        
        <ol className={`list-decimal list-inside space-y-2 pl-0 text-base ${bodyText} ml-2`}>
            <li><span className='font-bold'>Ordinary Least Square (OLS)</span></li>
            <li><span className='font-bold'>Gradient Descent</span></li>
        </ol>
      </div>
    </ContentCard>
  );
};

// Card 5: Ordinary Least Square (OLS)
const OLSCard: React.FC<{ theme: string }> = ({ theme }) => {
  const bodyText = theme === 'dark' ? 'text-gray-300' : 'text-gray-300';
  const accentColor = theme === 'dark' ? 'text-purple-300' : 'text-indigo-600';
  const equationBg = theme === 'dark' ? 'bg-black/20' : 'bg-gray-200';
  
  // Custom colors for Pros/Cons icons
  const checkColor = 'text-green-400';
  const xColor = 'text-red-500';

  // --- JSX/HTML Math Formulas for OLS ---
  const beta1Formula = (
    <div className={`font-serif text-lg md:text-xl ${bodyText} font-light text-center`}>
        &beta;<sub>1</sub> = 
        <span className="inline-flex flex-col items-center mx-2 text-xl font-medium">
            <span className="border-b border-current pb-1">
                &sum;<sup>n</sup><sub>i=1</sub> (x<sub>i</sub> - &bar;x)(y<sub>i</sub> - &bar;y)
            </span>
            <span className="pt-1">
                &sum;<sup>n</sup><sub>i=1</sub> (x<sub>i</sub> - &bar;x)<sup>2</sup>
            </span>
        </span>
        =
        <span className="inline-flex flex-col items-center mx-2 text-xl font-medium">
            <span className="border-b border-current pb-1">Cov(x, y)</span>
            <span className="pt-1">Var(x)</span>
        </span>
    </div>
  );

  const beta0Formula = (
    <p className={`font-serif text-2xl md:text-3xl ${bodyText} font-light text-center`}>
        &beta;<sub>0</sub> = &bar;y - &beta;<sub>1</sub>&bar;x
    </p>
  );
  
  return (
    <ContentCard
      title="Ordinary Least Square (OLS)"
      icon="Number5Circle"
      iconColor="text-purple-400"
      theme={theme}
      titleSize="text-xl"
    >
      <div className={`text-base leading-relaxed ${bodyText}`}>
        <p className="mb-6">
          OLS is a <span className={`font-semibold ${accentColor}`}>closed-form analytical solution</span> derived by differentiating the cost function and setting the derivatives to zero. It gives a direct
          formula to compute the best-fitting line.
        </p>

        <p className="mb-4">
          For a simple linear regression (one feature), the formulas are:
        </p>

        {/* Beta 1 Equation Block (using standard HTML/JSX) */}
        <div className={`p-6 rounded-lg ${equationBg} text-center mb-6`}>
            {beta1Formula}
        </div>

        {/* Beta 0 Equation Block (using standard HTML/JSX) */}
        <div className={`p-6 rounded-lg ${equationBg} text-center mb-6`}>
            {beta0Formula}
        </div>
        
        <p className="mb-6">
          where &bar;x and &bar;y are the means of the x and y values respectively.
        </p>

        {/* Pros and Cons Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {/* Pros Column */}
            <div className={`p-4 rounded-lg border-t-4 border-green-500/80 bg-black/20 transition-colors duration-300`}>
                <h3 className={`font-bold text-lg mb-3 ${checkColor} flex items-center`}>
                    <Icon name="Check" className="w-5 h-5 mr-2 flex-shrink-0" strokeColor={checkColor} />
                    Pros:
                </h3>
                <ul className="list-none space-y-2 text-sm pl-0">
                    <li className="flex items-start">
                        <Icon name="Check" className="w-5 h-5 mr-2 flex-shrink-0" strokeColor={checkColor} />
                        Fast and exact
                    </li>
                    <li className="flex items-start">
                        <Icon name="Check" className="w-5 h-5 mr-2 flex-shrink-0" strokeColor={checkColor} />
                        Best for small to medium datasets
                    </li>
                </ul>
            </div>
            
            {/* Cons Column */}
            <div className={`p-4 rounded-lg border-t-4 border-red-500/80 bg-black/20 transition-colors duration-300`}>
                <h3 className={`font-bold text-lg mb-3 ${xColor} flex items-center`}>
                    <Icon name="X" className="w-5 h-5 mr-2 flex-shrink-0" strokeColor={xColor} />
                    Cons:
                </h3>
                <ul className="list-none space-y-2 text-sm pl-0">
                    <li className="flex items-start">
                        <Icon name="X" className="w-5 h-5 mr-2 flex-shrink-0" strokeColor={xColor} />
                        Not ideal for high-dimensional data
                    </li>
                    <li className="flex items-start">
                        <Icon name="X" className="w-5 h-5 mr-2 flex-shrink-0" strokeColor={xColor} />
                        Becomes computationally expensive when data is very large
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </ContentCard>
  );
};

// Card 6: Gradient Descent
const GradientDescentCard: React.FC<{ theme: string }> = ({ theme }) => {
  const bodyText = theme === 'dark' ? 'text-gray-300' : 'text-gray-300';
  const accentColor = theme === 'dark' ? 'text-purple-300' : 'text-indigo-600';
  const equationBg = theme === 'dark' ? 'bg-black/20' : 'bg-gray-200';
  const equationText = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';

  // Custom colors for Pros/Cons icons
  const checkColor = 'text-green-400';
  const xColor = 'text-red-500';
  
  // Formula for Beta 0 update rule
  const beta0UpdateFormula = (
      <p className={`font-serif text-lg md:text-xl ${equationText} font-light text-center`}>
          &beta;<sub>0</sub> := &beta;<sub>0</sub> - &alpha; 
          <span className="inline-flex flex-col items-center mx-2 text-xl font-medium">
              <span className="-mb-2">&partial;J</span>
              <span className="border-t border-current pt-1 pb-1">&partial;&beta;<sub>0</sub></span>
          </span>
          = &beta;<sub>0</sub> - &alpha; 
          <span className="inline-flex flex-col items-center mx-2 text-xl font-medium">
              <span className="border-b border-current pb-1">1</span>
              <span className="pt-1">m</span>
          </span>
          <span className="text-3xl">&sum;</span>
          <span className="inline-flex flex-col items-center mx-1 text-sm">
            <span className="-mb-1">m</span>
            <span className="text-xs">i=1</span>
          </span>
           (&hat;y<sub>i</sub> - y<sub>i</sub>)
      </p>
  );


  // Formula for Beta 1 update rule
  const beta1UpdateFormula = (
      <p className={`font-serif text-lg md:text-xl ${equationText} font-light text-center`}>
          &beta;<sub>1</sub> := &beta;<sub>1</sub> - &alpha; 
          <span className="inline-flex flex-col items-center mx-2 text-xl font-medium">
              <span className="-mb-2">&partial;J</span>
              <span className="border-t border-current pt-1 pb-1">&partial;&beta;<sub>1</sub></span>
          </span>
          = &beta;<sub>1</sub> - &alpha; 
          <span className="inline-flex flex-col items-center mx-2 text-xl font-medium">
              <span className="border-b border-current pb-1">1</span>
              <span className="pt-1">m</span>
          </span>
          <span className="text-3xl">&sum;</span>
          <span className="inline-flex flex-col items-center mx-1 text-sm">
            <span className="-mb-1">m</span>
            <span className="text-xs">i=1</span>
          </span>
           (&hat;y<sub>i</sub> - y<sub>i</sub>) x<sub>i</sub>
      </p>
  );


  return (
    <ContentCard
      title="Gradient Descent"
      icon="Number6Circle"
      iconColor="text-green-400"
      theme={theme}
      titleSize="text-xl"
    >
      <div className={`text-base leading-relaxed ${bodyText}`}>
        <p className="mb-6">
          Gradient Descent is an <span className={`font-semibold ${accentColor}`}>iterative optimization algorithm</span>. It starts with random initial values for $\beta_{0}$ and $\beta_{1}$, and gradually updates them
          to minimize the cost.
        </p>

        <p className="mb-4">
          The update rules are:
        </p>

        {/* Beta 1 Update Rule (using JSX/HTML) */}
        <div className={`p-6 rounded-lg ${equationBg} text-center mb-6`}>
            {beta1UpdateFormula}
        </div>

        {/* Beta 0 Update Rule (using JSX/HTML) */}
        <div className={`p-6 rounded-lg ${equationBg} text-center mb-6`}>
            {beta0UpdateFormula}
        </div>
        
        <p className="mb-4 font-semibold">Where:</p>
        
        <ul className="list-none space-y-2 pl-0">
          <li className="flex items-start">
            <span className={`text-red-400 mr-2 font-bold text-lg`}>&rarr;</span>
            &alpha; is the learning rate (step size)
          </li>
          <li className="flex items-start">
            <span className={`text-red-400 mr-2 font-bold text-lg`}>&rarr;</span>
            <span className="italic">m</span> is the number of training examples
          </li>
          <li className="flex items-start">
            <span className={`text-red-400 mr-2 font-bold text-lg`}>&rarr;</span>
            &hat;y<sub>i</sub> is the predicted value for the i-th example
          </li>
          <li className="flex items-start">
            <span className={`text-red-400 mr-2 font-bold text-lg`}>&rarr;</span>
            y<sub>i</sub> is the actual value for the i-th example
          </li>
          <li className="flex items-start">
            <span className={`text-red-400 mr-2 font-bold text-lg`}>&rarr;</span>
            x<sub>i</sub> is the feature value for the i-th example
          </li>
        </ul>


        {/* Pros and Cons Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {/* Pros Column */}
            <div className={`p-4 rounded-lg border-t-4 border-green-500/80 bg-black/20 transition-colors duration-300`}>
                <h3 className={`font-bold text-lg mb-3 ${checkColor} flex items-center`}>
                    <Icon name="Check" className="w-5 h-5 mr-2 flex-shrink-0" strokeColor={checkColor} />
                    Pros:
                </h3>
                <ul className="list-none space-y-2 text-sm pl-0">
                    <li className="flex items-start">
                        <Icon name="Check" className="w-5 h-5 mr-2 flex-shrink-0" strokeColor={checkColor} />
                        Handles very large datasets efficiently
                    </li>
                    <li className="flex items-start">
                        <Icon name="Check" className="w-5 h-5 mr-2 flex-shrink-0" strokeColor={checkColor} />
                        Works well with high-dimensional data
                    </li>
                    <li className="flex items-start">
                        <Icon name="Check" className="w-5 h-5 mr-2 flex-shrink-0" strokeColor={checkColor} />
                        Foundational for more advanced models (Neural Networks)
                    </li>
                </ul>
            </div>
            
            {/* Cons Column */}
            <div className={`p-4 rounded-lg border-t-4 border-red-500/80 bg-black/20 transition-colors duration-300`}>
                <h3 className={`font-bold text-lg mb-3 ${xColor} flex items-center`}>
                    <Icon name="X" className="w-5 h-5 mr-2 flex-shrink-0" strokeColor={xColor} />
                    Cons:
                </h3>
                <ul className="list-none space-y-2 text-sm pl-0">
                    <li className="flex items-start">
                        <Icon name="X" className="w-5 h-5 mr-2 flex-shrink-0" strokeColor={xColor} />
                        Requires careful tuning of the learning rate (&alpha;)
                    </li>
                    <li className="flex items-start">
                        <Icon name="X" className="w-5 h-5 mr-2 flex-shrink-0" strokeColor={xColor} />
                        Slow to converge if the learning rate is too small
                    </li>
                    <li className="flex items-start">
                        <Icon name="X" className="w-5 h-5 mr-2 flex-shrink-0" strokeColor={xColor} />
                        May overshoot the minimum if the learning rate is too large
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </ContentCard>
  );
};


// Main Page Component
const CourseContentPage: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const mainBg = theme === 'dark' ? 'bg-[#10032e]' : 'bg-gray-100';
  const mainText = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const dividerBorder = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';
  const titleColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const previousButtonBg = theme === 'dark' ? 'bg-[#1e0e47]' : 'bg-white border border-gray-300';
  const previousButtonText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const floatingIconBg = theme === 'dark' ? 'bg-purple-500' : 'bg-indigo-600';

  return (
    <div className={`min-h-screen ${mainBg} ${mainText} font-sans transition-colors duration-300`}>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <Breadcrumbs theme={theme} />

        {/* Header Section */}
        <section className="mt-8 mb-12">
          <h1 className={`text-4xl md:text-5xl font-extrabold ${titleColor} mb-6`}>
            Introduction to Linear Regression
          </h1>

          <div className={`flex justify-between items-end border-b ${dividerBorder} pb-4`}>
            <div>
              <p className="text-sm font-medium text-gray-400 mb-1">Module progress: 2 / 5</p>
              <ProgressBar current={2} total={5} theme={theme} />
            </div>
            
            <button className={`flex items-center px-4 py-2 ${previousButtonBg} ${previousButtonText} rounded-lg shadow-md hover:opacity-80 transition-all text-sm font-medium`}>
              <Icon name="ChevronLeft" className="w-4 h-4 mr-1" strokeColor={theme === 'dark' ? 'currentColor' : 'currentColor'} />
              Previous
            </button>
          </div>
        </section>

        {/* Content Section */}
        <section className="space-y-8">
          <IntroCard theme={theme} />
          <MathFormulationCard theme={theme} />
          <IntuitionCard theme={theme} />
          <CostFunctionCard theme={theme} />
          <OLSCard theme={theme} />
          <GradientDescentCard theme={theme} />
        </section>
      </main>
      
      {/* Floating icon at bottom left, mimicking the 'N' icon in the image */}
      <div className={`fixed bottom-4 left-4 p-2 text-xl font-bold rounded-full ${floatingIconBg} text-white shadow-lg cursor-pointer`}>
        N
      </div>
    </div>
  );
};

export default CourseContentPage;