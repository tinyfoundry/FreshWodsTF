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

  const openWorkouts = [
    { name:'Open 15.1', year:2015, type:'AMRAP', durationBucket:'medium', format:'9-minute AMRAP', content:'15 Toes-to-Bars\n10 Deadlifts (115/75 lb)\n5 Snatches (115/75 lb)', story:'2015 opener focused on barbell efficiency and gymnastics pacing.', stimulus:'Mixed modal threshold pace' },
    { name:'Open 15.1a', year:2015, type:'Max Lift', durationBucket:'short', format:'6-minute cap', content:'Establish a 1-rep-max Clean & Jerk', story:'Immediate post-metcon max-lift test to expose recovery and composure.', stimulus:'Peak power under fatigue' },
    { name:'Open 15.2', year:2015, type:'Intervals', durationBucket:'long', format:'3-minute intervals', content:'2 rounds of OHS + C2B, starting at 10 reps and adding 2 reps each interval until failure', story:'Rising interval ladder that penalizes pacing errors early.', stimulus:'Repeatability + shoulder stamina' },
    { name:'Open 15.3', year:2015, type:'AMRAP', durationBucket:'medium', format:'14-minute AMRAP', content:'7 Ring Muscle-ups\n50 Wall Balls (20/14 lb)\n100 Double-Unders', story:'Classic Open test blending skill fatigue and monostructural capacity.', stimulus:'Gymnastics under high breathing load' },
    { name:'Open 15.4', year:2015, type:'AMRAP', durationBucket:'medium', format:'8-minute AMRAP', content:'Ascending Handstand Push-ups + Cleans (185/125 lb)', story:'Short ladder where pressing fatigue controls total score.', stimulus:'Upper-body stamina and turnover' },
    { name:'Open 15.5', year:2015, type:'For Time', durationBucket:'medium', format:'For Time', content:'27-21-15-9\nRow (calories)\nThrusters (95/65 lb)', story:'Open closer pairing cyclical output with leg-heavy barbell work.', stimulus:'Breathing discipline + barbell cycling' },

    { name:'Open 16.1', year:2016, type:'AMRAP', durationBucket:'long', format:'20-minute AMRAP', content:'25-ft Overhead Lunge\n8 Bar-Facing Burpees\n25-ft Overhead Lunge\n8 Chest-to-Bar Pull-ups', story:'Long workout with overhead position fatigue and pull volume.', stimulus:'Aerobic durability + shoulder endurance' },
    { name:'Open 16.2', year:2016, type:'Intervals', durationBucket:'long', format:'4-minute stages up to 20 min', content:'25 T2B, 50 DU, Squat Cleans with rising loads (135/85 to 315/205)', story:'Escalating load ladder rewarding efficient transitions.', stimulus:'Skill retention as load rises' },
    { name:'Open 16.3', year:2016, type:'AMRAP', durationBucket:'short', format:'7-minute AMRAP', content:'10 Power Snatches (75/55 lb)\n3 Bar Muscle-ups', story:'Fast skill sprint with minimal room for errors.', stimulus:'Explosive cycling + high-skill composure' },
    { name:'Open 16.4', year:2016, type:'AMRAP', durationBucket:'medium', format:'13-minute AMRAP', content:'55 Deadlifts\n55 Wall Balls\n55-cal Row\n55 Handstand Push-ups', story:'High-volume benchmark repeated in later Opens.', stimulus:'Pacing under accumulating local fatigue' },
    { name:'Open 16.5', year:2016, type:'For Time', durationBucket:'long', format:'For Time', content:'21-18-15-12-9-6-3\nThrusters (95/65 lb)\nBar-Facing Burpees', story:'Descending rep test demanding sustainable pace.', stimulus:'Barbell + burpee repeatability' },

    { name:'Open 17.1', year:2017, type:'For Time', durationBucket:'long', format:'20-minute cap', content:'10-20-30-40-50 Dumbbell Snatches\n15 Burpee Box Jump-Overs after each set', story:'First major DB Open workout; transitions decide outcome.', stimulus:'Grip endurance + movement speed' },
    { name:'Open 17.2', year:2017, type:'AMRAP', durationBucket:'medium', format:'12-minute AMRAP', content:'2 rounds: 50-ft Lunge, 16 T2B/BMU alternation, 8 DB Cleans', story:'Alternating gymnastics standards with weighted locomotion.', stimulus:'Core stiffness and shoulder integrity' },
    { name:'Open 17.3', year:2017, type:'Intervals', durationBucket:'long', format:'8-minute cap + 4-minute extensions', content:'C2B + Squat Snatch ladder with rising weights', story:'Technical ladder extending only with successful completion.', stimulus:'Skill under increasing load' },
    { name:'Open 17.4', year:2017, type:'AMRAP', durationBucket:'medium', format:'13-minute AMRAP', content:'55 Deadlifts\n55 Wall Balls\n55-cal Row\n55 Handstand Push-ups', story:'Repeat of 16.4 testing broad mixed-modal capacity.', stimulus:'Long set management' },
    { name:'Open 17.5', year:2017, type:'For Time', durationBucket:'medium', format:'15-minute cap', content:'10 rounds\n9 Thrusters (95/65 lb)\n35 Double-Unders', story:'Cyclical benchmark where missed rope reps become decisive.', stimulus:'Breathing rhythm + shoulder stamina' },

    { name:'Open 18.1', year:2018, type:'AMRAP', durationBucket:'long', format:'20-minute AMRAP', content:'8 Toes-to-Bars\n10 DB Hang Clean-and-Jerks\n14/12-cal Row', story:'Long aerobic opener with repetitive transitions.', stimulus:'Sustainable engine output' },
    { name:'Open 18.2', year:2018, type:'For Time', durationBucket:'medium', format:'12-minute cap (includes 18.2a)', content:'1-2-3-...-10 DB Front Squats + Bar-Facing Burpees', story:'Ascending ladder with immediate heavy-lift follow-up.', stimulus:'Leg fatigue management' },
    { name:'Open 18.2a', year:2018, type:'Max Lift', durationBucket:'short', format:'remaining time in 12-minute window', content:'1-rep-max Clean', story:'Max lift under severe pre-fatigue from 18.2.', stimulus:'Neuromuscular output' },
    { name:'Open 18.3', year:2018, type:'For Time', durationBucket:'medium', format:'14-minute cap', content:'DU + OHS + Ring MU + DB Snatch + Bar MU sequence', story:'Complex progression separating high-skill athletes.', stimulus:'Skill transitions at pace' },
    { name:'Open 18.4', year:2018, type:'For Time', durationBucket:'medium', format:'9-minute cap', content:'Diane + heavy deadlift/HSPU + handstand walk', story:'Power and inversion under severe time pressure.', stimulus:'Explosive output + inversion composure' },
    { name:'Open 18.5', year:2018, type:'AMRAP', durationBucket:'short', format:'7-minute AMRAP', content:'Ascending Thrusters + Chest-to-Bar Pull-ups', story:'Short benchmark repeat of legacy Open test.', stimulus:'Sprint threshold' },

    { name:'Open 19.1', year:2019, type:'AMRAP', durationBucket:'medium', format:'15-minute AMRAP', content:'19 Wall Balls\n19-cal Row', story:'Simple cyclical benchmark with repetitive leg demand.', stimulus:'Sustainable cyclical intensity' },
    { name:'Open 19.2', year:2019, type:'Intervals', durationBucket:'long', format:'8-minute start + 4-minute extensions', content:'Repeat of 16.2 (T2B, DU, rising-load Squat Cleans)', story:'Open repeat focused on extension thresholds.', stimulus:'Work capacity at rising loads' },
    { name:'Open 19.3', year:2019, type:'For Time', durationBucket:'medium', format:'10-minute cap', content:'OH DB Lunge, DB Box Step-ups, Strict HSPU, Handstand Walk', story:'Strict pressing and inversion standards raise skill demand.', stimulus:'Shoulder stability and control' },
    { name:'Open 19.4', year:2019, type:'For Time', durationBucket:'medium', format:'12-minute cap including 3-minute rest', content:'Snatch/Burpee couplet, then Bar MU/Burpee couplet', story:'Two-part test emphasizing recovery between efforts.', stimulus:'Sprint-repeat ability' },
    { name:'Open 19.5', year:2019, type:'For Time', durationBucket:'long', format:'20-minute cap', content:'33-27-21-15-9\nThrusters (95/65 lb)\nChest-to-Bar Pull-ups', story:'High-volume closer requiring strict pacing discipline.', stimulus:'Upper-body stamina + breathing control' },

    { name:'Open 20.1', year:2020, type:'For Time', durationBucket:'medium', format:'15-minute cap', content:'10 rounds\n8 Ground-to-Overheads (95/65 lb)\n10 Bar-Facing Burpees', story:'Sustainable interval-like opener with clear pacing cues.', stimulus:'Power repeatability' },
    { name:'Open 20.2', year:2020, type:'AMRAP', durationBucket:'long', format:'20-minute AMRAP', content:'4 DB Thrusters\n6 Toes-to-Bars\n24 Double-Unders', story:'Long cyclical workout with frequent transitions.', stimulus:'Long-threshold output' },
    { name:'Open 20.3', year:2020, type:'For Time', durationBucket:'medium', format:'9-minute cap', content:'18.4 repeat (Diane + heavy deadlift/HSPU + HSW)', story:'Repeat test validating progress in high-skill sprint domain.', stimulus:'Power and inversion speed' },
    { name:'Open 20.4', year:2020, type:'For Time', durationBucket:'long', format:'20-minute cap', content:'Box Jumps + Clean & Jerks with increasing loads + Pistols', story:'Long progression with movement standard shifts.', stimulus:'Leg stamina + weight transitions' },
    { name:'Open 20.5', year:2020, type:'For Time', durationBucket:'long', format:'20-minute cap', content:'40 Ring MU\n80-cal Row\n120 Wall Balls (partition any way)', story:'Strategic partitioning test with very high total volume.', stimulus:'Strategy + muscular endurance' },

    { name:'Open 21.1', year:2021, type:'For Time', durationBucket:'medium', format:'15-minute cap', content:'Wall Walk + Double-Under ascending ladder', story:'Introduced wall walks to Open standards.', stimulus:'Shoulder stamina + skill consistency' },
    { name:'Open 21.2', year:2021, type:'For Time', durationBucket:'long', format:'20-minute cap', content:'17.1 repeat (DB Snatches + Burpee Box Jump-Overs)', story:'Retest of a well-known benchmark for comparability.', stimulus:'Long repeatability' },
    { name:'Open 21.3', year:2021, type:'For Time', durationBucket:'medium', format:'15-minute cap', content:'Front Squats, T2B/C2B/BMU, Thrusters with 1-minute rests', story:'Three-part progression with fixed rest windows.', stimulus:'Section pacing and skill transitions' },
    { name:'Open 21.4', year:2021, type:'Max Lift', durationBucket:'short', format:'7-minute window', content:'Complex for max load: DL + Clean + Hang Clean + Jerk', story:'Strength complex performed immediately after 21.3.', stimulus:'Load tolerance under fatigue' },
    { name:'Open 21.5', year:2021, type:'For Time', durationBucket:'long', format:'18-minute cap', content:'4 rounds\n15 Thrusters (95/65 lb)\n15 Chest-to-Bar Pull-ups\n400m Run', story:'Supplemental long Open-style benchmark for full annual variety in this generator.', stimulus:'Long threshold pacing and transition control' },

    { name:'Open 22.1', year:2022, type:'AMRAP', durationBucket:'medium', format:'15-minute AMRAP', content:'3 Wall Walks\n12 DB Snatches\n15 Box Jump-Overs', story:'Open restart emphasizing shoulder endurance and cadence.', stimulus:'Shoulder stamina + turnover' },
    { name:'Open 22.2', year:2022, type:'For Time', durationBucket:'medium', format:'10-minute cap', content:'Deadlift + Bar-Facing Burpee ascending/descending ladder', story:'Simple standards, high power demand.', stimulus:'Sprint repeat pacing' },
    { name:'Open 22.3', year:2022, type:'For Time', durationBucket:'medium', format:'12-minute cap', content:'Pull-up/C2B/BMU + DU + increasing-weight Thrusters', story:'Classic gymnastics progression under time pressure.', stimulus:'Skill transition efficiency' },

    { name:'Open 23.1', year:2023, type:'AMRAP', durationBucket:'medium', format:'14-minute AMRAP', content:'60-cal Row\n50 T2B\n40 Wall Balls\n30 Cleans\n20 Ring MU', story:'Repeat of 14.4 with broad movement demands.', stimulus:'Long mixed-modal control' },
    { name:'Open 23.2A', year:2023, type:'AMRAP', durationBucket:'medium', format:'15-minute AMRAP', content:'5,10,15... Burpee Pull-ups + 10 Shuttle Runs each round', story:'Ascending burpee volume with fixed shuttle demand.', stimulus:'Pacing discipline' },
    { name:'Open 23.2B', year:2023, type:'Max Lift', durationBucket:'short', format:'5-minute window', content:'1-rep-max Thruster (from floor)', story:'Heavy effort immediately after 23.2A.', stimulus:'Strength under fatigue' },
    { name:'Open 23.3', year:2023, type:'For Time', durationBucket:'medium', format:'12-minute cap (with extensions)', content:'Wall Walks, DU, and rising-load Snatches with strict HSPU sections', story:'Technical ladder where extension gates matter.', stimulus:'Skill retention under load' },

    { name:'Open 24.1', year:2024, type:'For Time', durationBucket:'medium', format:'15-minute cap', content:'Descending DB Snatches by arm + Lateral Burpees Over DB', story:'Unilateral loading and burpee pacing opener.', stimulus:'Grip and breathing management' },
    { name:'Open 24.2', year:2024, type:'AMRAP', durationBucket:'long', format:'20-minute AMRAP', content:'300m Row\n10 Deadlifts (185/125)\n50 Double-Unders', story:'Long cyclical triplet demanding consistent round pace.', stimulus:'Aerobic durability + posterior chain stamina' },
    { name:'Open 24.3', year:2024, type:'For Time', durationBucket:'medium', format:'15-minute cap', content:'5 rounds 10 Thrusters + 10 C2B, rest 1:00, then 5 rounds 7 Thrusters + 7 BMU', story:'Two-part test with heavier second segment and mandatory rest.', stimulus:'Transition speed + pressing endurance' },

    { name:'Open 25.1', year:2025, type:'AMRAP', durationBucket:'medium', format:'15-minute AMRAP', content:'3/6/9... Lateral Burpees + DB Hang C&OH + 30-ft DB Walking Lunge', story:'Ascending rep ladder with fixed lunge distance each round.', stimulus:'Local fatigue management' },
    { name:'Open 25.2', year:2025, type:'For Time', durationBucket:'medium', format:'12-minute cap', content:'Repeat of 22.3', story:'Re-test event for historical comparison and pacing strategy.', stimulus:'Skill transitions under pressure' },
    { name:'Open 25.3', year:2025, type:'For Time', durationBucket:'long', format:'20-minute cap', content:'5 Wall Walks + 50-cal Row, then Wall Walks with DL/Clean/Snatch segments, finish with 50-cal Row', story:'Long finale with repeated wall walks and descending barbell loads.', stimulus:'Shoulder endurance + late-stage pacing' }
  ];

  const curated = { girls, heroes, open: openWorkouts };
  let appConfig = fallbackConfig;

  const RX_WEIGHTS = [
    { match: /ground-to-overheads?|gtoh/i, rx: '95/65 lb' },
    { match: /clean\s*(and|&)\s*jerks?|c&j/i, rx: '135/95 lb' },
    { match: /squat cleans?/i, rx: '135/95 lb' },
    { match: /power cleans?/i, rx: '135/95 lb' },
    { match: /dumbbell snatches?|db snatches?/i, rx: '50/35 lb' },
    { match: /power snatches?/i, rx: '75/55 lb' },
    { match: /snatches?/i, rx: '95/65 lb' },
    { match: /deadlifts?/i, rx: '225/155 lb' },
    { match: /overhead squats?|ohs/i, rx: '95/65 lb' },
    { match: /thrusters?/i, rx: '95/65 lb' },
    { match: /wall[- ]?balls?/i, rx: '20/14 lb' },
    { match: /kettlebell swings?|kb swings?/i, rx: '53/35 lb' },
    { match: /dumbbell hang clean\s*(to|-)\s*(overheads?)?|db hang c&oh/i, rx: '50/35 lb' },
    { match: /dumbbell (walking )?lunges?|db walking lunge/i, rx: '50/35 lb' },
    { match: /dumbbell thrusters?|db thrusters?/i, rx: '2x50/35 lb' },
    { match: /cleans?/i, rx: '135/95 lb' }
  ];

  function lineAlreadyHasWeight(line) {
    return /(\d+\s*\/\s*\d+\s*lb|\b\d+\s*lb\b|\bRX\b)/i.test(line);
  }

  function getRxWeightForLine(line) {
    const entry = RX_WEIGHTS.find((item) => item.match.test(line));
    return entry ? entry.rx : null;
  }

  function addRxToContent(content) {
    const lines = String(content || '').split('\n');
    return lines
      .map((line) => {
        const trimmed = line.trim();
        if (!trimmed || lineAlreadyHasWeight(trimmed)) return line;
        const rx = getRxWeightForLine(trimmed);
        if (!rx) return line;
        return `${line} (${rx})`;
      })
      .join('\n');
  }

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
    const contentWithRx = addRxToContent(wod.content || '');
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
        <div class="wod-content">${formatLine}${contentWithRx}</div>
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
