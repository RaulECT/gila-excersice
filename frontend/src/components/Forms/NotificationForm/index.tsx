import React from 'react';
import { Button, Select, Form, Input } from 'antd';
import { BUTTONS, FORM_MESSAGES } from '../../../utils/strings';
import './NotificationForm.style.css';

type NotificationFieldType = {
  category?: string;
  message?: string;
}

interface NotificationFormProps {
  onSendNotification: () => void;
  loading: boolean;
}

const { Item } = Form;
const { TextArea } = Input;

const NotificationForm: React.FC<NotificationFormProps> = ({ loading, onSendNotification }) => {
  return (
    <Form
      className='notification-form'
      name="notificationForm"
      layout='vertical'
      onFinish={onSendNotification}
      autoComplete="off"
    >
      <Item<NotificationFieldType>
        label="Category"
        name="category"
        rules={[{ required: true, message: FORM_MESSAGES.SELECT_CATEGORY }]}
      >
        <Select
          loading={loading}
          disabled={loading}
          options={[
            { label: 'Designer', value: 'designer' },
            { label: 'Developer', value: 'developer' },
            { label: 'Product Manager', value: 'product-manager' },
          ]}
        />
      </Item>

      <Item<NotificationFieldType>
        label="Message"
        name="message"
        rules={[{ required: true, message: FORM_MESSAGES.INPUT_MESSAGE }]}
      >
        <TextArea
          disabled={loading}
          rows={4}
        />
      </Item>

      <Item>
        <Button
          loading={loading}
          disabled={loading}
          type='primary'
          htmlType='submit'
        >
          {BUTTONS.SEND_NOTIFICATION}
        </Button>
      </Item>
    </Form>
  );
}

export default NotificationForm
