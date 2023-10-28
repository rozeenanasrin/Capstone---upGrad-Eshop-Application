import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import './CreateOrder.css'; 

const steps = ['Step 1', 'Step 2', 'Step 3']; 

const CreateOrder = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
            setConfirmationMessage('Your order is confirmed.');
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="create-order">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <div>
          <p className="confirmation-message">{confirmationMessage}</p>
        </div>
      ) : (
        <div>
          <div>
            {/* Content for the current step */}
             {activeStep === 0 && <p>Step 1 content goes here.</p>}
            {activeStep === 1 && <p>Step 2 content goes here.</p>}
            {activeStep === 2 && <p>Step 3 content goes here.</p>}
          </div>

          <div className="button-container">
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Confirm Order' : 'Next'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateOrder;
