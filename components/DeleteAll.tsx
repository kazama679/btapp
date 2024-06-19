import React, { useState } from 'react';
import axios from 'axios';

const DeleteAll: React.FC = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDeleteAllJobs = () => {
    setShowConfirmationModal(true);
  }

  const handleConfirmDeleteAllJobs = () => {
    setLoading(true);
    axios.delete('http://localhost:8080/jobs')
      .then(() => {
        setLoading(false);
        setShowConfirmationModal(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error('Error deleting all jobs:', err);
      });
  }

  const handleCancelDeleteAllJobs = () => {
    setShowConfirmationModal(false);
  }

  return (
    <div>
      <button onClick={handleDeleteAllJobs}>Xóa tất cả công việc</button>

      {showConfirmationModal && (
        <div className='modal'>
          <div className='modal-dialog'>
            <div className='modal-header'>
              <h3 className='modal-title'>Xác nhận xóa tất cả công việc</h3>
              <button className='close' onClick={handleCancelDeleteAllJobs}>&times;</button>
            </div>
            <div className='modal-body'>
              <p>Bạn chắc chắn muốn xóa tất cả công việc?</p>
            </div>
            <div className='modal-footer'>
              <button className='btn btn-default' onClick={handleCancelDeleteAllJobs}>Hủy</button>
              <button className='btn btn-danger' onClick={handleConfirmDeleteAllJobs} disabled={loading}>
                {loading ? 'Đang xử lý...' : 'Xác nhận'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteAll;
