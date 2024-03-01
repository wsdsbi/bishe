
import request from '@/utitl/axios';

    const user_status_check=async function(){
        const re= await request.post('/login',{'account':localStorage.getItem('account'),'password':localStorage.getItem('password')})
        return re.data
    
    }
    export default user_status_check
    
    
    
