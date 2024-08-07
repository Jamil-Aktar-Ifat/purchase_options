import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentMarks = [
    { id: 1, name: "Student 1", math: 85, physics: 78, chemistry: 82 },
    { id: 2, name: "Student 2", math: 78, physics: 84, chemistry: 76 },
    { id: 3, name: "Student 3", math: 92, physics: 88, chemistry: 91 },
    { id: 4, name: "Student 4", math: 74, physics: 72, chemistry: 70 },
    { id: 5, name: "Student 5", math: 88, physics: 80, chemistry: 85 },
    { id: 6, name: "Student 6", math: 90, physics: 92, chemistry: 89 },
    { id: 7, name: "Student 7", math: 76, physics: 74, chemistry: 78 },
    { id: 8, name: "Student 8", math: 84, physics: 86, chemistry: 83 },
    { id: 9, name: "Student 9", math: 91, physics: 89, chemistry: 90 },
    { id: 10, name: "Student 10", math: 79, physics: 77, chemistry: 81 },
  ];
  return (
    <div>
      <LChart width={1000} height={400} data={studentMarks}>
        <XAxis></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="physics" stroke="green"></Line>
        <Line dataKey="chemistry" stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
