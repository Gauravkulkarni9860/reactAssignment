import React, {useState} from 'react';
import './Question.css';
import QuestionAPI from './UserData';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';



const Question = (props) => {
    const classes = useStyles();
    const [ value, setValue] = useState(0);
    
    const handleChange = (e, newValue) => {
      setValue(newValue)
      props.pass(prev=>prev + newValue)
      props.passCount(count=>count+1)
        
    }
    return (
        <div>

            {QuestionAPI.map((user, index) => (
                        <div key={index} >
                            <div className="Content">
                                <p>{user.question}</p>
                            </div>
                            
                            
                            <div className="answer">
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                    className="slider-styles"
                                    >
                                    <Typography variant="body1" className={classes.label}>
                                        Never   
                                    </Typography>
                                    <Typography variant="body1" className={classes.label}>
                                        Always {value}
                                    </Typography>
                                </Grid>
                                
                                
                                <Slider
                                defaultValue={0}
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider-always"
                                step={1}
                                marks={marks}
                                max={10}
                                onChange = {handleChange}
                                
                                /> 
                                
                            </div>
                        </div>
                    ))}

             
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      
      flexGrow: '1',

    },
    margin: {
      height: theme.spacing(3),
    },
    label: {
      fontSize: '10px'
    },
  }));
  
  const marks = [
    {
      value : '0',
      label: '0',
    },
    {
      value : '1',
      label: '1',
      
    },
    {
      value : '2',
      label: '2',
    },
    {
      value : '3',
      label: '3',
    },
    {
      value : '4',
      label: '4',
    },
    {
      value : '5',
      label: '5',
    },
    {
      value : '6',
      label: '6',
    },
    {
      value : '7',
      label: '7',
    },
    {
      value : '8',
      label: '8',
    },
    {
      value : '9',
      label: '9',
    },
    {
      value : '10',
      label: '10',
    },
  ];
  
  function valuetext(value) {
    return `${value}`;
  }
  
export default Question;