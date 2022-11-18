import { useState } from "react";
import styled from "styled-components";

import { mobile } from "../../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { ClearErrors, Login } from '../../redux/userSlice';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const LoginPage = () => {
  const navigate = useNavigate()
  const isAuth = useSelector(state=> state.User.isAuth)

  useEffect(()=>{
  dispatch(ClearErrors())
  if(isAuth){
    navigate('/')
  }
  else {
    navigate('/Login')
  }
  },[isAuth])
  const [user,setUser] = useState({})
  const HandleChange = (e)=>{
    setUser({...user,[e.target.name] : e.target.value})
  }
  
  const dispatch = useDispatch()
  const SignIn = (e)=>{
    e.preventDefault()
    dispatch(Login(user))
    //navigate('/Login')
  }







  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            onChange={HandleChange}
            name="username"
            placeholder="username"
            
          />
          <Input
            placeholder="password"
            name="password"
            type="password"
            onChange={HandleChange}
          />
          <Button   onClick={SignIn} >
            LOGIN
          </Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
