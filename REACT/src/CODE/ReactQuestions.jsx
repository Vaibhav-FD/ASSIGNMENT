import React from 'react'


function ReactQuestions() {

  const data = [
    {
      id : 1,
      name : 'React'
    },
    {
      id : 2,
      name : 'Vue'
    },
    {
      id : 3,
      name : 'Svelete'
    },
    {
      id : 4,
      name : 'Solid'
    },
  ] 

  const listView = data.map( (obj) => <li key={obj.id}>{obj.name}</li> )


  return (


    <>

      <h1>--- React Module --- React Questions ---</h1>


      <details>
        <summary>What Is React Js ?</summary>
        <p>React Is An Open Source JavaScript Library Developed By Facebook , Which Is Primiarly Used To Develop User Interface Specially For A Single Page Application.</p>
      </details>


      <details>
        <summary>What Is NPM In React JS ?</summary>
        <p>NPM Stands For Node Package Manager Which Is Package Manager For NODE JS Which Is Basically The Run Time Of Java Script. NPM Is A Command Line Utility Which Allows Us To Install Packages And Modules Of Java Script.</p>
      </details>


      <details>
        <summary>What Is Role Of NPM In React JS ?</summary>
        <p>NPM Is Used To Install Packages Of React Like :<br /> <br />
          npm create react-app <br />
          npm create vite@latest <br />
          npm install react react-dom <br />
          npm install redux react-redux.</p>
      </details>


      <details>
        <summary>What Is CLI Command In React JS ?</summary>
        <p>The CLI Command To Create React App Is npm create react-app OR npm create vite@latest.</p>
      </details>


      <details>
        <summary>What Is Components In React JS ?</summary>
        <p>A Component Is Piece Of UI Which Is Basically A Java Script Function That Returns A Special Markup Called JSX.</p>
      </details>


      <details>
        <summary>What Is Header And Content Components In React JS ?</summary>
        <p>The Header Component Usually Represents The Top Section Of A Webpage Or Application. It Often Includes Elements Such As : <br /> <br />
        Navigation Links ,  <br />
        Branding ,  <br />
        User Info

        <br /><br /><br />
        The Content Component Generally Represents The Main Area Of The Application Where The Primary Content Is Displayed. This Could Be : <br /><br />

        Text <br />
        Media <br />
        Dynamic Data <br />
        </p>
      </details>


      <details>
        <summary>How To Install React JS On Windows , Linux Operating System ? How To Install NPM And How To Check Version Of NPM ?</summary>

        <p>To Install React JS First We Need NPM And To Use NPN We Need NODE JS So First Of All Install NODE JS Now NPM Is Already Available In NODE JS Now To Check The Version Of NPM run npm -v And For Creating Creating React App Run npm create vite@latest file-name And Select React And JavaScript OR TypeScript And Run Those Command Which Is Needed For Vite .</p>
       
      </details>


      <details>
        <summary>How To Check Version Of React JS ?</summary>

        <p>Open package.json And Go To dependencies And See react You Can Find The Version Of React OR You Can Run Command npm list react.</p>
       
      </details>


      <details>
        <summary>How To Change In Components Of React JS ?</summary>

        <p>To Change Components Of React JS Locate The Component And Remove OR Update The JSX Content You Want To Change.</p>
      </details>


      <details>
        <summary>How To Create A List View In React JS ?</summary>

        <ul>
          {listView}
        </ul>
      </details>


      <hr />
    </>
  )
}

export default ReactQuestions