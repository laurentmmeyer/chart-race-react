import React, {useEffect, useState} from 'react';
import Bar from './Bar';

const classes = {
  barChart: {
    width: "100%",
    position: "relative",
  },
  container: {
    width: "100%",
  }
}
const BarChart = (props) => {
  const barHeight = `calc(${props.barStyle.height} + ${props.barStyle.marginTop})`;
  const nItmes = Object.keys(props.data).length;
  const maxItems = props.maxItems <= nItmes ? props.maxItems : nItmes;
  const barChartStyle = {
    height: `calc(${maxItems} * ${barHeight})`,
  };

  const sortAxis = (i, descending) => {
    if (descending === undefined) descending = true;
    let toSort = Object.keys(props.data).map(name => {
      return {
        name: name,
        val: props.data[name][i]
      };
    });
    toSort.sort((left, right) => descending ? left.val < right.val ? 1 : left.val > right.val ? -1 : 0 : left.val < right.val ? 1 : left.val < right.val ? -1 : 0);
    toSort = toSort.slice(0, maxItems);
    const maxVal = Math.max.apply(Math, toSort.map(item => item.val));
    return [toSort.reduce((ret, item, idx) => ({
      ...ret, ...{[item.name]: idx}
    }), {}), maxVal];
  }


  let [initRank, maxVal] = sortAxis(0);

  const [state, setState] = useState({
    idx: 0,
    prevRank: initRank,
    currRank: initRank,
    maxVal: maxVal,
    started: props.start
  })

  const [intervalId, setIntervalId] = useState(null)

  useEffect(()=> {
    const intervalId = setInterval(update, props.timeout + props.delay);
    setIntervalId(intervalId)
    return () => {
      clearInterval(intervalId)
    }
  },[state.started])



  const update = () => {
    if (state.idx + 1 === props.timeline.length) {
      clearInterval(state.intervalId);
      return;
    }
    setState(prevState => {
      let [currRank, maxVal] = sortAxis(prevState.idx + 1);
      let newVar = {
        idx: prevState.idx + 1,
        prevRank: prevState.currRank,
        currRank: currRank,
        maxVal: maxVal,
      };
      return newVar
    });
  }


  const getInfoFromRank = name => {
    const currIdx = state.idx;
    const prevIdx = (currIdx > 0 ? currIdx - 1 : 0);
    const value = props.data[name][currIdx];
    const hidden = (state.currRank[name] === undefined);
    const currStyle = {
      ...props.barStyle,
      marginTop: `calc(${state.currRank[name]} * ${barHeight})`,
      width: `${100 * props.data[name][currIdx] / state.maxVal}%`,
      backgroundColor: props.colors[name],
    };
    const prevStyle = {
      ...props.barStyle,
      marginTop: `calc(${state.prevRank[name]} * ${barHeight})`,
      width: `${100 * props.data[name][prevIdx] / state.maxVal}%`,
      backgroundColor: props.colors[name],
    };
    return [value, hidden, currStyle, prevStyle];
  }

  return (
    <div style={classes.container}>
      <div style={props.timelineStyle}>
        {props.timeline[state.idx]}
      </div>
      <div style={{...classes.barChart, ...barChartStyle}}>
        {
          Object.keys(props.data).map(name => {
            const [value, hidden, currStyle, prevStyle] = getInfoFromRank(name);
            if (hidden) return (<div key={name}></div>);
            return (
              <Bar
                name={name}
                value={value}
                label={props.labels[name]}
                currStyle={currStyle}
                prevStyle={prevStyle}
                key={name}
                timeout={props.timeout}
                textBoxStyle={props.textBoxStyle}
                width={props.width}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default BarChart;
