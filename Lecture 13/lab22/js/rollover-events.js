const evt = {
    attach: function (node, eventName, func) {
        if (node.addEventListener) {
            node.addEventListener(eventName,func);
        } else {
            node.attachEvent('on' + eventName, func);
        }
    }
};
