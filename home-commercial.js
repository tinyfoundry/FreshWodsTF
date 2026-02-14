(function () {
  const fallbackConfig = {
    movements: {
      lower: [
        { name: 'Air Squats', reps: [20, 30, 40] },
        { name: 'Reverse Lunges (alternating)', reps: [12, 16, 20] },
        { name: 'Step-ups (alternating)', reps: [12, 16, 20] },
        { name: 'Goblet Squats', reps: [12, 15, 18], requires: ['dumbbells'] },
        { name: 'Box Jumps', reps: [10, 12, 15], requires: ['boxJumps'] }
      ],
      upperPush: [
        { name: 'Push-ups', reps: [10, 15, 20] },
        { name: 'Dumbbell Floor Press', reps: [10, 12, 15], requires: ['dumbbells'] },
        { name: 'Dumbbell Push Press', reps: [10, 12, 15], requires: ['dumbbells'] },
        { name: 'Barbell Push Press', reps: [8, 10, 12], requires: ['barbell'] }
      ],
      upperPull: [
        { name: 'Pull-ups', reps: [6, 8, 10] },
        { name: 'Single-Arm Dumbbell Row (alternating)', reps: [10, 12, 15], requires: ['dumbbells'] },
        { name: 'Barbell Bent-Over Row', reps: [8, 10, 12], requires: ['barbell'] }
      ],
      engineCore: [
        { name: 'Run', reps: ['200m', '300m', '400m'] },
        { name: 'Jump Rope', reps: [40, 60, 80] },
        { name: 'Row', reps: ['200m', '300m', '400m'], requires: ['rower'] },
        { name: 'Assault Bike', reps: ['8 Cals', '10 Cals', '12 Cals'], requires: ['assaultBike'] },
        { name: 'Sit-ups', reps: [15, 20, 25] },
        { name: 'Plank Hold', reps: ['30 sec', '40 sec', '50 sec'] }
      ]
    }
  };

  let config = fallbackConfig;

  function getEquipmentSelection() {
    return {
      dumbbells: true,
      treadmillOrRun: true,
      jumpRope: true,
      pullupBar: true,
      rower: !!document.getElementById('homeHasRower')?.checked,
      assaultBike: !!document.getElementById('homeHasAssaultBike')?.checked,
      barbell: !!document.getElementById('homeHasBarbell')?.checked,
      boxJumps: !!document.getElementById('homeHasBoxJumps')?.checked,
      noErgs: !!document.getElementById('homeNoErgs')?.checked,
      gymType: document.getElementById('homeGymType')?.value || 'commercial'
    };
  }


  function isBarbellMovement(movement) {
    return /barbell|clean|snatch|deadlift|thruster|push press/i.test(movement.name || '');
  }

  function allowsByGymType(movement, equipment) {
    // Barbell selection explicitly overrides gym-type barbell exclusions.
    if (equipment.barbell && isBarbellMovement(movement)) return true;
    if (equipment.gymType === 'home' && isBarbellMovement(movement)) return false;
    return true;
  }

  function movementAllowed(movement, equipment) {
    const requires = movement.requires || [];
    const requiresMatch = requires.every((requiredItem) => equipment[requiredItem]);
    if (!requiresMatch) return false;
    if (!allowsByGymType(movement, equipment)) return false;
    if (equipment.noErgs && (movement.name === 'Row' || movement.name === 'Assault Bike')) return false;
    return true;
  }

  function pickMovement(group, equipment, avoid) {
    const avoidSet = avoid || new Set();
    const pool = (group || []).filter((movement) => movementAllowed(movement, equipment) && !avoidSet.has(movement.name));
    const chosen = window.FWUtils.getRandom(pool.length ? pool : group) || { name: 'Air Squats', reps: [20] };
    const rep = window.FWUtils.getRandom(chosen.reps) || chosen.reps[0];
    return { name: chosen.name, rep };
  }

  function formatLine(move) {
    const rep = String(move.rep);
    if (/m|sec|Cals/.test(rep)) return `${move.name} — ${rep}`;
    return `${rep} ${move.name}`;
  }

  function buildHomeWorkout() {
    const duration = document.getElementById('homeDuration').value;
    const equipment = getEquipmentSelection();
    const movements = config.movements || fallbackConfig.movements;

    const used = new Set();
    const lower1 = pickMovement(movements.lower, equipment, used); used.add(lower1.name);
    const upper1 = Math.random() < 0.5
      ? pickMovement(movements.upperPush, equipment, used)
      : pickMovement(movements.upperPull, equipment, used);
    used.add(upper1.name);

    let engine1;
    if (equipment.rower) {
      engine1 = { name: 'Row', rep: window.FWUtils.getRandom(['200m', '300m', '400m']) };
    } else if (equipment.assaultBike) {
      engine1 = { name: 'Assault Bike', rep: window.FWUtils.getRandom(['8 Cals', '10 Cals', '12 Cals']) };
    } else {
      engine1 = pickMovement(movements.engineCore, equipment, used);
    }
    used.add(engine1.name);

    const lower2 = pickMovement(movements.lower, equipment, used); used.add(lower2.name);
    const engine2 = pickMovement(movements.engineCore, equipment, used);

    const format = window.FWUtils.getRandom(['AMRAP', 'EMOM', 'For Time']) || 'For Time';

    if (format === 'AMRAP') {
      const minutes = window.FWUtils.getDurationMinutes(duration, { short: 8, medium: 12, long: 18 });
      return {
        name: 'Home Engine Builder',
        type: 'AMRAP',
        format: `${minutes}-minute AMRAP`,
        content: `AMRAP ${minutes}:\n${formatLine(lower1)}\n${formatLine(upper1)}\n${formatLine(engine1)}\n${formatLine(lower2)}\n${formatLine(engine2)}`
      };
    }

    if (format === 'EMOM') {
      const minutes = duration === 'long' ? 18 : 12;
      return {
        name: 'Garage Clockwork',
        type: 'EMOM',
        format: `EMOM ${minutes}`,
        content: `EMOM ${minutes}\nMinute 1: ${formatLine(lower1)}\nMinute 2: ${formatLine(upper1)}\nMinute 3: ${formatLine(engine1)}\nMinute 4: ${formatLine(lower2)}`
      };
    }

    const cap = duration === 'short' ? 7 : (duration === 'long' ? 20 : 15);
    return {
      name: 'Home Classic',
      type: 'For Time',
      format: `For Time (cap ${cap} min)`,
      content: `For Time:\n${formatLine(lower1)}\n${formatLine(upper1)}\n${formatLine(engine1)}\n${formatLine(lower2)}\n${formatLine(engine2)}`
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
        content: 'For Time:\n20 Air Squats\n12 Push-ups\n300m Run\n20 Sit-ups'
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
