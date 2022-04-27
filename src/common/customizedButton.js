// import React from 'react';
// import { makeStyles, withStyles, Theme } from '@mui/styles';
// import Button from '@material-ui/core/Button';
// import '../fonts/AvenirLTStd-Black.ttf';

// const useStyles = makeStyles({
//         root: {
//                 backgroundColor: backgroundColor => (backgroundColor.disabled === true) ? '#9fa1a4' : backgroundColor.bgcolor,
//                 color: color => color.color,
//                 fontWeight: fontWeight => fontWeight.fontWeight,
//                 textTransform: textTransform => textTransform.textTransform,
//                 fontFamily: fontFamily => fontFamily.fontFamily ? fontFamily.fontFamily : ['AvenirLTStd-Black'],
//                 width: width => width.width,
//                 padding: padding => padding.padding,
//                 borderRadius: 0,
//                 height: 32,
//                 minWidth: 90,
//                 lineHeight: '12px',
//                 '&:hover': {
//                     backgroundColor: backgroundColor => (backgroundColor.disabled === true) ? '#9fa1a4 !important' : backgroundColor.hoverBgColor,
//                     color: color => color.hoverColor
//                 }
//             },
// });

// export default function customizedButton(props) {
//     const classes = useStyles(props);
//     const {
//         id,
//         buttonText,
//         type,
//         clicked,
//         disabled
//     } = props;

//     return(
//         <Button
//             id={id}
//             onClick={clicked}
//             type={type}
//             disabled={disabled}
//             className={classes.root}
//         >
//             {buttonText}
//         </Button>
//     )
// }