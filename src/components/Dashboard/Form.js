import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import DateTimePicker from 'react-datetime-picker';
import { makeStyles } from '@material-ui/styles';
import CustomizedButton from '../../common/CustomizedButton';
import './Dashboard.css';

const gender = [
  { title: "Male" },
  { title: "Female" },
  { title: "Others" },
];

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
  },
});

function Form() {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());
  const formData = {
    formName: "Jane Doe",
    formGender: "Female",
    formDate: new Date()
  };
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: formData
  });

  function onSubmit(data) {
      console.log(data,'Form Data');
  }

  return (
    <div className="form-box" style={{border: 'solid 1px #282829'}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid 
          container spacing={1} 
          direction="row"
        >
          <Grid item xs={6} className={classes.label}> Name:</Grid>
          <Grid item xs={6} className="labelValue">
            <Controller
              name="formName"
              control={control}
              render={({field: {onChange, value}}) => (
                <TextField 
                  id="textfield"
                  defaultValue={formData?.formName}
                  type="text"
                  placeholder='Enter name'
                  onChange={(event) => {
                    setValue("formName",event.target.value);
                    // setFormData({
                    //   ...formData,
                    //   formName: event.target.value,
                    // });
                  }}
                  name="nameField"
                  // error={errorMessage?.errFormName}
                  variant="outlined"
                  inputProps={{maxLength:60,
                    // "data-testid": "formName"
                  }}
                  // style={{width: "100%", maxHeight: "35px"}}
                  className="spclInput"
                />
              )}>
            </Controller>
          </Grid>
          <Grid item xs={6} className={classes.label}> Gender:</Grid>
          <Grid item xs={6} className="labelValue">
              <Controller
              name="formGender"
              control={control}
              render={({field: {onInputChange, value}}) => (
                <Autocomplete 
                  id="gender-autocomplete"
                  defaultValue={formData?.formGender}
                  options={gender?.map((eachValue) => eachValue.title)}
                  autoHighlight
                  aria-labelledby="genderTag"
                  onInputChange={(event, options) => {
                    setValue("formGender",options);
                    // setFormData({ ...formData, formGender: options });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      id="textfield"
                      placeholder="Select gender"
                      variant="outlined"
                    />
                  )}
                  ListboxProps={{
                    style: {
                      fontSize: "12px",
                      width: "100%",
                    },
                  }}
                />
              )}>
            // </Controller>
          </Grid>
          <Grid item xs={6} className={classes.label}> Date of Joining:</Grid>
          <Grid item xs={6} className="labelValue">
            <DateTimePicker 
              name="formDate"
              value={formData?.formDate}
              disableClock
              onChange={onChange}
              format="dd/MM/yyyy hh:mm:ss a"
            />
          </Grid>
          <Grid item xs={12}>
            <CustomizedButton 
              buttontext="Submit" 
              fontWeight="900" 
              bgcolor="#fff" 
              border="solid 1px var(--dark-grey)"
              padding= "5px 10px 5px 10px"
              margin = "1px 2px 1px 2px"
              type="submit"
            />
            <CustomizedButton 
              buttontext="Reset" 
              fontWeight="900" 
              bgcolor="#fff"
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