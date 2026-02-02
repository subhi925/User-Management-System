import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../fire";
import { db } from "../fire";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import UserLst from "./UserLst";

const Admin = () => {
  //---------vaiables----------------
  const user = useAuthState(auth);
  const [usersList, setUsersList] = useState([]);
  const [adminName, setAdminName] = useState("");
  //---------fetch admin name-------------
  useEffect(() => {
    const fetchAdminName = async () => {
      if (!user) return;
      const adminDoc = await getDoc(doc(db, "users", user[0]?.uid));
      setAdminName(adminDoc.data().name);
    };
    fetchAdminName();
  }, [user]);

  //-------load users from firestore------
  useEffect(() => {
    const fetchUsers = async () => {
      if (!user) return;
      const usersSnap = await getDocs(collection(db, "users"));
      const usersData = usersSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsersList(usersData);
    };
    fetchUsers();
  }, []);

  //-----debugs-----
  useEffect(() => {
    console.log("usersList:", user);
  }, [user]);
  
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 data-cy="Admin">Current Admin: {adminName}</h1>
      <h2>User List:</h2>
      <UserLst usersList={usersList} />
    </div>
  );
};

export default Admin;
