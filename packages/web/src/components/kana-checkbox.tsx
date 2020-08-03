import { Kana } from "@kanamoji/controllers";
import { CheckboxProps, Text, Box, PseudoBox } from "@chakra-ui/core";
import React from "react";

export interface KanaCheckboxProps {
  kana: Kana;
}

const width = ['1.75em', '3em'];
export const KanaCheckbox = ({ kana, onClick, isChecked }: CheckboxProps & KanaCheckboxProps) => {
  return (

    <PseudoBox
      onClick={onClick}
      bg={isChecked ? "teal.50" : "white"}
      color={isChecked ? "teal.200": "white"}
      as="button"
      border="1px"
      margin='0.1rem'
      rounded={4}
    >
      <Text color="black" fontSize={["2em", "2.75em"]} width={width}>{kana.char}</Text>
      <Text color="gray.500">{kana.romaji}</Text>
    </PseudoBox>
  );
}
export const EmptyCheckbox = () => {
  return (
   <PseudoBox
      border="1px"
      borderColor="transparent"
      margin='0.1rem'
      rounded={4}
    >
      <Text color="transparent" fontSize={["2em", "2.75em"]} width={width}>カ</Text>
    </PseudoBox>
  )
}
