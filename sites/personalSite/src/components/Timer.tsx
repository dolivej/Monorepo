import React, {useEffect} from "react";

export interface TimerProps {
    runFunction : any
    loggerTemp : any
}

const Timer = (props : TimerProps) => {
    useEffect(() => {
        //console.log('timer started')
        props.runFunction(props.loggerTemp)
    }, []);

  return (
    <div></div>
  );
}


export default Timer;