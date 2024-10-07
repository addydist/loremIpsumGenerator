import React, { useState } from "react";
import { UPPER, LOWER, NUMBERS, SYMBOLS } from './ContentConfigFile';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import '../style/password.css'
import {
  Container,
  Title,
  InputContainer,
  PasswordInput,
  CopyButton,
  FormGroup,
  Label,
  NumberInput,
  CheckboxGroup,
  CheckboxLabel,
  CheckboxInput,
  GenerateButton,
} from "./PasswordGeneratorStyle";

interface Passwordparameter {
  length: number;
  isUppercase: boolean;
  isLowercase: boolean;
  isNumbers: boolean;
  isSymbols: boolean;
}

const PasswordGenerator: React.FC = () => {
  const minLength = 8;
  const maxLength = 64;

  const [parameter, setparameter] = useState<Passwordparameter>({
    length: 8,
    isUppercase: true,
    isLowercase: true,
    isNumbers: true,
    isSymbols: true,
  });

  const [password, setPassword] = useState("");
  // const [isCopied, setIsCopied] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setparameter((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handlePasswordCopy = () => {
    // navigator.clipboard
    //   .writeText(password)
    //   .then(() => {
    //     setIsCopied(true);
    //     setTimeout(() => setIsCopied(false), 3000); 
    //   })
    //   .catch(() => {
    //     alert("Failed to copy the password.");
    //   });
    navigator.clipboard.writeText(password).then(() => {
      toast.success('Password copied to clipboard!');
    }).catch(() => {
      toast.error('Failed to copy the password.');
    });
  };

  const generatePassword = () => {
    const { length, isUppercase, isLowercase, isNumbers, isSymbols } = parameter;
    const upper = UPPER;
    const lower = LOWER;
    const numbers = NUMBERS;
    const symbols = SYMBOLS;

    if (!isUppercase && !isLowercase && !isNumbers && !isSymbols) {
      alert("Please select at least one option to generate a password.");
      return;
    }
    
    let charset = "";
    if (isUppercase) charset += upper;
    if (isLowercase) charset += lower;
    if (isNumbers) charset += numbers;
    if (isSymbols) charset += symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <Container>
      <p className="title">abc</p>
      <Title>Password Generator</Title>
      <InputContainer>
        <PasswordInput type="text" value={password} readOnly />
        <CopyButton onClick={handlePasswordCopy}>📋</CopyButton>
        <ToastContainer />
          {/* <span style={{ marginLeft: "10px", color: "green" }}>Copied!</span> */}
     
      </InputContainer>

      <FormGroup>
        <Label>Password Length</Label>
        <NumberInput
          type="number"
          name="length"
          min={minLength}
          max={maxLength}
          value={parameter.length}
          onChange={(e) => {
            const length = Math.max(
              minLength,
              Math.min(maxLength, parseInt(e.target.value || "0"))
            );
            setparameter((prev) => ({ ...prev, length }));
          }}
        />
      </FormGroup>

      <CheckboxGroup>
        <CheckboxLabel>
          Include uppercase letters
          <CheckboxInput
            type="checkbox"
            name="isUppercase"
            checked={parameter.isUppercase}
            onChange={handleChange}
          />
        </CheckboxLabel>
      </CheckboxGroup>

      <CheckboxGroup>
        <CheckboxLabel>
          Include lowercase letters
          <CheckboxInput
            type="checkbox"
            name="isLowercase"
            checked={parameter.isLowercase}
            onChange={handleChange}
          />
        </CheckboxLabel>
      </CheckboxGroup>

      <CheckboxGroup>
        <CheckboxLabel>
          Include numbers
          <CheckboxInput
            type="checkbox"
            name="isNumbers"
            checked={parameter.isNumbers}
            onChange={handleChange}
          />
        </CheckboxLabel>
      </CheckboxGroup>

      <CheckboxGroup>
        <CheckboxLabel>
          Include symbols
          <CheckboxInput
            type="checkbox"
            name="isSymbols"
            checked={parameter.isSymbols}
            onChange={handleChange}
          />
        </CheckboxLabel>
      </CheckboxGroup>

      <GenerateButton onClick={generatePassword}>
        Generate Password
      </GenerateButton>
    </Container>
  );
};

export default PasswordGenerator;
