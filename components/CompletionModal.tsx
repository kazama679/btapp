import React, { useState } from 'react'

export default function CompletionModal() {
  const [show,setShow]=useState<boolean>(true);
  const onClose=()=>{
    setShow(false)
  }
  return (
    <>
    {show && 
      <div className='modal'>
      <div className='modal-dialog'>
        <div className='modal-header'>
          <h3 className='modal-title'>Hoàn thành công việc</h3>
          <button className='close' onClick={onClose}>&times;</button>
        </div>
        <div className='modal-body'>
          <p>Chúc mừng ! Bạn đã hoàn thành tất cả công việc  .</p>
        </div>
        <div className='modal-footer'>
          <button className='btn btn-primary' onClick={onClose}>Đóng</button>
        </div>
      </div>
    </div>}
    </>
  )
}
