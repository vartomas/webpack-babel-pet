import { useEffect, useState } from 'react';

export const useChat = () => {
  const [menuAnchor, setmenuAnchor] = useState<null | HTMLElement>(null);
  const [nameChangeDialogOpen, setNameChangeDialogOpen] = useState(false);
  const menuOpen = Boolean(menuAnchor);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setmenuAnchor(event.currentTarget);
  };

  useEffect(() => {
    if (nameChangeDialogOpen) {
      setmenuAnchor(null);
    }
  }, [nameChangeDialogOpen]);

  return {
    menuAnchor,
    menuOpen,
    nameChangeDialogOpen,
    setmenuAnchor,
    handleMenuOpen,
    setNameChangeDialogOpen
  };
};
