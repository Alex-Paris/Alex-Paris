import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const StyledToastContainer = styled(ToastContainer).attrs({
  position: toast.POSITION.BOTTOM_CENTER,
  theme: 'colored',
  autoClose: 5000,
  progress: undefined,
})``;

export default StyledToastContainer;
