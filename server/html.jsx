import {html, oneLineTrim} from "common-tags";
import serialize from "serialize-javascript";

export const Html = ({content, title, state = {}, helmet}) => oneLineTrim(html`
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()} lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta charSet='utf-8'/>
        <title> ${title && !helmet.title.toString()}</title>
        ${helmet.title.toString() && !title}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}

    </head>
    <body ${helmet.bodyAttributes.toString()}>
    <div data-id="app" id="root">${content}</div>
    <script type="text/javascript">
        window.__INITIAL_STATE__ = ${serialize(state, {isJSON: true, unsafe: false})}
    </script>
    <script src="assets/js/main.js" async></script>
<!--    <script src="assets/js/vendor.js" async></script>-->

    </body>
    </html>
`);


