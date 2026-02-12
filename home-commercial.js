(function () {
  const fallbackConfig = {
    constraints: { maxDumbbellLb: 50, noBarbells: true, noErgsByDefault: true },
    movements: {
      lower: [
        { name: 'Air Squats', reps: [20, 30, 40] },
        { name: 'Reverse Lunges (alternating)', reps: [12, 16, 20] },
        { name: 'Step-ups (alternating)', reps: [12, 16, 20] },
        { name: 'Goblet Squats', reps: [12, 15, 18], requires: ['dumbbells'] }
      ],
      upperPush: [
        { name: 'Push-ups', reps: [10, 15, 20] },
        { name: 'Dumbbell Floor Press', reps: [10, 12, 15], requires: ['dumbbells'] }
      ],
      upperPull: [
        { name: 'Pull-ups', reps: [6, 8, 10], requires: ['pullupBar'] },
        { name: 'Single-Arm Dumbbell Row (alternating)', reps: [10, 12, 15], requires: ['dumbbells'] }
      ],
      engineCore: [
        { name: 'Run', reps: ['200m', '300m', '400m'], requires: ['treadmillOrRun'] },
        { name: 'Jump Rope', reps: [40, 60, 80], requires: ['jumpRope'] },
        { name: 'Row', reps: ['200m', '300m', '400m'], requires: ['rower'] },
        { name: 'Sit-ups', reps: [15, 20, 25] },
        { name: 'Plank Hold', reps: ['30 sec', '40 sec', '50 sec'] }
      ]
    }
  };

  let config = fallbackConfig;

  function getEquipmentSelection() {
    return {
      dumbbells: !!document.getElementById('homeHasDumbbells')?.checked,
      treadmillOrRun: !!document.getElementById('homeHasRun')?.checked,
      jumpRope: !!document.getElementById('homeHasJumpRope')?.checked,
      pullupBar: !!document.getElementById('homeHasPullupBar')?.checked,
      rower: !!document.getElementById('homeHasRower')?.checked,
      noErgs: !!document.getElementById('homeNoErgs')?.checked
    };
  }

  function movementAllowed(movement, equipment) {
    const requires = movement.requires || [];
    const requiresMatch = requires.every((requiredItem) => equipment[requiredItem]);
    if (!requiresMatch) return false;
    if (equipment.noErgs && movement.name === 'Row') return false;
    return true;
  }

  function pickMovement(group, equipment) {
    const pool = (group || []).filter((movement) => movementAllowed(movement, equipment));
    const chosen = window.FWUtils.getRandom(pool.length ? pool : group) || { name: 'Air Squats', reps: [20] };
    const rep = window.FWUtils.getRandom(chosen.reps) || chosen.reps[0];
    return { name: chosen.name, rep };
  }

  function formatLine(move) {
    const rep = String(move.rep);
    if (/m|sec/.test(rep)) return `${move.name} — ${rep}`;
    return `${rep} ${move.name}`;
  }

  function buildHomeWorkout() {
    const duration = document.getElementById('homeDuration').value;
    const equipment = getEquipmentSelection();
    const movements = config.movements || fallbackConfig.movements;

    const lower = pickMovement(movements.lower, equipment);
    const upper = Math.random() < 0.5
      ? pickMovement(movements.upperPush, equipment)
      : pickMovement(movements.upperPull, equipment);
    const engine = pickMovement(movements.engineCore, equipment);

    const format = window.FWUtils.getRandom(['AMRAP', 'EMOM', 'For Time']) || 'For Time';

    if (format === 'AMRAP') {
      const minutes = window.FWUtils.getDurationMinutes(duration, { short: 8, medium: 12, long: 18 });
      return {
        name: 'Home Engine Builder',
        type: 'AMRAP',
        format: `${minutes}-minute AMRAP`,
        content: `AMRAP ${minutes}:\n${formatLine(lower)}\n${formatLine(upper)}\n${formatLine(engine)}`
      };
    }

    if (format === 'EMOM') {
      const minutes = duration === 'long' ? 18 : 12;
      return {
        name: 'Garage Clockwork',
        type: 'EMOM',
        format: `EMOM ${minutes}`,
        content: `EMOM ${minutes}\nMinute 1: ${formatLine(lower)}\nMinute 2: ${formatLine(upper)}\nMinute 3: ${formatLine(engine)}`
      };
    }

    const cap = duration === 'short' ? 7 : (duration === 'long' ? 20 : 15);
    return {
      name: 'Home Classic',
      type: 'For Time',
      format: `For Time (cap ${cap} min)`,
      content: `For Time:\n${formatLine(lower)}\n${formatLine(upper)}\n${formatLine(engine)}`
    };
  }

  function renderHomeWod(wod) {
    const area = document.getElementById('homeDisplayArea');
    if (!area) return;
    area.innerHTML = `
      <div class="wod-result">
        <div class="wod-header">
          <div class="wod-title">${wod.name}</div>
          <span class="wod-type-badge">${wod.type}</span>
        </div>
        <div class="wod-content">Format: ${wod.format}\n\n${wod.content}</div>
      </div>
    `;
  }

  function generateHomeWOD() {
    try {
      const wod = buildHomeWorkout();
      renderHomeWod(wod);
    } catch (err) {
      console.error('generateHomeWOD failed:', err);
      window.FWUtils.showToast((err && err.message) ? `Error: ${err.message}` : 'Failed to generate Home/Commercial WOD');
      renderHomeWod({
        name: 'Home Fallback',
        type: 'For Time',
        format: 'For Time (cap 12 min)',
        content: 'For Time:\n20 Air Squats\n12 Push-ups\n300m Run'
      });
    }
  }

  async function initPage() {
    config = await window.FWUtils.safeFetchJson('/home-commercial-config.json', fallbackConfig);

    const backButton = document.getElementById('backToWodGen');
    if (backButton) {
      backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    }

    const generateButton = document.getElementById('generateHomeButton');
    if (generateButton) generateButton.addEventListener('click', generateHomeWOD);
  }

  document.addEventListener('DOMContentLoaded', () => {
    try {
      initPage();
    } catch (err) {
      console.error('Init failed:', err);
    }
  });
})();
