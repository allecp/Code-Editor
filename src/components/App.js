
import Editor from './Editor'
import React, {useState,useEffect} from 'react'


function App() {
    
    const [html,changeHtml] = useState('')
    const [css,changeCss] = useState('')
    const [js,changeJs] = useState('')

    const displaySrc = 
        `
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
            </html>
        `

    return (

      <>

        <div className = "editor-container">
            <Editor title = "Html" language = "xml" handleChange = {changeHtml} value = {html}/>
            <Editor  title = 'Css' language = "css" handleChange = {changeCss} value = {css}/>
            <Editor  title = 'Javascript' language = "javascript" handleChange = {changeJs} value = {js}/>

        </div>
        <div className = "display-panel">
            <iframe srcDoc = {displaySrc}
                title = "display"
                width = "100%"
                height = "100%"
                frameBorder = "0"
            />
        </div>
     
      </>

    )
}

export default App
