// export default function ProgressCircle({ percentage = 75, color = "blue-500" }) {
//     const radius = 50;
//     const strokeWidth = 10;
//     const circumference = 2 * Math.PI * radius;
//     const progress = (percentage / 100) * circumference;

//     return (
//         <div className="relative flex justify-center items-center">
//             <svg viewBox="0 0 120 120" className="rotate-[-90deg]">
//                 {/* Hintergrundkreis */}
//                 <circle cx="60" cy="60" r={radius} stroke="currentColor" className="text-gray-300" strokeWidth={strokeWidth} fill="none" />
//                 {/* Fortschrittskreis */}
//                 <circle
//                     cx="60"
//                     cy="60"
//                     r={radius}
//                     stroke="currentColor"
//                     strokeWidth={strokeWidth}
//                     fill="none"
//                     strokeDasharray={circumference}
//                     strokeDashoffset={circumference - progress}
//                     strokeLinecap="round"
//                     className={`text-${color}-400 transition-all duration-500 ease-out`}
//                 />
//             </svg>
//             {/* Prozentzahl in der Mitte */}
//             <span className="absolute font-bold text-gray-800 text-xl">{percentage}%</span>
//         </div>
//     );
// }
export default function MultiSegmentProgressCircle({
    segments = [
        { percentage: 10, color: "gray" },
        { percentage: 20, color: "red" },
        { percentage: 15, color: "amber" },
        { percentage: 30, color: "blue" },
        { percentage: 25, color: "green" },
    ],
    strokeWidth = 12,
}) {
    // Berechnung des Kreisumfangs
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    // Startpunkt für das erste Segment
    let startOffset = circumference;
    return (
        <div className="relative flex justify-center items-center">
            <svg viewBox="0 0 120 120" className="rotate-[-90deg]">
                {/* Hintergrundkreis */}
                <circle cx="60" cy="60" r={radius} stroke="currentColor" className="text-gray-300" strokeWidth={strokeWidth} fill="none" />

                {segments.map((segment, index) => {
                    const segmentProgress = (segment.percentage / 100) * circumference;
                    const segmentDasharray = `${segmentProgress} ${circumference - segmentProgress}`;
                    const segmentOffset = startOffset;
                    startOffset -= segmentProgress;

                    return (
                        <circle
                            key={index}
                            cx="60"
                            cy="60"
                            r={radius}
                            stroke="currentColor"
                            strokeWidth={strokeWidth}
                            fill="none"
                            strokeDasharray={segmentDasharray} // Segmentierte Darstellung
                            strokeDashoffset={segmentOffset} // Startposition für das Segment
                            strokeLinecap="butt" // Keine Abrundung, damit Segmente sauber aneinander liegen
                            className={`text-${segment.color}-500 transition-all duration-500 ease-out`}
                        />
                    );
                })}
            </svg>
            {/* Optional: Eine Beschriftung oder Gesamtprozentzahl */}
            <span className="absolute font-bold text-gray-800 text-xl">{segments.find((s) => s.color == "green").percentage}%</span>
        </div>
    );
}
