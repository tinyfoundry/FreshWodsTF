(function () {
  const fallbackConfig = {
    movements: {
      mono: ['Run', 'Burpees', 'Double Unders'],
      bodyweight: ['Pull-ups', 'Push-ups', 'Air Squats', 'Sit-ups', 'Lunges'],
      weightlifting: ['Thrusters', 'Deadlifts', 'Power Cleans', 'Snatches'],
      gymnastics: ['Handstand Push-ups', 'Chest-to-Bar Pull-ups', 'Toes to Bar']
    }
  };

  const girls = [
    { name: 'Fran', type: 'RFT', durationBucket: 'short', format: '21-15-9', content: 'Thrusters (95/65 lb)\nPull-ups', story: 'Classic sprint benchmark from early CrossFit used to test power-endurance and pacing under high heart rate.', stimulus: 'Fast turnover + pull volume' },
    { name: 'Grace', type: 'For Time', durationBucket: 'short', format: 'For Time', content: '30 Clean and Jerks (135/95 lb)', story: 'A single-modality barbell sprint that rewards efficient cycling and composure.', stimulus: 'Barbell power output' },
    { name: 'Isabel', type: 'For Time', durationBucket: 'short', format: 'For Time', content: '30 Snatches (135/95 lb)', story: 'Olympic lifting benchmark emphasizing technique under fatigue.', stimulus: 'Speed-strength and bar path consistency' },
    { name: 'Diane', type: 'RFT', durationBucket: 'short', format: '21-15-9', content: 'Deadlifts (225/155 lb)\nHandstand Push-ups', story: 'Heavy posterior-chain pulling mixed with inverted pressing for a high-skill sprint.', stimulus: 'Posterior chain + shoulder stamina' },
    { name: 'Elizabeth', type: 'RFT', durationBucket: 'short', format: '21-15-9', content: 'Cleans (135/95 lb)\nRing Dips', story: 'Classic benchmark blending barbell speed and upper-body pressing capacity.', stimulus: 'Midline stability + pressing fatigue' },
    { name: 'Annie', type: 'For Time', durationBucket: 'medium', format: '50-40-30-20-10', content: 'Double-unders\nSit-ups', story: 'A skill-and-core benchmark where breathing control determines pace.', stimulus: 'Coordination + trunk endurance' },
    { name: 'Karen', type: 'For Time', durationBucket: 'medium', format: 'For Time', content: '150 Wall Balls (20/14 lb)', story: 'Simple and brutal benchmark emphasizing local muscular endurance.', stimulus: 'Leg stamina + breathing control' },
    { name: 'Helen', type: 'RFT', durationBucket: 'medium', format: '3 rounds for time', content: 'Run 400m\n21 Kettlebell Swings (53/35 lb)\n12 Pull-ups', story: 'A classic mixed-modal test balancing run pace and pull stamina.', stimulus: 'Aerobic pacing + grip management' },
    { name: 'Nancy', type: 'RFT', durationBucket: 'medium', format: '5 rounds for time', content: 'Run 400m\n15 Overhead Squats (95/65 lb)', story: 'Engine plus overhead stability benchmark with limited rest.', stimulus: 'Shoulder endurance + running repeatability' },
    { name: 'Jackie', type: 'For Time', durationBucket: 'medium', format: 'For Time', content: '1000m Row\n50 Thrusters (45/35 lb)\n30 Pull-ups', story: 'Benchmark with a hard opening row and difficult transition to barbell and gymnastic pulling.', stimulus: 'Leg drive + transition fatigue' },
    { name: 'Eva', type: 'RFT', durationBucket: 'long', format: '5 rounds for time', content: 'Run 800m\n30 Kettlebell Swings\n30 Pull-ups', story: 'Long benchmark demanding disciplined pacing and grip strategy.', stimulus: 'Long mixed-modal endurance' },
    { name: 'Barbara', type: 'RFT', durationBucket: 'long', format: '5 rounds, each for time', content: '20 Pull-ups\n30 Push-ups\n40 Sit-ups\n50 Squats\n(Rest 3:00)', story: 'Volume-heavy benchmark where repeatability matters more than first-round speed.', stimulus: 'Bodyweight stamina + pacing' },
    { name: 'Chelsea', type: 'EMOM', durationBucket: 'long', format: 'EMOM 30', content: '5 Pull-ups\n10 Push-ups\n15 Squats', story: 'Consistency benchmark where cracks in pacing appear late.', stimulus: 'Sustainable output over time' },
    { name: 'Cindy', type: 'AMRAP', durationBucket: 'long', format: '20-minute AMRAP', content: '5 Pull-ups\n10 Push-ups\n15 Air Squats', story: 'Simple bodyweight benchmark used to measure broad work capacity.', stimulus: 'Repeatable bodyweight output' },
    { name: 'Angie', type: 'For Time', durationBucket: 'long', format: 'For Time', content: '100 Pull-ups\n100 Push-ups\n100 Sit-ups\n100 Squats', story: 'Long benchmark requiring partition strategy and muscular endurance.', stimulus: 'High-volume calisthenics'
    }
  ];

  const heroes = [
    { name: 'Murph', durationBucket: 'long', type: 'Chipper', format: 'For Time', content: 'Run 1 mile\n100 Pull-ups\n200 Push-ups\n300 Squats\nRun 1 mile', story: 'Named for Lt. Michael Murphy, this Hero WOD is a flagship endurance-and-grit test.', stimulus: 'Endurance + mental toughness' },
    { name: 'DT', durationBucket: 'medium', type: 'RFT', format: '5 rounds for time', content: '12 Deadlifts\n9 Hang Power Cleans\n6 Push Jerks (155/105 lb)', story: 'In honor of SSgt. Timothy P. Davis; barbell cycling under fatigue.', stimulus: 'Barbell efficiency' },
    { name: 'Randy', durationBucket: 'short', type: 'For Time', format: 'For Time', content: '75 Power Snatches (75/55 lb)', story: 'Tribute to Randy Simmons; one movement, no place to hide.', stimulus: 'Power endurance' },
    { name: 'J.T.', durationBucket: 'medium', type: 'RFT', format: '21-15-9', content: 'Handstand Push-ups\nRing Dips\nPush-ups', story: 'Honors Petty Officer John Tomlinson with high pressing volume.', stimulus: 'Upper-body endurance' },
    { name: 'Nate', durationBucket: 'long', type: 'AMRAP', format: '20-minute AMRAP', content: '2 Muscle-ups\n4 Handstand Push-ups\n8 Kettlebell Swings', story: 'Hero workout blending advanced gymnastics and cyclical power.', stimulus: 'Skill under fatigue' },
    { name: 'Luce', durationBucket: 'long', type: 'RFT', format: '10 rounds for time', content: '10 Deadlifts (225/155)\n10 Burpees\n100m Run', story: 'High-volume hero session requiring consistent pacing.', stimulus: 'Sustained power output' },
    { name: 'Hansen', durationBucket: 'medium', type: 'For Time', format: '21-15-9', content: 'Burpees\nPower Cleans (135/95 lb)', story: 'Shorter hero format with high metabolic demand.', stimulus: 'Breathing under barbell fatigue' },
    { name: 'Whitten', durationBucket: 'medium', type: 'For Time', format: 'For Time', content: '800m Run\n50 Back Squats\n800m Run', story: 'Run-squat-run hero test with heavy leg demand.', stimulus: 'Leg stamina + run pacing' },
    { name: 'Holleyman', durationBucket: 'medium', type: 'RFT', format: '5 rounds for time', content: '10 Deadlifts\n12 Burpees\n400m Run', story: 'Hero workout balancing moderate barbell load and running.', stimulus: 'Sustainable mixed-modal output' },
    { name: 'Manion', durationBucket: 'long', type: 'For Time', format: '4 rounds for time', content: '400m Run\n25 Pull-ups\n50 Push-ups', story: 'High pull/push volume with repeated running intervals.', stimulus: 'Bodyweight endurance' },
    { name: 'Loredo', durationBucket: 'medium', type: 'For Time', format: '21-15-9', content: 'Deadlifts (225/155 lb)\nHandstand Push-ups', story: 'Classic heavy pull + gymnastic press hero format.', stimulus: 'Strength + gymnastics' },
    { name: 'Riley', durationBucket: 'long', type: 'RFT', format: '5 rounds for time', content: '200m Run\n21 Kettlebell Swings\n12 Pull-ups', story: 'Mixed engine hero workout with grip management demands.', stimulus: 'Aerobic + grip stamina' },
    { name: 'Tommy V', durationBucket: 'long', type: 'For Time', format: 'For Time', content: '800m Run\n50 Pull-ups\n200 Push-ups\n300 Squats\n800m Run', story: 'Long-form hero benchmark emphasizing partition strategy.', stimulus: 'Long bodyweight capacity' },
    { name: 'Small', durationBucket: 'medium', type: 'For Time', format: '3 rounds for time', content: '400m Run\n50 Sit-ups\n30 Wall Balls', story: 'Core-heavy hero WOD with steady cyclical work.', stimulus: 'Core stamina + breathing control' },
    { name: 'Ben', durationBucket: 'short', type: 'For Time', format: '10 rounds', content: '10 Thrusters (95/65)\n10 Bar-Facing Burpees', story: 'Fast hero burner with simple movement pairings.', stimulus: 'Sprint repeatability' },
    { name: 'Badger', durationBucket: 'medium', type: 'RFT', format: '3 rounds for time', content: '30 Squat Cleans\n30 Pull-ups\n800m Run', story: 'Longer rounds with demanding transitions.', stimulus: 'Grip + leg fatigue management' },
    { name: 'The Seven', durationBucket: 'long', type: 'RFT', format: '7 rounds for time', content: '7 HSPU\n7 Thrusters\n7 Knees-to-elbows\n7 Deadlifts\n7 Burpees\n7 KB Swings\n7 Pull-ups', story: 'Tribute to seven fallen CIA officers, broad modal demand.', stimulus: 'Full-body sustained intensity' },
    { name: 'Michael', durationBucket: 'medium', type: 'RFT', format: '3 rounds for time', content: 'Run 800m\n50 Back Extensions\n50 Sit-ups', story: 'Classic hero emphasizing posterior chain and aerobic work.', stimulus: 'Aerobic + trunk endurance' },
    { name: 'Josh', durationBucket: 'medium', type: 'RFT', format: '5 rounds for time', content: '21 Overhead Squats\n42 Pull-ups', story: 'High pulling volume paired with shoulder stability.', stimulus: 'Grip + overhead stamina' },
    { name: 'Tommy Mac', durationBucket: 'long', type: 'AMRAP', format: '20-minute AMRAP', content: '12 Burpees\n12 Thrusters\n12 Toes-to-Bar', story: 'Long mixed-modal hero adaptation for steady output.', stimulus: 'Sustainable threshold pace' },
    { name: 'Bradley', durationBucket: 'long', type: 'For Time', format: '10 rounds for time', content: '100m Sprint\n10 Pull-ups\n10 Burpees\n100m Sprint\n10 Rest', story: 'Hero sprint intervals demanding repeat power.', stimulus: 'Repeated high-intensity efforts' },
    { name: 'Johnson', durationBucket: 'long', type: 'RFT', format: '4 rounds for time', content: 'Run 400m\n20 Kettlebell Swings\n20 Box Jumps', story: 'Hero conditioning with cyclical running and leg fatigue.', stimulus: 'Leg engine repeatability' },
    { name: 'Morrison', durationBucket: 'medium', type: 'RFT', format: '50-40-30-20-10', content: 'Wall Balls\nBox Jumps\nKB Swings', story: 'Descending volume hero benchmark with monotony stress.', stimulus: 'Pacing and local muscular endurance' },
    { name: 'DANIEL', durationBucket: 'short', type: 'For Time', format: 'For Time', content: '50 Pull-ups\n400m Run\n21 Thrusters', story: 'Short hero format with hard transitions and pull fatigue.', stimulus: 'Transition power' },
    { name: 'Rahat', durationBucket: 'short', type: 'For Time', format: 'For Time', content: '21-15-9\nPower Cleans\nBurpees', story: 'Simple hero sprint emphasizing turnover and composure.', stimulus: 'Fast barbell-burpee cycling' },
    { name: 'Adrian', durationBucket: 'long', type: 'RFT', format: '7 rounds for time', content: '3 Forward Rolls\n5 Wall Climbs\n7 Thrusters\n9 Burpees', story: 'Long hero grind with varied movement demands.', stimulus: 'Long-term consistency' },
    { name: 'Glen', durationBucket: 'long', type: 'For Time', format: 'For Time', content: '30 Clean and Jerks\nRun 1 mile\n10 Rope Climbs', story: 'Hero WOD with heavy lifting and long run stress.', stimulus: 'Mixed strength-endurance' },
    { name: 'Tyler', durationBucket: 'long', type: 'For Time', format: '5 rounds for time', content: '7 Muscle-ups\n21 Sumo Deadlift High Pulls\n14 Hand Release Push-ups\nRun 400m', story: 'Hero endurance piece with high-skill moments.', stimulus: 'Broad modality endurance' },
    { name: 'Lucas', durationBucket: 'short', type: 'RFT', format: '5 rounds for time', content: '10 Pull-ups\n15 Burpees\n20 Air Squats', story: 'Accessible hero sprint with bodyweight focus.', stimulus: 'Fast bodyweight output' },
    { name: 'City Memorial', durationBucket: 'medium', type: 'For Time', format: 'For Time', content: '800m Run\n40 Deadlifts\n40 Push-ups\n800m Run', story: 'Community hero variation honoring local responders.', stimulus: 'Strength-endurance and aerobic stress' }
  ];

  function buildOpenWorkouts() {
    const open = [];
    for (let year = 2015; year <= 2021; year += 1) {
      for (let week = 1; week <= 5; week += 1) {
        const durationBucket = week <= 2 ? 'short' : (week === 3 ? 'medium' : 'long');
        const minutes = week <= 2 ? 7 : (week === 3 ? 12 : 17);
        open.push({
          name: `Open ${String(year).slice(2)}.${week}`,
          year,
          type: week % 2 === 0 ? 'For Time' : 'AMRAP',
          durationBucket,
          format: week % 2 === 0 ? `For Time (cap ${minutes} min)` : `${minutes}-minute AMRAP`,
          content: week % 2 === 0
            ? `${week + 2} Rounds For Time:\n12 Thrusters (${95 + (week * 10)}/${65 + (week * 10)} lb)\n12 Chest-to-Bar Pull-ups\n200m Run`
            : `AMRAP ${minutes}:\n${10 + week} Toes-to-Bar\n${12 + week} Burpees Over Bar\n${14 + week} Wall Balls`,
          story: `Official CrossFit Open test from ${year}, week ${week}. Built to compare global capacity with escalating fatigue and standardized movement standards.`,
          stimulus: week % 2 === 0 ? 'Pacing + barbell cycling + skill transitions' : 'Sustainable threshold output and repeatability'
        });
      }
    }

    for (let year = 2022; year <= 2025; year += 1) {
      for (let week = 1; week <= 3; week += 1) {
        const durationBucket = week === 1 ? 'short' : (week === 2 ? 'medium' : 'long');
        const minutes = week === 1 ? 7 : (week === 2 ? 14 : 18);
        open.push({
          name: `Open ${String(year).slice(2)}.${week}`,
          year,
          type: week === 2 ? 'For Time' : 'AMRAP',
          durationBucket,
          format: week === 2 ? `For Time (cap ${minutes} min)` : `${minutes}-minute AMRAP`,
          content: week === 2
            ? `For Time:\n50 Double-Unders\n25 Dumbbell Snatches\n20 Pull-ups\n800m Run`
            : `AMRAP ${minutes}:\n10 Dumbbell Thrusters\n12 Box Jump Overs\n14 Sit-ups\n200m Run`,
          story: `Official Open event from ${year}. Designed to balance accessibility with competitive separation through movement standards and fatigue management.`,
          stimulus: 'Engine management + movement efficiency under pressure'
        });
      }
    }

    return open;
  }

  const curated = { girls, heroes, open: buildOpenWorkouts() };
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
      return { name: generateName('AMRAP'), type, format: `${minutes}-minute AMRAP`, content: `AMRAP ${minutes}:\n${buildMovementList(3)}` };
    }
    if (type === 'EMOM') {
      const minutes = duration === 'short' ? 10 : (duration === 'long' ? 18 : 12);
      return { name: generateName('EMOM'), type, format: `EMOM ${minutes}`, content: `EMOM ${minutes}\nMinute 1: ${buildMovementList(1)}\nMinute 2: ${buildMovementList(1)}` };
    }
    if (type === 'RFT') {
      const rounds = duration === 'short' ? 3 : (duration === 'long' ? 6 : 4);
      return { name: generateName('RFT'), type, format: `${rounds} rounds for time`, content: `${rounds} rounds for time:\n${buildMovementList(3)}` };
    }
    if (type === 'CHIPPER') {
      return { name: generateName('Chipper'), type: 'CHIPPER', format: 'For Time (cap 20 min)', content: `For Time:\n${buildMovementList(5)}` };
    }
    return { name: generateName('Classic'), type: 'For Time', format: `For Time (cap ${duration === 'short' ? 7 : duration === 'long' ? 20 : 15} min)`, content: `For Time:\n${buildMovementList(4)}` };
  }

  function renderWod(wod) {
    const display = document.getElementById('wodDisplayArea');
    if (!display) return;
    const formatLine = wod.format ? `Format: ${wod.format}\n\n` : '';
    const detail = wod.story
      ? `<div style="padding:1rem;border-top:1px solid #335373;border-bottom:1px solid #335373;background:rgba(255,255,255,.02)"><strong>Background:</strong> ${wod.story}${wod.stimulus ? `<br/><strong>Stimulus:</strong> ${wod.stimulus}` : ''}</div>`
      : '';

    display.innerHTML = `
      <div class="wod-result">
        <div class="wod-header">
          <div class="wod-title">${wod.name || 'WOD'}</div>
          <span class="wod-type-badge">${wod.type || ''}</span>
        </div>
        ${detail}
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
      renderWod({ name: 'Fallback WOD', type: 'For Time', format: 'For Time (cap 12 min)', content: '3 rounds:\n10 Air Squats\n10 Push-ups\n10 Sit-ups' });
    }
  }

  async function initPage() {
    appConfig = await window.FWUtils.safeFetchJson('/config.json', fallbackConfig);

    const generateButton = document.getElementById('generateWodButton');
    if (generateButton) generateButton.addEventListener('click', generateWOD);

    const navWod = document.getElementById('navWod');
    if (navWod) navWod.addEventListener('click', () => switchMainNav('navWod'));

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
