import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';
import { CircularProgress } from '@material-ui/core';
import { withStyles  } from '@material-ui/styles';
import { Backdrop } from '@material-ui/core';

const styleSheet = () => ({
    root: {
        width: "100%",
        height: "100%",
    },
    empty: {
        display: "none",
        width: 0,
        height: 0,
    },
    relative: {
        position: "relative",
    },
    Fullscreen: {
        position: "fixed",
        backgroundColor: "@d3d3d3",
        top: 0,
        left: 0,
        zIndex: 5000
    },
    spinner: {
        position: "absolute",
        left: "calc(50% - 25px)",
        top: "calc(50% - 25px)",
    },
});

const Loader = (props) => {
    const { classes, children, loading, fullscreen } = props;
    const className = classNames(classes.root, {
        [classes.empty]: fullscreen && !loading,
        [classes.relative]: !fullscreen && loading,
        [classes.Fullscreen]: fullscreen && loading,
    });

    return (
        <Backdrop open={loading} sx={{color: "#fff", zIndex: "9999 !important"}} styele={{zIndex: 999999}}>
            <div className={className}>
                <CircularProgress className={classes.spinner} size={50} />
                    {children}
            </div>
        </Backdrop>
    );
};

Loader.PropTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    fullscreen: PropTypes.bool,
    replaceContent: PropTypes.bool
};

export default withStyles(styleSheet, {name:"Loader"})(Loader);