import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ClassModal(props) {

    const [c, setC] = useState([
    { "class_id": "101", "subject_id": "201", "subject_name": "Subject 1", "subject_type": 1, "faculty_id": "301", "faculty_name": "Faculty 1" },
    { "class_id": "102", "subject_id": "202", "subject_name": "Subject 2", "subject_type": 2, "faculty_id": "302", "faculty_name": "Faculty 2" },
    { "class_id": "ABC123", "subject_id": "UND123", "subject_name": "Unalloted", "subject_type": 0, "faculty_id": "UND123", "faculty_name": "ABCXYZ" }
    ])
    return (
        <div>
            <Modal
            {...props}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <div style={style}>
                    Text in a modal
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    classe
                    <div>
                    
                    </div>
                </div>
        </Modal>
        </div>
    )
}

export default ClassModal
