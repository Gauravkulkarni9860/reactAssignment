import React, {useState} from 'react';
import Question from './question/Question';
import Result from './Result';
import ProgressBar from './UniversalSlider/UniversalSlider';
import './QuizMain.css';
import { Button } from '@material-ui/core';

const Quiz = () => {
    const [data, setData] = useState(0);
    const [count, setCount]= useState(0);


    return(
        <div>
                <ProgressBar 
                    bgcolor={'blue'} completed={count*10}
                />
                <div >
                    <Question pass={setData}  passCount={setCount}/>
                </div>
                    <Result score={data} />
                    
                <center>
                    <Button variant="contained" color="secondary" 
                    >
                        Finish  {data}
                    </Button>
                </center>    
        </div>
    
    );

}


export default Quiz;
