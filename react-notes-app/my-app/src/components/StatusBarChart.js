import { BarChart, XAxis, YAxis,CartesianGrid,Tooltip, Bar} from "recharts";

function StatusBarChart({notes}){
    const openCount = notes.filter(n =>n.status ==="open").length;
    const closedCount = notes.filter(n =>n.status ==="closed").length;
    const data = [{ name:"Open",count: openCount },
    { name:"Closed",count:closedCount }
  ];
  return(
  <div style={{ marginTop: "20px" }}>
    <h1>Status Chart</h1>
    <BarChart width={300} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count"/>
      </BarChart>
    </div>
  );
}   
export default StatusBarChart;