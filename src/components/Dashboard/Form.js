import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, TextField } from '@material-ui/core';
import DateTimePicker from 'react-datetime-picker/dist/DateTimePicker';
import { makeStyles } from '@material-ui/styles';
// import customizedButton from '../../common/customizedButton';
import MuiButton from '@material-ui/core/Button';
import './Dashboard.css';

const useStyles = makeStyles({
  label: {
    textAlign: "right"
  },
  formButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
});

function Form(props) {
  const { ref } = props; 
  const classes = useStyles();
  const { handleSubmit, setValue } = useForm();
  const [data, setData] = useState("");
  const [dateValue, setDateValue] = useState(new Date());

  function onSubmit(data) {
      console.log(data);
  }

  return (
    <div className="form-box" style={{border: 'solid 1px #282829'}}>
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Grid 
          container spacing={1} 
          direction="row"
        >
          <Grid item xs={6} className={classes.label}> Name:</Grid>
          <Grid item xs={6} className="labelValue">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </Grid>
          <Grid item xs={6} className={classes.label}> Gender:</Grid>
          <Grid item xs={6} className="labelValue">
            <select>
              <option value="">Select...</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
            </select>
          </Grid>
          <Grid item xs={6} className={classes.label}> Date of Joining:</Grid>
          <Grid item xs={6} className="labelValue">
            <DateTimePicker
              onChange={setDateValue}
              value={dateValue}
            />
          </Grid>
          <Grid item xs={12}>
            <MuiButton 
              buttonText="Submit" 
              fontWeight="900" 
              bgColor="#fff" 
              border="solid 1px var(--dark-grey)"
              padding= "5px 10px 5px 10px"
              margin = "1px 2px 1px 2px"
              type="submit"
            />
          </Grid>
          <Grid item xs={12}>
          <MuiButton 
              buttonText="Reset" 
              fontWeight="900" 
              bgColor="#fff"
              border="solid 1px var(--dark-grey)"
              padding= "5px 10px 5px 10px"
              margin = "1px 2px 1px 2px"
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Form;