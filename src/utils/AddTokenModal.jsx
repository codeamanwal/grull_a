import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, Row, Select} from 'antd';

const {Option} = Select;

const AddTokenModal = ({visible, onCancel, onOk}) => {
  const [selectedDenomination, setSelectedDenomination] = useState(null);

  const handleDenominationChange = (value) => {
    setSelectedDenomination(value);
  };

  const handleOk = () => {
    onOk(selectedDenomination);
    onCancel();
  };

  return (
    <Modal title="Request Denomination" open={visible} onCancel={onCancel} footer={null} className='top-[20%]' destroyOnClose={true}>
      <Select
        placeholder="Select Denomination"
        style={{width: '100%'}}
        onChange={handleDenominationChange}
        value={selectedDenomination}
        className='text-black'
      >
        <Option value={100}>100</Option>
        <Option value={500}>500</Option>
        <Option value={1000}>1000</Option>
        <Option value={2000}>2000</Option>
        <Option value={5000}>5000</Option>
        <Option value={10000}>10000</Option>
      </Select>

      <Row className="pt-4 flex w-100 justify-between">
        <div>
          <Button className="bg-black" onClick={onCancel}>
            Cancel
          </Button>
          <Button className="bg-purple-500 ml-5" onClick={handleOk}>
            OK
          </Button>
        </div>
      </Row>
    </Modal>
  );
};

AddTokenModal.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
};

export default AddTokenModal;
