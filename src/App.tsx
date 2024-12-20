import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import BasicAppShell from "./components/BasicAppShell";

export default function App() {
  return <MantineProvider theme={theme}>

    <BasicAppShell />

  </MantineProvider>;
}
