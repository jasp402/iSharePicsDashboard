import { db, ref as sRef, set, get, child } from './firebase';

export const isAccountExist = async (acc) => {
  const accRef = sRef(db, `accounts/${acc.uid}`);
  const account = await get(accRef);
  if (!account.exists()) {
    const uRef = sRef(db, 'users');
    const lists = await get(uRef);
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '2', '4', '1', '3', '5', '0', '7', '9', '8'];
    const normalID = `7${numbers[Math.floor(Math.random() * numbers.length)]}${numbers[Math.floor(Math.random() * numbers.length)]}000`;
    const globalID = parseInt(normalID, 10);
    const newID = lists.exists() ? globalID + lists.size + 1 : globalID + 1;
    try {
      await set(accRef, { gid: newID.toString() });
      await set(child(uRef, newID.toString()), {
        displayName: acc.displayName || `user${newID}`,
        photoURL: acc.photoURL || '../../data/img/profile.jpg',
      });
    } catch (err) {
      console.log(err);
    }
  }
};
export const isAccountExist2 = async (acc) => {
  const accRef = sRef(db, `accounts/${acc.uid}`);
  const uRef = sRef(db, 'users');
  await get(accRef).then(async (account) => {
    if (!account.exists()) {
      await get(uRef).then(async (lists) => {
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '2', '4', '1', '3', '5', '0', '7', '9', '8'];
        const normalID = `7${numbers[Math.floor(Math.random() * numbers.length)]}${numbers[Math.floor(Math.random() * numbers.length)]}000`;
        const globalID = parseInt(normalID, 10);
        if (lists.exists()) {
          const newID = globalID + lists.size + 1;
          await set(accRef, {
            gid: newID.toString(),
          })
            .then(async () => {
              await set(child(uRef, newID.toString()), {
                displayName: acc.displayName || `user${newID}`,
                photoURL: acc.photoURL || '../../data/img/profile.jpg',
              });
            })
            .catch(async (err) => {
              console.log(err);
            });
        } else {
          const newID = globalID + 1;
          await set(accRef, {
            gid: newID.toString(),
          })
            .then(async () => {
              await set(child(uRef, newID.toString()), {
                displayName: acc.displayName || `user${newID}`,
                photoURL: acc.photoURL || '../../data/img/profile.jpg',
              });
            })
            .catch(async (err) => {
              console.log(err);
            });
        }
      });
    }
  });
};
export const getID = async (user) => {
  let thisID = null;
  await isAccountExist(user).then(async () => {
    await get(sRef(db, `accounts/${user.uid}`)).then((datas) => {
      if (datas.exists()) thisID = datas.val().gid;
    });
  });
  return thisID;
};
