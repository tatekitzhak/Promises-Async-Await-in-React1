import React from 'react';
import TableFileFormats from '../tableFileFormats';

function MessageCompleteContactForm(){
    let greeting= 'Thank you for contacting us.';
    let message = `You are very important to us, all information received will always remain confidential. We will contact you as soon as we review your message. `;

    return(
        <div>
            <h1>
                {greeting}
            </h1>
            <p>{message}</p>
            <p>
            Thank you for getting in touch! 

We appreciate you contacting us/ [Your Company]. One of our colleagues will get back in touch with you soon!Have a great day!
            </p>
            <TableFileFormats/>
            
        </div>
        
        );
}
export default MessageCompleteContactForm;
