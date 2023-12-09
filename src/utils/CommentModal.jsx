import React, {useState} from 'react';
import {Modal, Input, Button, Row} from 'antd';

const CommentModal = ({visible, onCancel, onOk, value}) => {
  const [comment, setComment] = useState(value?value:'');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleOk = () => {
    onOk(comment);
    setComment(''); // Clear the comment input after clicking OK
  };

  return (
    <Modal
      title="Add Comment"
      onCancel={onCancel}
      onOk={handleOk}
      open={visible}
      footer={null}
    >
      <Input.TextArea
        placeholder="Type your comment here..."
        value={comment}
        onChange={handleCommentChange}
        autoSize={{minRows: 3, maxRows: 5}}
      />
      <Row className='pt-4 flex w-100 justify-end'>
        <Button className='bg-black' on onClick={onCancel}>Cancel</Button>
        <Button className='bg-purple-500 ml-5' on onClick={handleOk}>OK</Button>
      </Row>
    </Modal>
  );
  CommentModal.propTypes = {
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    value: PropTypes.string,
  };
};

export default CommentModal;
