import React from 'react';
import './Header.css'; // Import your CSS file

class Header extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <div className="container">
                    <h1>Are you planning a cultural event?</h1>
                    <h2>Let Velaphi Designs bring your vision to life. Choose Event Type and Culture/Tribe below, and watch our platform work its magic!</h2>
                    <div className="dropdowns">
                        <div className="dropdown">
                            <select id="event-type-dropdown">
                                <option value="Default">Select Event Type</option>
                                <option value="Music Concert">Music Concert</option>
                                <option value="Art Exhibition">Art Exhibition</option>
                                <option value="Theater Performance">Theater Performance</option>
                            </select>
                        </div>
                        <div className="dropdown">
                            <select id="culture-tribe-dropdown">
                                <option value="Default">Select Culture / Tribe</option>
                                <option value="African">African</option>
                                <option value="Asian">Asian</option>
                                <option value="European">European</option>
                            </select>
                        </div>
                    </div>
                    <button className="button" onClick={this.designEvent}>Design</button>
                </div>
            </div>
        );
    }

    designEvent() {
        // Add your design event logic here
        console.log("Design event clicked");
    }
}

export default Header;
