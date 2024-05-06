// Templates.jsx

import React from 'react';
import './Templates.css'; // Importing CSS file for styles
import firebase from './firebase'; // Path to your firebase.js file


const Templates = () => {
    // Function to handle tab clicks
    const openTab = (event, tabName) => {
        // Get all elements with class="tabcontent" and hide them
        const tabcontents = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontents.length; i++) {
            tabcontents[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        const tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active";
    }

    return (
        <div className="templates-container">
            <div className="tab">
                <button className="tablinks" onClick={(e) => openTab(e, 'tab1')}>All Templates</button>
                <button className="tablinks" onClick={(e) => openTab(e, 'tab2')}>Posters</button>
                <button className="tablinks" onClick={(e) => openTab(e, 'tab3')}>Invitation Cards</button>
            </div>

            <div id="tab1" className="tabcontent">
                <div className="card-grid">
                    {/* Cards for Tab 1 */}
                    {/* Repeat this block for each card */}
                    <div className="card">
                        <a href="#" className="customize-link">Customize</a>
                    </div>
                
                    {/* End of card block */}
                </div>
            </div>

            <div id="tab2" className="tabcontent">
                <h3>Posters</h3>
                <div className="card-grid">
                    {/* Cards for Tab 2 */}
                    {/* Repeat this block for each card */}
                    <div className="card">
                        <a href="#" className="customize-link">Customize</a>
                    </div>
                    {/* End of card block */}
                </div>
            </div>

            <div id="tab3" className="tabcontent">
                <h3>Invitation Cards</h3>
                <div className="card-grid">
                    {/* Cards for Tab 3 */}
                    {/* Repeat this block for each card */}
                    <div className="card">
                        <a href="#" className="customize-link">Customize</a>
                    </div>
                    {/* End of card block */}
                </div>
            </div>
        </div>
    );
}

export default Templates;
