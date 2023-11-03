import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Notes = () => {
    const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam commodi asperiores ipsam eveniet quisquam, sit incidunt est, exercitationem dolorem, labore quas eius temporibus perferendis alias odit quidem facilis officia!");

    const handleTextChange = (value) => {
        setText(value);
    };
    return (
        <>

            <div className='container mt-3'>
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-xs-4">

                        <div className="col app-chat-contacts app-sidebar flex-grow-0 overflow-hidden" id="app-chat-contacts">
                            <hr className="container-m-nx m-0" />
                            <div className="container">

                                <div className="chat-contact-list-item-title">
                                    <h5 className="text-primary mb-0 px-4 pt-3 pb-2 mt-5">Notes</h5>
                                </div>
                                {/* Chats */}
                                <ul className="list-unstyled chat-contact-list" id="chat-list">
                                    <li className="chat-contact-list-item chat-list-item-0 d-none">
                                        <h6 className="text-muted mb-0">No Chats Found</h6>
                                    </li>
                                    <li className="chat-contact-list-item">
                                        <a className="d-flex align-items-center">
                                            <div className="flex-shrink-0 avatar">
                                                <span className="avatar-initial rounded-circle bg-label-success">CM</span>
                                            </div>
                                            <div className="chat-contact-info flex-grow-1 ms-2">
                                                <h6 className="chat-contact-name text-truncate m-0">Calvin Moore</h6>
                                                <p className="chat-contact-status text-muted text-truncate mb-0">If it takes long you can mail inbox user</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="chat-contact-list-item mt-3">
                                        <a className="d-flex align-items-center">
                                            <div className="flex-shrink-0 avatar">
                                                <span className="avatar-initial rounded-circle bg-label-success">CM</span>
                                            </div>
                                            <div className="chat-contact-info flex-grow-1 ms-2">
                                                <h6 className="chat-contact-name text-truncate m-0">Calvin Moore</h6>
                                                <p className="chat-contact-status text-muted text-truncate mb-0">If it takes long you can mail inbox user</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="chat-contact-list-item mt-3">
                                        <a className="d-flex align-items-center">
                                            <div className="flex-shrink-0 avatar">
                                                <span className="avatar-initial rounded-circle bg-label-success">CM</span>
                                            </div>
                                            <div className="chat-contact-info flex-grow-1 ms-2">
                                                <h6 className="chat-contact-name text-truncate m-0">Calvin Moore</h6>
                                                <p className="chat-contact-status text-muted text-truncate mb-0">If it takes long you can mail inbox user</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-8 col-xs-8 mt-2">
                        <div className="col app-chat-history bg-body mt-5">
                            <div className="chat-history-wrapper">
                                <div className="chat-history-header border-bottom">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex overflow-hidden align-items-center">
                                            <div className="flex-shrink-0 avatar">
                                                <span className="avatar-initial rounded-circle bg-label-success">CM</span>
                                            </div>
                                            <div className="chat-contact-info flex-grow-1 ms-2">
                                                <h6 className="m-0">Calvin Moore</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mini-navbar">
                                    <button className="btn btn-sm btn-primary me-2 mt-2">Soap</button>
                                    <button className="btn btn-sm btn-primary me-2 mt-2">Consultant</button>
                                    <button className="btn btn-sm btn-primary me-2 mt-2">Transcription</button>
                                </div>
                                <div className="chat-history-body bg-body ps">
                                    <ul className="list-unstyled chat-history">
                                        <li className="chat-message chat-message-right">
                                            <div className="d-flex overflow-hidden">
                                                <div className="chat-message-wrapper flex-grow-1">
                                                    <div className="chat-message-text">
                                                        <ReactQuill
                                                            value={text}
                                                            onChange={handleTextChange}
                                                        />
                                                        <button className="btn btn-sm btn-primary me-2 mt-2 float-end">Save</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', height: '614px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '269px', height: '344px' }} /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Notes
