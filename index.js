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

  const heroWodsTop25 = [
    {
      name: 'Murph',
      hero_bio: 'Michael P. Murphy, U.S. Navy SEAL, was killed in Afghanistan on June 28 2005. Murphy led a reconnaissance mission during Operation Red Wings and exposed himself to enemy fire to call for support knowing it would likely cost him his life. He was posthumously awarded the Medal of Honor. The workout was one of his favorites, originally called Body Armor, later renamed Murph in his honor.',
      format: 'For Time',
      time_domain: 'Long',
      workout_description: 'Run 1 mile; 100 Pull-ups; 200 Push-ups; 300 Air Squats; Run 1 mile',
      movements: [],
      stimulus: 'Endurance under load and mental grit.',
      notes: 'RX: 20 lb vest men / 14 lb vest women'
    },
    {
      name: 'DT',
      hero_bio: 'Timothy P. Davis, U.S. Air Force Special Tactics, was killed in Afghanistan on Feb 20 2009. Davis was killed by an IED while supporting combat operations. He served with the 23rd Special Tactics Squadron and was known for composure and professionalism in high-risk missions. DT reflects the relentless barbell stamina required in his line of work.',
      format: '5 Rounds For Time',
      time_domain: 'Medium',
      workout_description: '5 Rounds: 12 Deadlifts; 9 Hang Power Cleans; 6 Push Jerks (155/105 lb)',
      movements: [],
      stimulus: 'Barbell cycling and power-endurance.',
      notes: 'RX: 155 lb men / 105 lb women'
    },
    {
      name: 'Michael',
      hero_bio: 'Michael McGreevy, U.S. Navy, was killed in Afghanistan on June 28 2005. McGreevy died during the same mission as Murphy. A Naval Academy graduate, he was respected for discipline and humility. This workout reflects steady endurance and core resilience.',
      format: '3 Rounds For Time',
      time_domain: 'Medium',
      workout_description: '3 Rounds: Run 800m; 50 Back Extensions; 50 Sit-ups',
      movements: [],
      stimulus: 'Aerobic and core endurance.',
      notes: 'RX: Bodyweight'
    },
    {
      name: 'Randy',
      hero_bio: 'Randy Simmons, LAPD SWAT Officer, was killed in California USA on Feb 7 2008. Simmons was the first LAPD SWAT officer killed in the line of duty. He was a mentor and leader within the department. The high-rep snatch honors his intensity and work ethic.',
      format: 'For Time',
      time_domain: 'Short',
      workout_description: '75 Power Snatches (75/55 lb)',
      movements: [],
      stimulus: 'Barbell speed and power-endurance.',
      notes: 'RX: 75 lb men / 55 lb women'
    },
    {
      name: 'Josh',
      hero_bio: 'Joshua Whitaker, U.S. Army, was killed in Afghanistan on May 15 2007. Whitaker was 23 when he was killed during combat operations. Friends remembered him for positivity and grit. The volume overhead squats demand stamina and resilience in his memory.',
      format: '5 Rounds For Time',
      time_domain: 'Medium',
      workout_description: '5 Rounds: 21 OHS (95/65 lb); 42 Pull-ups',
      movements: [],
      stimulus: 'High-volume shoulder endurance and pulling capacity.',
      notes: 'RX: 95 lb men / 65 lb women'
    },
    {
      name: 'The Seven',
      hero_bio: 'Seven CIA Officers were killed in Afghanistan on Dec 30 2009. Seven intelligence officers were killed in a suicide bombing at Forward Operating Base Chapman. Each round represents one life lost. The workout combines heavy lifts and skill work under fatigue.',
      format: '7 Rounds For Time',
      time_domain: 'Long',
      workout_description: '7 Rounds: HSPU; Thrusters (135/95 lb); Knees-to-Elbows; Deadlifts (245/165 lb); Burpees; KB Swings (70/53 lb); Pull-ups',
      movements: [],
      stimulus: 'Full-body high-intensity mixed modal.',
      notes: 'RX: 135/95 Thruster; 245/165 Deadlift; 70/53 KB'
    },
    {
      name: 'Badger',
      hero_bio: 'Mark Carter, U.S. Navy SEAL, was killed in Iraq on Dec 11 2007. Chief Petty Officer Carter, known by the call sign Badger, was killed during combat operations. Teammates described him as calm and fiercely committed. The repeated cleans and run reflect sustained power under stress.',
      format: '3 Rounds For Time',
      time_domain: 'Medium',
      workout_description: '3 Rounds: 30 Squat Cleans (95/65 lb); 30 Pull-ups; Run 800m',
      movements: [],
      stimulus: 'Strength and aerobic capacity.',
      notes: 'RX: 95 lb men / 65 lb women'
    },
    {
      name: 'Jerry',
      hero_bio: 'Jerry Patton, U.S. Army, died in a training accident on Oct 15 2008. Patton died during high-altitude training. A career soldier, he emphasized discipline and preparation. The long run-row-run tests aerobic durability.',
      format: 'For Time',
      time_domain: 'Long',
      workout_description: 'Run 1 mile; Row 2000m; Run 1 mile',
      movements: [],
      stimulus: 'Aerobic endurance.',
      notes: 'RX: Bodyweight'
    },
    {
      name: 'J.T.',
      hero_bio: 'Jon Tumilson, U.S. Navy SEAL, was killed in Afghanistan on Aug 6 2011. Tumilson died when his helicopter was shot down. He was remembered for loyalty and devotion to family and teammates. The pressing volume challenges upper-body stamina.',
      format: '21-15-9 For Time',
      time_domain: 'Medium',
      workout_description: '21-15-9 HSPU; Ring Dips; Push-ups',
      movements: [],
      stimulus: 'Upper-body strength endurance.',
      notes: 'RX: Bodyweight'
    },
    {
      name: 'Nate',
      hero_bio: 'Nathan Hardy, U.S. Navy SEAL, was killed in Iraq on Feb 4 2008. Hardy was killed during combat operations. Teammates described him as relentless and courageous. The workout blends advanced gymnastics with kettlebell power.',
      format: 'AMRAP 20',
      time_domain: 'Long',
      workout_description: 'AMRAP 20: 2 MU; 4 HSPU; 8 KB Swings (70/53 lb)',
      movements: [],
      stimulus: 'Gymnastics strength and power endurance.',
      notes: 'RX: 70 lb men / 53 lb women'
    },
    {
      name: 'Tommy V',
      hero_bio: 'Thomas Valentine, U.S. Navy, died in a training accident on Feb 13 2008. Valentine died during training. Rope climbs and thrusters reflect grit and shoulder endurance under fatigue.',
      format: 'For Time',
      time_domain: 'Medium',
      workout_description: '21 Thrusters (115/75 lb); 12 Rope Climbs; 15 Thrusters; 9 Rope Climbs; 9 Thrusters; 6 Rope Climbs',
      movements: [],
      stimulus: 'Leg endurance and upper-body pulling.',
      notes: 'RX: 115 lb men / 75 lb women'
    },
    {
      name: 'Luce',
      hero_bio: 'Ronald Luce, U.S. Army, was killed in Afghanistan on Aug 2 2009. Captain Luce was killed while supporting operations in Afghanistan. The long AMRAP tests steady stamina and resilience.',
      format: 'AMRAP 20',
      time_domain: 'Long',
      workout_description: 'AMRAP 20: 3 Rope Climbs; 10 Ring Dips; Run 1000m',
      movements: [],
      stimulus: 'Mixed modal capacity.',
      notes: 'RX: Bodyweight'
    },
    {
      name: 'Hansen',
      hero_bio: 'Daniel Hansen, U.S. Marine Corps, was killed in Afghanistan on Feb 14 2009. Hansen was killed during combat operations. The high-rep swings, burpees, and GHD work demand mental toughness and pacing.',
      format: '5 Rounds For Time',
      time_domain: 'Long',
      workout_description: '5 Rounds: 30 KB Swings (70/53 lb); 30 Burpees; 30 GHD Sit-ups',
      movements: [],
      stimulus: 'Metabolic conditioning.',
      notes: 'RX: 70 lb men / 53 lb women'
    },
    {
      name: 'Whitten',
      hero_bio: 'Dan Whitten, U.S. Army, was killed in Afghanistan on Feb 2 2010. Captain Whitten died from injuries sustained in combat. The varied movements and run demand full-body capacity and grit.',
      format: '5 Rounds For Time',
      time_domain: 'Long',
      workout_description: '5 Rounds: 22 KB Swings (70/53 lb); 22 Box Jumps (24/20 in); 400m Run; 22 Burpees; 22 Wall Balls (20/14 lb)',
      movements: [],
      stimulus: 'Aerobic and power endurance.',
      notes: 'RX: 70/53 KB; 20/14 WB'
    },
    {
      name: 'Holleyman',
      hero_bio: 'Aaron Holleyman, U.S. Army, was killed in Iraq on Aug 30 2004. Holleyman was killed during operations in Iraq. The 30-round structure reflects prolonged effort and composure under fatigue.',
      format: '30 Rounds For Time',
      time_domain: 'Long',
      workout_description: '30 Rounds: 5 Wall Balls (20/14 lb); 3 HSPU; 1 Power Clean (225/155 lb)',
      movements: [],
      stimulus: 'Endurance under fatigue.',
      notes: 'RX: 225 lb men / 155 lb women'
    },
    {
      name: 'Coe',
      hero_bio: 'Keith Coe, U.S. Army, was killed in Iraq on Apr 27 2010. Coe was killed while serving overseas. The thruster and ring push-up combination tests shoulder and core endurance.',
      format: '10 Rounds For Time',
      time_domain: 'Medium',
      workout_description: '10 Rounds: 10 Thrusters (95/65 lb); 10 Ring Push-ups',
      movements: [],
      stimulus: 'Power endurance and speed.',
      notes: 'RX: 95 lb men / 65 lb women'
    },
    {
      name: 'Nutts',
      hero_bio: 'Andrew Nuttall, Canadian Armed Forces, was killed in Afghanistan on Dec 23 2009. Nuttall was killed during operations in Afghanistan. This long chipper-style Hero demands endurance and mental resilience.',
      format: 'For Time',
      time_domain: 'Long',
      workout_description: '10 HSPU; 15 Deadlifts (250/175 lb); 25 Box Jumps (30/24 in); 50 Pull-ups; 100 Wall Balls (20/14 lb); 200 DU; 400m Run',
      movements: [],
      stimulus: 'Full-body metabolic stress.',
      notes: 'RX: 250 lb men / 175 lb women'
    },
    {
      name: 'Manion',
      hero_bio: 'Travis Manion, U.S. Marine Corps, was killed in Iraq on Apr 29 2007. Manion was killed by sniper fire while drawing attention away from wounded teammates. The 7 rounds represent his call sign and legacy.',
      format: '7 Rounds For Time',
      time_domain: 'Long',
      workout_description: '7 Rounds: Run 400m; 29 Back Squats (135/95 lb)',
      movements: [],
      stimulus: 'Leg strength endurance.',
      notes: 'RX: 135 lb men / 95 lb women'
    },
    {
      name: 'Loredo',
      hero_bio: 'Edwardo Loredo, U.S. Army, was killed in Afghanistan on Jun 24 2010. Loredo died while supporting operations overseas. The repeated calisthenics and runs emphasize work capacity and discipline.',
      format: '6 Rounds For Time',
      time_domain: 'Long',
      workout_description: '6 Rounds: 24 Squats; 24 Push-ups; 24 Lunges; 400m Run',
      movements: [],
      stimulus: 'Endurance and full-body stress.',
      notes: 'RX: Bodyweight'
    },
    {
      name: 'Roy',
      hero_bio: 'Michael Roy, U.S. Marine Corps, was killed in Afghanistan on Jul 8 2009. Roy was killed during combat operations. The deadlift, box jump, and pull-up combination tests strength and stamina.',
      format: '5 Rounds For Time',
      time_domain: 'Medium',
      workout_description: '5 Rounds: 15 Deadlifts (225/155 lb); 20 Box Jumps (24/20 in); 25 Pull-ups',
      movements: [],
      stimulus: 'Mixed modal stamina.',
      notes: 'RX: 225 lb men / 155 lb women'
    },
    {
      name: 'Johnson',
      hero_bio: 'Ralph Johnson, British Army, was killed in Afghanistan on Aug 1 2006. Johnson died during a firefight protecting his unit. The workout blends heavy pulling and running capacity.',
      format: '4 Rounds For Time',
      time_domain: 'Medium',
      workout_description: '4 Rounds: 8 Deadlifts (250/175 lb); 16 Burpees; 3 Rope Climbs; 600m Run',
      movements: [],
      stimulus: 'Strength-endurance.',
      notes: 'RX: 250 lb men / 175 lb women'
    },
    {
      name: 'Small',
      hero_bio: 'Marc Small, U.S. Army, was killed in Afghanistan on Feb 12 2009. Small was killed while serving overseas. The run and wall ball volume require steady aerobic control.',
      format: '3 Rounds For Time',
      time_domain: 'Medium',
      workout_description: '3 Rounds: Run 800m; 50 Sit-ups; 30 Wall Balls (20/14 lb)',
      movements: [],
      stimulus: 'Aerobic and core strength.',
      notes: 'RX: 20 lb men / 14 lb women'
    },
    {
      name: 'Dork',
      hero_bio: 'Michael McCluskey, U.S. Army, was killed in Afghanistan on Nov 4 2010. McCluskey, nicknamed Dork, was killed in combat. The repeated squat cleans and skill work require power and coordination under fatigue.',
      format: '6 Rounds For Time',
      time_domain: 'Long',
      workout_description: '6 Rounds: 60 DU; 30 Toes-to-Bar; 15 Squat Cleans (155/105 lb)',
      movements: [],
      stimulus: 'Metabolic conditioning.',
      notes: 'RX: 155 lb men / 105 lb women'
    },
    {
      name: 'Coffey',
      hero_bio: 'Patrick Coffey, U.S. Marine Corps, was killed in Afghanistan on Sept 12 2009. Coffey was killed during combat operations. The combination of running, air squats, and bar muscle-ups tests stamina and skill under fatigue.',
      format: '5 Rounds For Time',
      time_domain: 'Long',
      workout_description: '5 Rounds: 50 Air Squats; 10 Bar Muscle-ups; 800m Run',
      movements: [],
      stimulus: 'Aerobic and upper-body stamina.',
      notes: 'RX: Bodyweight'
    },
    {
      name: 'Chad',
      hero_bio: 'Chad Wilkinson, U.S. Navy SEAL, died in the United States on Oct 29 2018. Wilkinson died by suicide after years of service. The 1000 step-ups with load symbolize the weight many veterans carry. The workout is performed to raise awareness for mental health and veteran support.',
      format: 'For Time',
      time_domain: 'Long',
      workout_description: '1000 Step-ups (20") with 45 lb pack (men) / 35 lb pack (women)',
      movements: [],
      stimulus: 'Aerobic load-bearing endurance.',
      notes: 'RX: 45 lb men / 35 lb women'
    }
  ];

  const heroes = heroWodsTop25.map((wod) => {
    const domain = wod.time_domain.toLowerCase();
    const durationBucket = domain.includes('short') ? 'short' : (domain.includes('long') ? 'long' : 'medium');
    const type = wod.format.includes('AMRAP') ? 'AMRAP' : (wod.format.includes('rounds') ? 'RFT' : 'For Time');
    return {
      name: wod.name,
      durationBucket,
      type,
      format: wod.format,
      content: wod.workout_description,
      story: wod.hero_bio,
      hero_bio: wod.hero_bio,
      stimulus: wod.stimulus,
      notes: wod.notes,
      movements: wod.movements
    };
  });

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
    { match: /hang power cleans?/i, rx: '155/105 lb' },
    { match: /push jerks?/i, rx: '155/105 lb' },
    { match: /clean\s*(and|&)\s*jerks?|c&j/i, rx: '135/95 lb' },
    { match: /sumo deadlift high pulls?|sdhp/i, rx: '95/65 lb' },
    { match: /back squats?/i, rx: '185/135 lb' },
    { match: /squat cleans?/i, rx: '135/95 lb' },
    { match: /power cleans?/i, rx: '135/95 lb' },
    { match: /dumbbell snatches?|db snatches?/i, rx: '50/35 lb' },
    { match: /power snatches?/i, rx: '75/55 lb' },
    { match: /snatches?/i, rx: '95/65 lb' },
    { match: /deadlifts?/i, rx: '225/155 lb' },
    { match: /overhead squats?|ohs/i, rx: '135/95 lb' },
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

  const movementPatterns = {
    lower: ['Air Squats', 'Lunges', 'Wall Balls', 'Thrusters', 'Deadlifts', 'Power Cleans'],
    upper: ['Pull-ups', 'Push-ups', 'Handstand Push-ups', 'Toes to Bar', 'Chest-to-Bar Pull-ups'],
    engineCore: ['Run 200m', 'Run 400m', 'Row 15 Calories', 'Double Unders', 'Sit-ups']
  };

  const emomTemplates = [
    { name: 'EMOM Rotor', type: 'EMOM', durationBucket: 'short', format: 'EMOM 10', content: `Min 1: 10 Thrusters
Min 2: 12 Pull-ups` },
    { name: 'EMOM Engine', type: 'EMOM', durationBucket: 'medium', format: 'EMOM 12', content: `Min 1: 12 Deadlifts
Min 2: 10 Push-ups
Min 3: 14 Cal Row` },
    { name: 'EMOM Builder', type: 'EMOM', durationBucket: 'long', format: 'EMOM 20', content: `Min 1: 10 Power Cleans
Min 2: 12 Toes to Bar
Min 3: 14 Wall Balls
Min 4: 40-sec Plank` }
  ];

  const rftTemplates = [
    { name: 'Iron Pace', type: 'RFT', durationBucket: 'short', format: '3 rounds for time', content: `12 Thrusters
10 Pull-ups
200m Run` },
    { name: 'Classic Triplet', type: 'RFT', durationBucket: 'medium', format: '4 rounds for time', content: `10 Deadlifts
12 Push-ups
250m Row` },
    { name: 'Endurance RFT', type: 'RFT', durationBucket: 'long', format: '5 rounds for time', content: `12 Power Cleans
15 Sit-ups
400m Run` }
  ];

  const chipperTemplates = [
    { name: 'Fast Chipper', type: 'CHIPPER', durationBucket: 'short', format: 'For Time (cap 10 min)', content: `30 Wall Balls
20 Pull-ups
400m Run` },
    { name: 'Midline Chipper', type: 'CHIPPER', durationBucket: 'medium', format: 'For Time (cap 15 min)', content: `40 Deadlifts
30 Push-ups
20 Toes to Bar
500m Row` },
    { name: 'Long Chipper', type: 'CHIPPER', durationBucket: 'long', format: 'For Time (cap 20 min)', content: `50 Thrusters
40 Sit-ups
30 Pull-ups
800m Run` }
  ];

  function generateName(type) {
    const { getRandom } = window.FWUtils;
    const words = ['Engine', 'Builder', 'Crusher', 'Grinder', 'Pulse'];
    return `${type} ${getRandom(words)}`;
  }

  function getPatternFromMovement(movement) {
    const lowerHit = movementPatterns.lower.some((m) => movement.includes(m));
    if (lowerHit) return 'lower';
    const upperHit = movementPatterns.upper.some((m) => movement.includes(m));
    if (upperHit) return 'upper';
    return 'engineCore';
  }

  function isShoulderDominant(movement) {
    return /(thruster|hspu|push|jerk|snatch|overhead|wall walk)/i.test(movement);
  }

  function isSquatPattern(movement) {
    return /(squat|thruster|wall ball)/i.test(movement);
  }

  // Validation rule: enforce movement balance, no duplicates, and no bad back-to-back pairings.
  function isBalancedSequence(moves) {
    const names = moves.map((m) => m.movement);
    if (new Set(names).size !== names.length) return false;
    const patterns = new Set(moves.map((m) => m.pattern));
    if (!patterns.has('lower') || !patterns.has('upper') || !patterns.has('engineCore')) return false;
    for (let i = 1; i < names.length; i += 1) {
      if (isShoulderDominant(names[i - 1]) && isShoulderDominant(names[i])) return false;
      if (isSquatPattern(names[i - 1]) && isSquatPattern(names[i])) return false;
    }
    return true;
  }

  function buildBalancedMoves(count) {
    const { getRandom } = window.FWUtils;
    const pools = appConfig.movements || fallbackConfig.movements;
    const all = [
      ...((pools.weightlifting || []).map((movement) => ({ movement, pattern: 'lower' }))),
      ...((pools.bodyweight || []).map((movement) => ({ movement, pattern: getPatternFromMovement(movement) }))),
      ...((pools.gymnastics || []).map((movement) => ({ movement, pattern: 'upper' }))),
      ...((pools.mono || []).map((movement) => ({ movement, pattern: 'engineCore' })))
    ];
    const candidates = all.filter(Boolean);
    for (let attempt = 0; attempt < 25; attempt += 1) {
      const selected = [];
      while (selected.length < count && candidates.length) {
        const pick = getRandom(candidates);
        if (!pick || selected.some((m) => m.movement === pick.movement)) continue;
        selected.push(pick);
      }
      if (selected.length === count && isBalancedSequence(selected)) return selected;
    }
    return [
      { movement: 'Thrusters', pattern: 'lower' },
      { movement: 'Pull-ups', pattern: 'upper' },
      { movement: 'Run 400m', pattern: 'engineCore' }
    ].slice(0, count);
  }

  function toMovementLine(movement, repOptions) {
    const reps = window.FWUtils.getRandom(repOptions);
    return `${reps} ${movement}`;
  }

  function generateTemplateWod(kind, duration) {
    const pools = { emom: emomTemplates, rft: rftTemplates, chipper: chipperTemplates };
    const source = pools[kind] || [];
    const filtered = window.FWUtils.filterWodsByDuration(source, duration);
    return window.FWUtils.getRandom(filtered) || window.FWUtils.getRandom(source);
  }

  function buildDynamicEmom(duration) {
    const { getRandom } = window.FWUtils;
    const options = duration === 'short' ? [10, 12] : (duration === 'medium' ? [12, 16] : [16, 20]);
    const minutes = getRandom(options);
    const cycleLength = getRandom([2, 3, 4]);
    const moves = buildBalancedMoves(cycleLength);
    const lines = moves.map((move, idx) => `Min ${idx + 1}: ${toMovementLine(move.movement, [8, 10, 12, 14])}`);
    return { name: generateName('EMOM'), type: 'EMOM', durationBucket: duration, format: `EMOM ${minutes}`, content: lines.join('\n') };
  }

  function buildDynamicRft(duration) {
    const rounds = duration === 'short' ? 3 : (duration === 'long' ? 5 : 4);
    const moves = buildBalancedMoves(3);
    return {
      name: generateName('RFT'),
      type: 'RFT',
      durationBucket: duration,
      format: `${rounds} rounds for time`,
      content: moves.map((move) => toMovementLine(move.movement, [10, 12, 15])).join('\n')
    };
  }

  function buildDynamicAmrap(duration) {
    const minutes = window.FWUtils.getDurationMinutes(duration, { short: 7, medium: 12, long: 20 });
    const moves = buildBalancedMoves(3);
    return {
      name: generateName('AMRAP'),
      type: 'AMRAP',
      durationBucket: duration,
      format: `${minutes}-minute AMRAP`,
      content: `AMRAP ${minutes}:\n${moves.map((move) => toMovementLine(move.movement, [10, 12, 15])).join('\n')}`
    };
  }

  function buildDynamicChipper(duration) {
    const cap = duration === 'short' ? 10 : (duration === 'long' ? 20 : 15);
    const moves = buildBalancedMoves(4);
    return {
      name: generateName('Chipper'),
      type: 'CHIPPER',
      durationBucket: duration,
      format: `For Time (cap ${cap} min)`,
      content: moves.map((move) => toMovementLine(move.movement, [20, 25, 30])).join('\n')
    };
  }

  function generateDynamicWod(typeSelect, duration) {
    if (typeSelect === 'emom') return buildDynamicEmom(duration);
    if (typeSelect === 'rft') return buildDynamicRft(duration);
    if (typeSelect === 'chipper') return buildDynamicChipper(duration);
    if (typeSelect === 'amrap') return buildDynamicAmrap(duration);
    return buildDynamicAmrap(duration);
  }

  function renderWod(wod) {
    const display = document.getElementById('wodDisplayArea');
    if (!display) return;
    const formatLine = wod.format ? `Format: ${wod.format}\n\n` : '';
    const contentWithRx = addRxToContent(wod.content || '');
    const storyText = wod.hero_story || wod.story;
    const detail = storyText
      ? `<div style="padding:1rem;border-top:1px solid #335373;border-bottom:1px solid #335373;background:rgba(255,255,255,.02)"><strong>Background:</strong> ${storyText}${wod.stimulus ? `<br/><strong>Stimulus:</strong> ${wod.stimulus}` : ''}</div>`
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
      } else if (typeSelect === 'any') {
        const surprisePools = [
          { key: 'girls', wods: curated.girls },
          { key: 'heroes', wods: curated.heroes },
          { key: 'open', wods: curated.open },
          { key: 'emom', wods: emomTemplates },
          { key: 'rft', wods: rftTemplates },
          { key: 'chipper', wods: chipperTemplates }
        ];
        const selectedPool = window.FWUtils.getRandom(surprisePools);
        const filtered = window.FWUtils.filterWodsByDuration(selectedPool.wods, duration);
        wod = window.FWUtils.getRandom(filtered) || window.FWUtils.getRandom(selectedPool.wods);
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
