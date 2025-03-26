import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Button } from '../ui/button';

const PageNotFound = () => {
  const navigate = useNavigate()
  useEffect(() => {
    // Trigger the alert when the component mounts
    Swal.fire({
      title: 'Oops!',
      text: 'Sorry! The page you are searching for is not found...',
      icon: 'error',
      confirmButtonText: 'OK'
    }).then(()=>{
      navigate('/home')
    })
  });

  return (
    <div className='flex-col flex space-y-10 items-center justify-center h-screen'>
      <h1 className='text-center text-9xl font-bold text-amber-700'>Oops!</h1>
      <Link to="/"><Button className="">Back...</Button></Link>
    </div>
  );
};
                                                                
export default PageNotFound;
   