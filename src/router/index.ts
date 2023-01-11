import { CustomPaths } from './../types'
import { useNavigate } from 'react-router-dom'

export const useRouteNavigation = () => {
  const navigate = useNavigate()
  return (path: CustomPaths) => navigate(path)
}
