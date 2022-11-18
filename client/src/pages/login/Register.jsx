import styled from "styled-components";
import { mobile } from "../../responsive";
import { Register } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {useNavigate} from "react-router-dom";



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;



const Registerr = () => {
  const [newUser,setNewUser] = useState({})
    const HandleChange = (e)=>{
        setNewUser({...newUser, [e.target.name] : e.target.value})
    }

  const dispatch=useDispatch()
const navigate=useNavigate()
  const SignUp =(e)=>{
    e.preventDefault()
    dispatch(Register(newUser))
    navigate("/Login")
}

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input onChange={HandleChange} placeholder="name" name="username" />
          
    
          <Input onChange={HandleChange} placeholder="email" name="email"/>
          <Input onChange={HandleChange} placeholder="password" name="password" />
         
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={SignUp}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Registerr;
