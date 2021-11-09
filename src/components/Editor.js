import React from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/lint/javascript-lint';
import 'codemirror/addon/lint/lint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'

import { JSHINT } from 'jshint';
import {Controlled as ControlledEditor} from 'react-codemirror2'
window.JSHINT = JSHINT


function Editor(props) {
    
    return (
        <div className = "editor">
            <div className = "editor-header">{props.title}</div>

            <ControlledEditor
                value = {props.value}
                onBeforeChange = {(editor,data,value) => props.handleChange(value)}
                options = {{
                    mode: props.language,
                    lineWrapping: true,
                    lint: true,
                    theme: 'dracula',
                    lineNumbers: true
                }}
            />
        </div>

    )

}

export default Editor
