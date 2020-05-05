import React from 'react';

import { Link } from 'react-router-dom';

import { MdVisibility, MdCreate, MdDeleteForever } from 'react-icons/md';

import { Container, ActionsPanel, ActionList, Action } from './styles';

export default function Actions({
  id,
  handleview,
  handledelete,
  view,
  edit,
  path,
  exclude,
  cancel,
  title,
}) {
  return (
    <Container>
      <ActionsPanel>
        <ActionList>
          {view && (
            <Action>
              <button type="button" onClick={() => handleview(id)}>
                <MdVisibility size={16} color="#8E5BE8" />
                <p>Visualizar</p>
              </button>
            </Action>
          )}

          <hr />
          {edit && (
            <Action>
              <Link
                to={{
                  pathname: `${path}/${id}`,
                  title,
                }}
              >
                <MdCreate size={16} color="#4D85EE" />
                <p>Editar</p>
              </Link>
            </Action>
          )}
          <hr />
          {exclude && (
            <Action>
              <button type="button" onClick={() => handledelete(id)}>
                <MdDeleteForever size={16} color="#DE3B3B" />
                <p>Excluir</p>
              </button>
            </Action>
          )}
          {cancel && (
            <Action>
              <button type="button" onClick={() => handledelete(id)}>
                <MdDeleteForever size={16} color="#DE3B3B" />
                <p>Cancelar encomenda</p>
              </button>
            </Action>
          )}
          <hr />
        </ActionList>
      </ActionsPanel>
    </Container>
  );
}
