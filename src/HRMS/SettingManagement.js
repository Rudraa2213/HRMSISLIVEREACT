import React, { useState } from 'react';

const SettingManagement = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (panel) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        {/* Title Section */}
        <div className="TitleBox">
          <h4 className="Title">Settings</h4>
        </div>

        {/* Notification Settings Section */}
        <div className="setting-notification">
          <aside>
            <h4>Notifications</h4>
            <label className="Switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </aside>
        </div>
        <br />
        <div className="setting-notification">
          <a href="change-password.html">Change Password</a>
        </div>

        {/* Accordion Section */}
        <div className="StaticBoxArea">
          <div className="panel-group" id="accordion">
            {/* Notifications Panel */}
            <div className="panel">
              <div
                className={`panel-heading ${openPanel === 'collapse2' ? '' : 'collapsed'}`}
                onClick={() => togglePanel('collapse2')}
                aria-expanded={openPanel === 'collapse2'}
              >
                <h4>Notifications</h4>
              </div>
              <div id="collapse2" className={`panel-collapse ${openPanel === 'collapse2' ? 'collapse show' : 'collapse'}`}>
                <div className="panel-body">
                  <p>Notification settings content...</p>
                </div>
              </div>
            </div>

            {/* Change Password Panel */}
            <div className="panel">
              <div
                className={`panel-heading ${openPanel === 'collapse3' ? '' : 'collapsed'}`}
                onClick={() => togglePanel('collapse3')}
                aria-expanded={openPanel === 'collapse3'}
              >
                <h4><a href="/">Change Password</a></h4>
              </div>
              <div id="collapse3" className={`panel-collapse ${openPanel === 'collapse3' ? 'collapse show' : 'collapse'}`}>
                <div className="panel-body">
                  <p>Change password content...</p>
                </div>
              </div>
            </div>

            {/* About Us Panel */}
            <div className="panel">
              <div
                className={`panel-heading ${openPanel === 'collapse5' ? '' : 'collapsed'}`}
                onClick={() => togglePanel('collapse5')}
                aria-expanded={openPanel === 'collapse5'}
              >
                <h4>About Us</h4>
              </div>
              <div id="collapse5" className={`panel-collapse ${openPanel === 'collapse5' ? 'collapse show' : 'collapse'}`}>
                <div className="panel-body">
                  <div className="TitleBox">
                    <h3>About Us</h3>
                    <a href="editPolicy.html" className="TitleLink">Edit</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
              </div>
            </div>

            {/* Terms & Conditions Panel */}
            <div className="panel">
              <div
                className={`panel-heading ${openPanel === 'collapse6' ? '' : 'collapsed'}`}
                onClick={() => togglePanel('collapse6')}
                aria-expanded={openPanel === 'collapse6'}
              >
                <h4>Terms & Conditions</h4>
              </div>
              <div id="collapse6" className={`panel-collapse ${openPanel === 'collapse6' ? 'collapse show' : 'collapse'}`}>
                <div className="panel-body">
                  <div className="TitleBox">
                    <h3>Terms & Conditions</h3>
                    <a href="editPolicy.html" className="TitleLink">Edit</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
              </div>
            </div>

            {/* Privacy Policy Panel */}
            <div className="panel">
              <div
                className={`panel-heading ${openPanel === 'collapse7' ? '' : 'collapsed'}`}
                onClick={() => togglePanel('collapse7')}
                aria-expanded={openPanel === 'collapse7'}
              >
                <h4>Privacy Policy</h4>
              </div>
              <div id="collapse7" className={`panel-collapse ${openPanel === 'collapse7' ? 'collapse show' : 'collapse'}`}>
                <div className="panel-body">
                  <div className="TitleBox">
                    <h3>Privacy Policy</h3>
                    <a href="editPolicy.html" className="TitleLink">Edit</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingManagement;
