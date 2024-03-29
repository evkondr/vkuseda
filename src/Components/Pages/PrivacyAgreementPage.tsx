/* eslint-disable max-len */
import React from 'react';
import {
  Box, List, ListItem, Typography,
} from '@mui/material';

const PrivacyAgreementPage = () => {
  return (
    <Box padding={2} sx={{ lineHeight: '25px' }}>
      <Typography variant="h3" fontSize={25} marginBottom={2}>
        Согласие посетителя сайта на обработку персональных данных
      </Typography>
      Предоставляя свои персональные данные Покупатель даёт согласие на обработку, хранение и использование своих персональных данных на основании ФЗ № 152-ФЗ «О персональных данных» от 27.07.2006 г. в следующих целях:
      <List>
        <ListItem>Регистрации Пользователя на сайте</ListItem>
        <ListItem>Осуществление клиентской поддержки</ListItem>
        <ListItem>Получения Пользователем информации о маркетинговых событиях</ListItem>
        <ListItem>Выполнение Продавцом обязательств перед Покупателем</ListItem>
        <ListItem>Проведения аудита и прочих внутренних исследований с целью повышения качества предоставляемых услуг.</ListItem>
      </List>
      Под персональными данными подразумевается любая информация личного характера, позволяющая установить личность Покупателя такая как:
      <List>
        <ListItem>
          Имя
        </ListItem>
        <ListItem>
          Контактный телефон
        </ListItem>
        <ListItem>
          Почтовый адрес
        </ListItem>
      </List>
      Персональные данные Покупателей хранятся исключительно на электронных носителях и обрабатываются с использованием автоматизированных систем, за исключением случаев, когда неавтоматизированная обработка персональных данных необходима в связи с исполнением требований законодательства.
      Продавец обязуется не передавать полученные персональные данные третьим лицам, за исключением следующих случаев:
      <List>
        <ListItem>
          По запросам уполномоченных органов государственной власти РФ только по основаниям и в порядке, установленным законодательством РФ
        </ListItem>
        <ListItem>
          Стратегическим партнерам, которые работают с Продавцом для предоставления продуктов и услуг, или тем из них, которые помогают Продавцу реализовывать продукты и услуги потребителям. Мы предоставляем третьим лицам минимальный объем персональных данных, необходимый только для оказания требуемой услуги или проведения необходимой транзакции.
        </ListItem>
      </List>

      Продавец оставляет за собой право вносить изменения в одностороннем порядке в настоящие правила, при условии, что изменения не противоречат действующему законодательству РФ. Изменения условий настоящих правил вступают в силу после их публикации на Сайте.
    </Box>
  );
};

export default PrivacyAgreementPage;
