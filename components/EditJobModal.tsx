import React, { useState, useEffect } from 'react';

interface PropsType {
    job: Job | null;
    onClose: () => void;
    onUpdate: (updatedJob: Job) => void;
}

export default function EditJobModal({ job, onClose, onUpdate }: PropsType) {
    const [newName, setNewName] = useState<string>('');

    useEffect(() => {
        if (job) {
            setNewName(job.name);
        }
    }, [job]);

    const handleUpdateClick = () => {
        if (job) {
            onUpdate({ ...job, name: newName });
        }
    };

    return (
        <div id="editJobModal" className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Chỉnh sửa công việc</h4>
                        <button
                            type="button"
                            className="close"
                            aria-hidden="true"
                            onClick={onClose}
                        >
                            ×
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Nhập tên mới cho công việc:</p>
                        <input
                            type="text"
                            className="form-control"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-default"
                            onClick={onClose}
                        >
                            Hủy
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleUpdateClick}
                        >
                            Cập nhật
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
