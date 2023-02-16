import { Typography, Box, useTheme } from '@mui/material';
import { colors } from "../theme";

export function Header({title="", subtitle=""}): JSX.Element {
    const theme = useTheme();
    
    return (
      <Box mb='30px'>
        <Typography
          variant='h2'
          textTransform="uppercase"
          color={colors.grey[100]}
          fontWeight='bold'
          mb='5px'
        >
          {title}
        </Typography>
        <Typography
          variant='h5'
          color={colors.greenAccent[400]}
          fontWeight='bold'
          mb='5px'
        >
          {subtitle}
        </Typography>
      </Box>
    )

}