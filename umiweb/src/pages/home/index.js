import React from 'react';
import styles from './index.css';
export default function () {
    return (React.createElement("div", { className: styles.normal },
        React.createElement("div", { className: styles.welcome }),
        React.createElement("ul", { className: styles.list },
            React.createElement("li", null,
                "To get started, edit ",
                React.createElement("code", null, "src/pages/index.js"),
                " and save to reload."),
            React.createElement("li", null,
                React.createElement("a", { href: "https://umijs.org/guide/getting-started.html" }, "Getting Started")))));
}
//# sourceMappingURL=index.js.map