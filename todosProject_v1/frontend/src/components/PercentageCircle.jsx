export default function ProgressCircle({ percentage = 75, color = "blue-500" }) {
    const radius = 50;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const progress = (percentage / 100) * circumference;

    return (
        <div className="relative flex justify-center items-center">
            <svg viewBox="0 0 120 120" className="rotate-[-90deg]">
                {/* Hintergrundkreis */}
                <circle cx="60" cy="60" r={radius} stroke="currentColor" className="text-gray-300" strokeWidth={strokeWidth} fill="none" />
                {/* Fortschrittskreis */}
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - progress}
                    strokeLinecap="round"
                    className={`text-${color} transition-all duration-500 ease-out`}
                />
            </svg>
            {/* Prozentzahl in der Mitte */}
            <span className="absolute font-bold text-gray-800 text-xl">{percentage}%</span>
        </div>
    );
}
