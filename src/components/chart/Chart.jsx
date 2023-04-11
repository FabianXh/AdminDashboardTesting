import "./chart.scss";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: "January", total: 1200 },
    { name: "February", total: 1400 },
    { name: "March", total: 900 },
    { name: "April", total: 700 },
    { name: "May", total: 1500 },
    { name: "June", total: 400 },
];

const Chart = () => {
    return (
        <div className="chart">
            <div className="title">Last 6 Months (Revenue)</div>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
                  <XAxis dataKey="name" stroke="gray"/>
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;