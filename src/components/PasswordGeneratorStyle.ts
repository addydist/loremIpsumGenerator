import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1E3A8A;  
  padding: 20px;
  width: 350px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  text-align: center;
  color: #FFFFFF;
  font-size: 1.6rem;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1F2937;
  padding: 10px;
  margin-bottom: 20px;
`;

export const PasswordInput = styled.input`
  background: transparent;
  color: #FFFFFF;
  border: none;
  width: 100%;
  outline: none;
`;

export const CopyButton = styled.button`
  color: #FFFFFF;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const Label = styled.label`
  color: #FFFFFF;
  display: block;
  margin-right: 12px;
  white-space: nowrap; 
`;

export const NumberInput = styled.input`
  width: 60px;
  padding: 5px;
  background-color: #1F2937;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFFFFF;
  width: 100%;
`;

export const CheckboxInput = styled.input`
  margin-left: 10px;
`;

export const GenerateButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #3B82F6;
  color: #FFFFFF;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #2563EB;
  }
`;