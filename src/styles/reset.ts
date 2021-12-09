import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    [tabindex="-1"]:focus:not(:focus-visible) {
    outline: 0 !important;
    }

    hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
    }

    hr:not([size]) {
    height: 1px;
    }
    abbr[title],
    abbr[data-bs-original-title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
    }

    address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
    }

    ol,
    ul {
    padding-left: 2rem;
    }

    ol,
    ul,
    dl {
    margin-top: 0;
    margin-bottom: 1rem;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
    margin-bottom: 0;
    }

    dt {
    font-weight: 700;
    }

    dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
    }

    blockquote {
    margin: 0 0 1rem;
    }

    b,
    strong {
    font-weight: 700;
    }

    small {
    font-size: 0.875em;
    }

    mark {
    padding: 0.2em;
    background-color: #fcf8e3;
    }

    sub,
    sup {
    position: relative;
    font-size: 0.75em;
    line-height: 0;
    vertical-align: baseline;
    }

    sub {
    bottom: -0.25em;
    }

    sup {
    top: -0.5em;
    }

    a {
    color: $green;
    }

    a:hover {
    color: initial;
    }

    pre,
    code,
    kbd,
    samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 1em;
    direction: ltr /* rtl:ignore */;
    unicode-bidi: bidi-override;
    }

    pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: 0.875em;
    }
    pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
    }

    code {
    font-size: 0.875em;
    color: #d63384;
    word-wrap: break-word;
    }
    a > code {
    color: inherit;
    }

    kbd {
    padding: 0.2rem 0.4rem;
    font-size: 0.875em;
    color: #fff;
    background-color: $gray-900;
    border-radius: 0.2rem;
    }
    kbd kbd {
    padding: 0;
    font-size: 1em;
    font-weight: 700;
    }

    figure {
    margin: 0 0 1rem;
    }

    img,
    svg {
    vertical-align: middle;
    height: auto;
    }

    table {
    caption-side: bottom;
    border-collapse: collapse;
    }

    caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
    text-align: left;
    }

    th {
    text-align: inherit;
    text-align: -webkit-match-parent;
    }

    thead,
    tbody,
    tfoot,
    tr,
    td,
    th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    }

    label {
    display: inline-block;
    }

    button {
    border-radius: 0;
    }

    button:focus:not(:focus-visible) {
    outline: 0;
    }

    input,
    button,
    select,
    optgroup,
    textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    }

    button,
    select {
    text-transform: none;
    }

    [role="button"] {
    cursor: pointer;
    }

    select {
    word-wrap: normal;
    }

    [list]::-webkit-calendar-picker-indicator {
    display: none;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
    -webkit-appearance: button;
    }
    button:not(:disabled),
    [type="button"]:not(:disabled),
    [type="reset"]:not(:disabled),
    [type="submit"]:not(:disabled) {
    cursor: pointer;
    }

    ::-moz-focus-inner {
    padding: 0;
    border-style: none;
    }

    textarea {
    resize: vertical;
    }

    fieldset {
    position: relative;
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
    }

    legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit;
    }
    @media (min-width: 1200px) {
    legend {
        font-size: 1.5rem;
    }
    }
    legend + * {
    clear: left;
    }

    ::-webkit-datetime-edit-fields-wrapper,
    ::-webkit-datetime-edit-text,
    ::-webkit-datetime-edit-minute,
    ::-webkit-datetime-edit-hour-field,
    ::-webkit-datetime-edit-day-field,
    ::-webkit-datetime-edit-month-field,
    ::-webkit-datetime-edit-year-field {
    padding: 0;
    }

    ::-webkit-inner-spin-button {
    height: auto;
    }

    [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
    }

    /* rtl:raw:
    [type='tel'],
    [type='url'],
    [type='email'],
    [type='number'] {
    direction: ltr;
    }
    */
    ::-webkit-search-decoration {
    -webkit-appearance: none;
    }

    ::-webkit-color-swatch-wrapper {
    padding: 0;
    }

    ::file-selector-button {
    font: inherit;
    }

    ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
    }

    output {
    display: inline-block;
    }

    iframe {
    border: 0;
    }

    summary {
    display: list-item;
    cursor: pointer;
    }

    progress {
    vertical-align: baseline;
    }

    [hidden] {
    display: none !important;
    }

    ::selection {
    background-color: var(--green);
    color: var(--white);
    }
`