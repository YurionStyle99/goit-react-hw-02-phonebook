import React from 'react';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
