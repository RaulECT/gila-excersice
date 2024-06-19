import React from 'react';
import NotificationForm from '../Forms/NotificationForm';
import { Alert, notification } from 'antd';
import { NotificationType } from '../../types';
import { NOTIFICATIONS } from '../../utils/strings';
import useCategories from '../../hooks/useCategories';
import './NotificationsSection.style.css'

const NotificationsSection: React.FC = () => {
  const { loading, categories, error } = useCategories();
  const [ notificationHandler, contextHolder ] = notification.useNotification();

  const openNotification = ({ type, message, description }: { type: NotificationType, message: string, description: string }) => {
    notificationHandler[type]({
      message,
      description
    });
  };

  const onSendNotification = () => {
    openNotification({
      type: 'success',
      message: NOTIFICATIONS.NOTIFICATION_SENT_TITLE,
      description: NOTIFICATIONS.NOTIFICATION_SENT_DESCRIPTION
    })
  }

  return (
    <div className='notifications-section'>
      {contextHolder}

      <NotificationForm
        loading={loading}
        categories={categories}
        onSendNotification={onSendNotification}
      />

      { error && <Alert type='error' message={error.message} /> }
    </div>
  );
}

export default NotificationsSection;
