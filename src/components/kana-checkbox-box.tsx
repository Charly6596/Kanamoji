import React, { Children } from "react"
import { CheckboxProps, Checkbox, Flex, Box } from "@chakra-ui/core"
import { KanaCheckboxProps, EmptyCheckbox } from "./kana-checkbox";
import { ConfigContainer } from "../containers/configuration";

interface Props {
  children: childType[];
}
type childType = React.ReactElement<CheckboxProps & KanaCheckboxProps>;

export const KanaCheckboxBox: React.FC<Props> = ({ children }) => {
  const config = ConfigContainer.useContainer();
  const ids: number[] = [];
  const kanas = ['an', 'i', 'u', 'e', 'o'];

  const cloneChild = (child: childType ) => {
    ids.push(child.props.kana.id);
    return React.cloneElement(child, {
      onClick: () => config.toggleKana(child.props.kana.id),
      key: child.props.kana.id,
      isChecked: config.isEnabled(child.props.kana.id)
    })
  }

  const renderChildren = kanas.map(k => {
    const child = children.find(c => k.includes(c.props.kana.romaji[c.props.kana.romaji.length - 1]));
    if (child) {
      return cloneChild(child);
    }
    return <EmptyCheckbox />
  });

  return (
    <Flex width='100%' justifyContent='center' alignContent='center'>
      {renderChildren}
      <Checkbox onChange={() => config.toggleAll(ids)} isChecked={config.areEnabled(ids)} />
    </Flex>)
}
