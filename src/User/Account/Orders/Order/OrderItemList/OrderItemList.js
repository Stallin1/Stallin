import React from 'react';
import './OrderItemList.css'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));


function OrderItemList() {

    const classes = useStyles();

    return (
        <div className='OrderItemList'>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>Order List</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <p>This component is to be set same as the list in cart</p>
          </Typography>
            </AccordionDetails>
        </Accordion>
                </div>
    )
}

export default OrderItemList;
