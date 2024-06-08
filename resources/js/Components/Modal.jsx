import React from "react";

export default function Modal() {
    return (
        <div>
            {/* <button
                type="button"
                className="btn btn-primary mb-2"
                data-bs-toggle="modal"
                data-bs-target="#basicModal"
            >
                Basic modal
            </button> */}
            {/* Modal */}
            <div className="modal fade" id="basicModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>
                        <div className="modal-body">
                            Modal body text goes here.
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger light"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
