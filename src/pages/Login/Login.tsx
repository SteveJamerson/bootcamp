import React from 'react';
import TextField from '../../components/Atoms/TextField';

const Login: React.FC = () => {
  return (
    <div>
      <TextField id='name' type='text' label='Name'>

      </TextField>
      <TextField id='name' type='text' label='Name' iconName='google' errorText='error'>

      </TextField>
      <TextField id='name' type='text' label='Name' iconName='google' errorText='error' disabled>

      </TextField>
    </div>
  );
};

export default Login