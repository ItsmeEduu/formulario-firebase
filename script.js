import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 👇 COLE AQUI o seu firebaseConfig (Firebase → Configurações do projeto → Seus apps)
const firebaseConfig = {
  apiKey: "AIzaSyBhmXrkAqPFMKG-MJpEAHUPFHdaaqKzRYo",
  authDomain: "meu-formulario-27ff5.firebaseapp.com",
  projectId: "meu-formulario-27ff5",
  storageBucket: "meu-formulario-27ff5.firebasestorage.app",
  messagingSenderId: "410159862075",
  appId: "1:410159862075:web:41b5c6a244f58baf04e71e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const formulario = document.getElementById("formulario");
const botao = formulario.querySelector(".botao");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault(); // evita recarregar a página

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const valor = Number(document.getElementById("valor").value);

  botao.disabled = true;
  botao.textContent = "Enviando...";

  try {
    await addDoc(collection(db, "depositos"), {
      nome: nome,
      email: email,
      valor: valor,
      dataEnvio: serverTimestamp()
    });

    alert("Dados enviados!");
    formulario.reset();
  } catch (erro) {
    console.error("Erro ao enviar:", erro);
    alert("Não foi possível enviar. Abra o console (F12) para ver o erro.");
  } finally {
    botao.disabled = false;
    botao.textContent = "Enviar dados";
  }
});
