import styles from './stats.module.scss';
import { AreaChart, Area, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, Tooltip, Line, LineChart } from 'recharts';
import data from '../../testdata';

function Stats(props) {

  const linedata = props.data.map(item => ({ date: new Date(item.playdate).getTime(), result: item.result })) 

  const gradientOffset = () => {  
    const dataMax = Math.max(...data.map((item) => item.result));
    const dataMin = Math.min(...data.map((item) => item.result));

    if (dataMax <= 0) {
        return 1;
    }
    if (dataMin >= 0) {
        return 0;
    }

    return dataMax / (dataMax-dataMin);
}

  const off = gradientOffset();

  const reducer = (groupedData, item) => {
      const index = groupedData.findIndex( arrayItem => arrayItem.type === item.type );
      if (index >= 0) {
          groupedData[index].result = groupedData[index].result + item.result;
      } else {
          groupedData.push({type: item.place, result: item.result});
      }
      return groupedData;
  }

  const placedata = props.data.reduce(reducer, []);


    return (
        <div className={styles.stats}>
            <h2>Stats</h2>
            <h3>Heittotulokset aikajanalla</h3>
            
            <ResponsiveContainer width={"100%"} height={360}>
                <AreaChart data={linedata} margin={{ top:20, left:20, right:50, bottom:10 }} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" 
                        dataKey="date" 
                        domain={["dataMin","dataMax"]} 
                        scale="time"
                        tickFormatter={timeStr => new Date(timeStr).toLocaleDateString("fi-FI")} 
                    />
                    <YAxis>
                        <Label value="Tulos"
                               position="left"
                               angle={-90}
                               style={{ textAnchor: "middle" }} />
                    </YAxis>
                    <defs>
                        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset={off} stopColor="red" stopOpacity={1} />
                            <stop offset={off} stopColor="green" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="result" name="Tulos" stroke='#000' fill="url(#splitColor)"  />
                    <Tooltip labelFormatter={value => new Date(value).toLocaleDateString("fi-FI")}/>
                </AreaChart>
            </ResponsiveContainer>

        </div>
    );
}

export default Stats;