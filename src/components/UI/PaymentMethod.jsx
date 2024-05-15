import React from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
      {/* <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Paypal
        </label>

        <img src={paypal} alt="" />
      </div> */}
      <div class="payment-inside">
        <input type="radio" id="Direct_Bank" name="contact" value="direct-bank-transfer" />
        <label for="contactChoice1">Direct Bank transfer</label>
      </div>
      <div class="payment-inside">
        <input type="radio" id="Cash" name="contact" value="cash" />
        <label for="contactChoice2">Cash</label>
      </div>
      <div class="payment-inside">
        <input type="radio" id="Master_Card" name="contact" value="master-card" />
        <label for="contactChoice3">Master Card</label>
        <img src={masterCard} alt="" />
      </div>
      <div class="payment-inside">
        <input type="radio" id="UPI" name="contact" value="upi" />
        <label for="contactChoice3">UPI</label>
      </div>
      <div className="payment text-end mt-5">
        <button>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
