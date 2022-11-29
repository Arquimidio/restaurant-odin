import Container from "./Container";

function hasContainer(element) {
    return element.children[0].attr.class === 'container';
}

export default (obj) => {
    return (parent) => {
        obj.parent = parent;
        obj.type = 'section';
        
        if('attr' in obj) {
            obj.attr.class = 'page-content'
        } else {
            obj.attr = {
                class: 'page-content'
            }
        }

        if(!hasContainer(obj)) {
            obj.children = [Container(...obj.children)]
        }

        return obj;
    }
}