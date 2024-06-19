import React, { useEffect, useCallback } from 'react';
import NotificationForm, { NotificationFieldType } from '../Forms/NotificationForm';
import { Alert, notification } from 'antd';
import { NotificationType } from '../../types';
import { NOTIFICATIONS } from '../../utils/strings';
import useCategories from '../../hooks/useCategories';
import useNotification from '../../hooks/useNotification';
import './NotificationsSection.style.css'

const NotificationsSection: React.FC = () => {
  const { loading, categories, error } = useCategories();
  const { sendNotification, loading: loadingSendNotification, data, error: errorSendNotidication } = useNotification();
  const [notificationHandler, contextHolder] = notification.useNotification();

  const openNotification = useCallback(({ type, message, description }: { type: NotificationType, message: string, description: string }) => {
    notificationHandler[type]({
      message,
      description
    });
  }, [notificationHandler]);

  useEffect(() => {
    if (data) {
      openNotification({
        type: 'success',
        message: NOTIFICATIONS.NOTIFICATION_SENT_TITLE,
        description: NOTIFICATIONS.NOTIFICATION_SENT_DESCRIPTION
      })
    }
  }, [data, openNotification])

  const onSendNotification = (values: NotificationFieldType) => {
    sendNotification({
      variables: {
        messageCategoryId: values.category,
        message: values.message
      }
    })
  }

  return (
    <div className='notifications-section'>
      {contextHolder}

      <NotificationForm
        loading={loading || loadingSendNotification}
        categories={categories}
        onSendNotification={onSendNotification}
      />

      {(error || errorSendNotidication) && <Alert type='error' message={error?.message || errorSendNotidication?.message} />}
    </div>
  );
}

export default NotificationsSection;
