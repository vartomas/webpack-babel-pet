import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { Button, Dialog, DialogContent, TextField } from '@mui/material';
import { NameFormInputs } from '../hooks/useProfile';

interface Props {
  open: boolean;
  nameForm: UseFormReturn<NameFormInputs, object>;
  onClose: () => void;
  onSubmit: SubmitHandler<NameFormInputs>;
}

const NameChangeDialog: React.FC<Props> = ({ open, nameForm, onClose, onSubmit }) => {
  const submitNameChange = () => {
    nameForm.handleSubmit(onSubmit)();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
        <TextField
          sx={{ minWidth: 300 }}
          autoFocus
          autoComplete="off"
          variant="standard"
          label="Name"
          {...nameForm.register('name')}
          onKeyPress={(e) => e.key === 'Enter' && submitNameChange()}
        />

        <Button sx={{ mt: 2 }} onClick={submitNameChange} variant="contained">
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default NameChangeDialog;
