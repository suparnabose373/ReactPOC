import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import '../fonts/AvenirLTStd-Black.ttf';

const useStyles = makeStyles({
        customizedBtn: {
            backgroundColor: backgroundColor => (backgroundColor.disabled === true) ? '#9fa1a4' : backgroundColor.bgcolor,
            color: color => color.color,
            fontWeight: fontWeight => fontWeight.fontWeight,
            textTransform: textTransform => textTransform.textTransform,
            fontFamily: fontFamily => fontFamily.fontFamily ? fontFamily.fontFamily : ['AvenirLTStd-Black'],
            width: width => width.width,
            padding: padding => padding.padding,
            borderRadius: 0,
            height: 32,
            minWidth: 90,
            lineHeight: '12px',
            '&:hover': {
                backgroundColor: backgroundColor => (backgroundColor.disabled === true) ? '#9fa1a4 !important' : backgroundColor.hoverBgColor,
                color: color => color.hoverColor
            }
        },
});

function CustomizedButton(props) {
    const {
        id,
        buttontext,
        type,
        clicked,
        disabled
    } = props;
    const classes = useStyles(props);
    
    return(
        <Button
            className={classes.customizedBtn}
            id={id}
            onClick={clicked}
            type={type}
            disabled={disabled}
            variant="contained"
        >
            {buttontext}
        </Button>
    )
}

export default CustomizedButton;