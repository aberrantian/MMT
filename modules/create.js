export const create = {
    appends: function (parent, ...children) {
        for (const child of children) {
            parent.appendChild(child);
        };
    },
    node: function (type, id, classes, textContent) {
        const newNode = document.createElement(type);

        if (id != undefined) {
            newNode.setAttribute('id', id);
        };

        if (classes != undefined) {
            newNode.setAttribute('class', classes);
        };

        if (textContent != undefined) {
            newNode.textContent = textContent;
        };

        return newNode;
    },
    div: function (id, classes, textContent) {
        return create.node('div', id, classes, textContent);
    },
    p: function (id, classes, textContent) {
        return create.node('p', id, classes, textContent);
    },
    btn: function (id, classes, textContent) {
        const newBtn = create.div(id, classes, textContent);

        if (classes != undefined) {
            newBtn.setAttribute('class', 'button ' + classes);
        } else {
            newBtn.setAttribute('class', 'button');
        }

        return newBtn;
    },
    input: function (inputType, id, classes, textContent) {
        const input = create.node('input', id, classes, textContent);
        input.type = inputType;
    },
};