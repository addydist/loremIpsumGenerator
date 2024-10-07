import React, { useState } from "react";
import { loremIpsum } from "lorem-ipsum";
import {
  GeneratorContainer,
  Title,
  Label,
  RangeInput,
  RangeText,
  SelectInput,
  GenerateButton,
  GeneratedOutput,
  ErrorText,
} from "./LoremIpsumGeneratorStyle";
import { VALIDTAGS } from "./ContentConfigFile";

const LoremIpsumGenerator: React.FC = () => {
  const [paragraphs, setParagraphs] = useState<number>(1);
  const [wordsPerParagraph, setWordsPerParagraph] = useState<number>(5);
  const [tag, setTag] = useState<string>("");
  const [includeHtml, setIncludeHtml] = useState<boolean>(true);
  const [generatedText, setGeneratedText] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validTags = VALIDTAGS; 
  const handleParagraphChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setParagraphs(value);

    if (value > 0 && wordsPerParagraph > 0) {
      setError(''); 
    }
  };
  const handleWordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setWordsPerParagraph(value);

    if (paragraphs > 0 && value > 0) {
      setError(''); 
    }
  };
  const generateLoremIpsum = () => {
  if (paragraphs > 0 && wordsPerParagraph === 0) {
    setError("You cannot have paragraphs with 0 words.");
    return;
  }


  if (wordsPerParagraph > 0 && paragraphs === 0) {
    setError("You cannot generate words without any paragraphs.");
    return;
  }

    if (includeHtml && !tag) {
      setError("Please select a valid HTML tag.");
      return;
    }
    setError(""); 

    const generated = Array(paragraphs)
      .fill(null)
      .map(() =>
        loremIpsum({
          count: wordsPerParagraph,
          units: "words",
          format: "plain",
          suffix: "\n",
        })
      )
      .join("\n\n");

    const formattedText = includeHtml
      ? generated
          .split("\n\n")
          .map((p) => `${tag}\n${p}\n${tag.replace("<", "</")}`)
          .join("\n")
      : generated;

    setGeneratedText(formattedText);
  };

  return (
    <GeneratorContainer>
      <Title>Lorem Ipsum Generator</Title>

      <Label>Paragraphs:</Label>
      <RangeInput
        type="range"
        min={0}
        max={10}
        value={paragraphs}
        onChange={handleParagraphChange}
      />
      <RangeText>{paragraphs}</RangeText>

      <Label>Words per Paragraph:</Label>
      <RangeInput
        type="range"
        min={0}
        max={100}
        value={wordsPerParagraph}
        onChange={handleWordsChange}
      />
      <RangeText>{wordsPerParagraph}</RangeText>

      <Label>Include HTML:</Label>
      <SelectInput
        value={includeHtml ? "Yes" : "No"}
        onChange={(e) => setIncludeHtml(e.target.value === "Yes")}
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </SelectInput>

      {includeHtml && (
        <>
          <Label>Tag:</Label>
          <SelectInput value={tag} onChange={(e) => setTag(e.target.value)}>
            <option value="">Select a tag</option>
            {validTags.map((validTag) => (
              <option key={validTag} value={validTag}>
                {validTag}
              </option>
            ))}
          </SelectInput>
        </>
      )}

      {error && <ErrorText>{error}</ErrorText>}

      <GenerateButton onClick={generateLoremIpsum}>
        Generate Lorem ipsum
      </GenerateButton>

      <GeneratedOutput
        className="generated-output"
        value={generatedText}
        readOnly
        rows={12}
      />
    </GeneratorContainer>
  );
};

export default LoremIpsumGenerator;
