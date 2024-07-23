import React, { useState, useMemo } from 'react';
import styles from '../styles/CallManage.module.scss'; // CSS 모듈 import

interface UserProps {
  name: string;
  telephone: string;
}

function CallManage() {
  const [contacts, setContacts] = useState([
    { name: '홍길동', phone: '010-1234-5678' },
    { name: '임꺽정', phone: '010-1234-3378' },
    { name: '세종대왕', phone: '010-3478-3378' },
  ]);

  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const changename = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(1);
    setNewName(e.target.value);
  };

  const changephone = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(2);
    setNewPhone(e.target.value);
  };

  const memoizedChangename = useMemo(() =>  {
          return changename}
      , []);
  const memoizedChangephone = useMemo(() =>
      {return changephone}
      , []);

  const addContact = () => {
    if (newName && newPhone) {
      setContacts([...contacts, { name: newName, phone: newPhone }]);
      setNewName('');
      setNewPhone('');
    }
  };

  const memoizedAddContact = useMemo(() => addContact, [newName, newPhone, contacts]);

  const deleteContact = (index: number) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>전화 기록 관리</div>
      <div className={styles.user}>사용자: 홍길동</div>
      <ul className={styles.contactList}>
        {contacts.map((contact, index) => (
          <li className={styles.contact} key={index}>
            <div className={styles.info}>
              <span className={styles.name}>{contact.name}</span>
              <span className={styles.phone}>({contact.phone})</span>
            </div>
            <button className={styles.deleteButton} onClick={() => deleteContact(index)}>🗑️</button>
          </li>
        ))}
      </ul>
      <div className={styles['input-container']}>
        <input
          type="text"
          placeholder="이름을 입력하세요."
          value={newName}
          onChange={memoizedChangename}
        />
        <input
          type="text"
          placeholder="전화번호를 입력하세요."
          value={newPhone}
          onChange={memoizedChangephone}
        />
      </div>
      <button className={styles['add-button']} onClick={memoizedAddContact}>+</button>
    </div>
  );
}

export default CallManage;
