import { ActionIcon, Button, Group, Stack, Text } from "@mantine/core"

import { ScreenBox } from "~components/screen-box"
import { TemplatesList } from "~components/templates-list"
import { useNavigation } from "~contexts/navigation-context"
import { Screen } from "~types/ScreenType"

export const MainScreen = () => {
  const { push } = useNavigation()

  return (
    <ScreenBox
      navigationActions={
        <ActionIcon
          color="primary"
          variant="hover"
          onClick={() => {
            push(Screen.Settings)
          }}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <desc></desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </ActionIcon>
      }
      bottomActions={
        <Button
          size="xs"
          variant="light"
          onClick={() => {
            push(Screen.CreateTemplate)
          }}>
          Create Template
        </Button>
      }>
      <Stack>
        <TemplatesList />
      </Stack>
    </ScreenBox>
  )
}
