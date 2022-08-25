import React from "react";

class ChatBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageData: [],
            info: {
                username: "",
                message: ""
            }
        }
    }

    changValue = (e) => {
        const data = {...this.state.info}
        data[e.target.name] = e.target.value;
        this.setState({
            info: data
        })
    }
    sendMessage = (e) => {
        e.preventDefault()
        const message = [...this.state.messageData]
        message.push(this.state.info)
        this.setState({
            messageData: message,
            info: {
                username: this.state.info.username,
                message: ""
            }
        })
        fetch("http://localhost:3004/message", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.info)

        }).then((response) => response.json())
    }

    componentDidUpdate = () => {
        fetch("http://localhost:3004/message")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    messageData: data
                })
            })
    }
    render() {
        return (
            <>
                <div className="container">
                    <h1 className="text-center">ChatBox</h1>
                    <div className="row">
                        <div className="col-6">
                            <div className="message mb-3">
                                {
                                    this.state.messageData.map((messageItem, index) => {
                                        return (
                                            <div className="message-item" key={index}>
                                                <div className="message-item-content">
                                                    {messageItem.message}
                                                </div>
                                                <p className="message-item-name">{messageItem.username}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            <form onSubmit={this.sendMessage}>
                                <div className="mb-3">
                                    <input type="text" name="username" className="form-control"
                                           placeholder="Tên của bạn..." onChange={this.changValue}/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name="message" className="form-control"
                                           placeholder="Vui lòng nhập tin nhắn..." onChange={this.changValue}
                                           value={this.state.info.message}/>
                                    <button type="submit" className="btn btn-primary">Gửi</button>

                                </div>
                            </form>


                        </div>

                    </div>
                </div>
            </>
        )
    }


}

export default ChatBox;