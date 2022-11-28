import Container from "./Container";

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

        obj.children = [Container(...obj.children)]
        
        return obj;
    }
}