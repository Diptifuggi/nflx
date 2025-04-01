import { useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import "./lumpsum.css";

const LumpsumCalculator = () => {
  const [amount, setAmount] = useState(5000000);
  const [years, setYears] = useState(30);
  const [rate, setRate] = useState(12);

  // Future Value Calculation using Compound Interest Formula: FV = PV * (1 + r)^t
  const futureValue = Math.round(amount * Math.pow(1 + rate / 100, years));

  // Chart Data
  const data = [
    { name: "Total Growth", value: futureValue - amount },
    { name: "Amount Invested", value: amount },
  ];

  const COLORS = ["#00C49F", "#001F3F"];


  return (
    <div style={{paddingTop:'4%'}}>
      <div className="lumpsum-container">
      <h2 className="title">Lumpsum Target Calculator</h2>

      {/* Flexbox container for inputs & chart */}
      <div className="calculator-body">
        
        {/* Left Side: Input Sliders */}
        <div className="input-section">
          {/* Amount Input */}
          <div className="input-group">
            <label>How much amount you want to save (Rs)</label>
            <input 
              type="range" min="10000" max="10000000" step="50000" value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))} 
            />
            <div className="value">{amount.toLocaleString("en-IN")}</div>
          </div>

          {/* Years Input */}
          <div className="input-group">
            <label>How many years after you need this amount</label>
            <input 
              type="range" min="1" max="50" value={years} 
              onChange={(e) => setYears(Number(e.target.value))} 
            />
            <div className="value">{years} Years</div>
          </div>

          {/* Interest Rate Input */}
          <div className="input-group">
            <label>Expected rate of return (% per annum)</label>
            <input 
              type="range" min="1" max="20" value={rate} 
              onChange={(e) => setRate(Number(e.target.value))} 
            />
            <div className="value">{rate}%</div>
          </div>
        </div>

        {/* Right Side: Chart */}
        <div className="chart-section">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="target-amount">Target Amount: ₹{futureValue.toLocaleString("en-IN")}</div>
        </div>
      </div>

      {/* New Bottom Section for Summary */}
      <div className="summary-section">
        <div className="summary-box">
          <h3>Your Targeted Amount</h3>
          <p>₹{futureValue.toLocaleString("en-IN")}</p>
        </div>
        <div className="summary-box">
          <h3>Number of Years to Achieve Your Goal</h3>
          <p>{years} Years</p>
        </div>
        <div className="summary-box">
          <h3>Lumpsum Investment Amount</h3>
          <p>₹{amount.toLocaleString("en-IN")}</p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default LumpsumCalculator;
