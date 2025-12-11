import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
  getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { 
  getFirestore, doc, getDoc, setDoc, updateDoc 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyALblbqW_VrZh2r7sPJ8Q6XT2fGbk0dsFg",
  authDomain: "donghung-3208d.firebaseapp.com",
  projectId: "donghung-3208d",
  storageBucket: "donghung-3208d.firebasestorage.app",
  messagingSenderId: "753379492663",
  appId: "1:753379492663:web:baff34f2c0bac00e02d0b2",
  measurementId: "G-06PF7MH1P0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function loginUser(email, password) {
  try {
    console.log("🚀 Đang đăng nhập...");
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const user = cred.user;
    console.log("✅ Firebase Auth thành công:", user.email);

    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);
    const currentDevice = navigator.userAgent + "_" + Math.random().toString(36).slice(2);

    if (snap.exists()) {
      const data = snap.data();
      console.log("📄 Data hiện tại:", data);
      if (data.activeDevice && data.activeDevice !== currentDevice) {
        alert("⚠️ Tài khoản này đang đăng nhập ở thiết bị khác.");
        await signOut(auth);
        throw new Error("Device conflict");
      } else {
        await updateDoc(userRef, { activeDevice: currentDevice, lastLogin: Date.now() });
        console.log("📡 Đã cập nhật activeDevice:", currentDevice);
      }
    } else {
      await setDoc(userRef, { activeDevice: currentDevice, lastLogin: Date.now() });
      console.log("🆕 Tạo document mới cho user:", user.uid);
    }

    location.href = "index.html";
  } catch (err) {
    console.error("❌ Lỗi đăng nhập:", err);
    alert("Lỗi: " + err.message);
    throw err;
  }
}

export async function logout() {
  const user = auth.currentUser;
  if (!user) return;
  try {
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, { activeDevice: null });
    await signOut(auth);
    location.href = "login.html";
  } catch (err) {
    console.error("🚨 Lỗi khi đăng xuất:", err);
  }
}
