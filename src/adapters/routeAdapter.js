import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const RouteAdapter = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const adaptedHistory = useMemo(
    () => ({
      replace(location) {
        navigate(location, { replace: true, state: location.state });
      },
      push(location) {
        navigate(location, { replace: false, state: location.state });
      },
    }),
    [navigate],
  );
  return children({ history: adaptedHistory, location });
};
