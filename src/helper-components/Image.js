export default (src, className = '') => ({ 
  type: 'div', attr: { class: className}, children: [{ type: 'img', attr: { src }}]
})