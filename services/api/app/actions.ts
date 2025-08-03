import { useMutation } from '@tanstack/react-query';
import { appService } from './requesters';

export const useUserActions = () => {
  const loginRequest = useMutation({
    mutationFn: appService.loginRequest,
  });

  return {
    loginRequest,
  };
};
