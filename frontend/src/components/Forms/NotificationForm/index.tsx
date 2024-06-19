import React from 'react';
import { Button, Select, Form, Input } from 'antd';
import { BUTTONS, FORM_MESSAGES } from '../../../utils/strings';
import { CategoryType } from '../../../types'
import './NotificationForm.style.css';

export type NotificationFieldType = {
  category?: string;
  message?: string;
}

interface NotificationFormProps {
  onSendNotification: (values: NotificationFieldType) => void;
  loading: boolean;
  categories: CategoryType[] | undefined
}

const { Item } = Form;
const { TextArea } = Input;

const NotificationForm: React.FC<NotificationFormProps> = ({ loading, categories, onSendNotification }) => {
  const [form] = Form.useForm();

  const getOptions = () => {
    return categories?.map(category => ({ label: category.category, value: category.id }))
  }

  const onSubmit = (values: NotificationFieldType) => {
    onSendNotification(values);
    form.resetFields();
  }

  return (
    <Form
      form={form}
      className='notification-form'
      name="notificationForm"
      layout='vertical'
      onFinish={onSubmit}
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
          options={getOptions()}
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
