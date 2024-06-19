import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../gql/queries';
import { CategoryType } from '../types';

interface GetAllMessageCategoriesResponseType {
  getAllMessageCategories: CategoryType[]
}

const useCategories = () => {
  const { data, loading, error } = useQuery<GetAllMessageCategoriesResponseType>(GET_CATEGORIES);

  return {
    loading,
    error,
    categories: data?.getAllMessageCategories
  }
}

export default useCategories
