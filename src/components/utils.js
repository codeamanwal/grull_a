import {useLocation} from 'react-router-dom';
export default function getQueryParams() {
  const search = useLocation().search;
  const queryParams = new URLSearchParams(search);
  return queryParams;
}
