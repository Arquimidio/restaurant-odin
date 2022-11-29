import PageWrapper from "./helper-components/PageWrapper";
import Wrapper from "./helper-components/Wrapper";

export default PageWrapper({
    children: [
        Wrapper(
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
        ),
        {
            type: 'form',
            children: [
                {
                    type: 'input',
                    attr: {
                        placeholder: 'fuck yoyoyoyu'
                    }
                }
            ]
        }  
    ]
})