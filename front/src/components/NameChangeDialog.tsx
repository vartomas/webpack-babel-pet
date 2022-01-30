import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
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
    if (nameForm.formState.isValid) {
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          sx={{ minWidth: 200 }}
          autoComplete="off"
          spellCheck="false"
          variant="standard"
          label="Enter your name"
          {...nameForm.register('name', { required: true, minLength: 3, maxLength: 12 })}
          onKeyPress={(e) => e.key === 'Enter' && submitNameChange()}
          error={!!nameForm.formState.errors.name}
          helperText={nameForm.formState.errors.name ? 'Between 3 and 12 characters please' : ''}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={submitNameChange} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NameChangeDialog;
