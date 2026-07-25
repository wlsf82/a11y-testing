/*
  Banco Simulado — demonstração de acessibilidade (EN / PT-BR / ES).

  Por padrão a página contém os 6 bugs descritos no playbook.
  O toggle "modo acessível" aplica/desfaz TODAS as correções em tempo
  real, para comparar com WAVE, axe DevTools ou um leitor de tela.

  O seletor de idioma traduz toda a interface. No modo acessível, o
  atributo lang do documento passa a refletir o idioma escolhido,
  reforçando a correção do BUG #6.
*/

(function () {
  'use strict';

  var I18N = {
    'en': {
      'html.lang': 'en',
      'demo.title': 'Banco Simulado · Accessibility Demo',
      'demo.lang': 'Language',
      'demo.toggle': 'Enable accessible mode (fixes the 6 bugs)',
      'acct.greeting': 'Hello, Maria',
      'acct.details': 'Checking account · Branch 0001 · Account 12345-6',
      'acct.balanceNote': 'Available balance, updated just now',
      'transfer.title': 'Make a transfer',
      'field.nome': 'Recipient name',
      'field.cpf': 'Recipient tax ID (CPF)',
      'field.valor': 'Amount',
      'field.data': 'Date',
      'ph.nome': 'Recipient name',
      'btn.transfer': 'Transfer',
      'transfer.status': 'Transfer to {name} sent (simulation).',
      'transfer.incomplete': 'Please fill in all fields before transferring.',
      'offer.title': 'Order your Simulado Black card',
      'offer.note': 'No annual fee for the first year. Terms apply.',
      'footer.legal': 'Banco Simulado S.A. · Demo environment · Not a real institution.',
      'a11y.logoAlt': 'Banco Simulado — home',
      'a11y.cardAlt': 'Black Simulado Black card with gold accents',
      'a11y.notifLabel': 'Notifications, 3 unread',
      'a11y.menuLabel': 'Open navigation menu',
      'a11y.ctaLabel': 'Order the Simulado Black card',
      'a11y.social': 'Follow us on {net}'
    },
    'pt-br': {
      'html.lang': 'pt-br',
      'demo.title': 'Banco Simulado · Demo de Acessibilidade',
      'demo.lang': 'Idioma',
      'demo.toggle': 'Ativar modo acessível (corrige os 6 bugs)',
      'acct.greeting': 'Olá, Maria',
      'acct.details': 'Conta corrente · Agência 0001 · Conta 12345-6',
      'acct.balanceNote': 'Saldo disponível, atualizado agora há pouco',
      'transfer.title': 'Fazer uma transferência',
      'field.nome': 'Nome do favorecido',
      'field.cpf': 'CPF do favorecido',
      'field.valor': 'Valor',
      'field.data': 'Data',
      'ph.nome': 'Nome do favorecido',
      'btn.transfer': 'Transferir',
      'transfer.status': 'Transferência para {name} enviada (simulação).',
      'transfer.incomplete': 'Preencha todos os campos antes de transferir.',
      'offer.title': 'Peça seu cartão Simulado Black',
      'offer.note': 'Anuidade grátis no primeiro ano. Consulte condições.',
      'footer.legal': 'Banco Simulado S.A. · Ambiente de demonstração · Não é uma instituição real.',
      'a11y.logoAlt': 'Banco Simulado — página inicial',
      'a11y.cardAlt': 'Cartão Simulado Black na cor preta com detalhes dourados',
      'a11y.notifLabel': 'Notificações, 3 não lidas',
      'a11y.menuLabel': 'Abrir menu de navegação',
      'a11y.ctaLabel': 'Pedir o cartão Simulado Black',
      'a11y.social': 'Siga-nos no {net}'
    },
    'es': {
      'html.lang': 'es',
      'demo.title': 'Banco Simulado · Demo de Accesibilidad',
      'demo.lang': 'Idioma',
      'demo.toggle': 'Activar modo accesible (corrige los 6 errores)',
      'acct.greeting': 'Hola, Maria',
      'acct.details': 'Cuenta corriente · Sucursal 0001 · Cuenta 12345-6',
      'acct.balanceNote': 'Saldo disponible, actualizado hace un momento',
      'transfer.title': 'Hacer una transferencia',
      'field.nome': 'Nombre del beneficiario',
      'field.cpf': 'Identificación fiscal del beneficiario (CPF)',
      'field.valor': 'Importe',
      'field.data': 'Fecha',
      'ph.nome': 'Nombre del beneficiario',
      'btn.transfer': 'Transferir',
      'transfer.status': 'Transferencia a {name} enviada (simulación).',
      'transfer.incomplete': 'Completa todos los campos antes de transferir.',
      'offer.title': 'Solicita tu tarjeta Simulado Black',
      'offer.note': 'Sin cuota anual el primer año. Aplican condiciones.',
      'footer.legal': 'Banco Simulado S.A. · Entorno de demostración · No es una institución real.',
      'a11y.logoAlt': 'Banco Simulado — página de inicio',
      'a11y.cardAlt': 'Tarjeta Simulado Black en color negro con detalles dorados',
      'a11y.notifLabel': 'Notificaciones, 3 sin leer',
      'a11y.menuLabel': 'Abrir menú de navegación',
      'a11y.ctaLabel': 'Solicitar la tarjeta Simulado Black',
      'a11y.social': 'Síguenos en {net}'
    }
  };

  var currentLang = 'en';

  function t(key) {
    var dict = I18N[currentLang] || I18N.en;
    return dict[key] != null ? dict[key] : key;
  }

  // ---------- Elementos ----------
  var html = document.documentElement;
  var body = document.body;
  var toggle = document.getElementById('a11y-toggle');
  var langSelect = document.getElementById('lang-select');

  var logo = document.getElementById('logo');
  var cardArt = document.getElementById('card-art');
  var divider = document.getElementById('divider');
  var btnNotif = document.getElementById('btn-notif');
  var btnMenu = document.getElementById('btn-menu');
  var ctaCard = document.getElementById('cta-card');
  var socialLinks = document.querySelectorAll('.social__link');
  var form = document.getElementById('transfer-form');
  var status = document.getElementById('form-status');

  // ---------- Tradução da UI ----------
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
    });
  }

  function setLang(lang) {
    currentLang = I18N[lang] ? lang : 'en';
    langSelect.value = currentLang;
    applyTranslations();
    // Se o modo acessível está ativo, reaplica as correções traduzidas
    // (alt, aria-label, texto sr-only e o lang do documento).
    if (toggle.checked) applyA11yStrings();
  }

  // ---------- Correções de acessibilidade ----------
  // Aplica/atualiza os textos das correções no idioma atual.
  function applyA11yStrings() {
    html.setAttribute('lang', t('html.lang'));          // BUG #6
    logo.setAttribute('alt', t('a11y.logoAlt'));         // BUG #2
    cardArt.setAttribute('alt', t('a11y.cardAlt'));      // BUG #2
    divider.setAttribute('alt', '');                     // decorativa
    btnNotif.setAttribute('aria-label', t('a11y.notifLabel')); // BUG #5
    btnMenu.setAttribute('aria-label', t('a11y.menuLabel'));   // BUG #5
    setSrText(ctaCard, t('a11y.ctaLabel'));              // BUG #4
    socialLinks.forEach(function (link) {                // BUG #4
      setSrText(link, t('a11y.social').replace('{net}', link.getAttribute('data-net')));
    });
  }

  function enableA11y() {
    body.classList.add('a11y'); // BUG #1 — contraste (via CSS)

    // BUG #3 — troca <span> por <label for> (preservando data-i18n)
    document.querySelectorAll('.field__fauxlabel:not(.js-real-label)').forEach(function (span) {
      var label = document.createElement('label');
      label.setAttribute('for', span.getAttribute('data-for'));
      label.className = 'field__fauxlabel js-real-label';
      if (span.hasAttribute('data-i18n')) label.setAttribute('data-i18n', span.getAttribute('data-i18n'));
      label.textContent = span.textContent;
      span.replaceWith(label);
    });

    applyA11yStrings();
  }

  function disableA11y() {
    body.classList.remove('a11y');
    html.removeAttribute('lang');

    logo.removeAttribute('alt');
    cardArt.removeAttribute('alt');
    divider.removeAttribute('alt');
    btnNotif.removeAttribute('aria-label');
    btnMenu.removeAttribute('aria-label');
    removeSrText(ctaCard);
    socialLinks.forEach(removeSrText);

    // Reverte <label> de volta para <span>
    document.querySelectorAll('.js-real-label').forEach(function (label) {
      var span = document.createElement('span');
      span.className = 'field__fauxlabel';
      span.setAttribute('data-for', label.getAttribute('for'));
      if (label.hasAttribute('data-i18n')) span.setAttribute('data-i18n', label.getAttribute('data-i18n'));
      span.textContent = label.textContent;
      label.replaceWith(span);
    });
  }

  function setSrText(el, text) {
    var s = el.querySelector('.sr-only');
    if (!s) {
      s = document.createElement('span');
      s.className = 'sr-only';
      el.insertBefore(s, el.firstChild);
    }
    s.textContent = text;
  }

  function removeSrText(el) {
    var s = el.querySelector('.sr-only');
    if (s) s.remove();
  }

  // ---------- Eventos ----------
  toggle.addEventListener('change', function () {
    if (toggle.checked) enableA11y();
    else disableA11y();
  });

  langSelect.addEventListener('change', function () {
    setLang(langSelect.value);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Só permite a transferência quando todos os campos estão preenchidos.
    var inputs = form.querySelectorAll('.field__input');
    var allFilled = Array.prototype.every.call(inputs, function (input) {
      return input.value.trim() !== '';
    });

    if (!allFilled) {
      status.textContent = t('transfer.incomplete');
      status.classList.add('form__status--error');
      return;
    }

    var nome = document.getElementById('f-nome').value.trim();
    status.textContent = t('transfer.status').replace('{name}', nome);
    status.classList.remove('form__status--error');
    form.reset();
  });

  // ---------- Inicialização ----------
  setLang('en');
})();
