import { useEffect, useRef } from 'react';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { NameFormInputs } from '../types';
import styles from '../styles/NameChangeDialog.module.scss';

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

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (open && container.current && !container.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [container, open]);

  return (
    <div className={styles.container} style={{ display: open ? 'block' : 'none' }}>
      <div ref={container} className={styles.dialog}>
        <input
          type="text"
          className={styles.input}
          placeholder="Name"
          autoComplete="off"
          {...nameForm.register('name')}
          onKeyPress={(e) => e.key === 'Enter' && submitNameChange()}
        />
        <div className={styles.dialogActions}>
          <button className={styles.button} onClick={submitNameChange}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameChangeDialog;
