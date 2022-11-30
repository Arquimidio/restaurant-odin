import PageWrapper from "./helper-components/PageWrapper";
import Wrapper from "./helper-components/Wrapper";
import Input from "./helper-components/Input";
import Button from "./helper-components/Button";
import Map from "./helper-components/Map";

function ContactText() {
    return  Wrapper(
        'contact-text col',
        {
            type: 'h1',
            text: 'Contact us'
        },
        {
            text: 'Tel: (41) 9999-9999'
        },
        {
            text: 'Mail: contact@vegtopia.com'
        },
        {
            text: 'Address: 833 Lexington Ave, New York, NY 10065, Estados Unidos'
        }
    )
}

function ContactForm() {
    return {
        type: 'form',
        attr: {
            class: 'contact-form '
        },
        children: [
            Input('John Snow', 'Name'),
            Input('(41) 9999-9999', 'Telephone', 'tel'),
            Input('myemail@gmail.com', 'Email', 'mail'),
            Button('Submit', 'btn-primary')
        ]
    }  
}

export default PageWrapper({
    children: [
        Wrapper(
            'contact',
            ContactText(),
            ContactForm(),
            Map()
        )
        
    ]
})