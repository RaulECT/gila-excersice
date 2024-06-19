import { useMutation } from '@apollo/client';
import { SEND_NOTIFICATION } from '../gql/mutations';

const useNotification = () => {
  const [sendNotification, { loading, data, error }] = useMutation(SEND_NOTIFICATION)

  return {
    sendNotification,
    loading,
    data,
    error
  }
}

export default useNotification;
