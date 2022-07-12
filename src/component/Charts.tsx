import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./style.css";

interface ChartComponentProps {
  //   data?: any | any[];
  //   variant?: string;
}

const data = [
  {
    name: "Day 1",
    apr: 80,
    tlv: 20,
  },
  {
    name: "Day 2",
    apr: 40,
    tlv: 30,
  },
  {
    name: "Day 3",
    apr: 60,
    tlv: 40,
  },
  {
    name: "Day 4",
    apr: 50,
    tlv: 50,
  },
  {
    name: "Day 5",
    apr: 10,
    tlv: 60,
  },
  {
    name: "Day 6",
    apr: 20,
    tlv: 70,
  },
  {
    name: "Day 7",
    apr: 70,
    tlv: 80,
  },
];

const Charts: React.FC<ChartComponentProps> = ({}) => {
  const [apr, setApr] = useState<boolean>(true);
  const [tlv, setTlv] = useState<boolean>(false);
  return (
    <>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorApr" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colortlv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" tick={{ fill: "white", fontSize: 12 }} />
        <YAxis unit={"%"} tick={{ fill: "white", fontSize: 12 }} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={apr ? "apr" : "tlv"}
          stroke="#9446be"
          fillOpacity={1}
          fill="url(#colorApr)"
        />
      </AreaChart>
      <div style={{ display: "flex" }}>
        <button
          className="buttonChart"
          onClick={() => {
            setApr(true);
            setTlv(false);
          }}
        >
          APR
        </button>
        <button
          className="buttonChart"
          onClick={() => {
            setApr(false);
            setTlv(true);
          }}
        >
          TLV
        </button>
      </div>
    </>
  );
};

export default Charts;
