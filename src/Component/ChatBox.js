import React, {useState}  from "react";

function ChatBox(){

    const [messageData, setMessageData] = useState([]);
    const [info, setInfo] = useState({
        username: "",
        message: ""
    })

    const changeValue = (e) =>{
        e.preventDefault();
        const data = {...info}
        data[e.target.name] = e.target.value;
        setInfo(data)
    }

    const sendMessage =(e)=>{
        e.preventDefault();
        setMessageData(messageData.concat(info))
        // const message = [...messageData];
        // message.push(info)
        // setMessageData(
        //     message
        // )

        setInfo({
            username: info.username,
            message: ""
        })
    }



    return(
        <>
            <div className="container">
                <h1 className="text-center">ChatBox</h1>
                <div className="row">
                    <div className="col-6">
                        <div className="message mb-3">
                            {
                                messageData.map((messageItem, index) => {
                                    return (
                                        <div className="message-item" key={index}>
                                            <div className="message-item-content">
                                                { messageItem.message}
                                            </div>
                                            <p className="message-item-name">{messageItem.username}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <form >
                            <div className="mb-3">
                                <input type="text" name="username" className="form-control"
                                       placeholder="Tên của bạn..." onChange={changeValue} />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" name="message" className="form-control"
                                       placeholder="Vui lòng nhập tin nhắn..." onChange={changeValue}/>
                                <button type="submit" className="btn btn-primary" onClick={sendMessage}>Gửi</button>

                            </div>
                        </form>


                    </div>

                </div>
            </div>
        </>
    )
}
export default ChatBox