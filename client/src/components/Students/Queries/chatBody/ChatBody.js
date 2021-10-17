import React, { Component } from "react";
import "./chatBody.css";
import Sidebar from "../../sidebar";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";


export default class ChatBody extends Component {
  render() {
    return (
      
      <div className="main__chatbody">
         <Sidebar/>
        <ChatList />
        <ChatContent />
        
      </div>
      
    );
  }
}
