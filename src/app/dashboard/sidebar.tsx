import React from 'react';
import '@/styles/Sidebar.css'; // Import the CSS file for sidebar styles

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <button className="close-btn">X</button>
        <div className="profile">
          <img className="profile-pic" src="https://www.csgodatabase.com/images/agents/Special_Agent_Ava_FBI.png" alt="Profile" />
          <h2>Rita's Game</h2>
          <p>Counter Strike</p>
          <div className="time-info">
            <span>Today: 7 pm (1h)</span>
          </div>
          <p>Levels: Beginner</p>
        </div>
        <div className="team">
          <h3>Team Members: 3</h3>
          <div className="team-member">
            <img className="avatar" src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Brave Anne" />
            <div>
              <b><p>Brave Anne</p></b>
              <p>Athena Level 4</p>
            </div>
          </div>
          <div className="team-member">
            <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvAVwHcA-N88r54qANKtT1A94rKtfwaj0qaTHuArOO2JybeSx" alt="Miri" />
            <div>
              <b><p>Miri</p></b>
              <p>Athena Level 3</p>
            </div>
          </div>
          <div className="team-member">
            <img className="avatar" src="https://cdnb.artstation.com/p/assets/covers/images/046/111/157/large/mels-nathania-mels-nathania-square-layout-718-chibi-jinx.jpg?1644329156" alt="Marie Laval" />
            <div>
              <b><p>Marie Laval</p></b>
              <p>Athena Level 4</p>
            </div>
          </div>
          <button className="add-player">Add Player</button>
        </div>
        <button className="join-call">Join Call</button>
      </div>
    </div>
  );
}

export default Sidebar;
