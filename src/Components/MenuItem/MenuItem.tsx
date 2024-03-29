import React from 'react';
import {
  Card, CardMedia, CardContent, Button, Box, Stack,
} from '@mui/material/';
import { TMenuItem } from '../../types';
import './menu-item.scss';

type TMenuItemProps = {
  menuItem: TMenuItem,
  addToCurtHandler?: () => void
}
const MenuItem = ({ menuItem, addToCurtHandler }:TMenuItemProps) => {
  return (
    <Card className="menu-item">
      <CardMedia component="img" className="menu-item__img" image={`${process.env.REACT_APP_IMAGE_URL}/${menuItem.image}`} />
      <CardContent className="menu-item__content">
        <Stack direction="column" justifyContent="space-between" height="100%">
          <Box>
            <h5 className="menu-item__name">{menuItem.name}</h5>
            <Box className="menu-item__description">
              <p>
                <span>Ингредиенты:</span>
                {' '}
                {menuItem.ingredients}
              </p>
            </Box>
            <p>
              <span>Вес:</span>
              {' '}
              {menuItem.weight}
              {' '}
              г.
            </p>
            <p>
              <span>Цена:</span>
              {' '}
              {menuItem.price}
              {' '}
              р.
            </p>
          </Box>
          { addToCurtHandler && (
          <Box alignSelf="center" className="menu-item__btn-box">
            <Button onClick={addToCurtHandler} className="menu-item__add-btn">В корзину</Button>
          </Box>
          ) }
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
