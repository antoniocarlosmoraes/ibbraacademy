document.getElementById("senha").addEventListener("keyup", function (event) {
  const capsAviso = document.getElementById("caps-aviso");
  if (event.getModifierState("CapsLock")) {
    capsAviso.style.display = "block";
  } else {
    capsAviso.style.display = "none";
  }
});

function toggleSenha() {
  const inputSenha = document.getElementById("senha");
  const btnOlho = document.getElementById("icone-olho");
  if (inputSenha.type === "password") {
    inputSenha.type = "text";
    btnOlho.innerHTML = "🙈";
  } else {
    inputSenha.type = "password";
    btnOlho.innerHTML = "👁️";
  }
}

function realizarLogin(event) {
  event.preventDefault();
  const btnEntrar = document.getElementById("btn-entrar");
  const senha = document.getElementById("senha");
  const erroMsg = document.getElementById("senha-erro");
  const form = document.getElementById("login-form");

  const temMaiuscula = /[A-Z]/.test(senha.value);
  const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha.value);

  if (!temMaiuscula || !temEspecial) {
    senha.classList.add("input-error");
    erroMsg.style.display = "block";
    form.classList.add("shake-animation");
    setTimeout(() => form.classList.remove("shake-animation"), 400);
    senha.focus();
    return;
  }

  senha.classList.remove("input-error");
  erroMsg.style.display = "none";
  btnEntrar.classList.add("loading");
  btnEntrar.innerHTML = "A validar credenciais... ⏳";

  setTimeout(() => {
    btnEntrar.classList.remove("loading");
    btnEntrar.innerHTML = "Entrar na Plataforma";

    document.getElementById("etapa-login").style.display = "none";
    document.getElementById("etapa-perfis").style.display = "flex";
  }, 1500);
}

function selecionarPerfil(nomePerfil) {
  alert(`Entrando como ${nomePerfil}...`);
  window.open("https://codepen.io/ibbraacademy/full/emdZMMd", "_blank");
}

function voltarAoLogin() {
  document.getElementById("etapa-perfis").style.display = "none";
  document.getElementById("etapa-login").style.display = "block";
}

function loginSocial(plataforma) {
  alert(`A iniciar sessão rápida e segura com o ${plataforma}...`);
  document.getElementById("etapa-login").style.display = "none";
  document.getElementById("etapa-perfis").style.display = "flex";
}
