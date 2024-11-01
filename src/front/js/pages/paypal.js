import React, {useContext, useState} from 'react';
import { Context } from '../store/appContext';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

export const Payment = () => {
  const [paymentID, setPaymentID] = useState(null);
  const [payerID, setPayerID] = useState(null);
  
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  
  const [currency, setCurrency] = useState(options.currency);

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    }

    const onCreateOrder = (data,actions) => {
      return actions.order.create({
          purchase_units: [
              {
                  amount: {
                      value: "8.99",
                  },
              },
          ],
      });
  }

  const onApproveOrder = (data,actions) => {
  return actions.order.capture().then((details) => {
  const name = details.payer.name.given_name;
    alert(`Transaction completed by ${name}`);
  });
}

  const createPayment = async () => {
      const response = await fetch(process.env.BACKEND_URL + "/api/create-payment", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              intent: 'sale',
              payer: {
                  payment_method: 'paypal'
              },
              transactions: [{
                  amount: {
                      total: '1.00',
                      currency: 'USD'
                  }
                  ,
                  description: 'This is the payment description.'
              }],
              // redirect_urls: {
              //     return_url: 'http://localhost:3000/success',
              //     cancel_url: 'http://localhost:3000/cancel'
              // }
          })
      });
      const data = await response.json();
      console.log(data)
      // window.location.href = data.links[1].href;
  };

  const executePayment = async () => {
      const response = await fetch(process.env.BACKEND_URL + "api/execute-payment", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              paymentID,
              payerID
          })
      });
      const data = await response.json();
      console.log(data);
  };

  return (
      <div className="checkout">
          {isPending ? <p>LOADING...</p> : 
      (
    <>
          <select value={currency} onChange={onCurrencyChange}>
            <option value="USD">💵 USD</option>
            <option value="EUR">💶 Euro</option>
          </select>
          <PayPalButtons 
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onApprove={(data, actions) => onApproveOrder(data, actions)}
          />
          </>
         )}
    </div>
 
  );
};


