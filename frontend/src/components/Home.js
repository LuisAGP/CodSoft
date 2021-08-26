import React from 'react'
import logo from '../../static/images/icon.svg';
import iconTool from '../../static/images/tool-icon.svg';
import '../../static/css/home.css';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <main className="home">
                <div className="grid-4-2 mw-80">

                    <div className="main pd-1">
                        <h1 className="phrase">TOOLS FOR HTML, JAVASCRIPT AND CSS</h1>
                        <p>
                            This is a modern way to design and style your components while 
                            maintaining your creativity and seeing changes instantly. 
                        </p>
                    </div>

                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>

                </div>
            </main>


            <div className="separator">See all our tools available below!</div>


            <section className="tools">

                <div className="tool-content">
                    <img src={iconTool} alt="Tool" />

                    <div className="description">
                        <h3 className="toolname">Modal Maker</h3>

                        <p>
                            With this tool you can generate a modal and customize it in your own way, 
                            adding labels and inputs according to your needs.
                        </p> 
                    </div>

                    <div className="center">
                        <Link to="/modalmaker" className="btn btn-primary">Learn more</Link>
                    </div>
                </div>


                <div className="tool-content">
                    <img src={iconTool} alt="Tool" />

                    <div className="description">
                        <h3 className="toolname">Box-Shadow Calculator</h3>

                        <p>
                            With this tool you can customize the shadow aspect for your 
                            components, in real time you can change que intensity, position 
                            and color of the shadow.
                        </p> 
                    </div>

                    <div className="center">
                        <Link to="#" className="btn btn-primary">Learn more</Link>
                    </div>
                </div>


                <div className="tool-content">
                    <img src={iconTool} alt="Tool" />

                    <div className="description">
                        <h3 className="toolname">Button Generator</h3>

                        <p>
                            Customize buttons for your project style them with changes in realtime
                        </p> 
                    </div>

                    <div className="center">
                        <Link to="#" className="btn btn-primary">Learn more</Link>
                    </div>
                </div>


                <div className="tool-content">
                    <img src={iconTool} alt="Tool" />

                    <div className="description">
                        <h3 className="toolname">General Fetch API function</h3>

                        <p>
                            Small tutorial for make a general function for reuse the 
                            Fetch API(Ajax) and do requests easier
                        </p> 
                    </div>

                    <div className="center">
                        <Link to="#" className="btn btn-primary">Learn more</Link>
                    </div>
                </div>


                <div className="tool-content">
                    <img src={iconTool} alt="Tool" />

                    <div className="description">
                        <h3 className="toolname">Image Reziser</h3>

                        <p>
                            Do you need an image smaller or larger and you don't want to lose the proportion?
                            <br />
                            Try this tool. 
                        </p> 
                    </div>

                    <div className="center">
                        <Link to="#" className="btn btn-primary">Learn more</Link>
                    </div>
                </div>


                <div className="tool-content">
                    <img src={iconTool} alt="Tool" />

                    <div className="description">
                        <h3 className="toolname">Table Generation</h3>

                        <p>
                            We built for you a tool for receive data in a json file 
                            and make for you a table that you could use in every of your projects.
                        </p> 
                    </div>

                    <div className="center">
                        <Link to="#" className="btn btn-primary">Learn more</Link>
                    </div>
                </div>


            </section>
            
        </div>
    )
}

export default Home
