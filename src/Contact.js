import PageWrapper from "./helper-components/PageWrapper";
import Wrapper from "./helper-components/Wrapper";
import Input from "./helper-components/Input";
import Button from "./helper-components/Button";

function ContactText() {
    return  Wrapper(
        'col',
        {
            type: 'h1',
            text: 'Contact us'
        },
        {
            type: 'p',
            text: 'Tel: (41) 9999-9999'
        },
        {
            type: 'p',
            text: 'Mail: contact@vegtopia.com'
        },
    )
}

function ContactForm() {
    return {
        type: 'form',
        attr: {
            class: 'contact-form col'
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
            ContactForm()
        )
        
    ]
})