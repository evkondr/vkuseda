/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import AdminContainer from '../AdminContainer/AdminContainer';
import PostCard from '../MenuItems/MenuItemCard';
import MenuItemModal from '../MenuItems/MenuItemModal';
import { getMenuItems } from '../../../store/thunks/menuItemsThunk';

const MenuItemsPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { menuItems, loading, error } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMenuItems());
  }, [dispatch]);
  // If error
  if (error) {
    <Box>{error}</Box>;
  }
  // Render component
  return (
    <AdminContainer headerText="Записи" buttonHandler={() => setOpen(true)}>
      <Box display="flex" flexDirection="column" padding={3} rowGap={2}>
        {loading ? <CircularProgress /> : menuItems.length === 0
          ? (
            <Typography>
              Записи еще не добалены
            </Typography>
          )
          : menuItems.map((item) => <PostCard key={item.id} menuItem={item} />)}

      </Box>
      <MenuItemModal open={open} onClose={() => setOpen(!open)} />
    </AdminContainer>
  );
};

export default MenuItemsPage;