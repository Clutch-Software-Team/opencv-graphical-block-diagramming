const inputTypes = [
    window.HTMLInputElement,
    window.HTMLSelectElement,
    window.HTMLTextAreaElement,
];

const setSelectValue = (node, value = '') => {

    if (inputTypes.indexOf(node.__proto__.constructor) > -1) {

        const setValue = Object.getOwnPropertyDescriptor(node.__proto__, 'value').set;
        const event = new Event('change', { bubbles: true });

        setValue.call(node, value);
        node.dispatchEvent(event);

    }

};

export default setSelectValue;