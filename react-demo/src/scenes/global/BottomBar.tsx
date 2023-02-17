import { Box, Typography, useTheme } from '@mui/material'
import { colors } from "../../theme";

function BottomBar(): JSX.Element {
  const theme = useTheme()

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      bgcolor={colors.primary[600]}
      p={2}
    >
      <Typography fontSize='10px'>
        Copyright &copy; 2023 Sarah Dockter
      </Typography>
    </Box>
  )
}

export default BottomBar
