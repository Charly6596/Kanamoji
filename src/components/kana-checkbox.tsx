import { Kana } from "../lib/kana-dict";
import { CheckboxProps, Text, Checkbox, Box, Stack } from "@chakra-ui/core";
import React from "react";

export interface KanaCheckboxProps {
  kana: Kana;
}

export const KanaCheckbox = ({ kana, onClick, isChecked }: CheckboxProps & KanaCheckboxProps) => {
  return (
    <Stack
      onClick={onClick}
      as="button"
      background={isChecked ? "green" : "white"}
      margin='0.1rem'
      borderRadius='4px'
      alignItems='center'
      spacing={0.5}
    >
      <Text fontSize="2em" width='1.5em'>{kana.char}</Text>
      <Text>{kana.romaji}</Text>
    </Stack>
  );
}
export const EmptyCheckbox = () => {
  return (
    <Box
    margin='0.1rem'
    padding='1.5em'
    borderRadius='4px'
    />

  )
}
