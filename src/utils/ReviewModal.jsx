import {Modal, Input, Rate, Button, Row} from 'antd';
import React, {useState} from 'react';

const ReviewModal = ({visible, onCancel, onOk}) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleOk = () => {
    // Pass both the comment and rating to the parent component
    onOk({comment, rating});
    setComment('');
    setRating(0);
  };

  return (
    <Modal
      title="Add Review"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Input.TextArea
        placeholder="Type your comment here..."
        value={comment}
        onChange={handleCommentChange}
        autoSize={{minRows: 3, maxRows: 5}}
      />
      <Row className='pt-4 flex w-100 justify-between'>
        <Rate value={rating} onChange={(value) => setRating(value)} />
        <div>
          <Button className='bg-black' onClick={onCancel}>
            Cancel
          </Button>
          <Button className='bg-purple-500 ml-5' onClick={handleOk}>
            OK
          </Button>
        </div>
      </Row>
    </Modal>
  );
  ReviewModal.propTypes = {
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    value: PropTypes.string,
  };
};

export default ReviewModal;
