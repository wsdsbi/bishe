
import request from '@/utitl/axios';

    const check_log=async function(){
        const re= await request.post('/login',{'account':localStorage.getItem('account'),'password':localStorage.getItem('password')})
        return re
    }
            
    export default check_log
        
    
