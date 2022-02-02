import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
import { NameFormInputs } from '../types';

interface Props {
  open: boolean;
  nameForm: UseFormReturn<NameFormInputs, object>;
  onClose: () => void;
  onSubmit: SubmitHandler<NameFormInputs>;
  onNameChange: (name: string) => void;
}

const NameChangeDialog: React.FC<Props> = ({ open, nameForm, onClose, onSubmit, onNameChange }) => {
  const submitNameChange = () => {
    nameForm.handleSubmit(onSubmit)();
    onClose();
    onNameChange(nameForm.getValues().name);
    nameForm.reset();
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
