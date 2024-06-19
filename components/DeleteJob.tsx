import React from 'react'

interface DeleteJobProps {
    jobId: number | null;
    jobName: string;
    onDelete: () => void;
    onCancel: () => void;
}

export default function DeleteJob({ jobId, jobName, onDelete, onCancel }: DeleteJobProps) {
    return (
        <div id="deleteEmployeeModal" className="modal" style={{ display: jobId ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <form>
                        <div className="modal-header">
                            <h4 className="modal-title">Xóa công việc</h4>
                            <button
                                type="button"
                                className="close"
                                aria-hidden="true"
                                onClick={onCancel}
                            >
                                ×
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Bạn chắc chắn muốn xóa công việc {jobName}?</p>
                        </div>
                        <div className="modal-footer">
                            <input
                                type="button"
                                className="btn btn-default"
                                value="Hủy"
                                onClick={onCancel}
                            />
                            <input
                                type="button"
                                className="btn btn-danger"
                                value="Xóa"
                                onClick={onDelete}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
