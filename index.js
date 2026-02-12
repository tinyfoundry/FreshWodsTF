(function () {
  const fallbackConfig = {
    movements: {
      mono: ['Run', 'Burpees', 'Double Unders'],
      bodyweight: ['Pull-ups', 'Push-ups', 'Air Squats', 'Sit-ups', 'Lunges'],
      weightlifting: ['Thrusters', 'Deadlifts', 'Power Cleans', 'Snatches'],
      gymnastics: ['Handstand Push-ups', 'Chest-to-Bar Pull-ups', 'Toes to Bar']
    }
  };

  const curated = {
    girls: [
      { name: 'Fran', type: 'RFT', content: '21-15-9:\nThrusters (95/65 lb)\nPull-ups', format: 'Classic benchmark', stimulus: 'Power-endurance' },
      { name: 'Helen', type: 'RFT', content: '3 rounds for time:\nRun 400m\n21 Kettlebell Swings\n12 Pull-ups', format: 'Classic benchmark', stimulus: 'Aerobic + pulling endurance' },
      { name: 'Annie', type: 'For Time', content: '50-40-30-20-10:\nDouble-unders\nSit-ups', format: 'Classic benchmark', stimulus: 'Core + coordination' },
      { name: 'Cindy', type: 'AMRAP', content: '20-minute AMRAP:\n5 Pull-ups\n10 Push-ups\n15 Air Squats', format: '20-minute AMRAP', stimulus: 'Bodyweight capacity' }
    ],
    heroes: [
      { name: 'Murph', type: 'Chipper', content: 'Run 1 mile\n100 Pull-ups\n200 Push-ups\n300 Squats\nRun 1 mile', format: 'Long hero', stimulus: 'Endurance + grit' },
      { name: 'DT', type: 'RFT', content: '5 rounds for time:\n12 Deadlifts\n9 Hang Power Cleans\n6 Push Jerks (155/105)', format: 'Barbell cycling', stimulus: 'Power-endurance' },
      { name: 'Randy', type: 'For Time', content: '75 Power Snatches (75/55)', format: 'Sprint hero', stimulus: 'Barbell speed' }
    ],
    open: [
      { name: 'Open 24.1', type: 'AMRAP', format: '15-minute AMRAP', content: '21 Dumbbell Snatches\n21 Burpees Over Dumbbell\n15 Dumbbell Snatches\n15 Burpees Over Dumbbell\n9 Dumbbell Snatches\n9 Burpees Over Dumbbell' },
      { name: 'Open 22.1', type: 'AMRAP', format: '15-minute AMRAP', content: '3 Wall Walks\n12 Dumbbell Snatches\n15 Box Jump Overs' },
      { name: 'Open 20.1', type: 'For Time', format: '15-minute time cap', content: '10 rounds:\n8 Ground-to-Overheads\n10 Bar-Facing Burpees' }
    ]
  };

  let appConfig = fallbackConfig;

  function switchMainNav(activeButtonId) {
    document.querySelectorAll('.nav-btn').forEach((button) => button.classList.remove('active'));
    const activeButton = document.getElementById(activeButtonId);
    if (activeButton) activeButton.classList.add('active');
  }

  function buildMovementList(count) {
    const { getRandom } = window.FWUtils;
    const lines = [];
    const allPools = appConfig.movements || fallbackConfig.movements;
    const keys = Object.keys(allPools);
    for (let i = 0; i < count; i += 1) {
      const category = getRandom(keys);
      const movement = getRandom(allPools[category]) || 'Air Squats';
      const reps = getRandom([8, 10, 12, 15, 20]);
      lines.push(`${reps} ${movement}`);
    }
    return lines.join('\n');
  }

  function generateName(type) {
    const { getRandom } = window.FWUtils;
    const words = ['Engine', 'Builder', 'Crusher', 'Grinder', 'Pulse'];
    return `${type} ${getRandom(words)}`;
  }

  function generateDynamicWod(typeSelect, duration) {
    const { getDurationMinutes } = window.FWUtils;
    const type = typeSelect === 'any' ? window.FWUtils.getRandom(['AMRAP', 'EMOM', 'RFT', 'For Time', 'CHIPPER']) : typeSelect.toUpperCase();
    if (type === 'AMRAP') {
      const minutes = getDurationMinutes(duration, { short: 7, medium: 12, long: 20 });
      return {
        name: generateName('AMRAP'),
        type,
        format: `${minutes}-minute AMRAP`,
        content: `AMRAP ${minutes}:\n${buildMovementList(3)}`
      };
    }
    if (type === 'EMOM') {
      const minutes = duration === 'short' ? 10 : (duration === 'long' ? 18 : 12);
      return {
        name: generateName('EMOM'),
        type,
        format: `EMOM ${minutes}`,
        content: `EMOM ${minutes}\nMinute 1: ${buildMovementList(1)}\nMinute 2: ${buildMovementList(1)}`
      };
    }
    if (type === 'RFT') {
      const rounds = duration === 'short' ? 3 : (duration === 'long' ? 6 : 4);
      return {
        name: generateName('RFT'),
        type,
        format: `${rounds} rounds for time`,
        content: `${rounds} rounds for time:\n${buildMovementList(3)}`
      };
    }
    if (type === 'CHIPPER') {
      return {
        name: generateName('Chipper'),
        type: 'CHIPPER',
        format: 'For Time (cap 20 min)',
        content: `For Time:\n${buildMovementList(5)}`
      };
    }
    return {
      name: generateName('Classic'),
      type: 'For Time',
      format: `For Time (cap ${duration === 'short' ? 7 : duration === 'long' ? 20 : 15} min)`,
      content: `For Time:\n${buildMovementList(4)}`
    };
  }

  function renderWod(wod) {
    const display = document.getElementById('wodDisplayArea');
    if (!display) return;
    const formatLine = wod.format ? `Format: ${wod.format}\n\n` : '';
    display.innerHTML = `
      <div class="wod-result">
        <div class="wod-header">
          <div class="wod-title">${wod.name || 'WOD'}</div>
          <span class="wod-type-badge">${wod.type || ''}</span>
        </div>
        <div class="wod-content">${formatLine}${wod.content || ''}</div>
      </div>
    `;
  }

  function generateWOD() {
    try {
      const typeSelect = document.getElementById('wodType').value;
      const duration = document.getElementById('wodDuration').value;

      let wod;
      if (typeSelect === 'girls' || typeSelect === 'heroes' || typeSelect === 'open') {
        const list = window.FWUtils.filterWodsByDuration(curated[typeSelect], duration);
        wod = window.FWUtils.getRandom(list) || window.FWUtils.getRandom(curated[typeSelect]);
      } else {
        wod = generateDynamicWod(typeSelect, duration);
      }
      renderWod(wod);
    } catch (err) {
      console.error('generateWOD failed:', err);
      window.FWUtils.showToast((err && err.message) ? `Error: ${err.message}` : 'Failed to generate WOD');
      renderWod({
        name: 'Fallback WOD',
        type: 'For Time',
        format: 'For Time (cap 12 min)',
        content: '3 rounds:\n10 Air Squats\n10 Push-ups\n10 Sit-ups'
      });
    }
  }

  async function initPage() {
    appConfig = await window.FWUtils.safeFetchJson('/config.json', fallbackConfig);

    const generateButton = document.getElementById('generateWodButton');
    if (generateButton) generateButton.addEventListener('click', generateWOD);

    const navWod = document.getElementById('navWod');
    if (navWod) {
      navWod.addEventListener('click', () => switchMainNav('navWod'));
    }

    const navHome = document.getElementById('navHome');
    if (navHome) {
      navHome.addEventListener('click', () => {
        switchMainNav('navHome');
        window.location.href = navHome.dataset.href || 'home-commercial.html';
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    try {
      initPage();
    } catch (err) {
      console.error('Init failed:', err);
    }
  });
})();
