import Wrapper from "./Wrapper";

export default (content = 'Click me', classes = '', icon = '') => {
    const button = {
        type: 'button',
        attr: {
            class: 'btn ' + classes
        },
        children: [
            {
                type: 'span',
                text: content
            }
        ]
    }

    if(icon) {
        button.children.unshift(
            Wrapper(
                'icon-wrapper',
                {
                    type: 'img',
                    attr: {
                        class: 'icon',
                        src: icon
                    }
                }
            )
        )
    }

    return button;
}
