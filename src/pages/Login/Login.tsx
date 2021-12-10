import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Atoms/Button';
import TextField from '../../components/Atoms/TextField';
import Slider from '../../components/Molecules/Slider';
import { SliderData } from '../../components/Molecules/Slider/Slider.types';
import { Form, SectionLogin, Separator, Slide } from './styles';

const Login: React.FC = () => {

  const slides: SliderData[] = [
    {
      "id": 1,
      "image": "/assets/images/Data.png",
      "title": "Marcenas mattis egestas",
      "text": "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
    },
    {
      "id": 2,
      "image": "/assets/images/Data.png",
      "title": "Marcenas mattis egestas",
      "text": "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
    },
    {
      "id": 3,
      "image": "/assets/images/Data.png",
      "title": "Marcenas mattis egestas",
      "text": "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
    },
    {
      "id": 4,
      "image": "/assets/images/Data.png",
      "title": "Marcenas mattis egestas",
      "text": "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
    },
  ]

  return (
    <SectionLogin className='row'>
      <Slide className='col-12 col-md-6'>
        <div className='row flex-column align-items-center col-10'>
          <Slider sliders={slides}></Slider>
        </div>
      </Slide>
      <Form className='col-12 col-md-6'>
        <h2 className='title'>Invision</h2>
        <h5 className='subtitle'>Welcome to Invision</h5>
        <form>
          <TextField id='name' type='text' label='Full Name'></TextField>
          <TextField id='email' type='email' label='Users name or Email'></TextField>
          <TextField id='password' type='password' label='Password'></TextField>
          <Link className='fs-7' to="">Forgot password?</Link>
          <Button className='my-4' text={'Sign up'} color='primary' type='submit'></Button>
          <Separator/>
          <Button className='my-4 shadow' text={'Sign up with Google'} color='secondary' type='button' iconName='google'></Button>
          {
            <p className='col-xs-7 mx-auto'>
              By signing up, you agree to <b>Invision</b> <Link to=''>Terms of Conditions</Link> and <Link to=''>Privacy Policy</Link>
            </p>
          }
          <p>New <b>Invision?</b> <Link to=''>Create Account</Link> </p>
        </form>
      </Form>

    </SectionLogin>
  );
};

export default Login