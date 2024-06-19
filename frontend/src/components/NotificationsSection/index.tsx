import React from 'react';
import NotificationForm from '../Forms/NotificationForm';
import { notification } from 'antd';
import { NotificationType } from '../../types';
import { NOTIFICATIONS } from '../../utils/strings';
import './NotificationsSection.style.css'

const NotificationsSection: React.FC = () => {
  const loading = false;
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
      <NotificationForm loading={loading} onSendNotification={onSendNotification} />
    </div>
  );
}

export default NotificationsSection;
