// Função para atualizar o horário atual na tela
function updateCurrentTime() {
  const currentTimeElement = document.getElementById('current-time');
  const now = new Date();
  currentTimeElement.textContent = now.toLocaleTimeString();
}

// Função para preencher os campos de hora e minuto
function populateTimeOptions() {
  const hourSelect = document.getElementById('hour');
  const minuteSelect = document.getElementById('minute');

  // Preencher horas
  for (let i = 0; i < 24; i++) {
    const option = document.createElement('option');
    option.value = i < 10 ? '0' + i : i;
    option.textContent = i < 10 ? '0' + i : i;
    hourSelect.appendChild(option);
  }

  // Preencher minutos
  for (let i = 0; i < 60; i++) {
    const option = document.createElement('option');
    option.value = i < 10 ? '0' + i : i;
    option.textContent = i < 10 ? '0' + i : i;
    minuteSelect.appendChild(option);
  }
}

// Função para adicionar o alarme à lista
function addAlarm(hour, minute) {
  const alarmList = document.getElementById('alarm-list');
  const alarmItem = document.createElement('li');

  alarmItem.innerHTML = `${hour}:${minute}`;
  
  // Botão para excluir o alarme
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Excluir';
  deleteButton.onclick = function() {
    alarmItem.remove();
  };

  alarmItem.appendChild(deleteButton);
  alarmList.appendChild(alarmItem);
}

// Definir alarme ao clicar no botão
document.getElementById('set-alarm').addEventListener('click', () => {
  const hour = document.getElementById('hour').value;
  const minute = document.getElementById('minute').value;

  if (hour !== 'Hour' && minute !== 'Minute') {
    addAlarm(hour, minute);
  }
});

// Atualizar hora atual a cada segundo
setInterval(updateCurrentTime, 1000);

// Preencher as opções de hora e minuto ao carregar
window.onload = function() {
  populateTimeOptions();
};
















