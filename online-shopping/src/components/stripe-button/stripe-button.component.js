import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const  StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_QNge9MUxIbWRVRfAdU8xcL3Z00waq5Jjwl'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
            label = 'Pay Now'
            name = "CRWN CLothing Ltd"
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
  
}

export default StripeCheckoutButton