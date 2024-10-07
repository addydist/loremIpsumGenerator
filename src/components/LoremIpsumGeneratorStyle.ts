import styled from "styled-components";

export const GeneratorContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(1, 1, 1, 0.1);
  background-color: #e2ede4;
`;

export const Title = styled.h1`
  text-align: center;
  color: #58d166;
`;

export const RangeText = styled.span`
  color: #1B1E1C;
`;

export const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;
  color: #555;
`;

export const RangeInput = styled.input`
  width: 100%;
  background-color: #58d166;
  margin: 10px 0;
`;

export const TextInput = styled.input`
  width: 97%;
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SelectInput = styled.select`
  width: 100%;
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const GenerateButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #58d166;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #35883f;
  }
`;

export const GeneratedOutput = styled.textarea`
  width: 97%;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;
export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin: 5px 0 10px;
  font-weight: bold;
`;