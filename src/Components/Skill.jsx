import React from 'react'

export default function Skill() {
    return (
        <section id='Skill'>
            <div className='Skills'>
                <h1>My Skills</h1>
                <div className="box-container">
                    <div className="box">
                        <img src="./public/html.jpeg" alt="html" />
                        <h4>html</h4>
                        
                    </div>

                    <div className="box">
                        <img src="./public/css.jpeg" alt="css" />
                        <h4>Css</h4>
                    </div>

                    <div className="box">
                        <img src="./public/javascript.jpeg" alt="JavaScript" />
                        <h4>JavaScript</h4>
                        
                    </div>
                    <div className="box">
                        <img src="./public/java.jpeg" alt="Java" />
                        <h4>Java</h4>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
