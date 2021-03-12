import React from "react";
import styles from "./FAQ.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  Accordian: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "2%",
    borderRadius: "5px",
  },
  AccordianContent: {
    color: "grey",
    padding: 25,
    textAlign: "justify",
  },
  View: {
    color: "#1CABA2",
    backgroundColor: "#fff",
    border: "1px solid lightgray !important",
    width: 150,
    marginTop: 50,
  },
}));
function FAQ() {
  const classes = useStyles();
  return (
    <div className={styles.FAQ}>
      <h2>FAQs</h2>
      <div className={styles.FAQ__List}>
        <Accordion className={classes.Accordian}>
          <AccordionSummary
            expandIcon={<AddIcon style={{ color: "#1CABA2" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <h5> What are my liabilities in case of damage/ accident?</h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.AccordianContent}>
              Your car will be covered by comprehensive insurance, to take care
              of damage cases. On every case of damage, your liability would be
              limited to the difference between the costs incurred to repair the
              damage and the proceeds from insurance claim with maximum
              liability limited to INR 10,000 In situations of irresponsible or
              unsafe or negligent usage, there could be discretionary exceptions
              to this policy, whereby you could be liable for all damages
              irrespective of whether or not we are able to claim insurance in
              such cases.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.Accordian}>
          <AccordionSummary
            expandIcon={<AddIcon style={{ color: "#1CABA2" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <h5>
                Can I end my subscription early, or choose to keep the car
                longer?
              </h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.AccordianContent}>
              Yes, you can extend the car anytime at normal prices or chose to
              return the car anytime by just paying the fee difference.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.Accordian}>
          <AccordionSummary
            expandIcon={<AddIcon style={{ color: "#1CABA2" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <h5>
                {" "}
                Are there any restrictions on what can I use the car for?
              </h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.AccordianContent}>
              You can use the car for pretty much all the normal requirements.
              Abnormal usage (e.g., speed racing, towing/pushing/propelling,
              transportation of goods or people on commercial basis,
              transportation of large/heavy/hazardous items) is not allowed
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.Accordian}>
          <AccordionSummary
            expandIcon={<AddIcon style={{ color: "#1CABA2" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <h5> What are the benefits of Subscriptions?</h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.AccordianContent}>
              No upfront payments such as down payment or road tax, flexibility
              of subscribing for min. 1 month and extending or returning
              anytime, insurance and maintenance included in monthly fees, 24X7
              road side assistance and hassle free service & maintenance are
              just a few benefits of Revv Subscriptions.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.Accordian}>
          <AccordionSummary
            expandIcon={<AddIcon style={{ color: "#1CABA2" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <h5>
                {" "}
                What will be the car registration type and whose name will it be
                registered in?
              </h5>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.AccordianContent}>
              The car will be registered as a premium commercial vehicle (black
              plate) with an All India permit and can be driven anywhere within
              India without any concerns. It will be registered in the name of
              Revv (PrimeMover Mobility Technologies Pvt. Ltd.) or its supply
              partners.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Button className={classes.View}>View All</Button>
      </div>
    </div>
  );
}

export default FAQ;
