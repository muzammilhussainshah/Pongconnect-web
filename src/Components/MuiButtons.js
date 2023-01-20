import { Button, Stack, IconButton, ButtonGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
export const MuiButtons = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction={'row'}>
                <Button variant='text' href='https://google.com' >Text</Button>
                <Button variant='contained'  >contained</Button>
                <Button variant='outlined'>outline</Button>
            </Stack>
            <Stack spacing={2} direction={'row'} >
                <Button variant='contained' color='primary'>primary</Button>
                <Button variant='contained' color={'secondary'} >secondary</Button>
                <Button variant='contained' color={"error"}>error</Button>
                <Button variant='contained' color={'info'}>info</Button>
                <Button variant='contained' color={'warning'}>warning</Button>
                <Button variant='contained' color={'inherit'}>inherit</Button>
                <Button variant='contained' color={'success'}>success</Button>

            </Stack>
            <Stack   direction={'row'} >
                <ButtonGroup variant={'contained'}  orientation="vertical"  size='small' color={'secondary'}>
                    
                <Button    >primary</Button>
                <Button     >secondary</Button>
                <Button    >error</Button>
                <Button    >info</Button>
                <Button    >warning</Button>
                <Button    >inherit</Button>
                <Button    >success</Button>
                </ButtonGroup>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                {/* <Stack spacing={2} direction={'row'} > */}
                <Button variant={'text'} color='primary'
                
                style={{
                    borderRadius: 35,
                    backgroundColor: "green",
                    color:'pink',
                    padding: "18px 36px",
                    fontSize: "18px"
                }}
                >primary</Button>
                <Button variant={'text'} color={'secondary'} >secondary</Button>
                <Button variant={'text'} color={"error"}>error</Button>
                <Button variant={'text'} color={'info'}>info</Button>
                <Button variant={'text'} color={'warning'}>warning</Button>
                <Button variant={'text'} color={'inherit'}>inherit</Button>
                <Button variant={'text'} color={'success'}>success</Button>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <Button variant={'contained'} startIcon={<SendIcon />} disableElevation disableRipple onClick={()=>alert()}>send</Button>
                <Button variant={'contained'} endIcon={<SendIcon />} disableElevation >send</Button>
                <IconButton aria-label='send' size='small' color='success' >
                    <SendIcon />
                </IconButton>
            </Stack>

        </Stack>
    );
}


