import { Box } from '@mui/material'

interface LogoProps {
  height?: number
}

export const Logo: React.FC<LogoProps> = (props) => {
  return <Box component="img" src="/img/logo-dark.png" alt="Logo Girls Of Carls" height={props.height || 36} />
}
