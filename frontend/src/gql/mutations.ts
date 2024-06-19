import { gql } from '@apollo/client';

export const SEND_NOTIFICATION = gql`
  mutation SendNotification($messageCategoryId: ID!, $message: String!) {
    sendNotification(messageCategoryId: $messageCategoryId, message: $message)
  }
`
