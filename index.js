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
      hero_bio: 'Lieutenant Michael P. Murphy was a U.S. Navy SEAL killed in Afghanistan on June 28, 2005 during Operation Red Wings. He was posthumously awarded the Medal of Honor for his actions under fire. CrossFit adopted this workout from his "Body Armor" session and named it Murph in his honor.',
      format: 'For Time',
      time_domain: 'Long (35–60 min)',
      workout_description: 'For Time: Run 1 mile, 100 Pull-ups, 200 Push-ups, 300 Air Squats, Run 1 mile. Wear a 20/14 lb vest if available.',
      movements: [
        { movement_name: 'Run', reps: '1 mile + 1 mile', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Pull-ups', reps: '100', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Push-ups', reps: '200', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Air Squats', reps: '300', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Vest', reps: 'Wear throughout', rx_weight_m: '20 lb', rx_weight_f: '14 lb' }
      ],
      stimulus: 'Sustained bodyweight and running endurance with disciplined pacing.',
      notes: 'Partition pull-ups/push-ups/squats as needed.'
    },
    {
      name: 'DT',
      hero_bio: 'DT honors U.S. Air Force SSgt. Timothy P. Davis, a pararescueman killed in 2009. The workout was published on CrossFit.com as a Hero benchmark. It is known for demanding barbell cycling under fatigue while keeping movement quality high.',
      format: '5 rounds for time',
      time_domain: 'Medium (8–15 min)',
      workout_description: '5 rounds for time: 12 Deadlifts (155/105 lb), 9 Hang Power Cleans (155/105 lb), 6 Push Jerks (155/105 lb).',
      movements: [
        { movement_name: 'Deadlift', reps: '12', rx_weight_m: '155 lb', rx_weight_f: '105 lb' },
        { movement_name: 'Hang Power Clean', reps: '9', rx_weight_m: '155 lb', rx_weight_f: '105 lb' },
        { movement_name: 'Push Jerk', reps: '6', rx_weight_m: '155 lb', rx_weight_f: '105 lb' }
      ],
      stimulus: 'Barbell cycling with controlled breathing and fast transitions.',
      notes: null
    },
    {
      name: 'Glen',
      hero_bio: 'Glen honors Navy SEAL Glen Doherty, who was killed in Benghazi on September 11, 2012. The workout was released by CrossFit as part of the Hero series. It blends heavy lifting with long monostructural work and rope-climb skill under fatigue.',
      format: 'For Time',
      time_domain: 'Long (20–35 min)',
      workout_description: 'For Time: 30 Clean and Jerks (135/95 lb), Run 1 mile, 10 Rope Climbs (15 ft).',
      movements: [
        { movement_name: 'Clean and Jerk', reps: '30', rx_weight_m: '135 lb', rx_weight_f: '95 lb' },
        { movement_name: 'Run', reps: '1 mile', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Rope Climbs', reps: '10', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Mixed strength-endurance with composure after a heavy opener.',
      notes: null
    },
    {
      name: 'Josh',
      hero_bio: 'Josh honors Army Staff Sgt. Joshua Hager, who was killed in action in Afghanistan in 2011. CrossFit.com published this workout in his memory. The combination of overhead squats and pull-ups creates relentless shoulder and grip fatigue.',
      format: '5 rounds for time',
      time_domain: 'Medium (10–18 min)',
      workout_description: '5 rounds for time: 21 Overhead Squats (95/65 lb), 42 Pull-ups.',
      movements: [
        { movement_name: 'Overhead Squat', reps: '21', rx_weight_m: '95 lb', rx_weight_f: '65 lb' },
        { movement_name: 'Pull-ups', reps: '42', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Shoulder stamina and grip management over high pull volume.',
      notes: null
    },
    {
      name: 'Wittman',
      hero_bio: 'Wittman honors Army Ranger 1st Lt. Bryan R. Freeman and his team, and is dedicated to Ranger Sgt. Sean P. Wittman who was killed in Afghanistan in 2010. CrossFit published it as a heavy Hero test. The volume under load challenges pacing and trunk integrity throughout.',
      format: '7 rounds for time',
      time_domain: 'Long (20–35 min)',
      workout_description: '7 rounds for time: 15 Kettlebell Swings (32/24 kg), 15 Power Cleans (95/65 lb), 15 Box Jumps (24/20 in).',
      movements: [
        { movement_name: 'Kettlebell Swing', reps: '15', rx_weight_m: '32 kg', rx_weight_f: '24 kg' },
        { movement_name: 'Power Clean', reps: '15', rx_weight_m: '95 lb', rx_weight_f: '65 lb' },
        { movement_name: 'Box Jump', reps: '15', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Long mixed-modal grind with repeated hinge and jump output.',
      notes: null
    },
    {
      name: 'Underwood',
      hero_bio: 'Underwood honors U.S. Army Sgt. 1st Class Nathan Underwood. It was published on CrossFit.com as a Hero workout focused on sustained grit. The task combines loaded hinge work with bodyweight and cyclical stress.',
      format: 'For Time',
      time_domain: 'Medium (12–20 min)',
      workout_description: 'For Time: 10 rounds of 10 Kettlebell Swings (53/35 lb), 10 Burpees, 100m Run.',
      movements: [
        { movement_name: 'Kettlebell Swing', reps: '10', rx_weight_m: '53 lb', rx_weight_f: '35 lb' },
        { movement_name: 'Burpees', reps: '10', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Run', reps: '100m', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Repeat sprint efforts with posterior-chain and respiratory fatigue.',
      notes: null
    },
    {
      name: 'Badger',
      hero_bio: 'Badger honors Chief Petty Officer Mark Carter, nicknamed "Badger," who was killed in Afghanistan in 2007. The workout was posted by CrossFit as part of the Hero series. It punishes transitions between heavy lifting, gymnastics, and running.',
      format: '3 rounds for time',
      time_domain: 'Medium (12–20 min)',
      workout_description: '3 rounds for time: 30 Squat Cleans (95/65 lb), 30 Pull-ups, Run 800m.',
      movements: [
        { movement_name: 'Squat Clean', reps: '30', rx_weight_m: '95 lb', rx_weight_f: '65 lb' },
        { movement_name: 'Pull-ups', reps: '30', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Run', reps: '800m', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'High-volume leg and grip fatigue with long run repeats.',
      notes: null
    },
    {
      name: 'Michael',
      hero_bio: 'Michael honors Lt. Michael McGreevy, a U.S. Navy SEAL killed in Afghanistan in 2010. It is a classic Hero benchmark published by CrossFit.com. The workout tests repeatable aerobic output and trunk endurance.',
      format: '3 rounds for time',
      time_domain: 'Medium (15–25 min)',
      workout_description: '3 rounds for time: Run 800m, 50 Back Extensions, 50 Sit-ups.',
      movements: [
        { movement_name: 'Run', reps: '800m', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Back Extension', reps: '50', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Sit-ups', reps: '50', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Aerobic pace control with posterior-chain and midline volume.',
      notes: null
    },
    {
      name: 'Nate',
      hero_bio: 'Nate honors Chief Petty Officer Nate Hardy, a U.S. Navy SEAL killed in Iraq in 2008. CrossFit.com published this Hero workout with advanced gymnastics and kettlebell loading. It demands skill retention while heart rate stays high.',
      format: '20-minute AMRAP',
      time_domain: 'Long (20 min)',
      workout_description: 'AMRAP 20: 2 Muscle-ups, 4 Handstand Push-ups, 8 Kettlebell Swings (70/53 lb).',
      movements: [
        { movement_name: 'Muscle-up', reps: '2', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Handstand Push-up', reps: '4', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Kettlebell Swing', reps: '8', rx_weight_m: '70 lb', rx_weight_f: '53 lb' }
      ],
      stimulus: 'High-skill turnover under continuous local shoulder fatigue.',
      notes: null
    },
    {
      name: 'Randy',
      hero_bio: 'Randy honors Randy Simmons, a 27-year LAPD veteran and SWAT officer killed in the line of duty in 2008. CrossFit named this one-movement test in his memory. It is a pure power-endurance sprint with no built-in rest.',
      format: 'For Time',
      time_domain: 'Short (4–8 min)',
      workout_description: 'For Time: 75 Power Snatches (75/55 lb).',
      movements: [
        { movement_name: 'Power Snatch', reps: '75', rx_weight_m: '75 lb', rx_weight_f: '55 lb' }
      ],
      stimulus: 'Sustained barbell cycling and grip under escalating respiratory demand.',
      notes: null
    },
    {
      name: 'Danny',
      hero_bio: 'Danny honors Army Sgt. 1st Class Daniel Crabtree, killed in Iraq in 2004. It was posted on CrossFit.com as a Hero benchmark. This workout rewards pacing discipline across long cyclical intervals.',
      format: 'For Time',
      time_domain: 'Long (25–40 min)',
      workout_description: 'For Time: 30 Box Jumps (24/20 in), 20 Push Press (115/75 lb), 30 Pull-ups; 30 Box Jumps, 20 Push Press (115/75 lb), 30 Pull-ups; 30 Box Jumps, 20 Push Press (115/75 lb), 30 Pull-ups.',
      movements: [
        { movement_name: 'Box Jump', reps: '30 x 3', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Push Press', reps: '20 x 3', rx_weight_m: '115 lb', rx_weight_f: '75 lb' },
        { movement_name: 'Pull-ups', reps: '30 x 3', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Long repeat rounds requiring even pacing and shoulder management.',
      notes: null
    },
    {
      name: 'Holleyman',
      hero_bio: 'Holleyman honors U.S. Army Staff Sgt. Aaron Holleyman, killed in Afghanistan in 2004. The Hero workout was published by CrossFit in his memory. It pairs steady barbell work with running and burpee demand.',
      format: '30 rounds for time',
      time_domain: 'Long (30–50 min)',
      workout_description: '30 rounds for time: 5 Wall Balls (20/14 lb), 3 Handstand Push-ups, 1 Power Clean (225/155 lb).',
      movements: [
        { movement_name: 'Wall Ball', reps: '5', rx_weight_m: '20 lb', rx_weight_f: '14 lb' },
        { movement_name: 'Handstand Push-up', reps: '3', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Power Clean', reps: '1', rx_weight_m: '225 lb', rx_weight_f: '155 lb' }
      ],
      stimulus: 'High-round consistency with heavy singles under fatigue.',
      notes: null
    },
    {
      name: 'J.T.',
      hero_bio: 'J.T. honors Petty Officer 1st Class Jeff Taylor, a Navy SEAL killed in Afghanistan in 2005. This was one of the earliest Hero workouts on CrossFit.com. The pressing volume makes it a strict upper-body stamina test.',
      format: '21-15-9 for time',
      time_domain: 'Medium (8–15 min)',
      workout_description: '21-15-9 reps for time: Handstand Push-ups, Ring Dips, Push-ups.',
      movements: [
        { movement_name: 'Handstand Push-up', reps: '21-15-9', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Ring Dip', reps: '21-15-9', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Push-up', reps: '21-15-9', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Pressing density and local muscular endurance with minimal relief.',
      notes: null
    },
    {
      name: 'Capoot',
      hero_bio: 'Capoot honors James "Pimp" Capoot, a New York firefighter and CrossFit community member who died in the line of duty. The workout was shared by CrossFit as a Hero tribute. It combines simple movements into an aggressive sprint chipper.',
      format: 'For Time',
      time_domain: 'Short (6–12 min)',
      workout_description: 'For Time: 100 Push-ups, 800m Run, 75 Push-ups, 1,200m Run, 50 Push-ups, 1,600m Run, 25 Push-ups.',
      movements: [
        { movement_name: 'Push-up', reps: '100-75-50-25', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Run', reps: '800m + 1,200m + 1,600m', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'High heart-rate push stamina and run pacing under cumulative fatigue.',
      notes: null
    },
    {
      name: 'The Seven',
      hero_bio: 'The Seven honors seven CIA officers killed in Khost, Afghanistan, in 2009. CrossFit published it with broad modal variety to represent relentless work. It is a long benchmark with heavy transition costs and rising fatigue.',
      format: '7 rounds for time',
      time_domain: 'Long (25–40 min)',
      workout_description: '7 rounds for time: 7 Handstand Push-ups, 7 Thrusters (135/95 lb), 7 Knees-to-Elbows, 7 Deadlifts (245/165 lb), 7 Burpees, 7 Kettlebell Swings (70/53 lb), 7 Pull-ups.',
      movements: [
        { movement_name: 'Handstand Push-up', reps: '7', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Thruster', reps: '7', rx_weight_m: '135 lb', rx_weight_f: '95 lb' },
        { movement_name: 'Knees-to-Elbows', reps: '7', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Deadlift', reps: '7', rx_weight_m: '245 lb', rx_weight_f: '165 lb' },
        { movement_name: 'Burpee', reps: '7', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Kettlebell Swing', reps: '7', rx_weight_m: '70 lb', rx_weight_f: '53 lb' },
        { movement_name: 'Pull-up', reps: '7', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Long full-body output with repeated grip and shoulder stress.',
      notes: null
    },
    {
      name: 'Taylor',
      hero_bio: 'Taylor honors Lt. Michael Murphy’s friend and teammate Lt. Michael Taylor, a U.S. Navy SEAL. It was posted on CrossFit.com as a Hero workout with escalating wall-ball volume. Athletes are forced to manage breathing and pace from the opening rounds.',
      format: 'For Time',
      time_domain: 'Long (20–35 min)',
      workout_description: 'For Time: 1,000m Row, 21 Thrusters (95/65 lb), 12 Rope Climbs (15 ft), 800m Row, 15 Thrusters (95/65 lb), 9 Rope Climbs (15 ft), 600m Row, 9 Thrusters (95/65 lb), 6 Rope Climbs (15 ft).',
      movements: [
        { movement_name: 'Row', reps: '1,000m + 800m + 600m', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Thruster', reps: '21-15-9', rx_weight_m: '95 lb', rx_weight_f: '65 lb' },
        { movement_name: 'Rope Climb', reps: '12-9-6', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Long mixed task requiring measured transitions and grip control.',
      notes: null
    },
    {
      name: 'Tommy V',
      hero_bio: 'Tommy V honors U.S. Army Sgt. Thomas Valentine, killed in Iraq in 2005. CrossFit posted this Hero workout as a long bodyweight-and-run challenge. It rewards partition strategy and consistent movement quality.',
      format: 'For Time',
      time_domain: 'Long (35–60 min)',
      workout_description: 'For Time: Run 1 mile, 21 Thrusters (115/75 lb), 15 Rope Climbs (15 ft), Run 1 mile.',
      movements: [
        { movement_name: 'Run', reps: '1 mile + 1 mile', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Thruster', reps: '21', rx_weight_m: '115 lb', rx_weight_f: '75 lb' },
        { movement_name: 'Rope Climb', reps: '15', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Long aerobic effort with a dense mid-workout strength-skill block.',
      notes: null
    },
    {
      name: 'Jason',
      hero_bio: 'Jason honors SO1 Jason Lewis, a U.S. Navy SEAL killed in Afghanistan in 2007. It is one of the classic Hero workouts from CrossFit.com. The combination of handstand push-ups, squats, and rope climbs creates deep shoulder and trunk fatigue.',
      format: 'For Time',
      time_domain: 'Long (20–35 min)',
      workout_description: 'For Time: 100 Squats, 5 Muscle-ups, 75 Squats, 10 Muscle-ups, 50 Squats, 15 Muscle-ups, 25 Squats, 20 Muscle-ups.',
      movements: [
        { movement_name: 'Air Squat', reps: '100-75-50-25', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Muscle-up', reps: '5-10-15-20', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Descending leg volume with ascending high-skill gymnastics demand.',
      notes: null
    },
    {
      name: 'Chad',
      hero_bio: 'Chad honors Navy SEAL Chad Wilkinson and is performed by the CrossFit community on Veterans Day. The standard is a long weighted step-up test performed with a rucksack. It is intentionally simple and mentally demanding.',
      format: 'For Time',
      time_domain: 'Long (45–90 min)',
      workout_description: 'For Time: 1,000 Box Step-ups (20 in) with a ruck/vest (45/35 lb).',
      movements: [
        { movement_name: 'Box Step-up', reps: '1,000', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Ruck/Vest', reps: 'Wear throughout', rx_weight_m: '45 lb', rx_weight_f: '35 lb' }
      ],
      stimulus: 'Sustained unilateral stamina and mental resilience.',
      notes: 'Perform with ruck or vest as prescribed.'
    },
    {
      name: 'Luce',
      hero_bio: 'Luce honors Marine Cpl. James Luce, who was killed in Afghanistan in 2009. CrossFit.com programmed it as a repeated-round Hero benchmark. It requires disciplined pacing across heavy pulls, burpees, and short runs.',
      format: '10 rounds for time',
      time_domain: 'Long (20–35 min)',
      workout_description: '10 rounds for time: 10 Deadlifts (225/155 lb), 10 Burpees, 100m Sprint.',
      movements: [
        { movement_name: 'Deadlift', reps: '10', rx_weight_m: '225 lb', rx_weight_f: '155 lb' },
        { movement_name: 'Burpee', reps: '10', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Sprint', reps: '100m', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Repeat power output with minimal recovery between rounds.',
      notes: null
    },
    {
      name: 'Coffey',
      hero_bio: 'Coffey honors firefighter and CrossFit athlete Michael Coffey. It was released as a Hero workout emphasizing sustained mixed-modal work. Athletes are challenged to hold pace across run intervals and loaded movement volume.',
      format: 'For Time',
      time_domain: 'Long (25–40 min)',
      workout_description: 'For Time: 800m Run, 50 Back Extensions, 50 Sit-ups, 800m Run, 35 Back Extensions, 35 Sit-ups, 800m Run, 20 Back Extensions, 20 Sit-ups.',
      movements: [
        { movement_name: 'Run', reps: '800m x 3', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Back Extension', reps: '50-35-20', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Sit-up', reps: '50-35-20', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Aerobic durability with accumulating posterior-chain and trunk fatigue.',
      notes: null
    },
    {
      name: 'Dork',
      hero_bio: 'Dork is a Hero workout published by CrossFit to honor a fallen service member. It was designed as a mixed-modal benchmark with high volume and transition pressure. The workout challenges athletes to stay technically clean under fatigue.',
      format: 'For Time',
      time_domain: 'Medium (12–20 min)',
      workout_description: 'For Time: 6 rounds of 60 Double-Unders, 30 Burpees, 10 Power Cleans (135/95 lb).',
      movements: [
        { movement_name: 'Double-Under', reps: '60', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Burpee', reps: '30', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Power Clean', reps: '10', rx_weight_m: '135 lb', rx_weight_f: '95 lb' }
      ],
      stimulus: 'Grip and breathing control with repeated barbell transitions.',
      notes: null
    },
    {
      name: 'Roy',
      hero_bio: 'Roy honors Marine Corps Sgt. Michael H. Roy, killed in Afghanistan in 2009. CrossFit.com published this Hero workout as a strict triplet with rope climb skill. The combination creates a high-demand grip and pressing test.',
      format: '5 rounds for time',
      time_domain: 'Medium (12–20 min)',
      workout_description: '5 rounds for time: 15 Deadlifts (225/155 lb), 20 Box Jumps (24/20 in), 25 Pull-ups.',
      movements: [
        { movement_name: 'Deadlift', reps: '15', rx_weight_m: '225 lb', rx_weight_f: '155 lb' },
        { movement_name: 'Box Jump', reps: '20', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Pull-up', reps: '25', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Posterior-chain power and grip stamina with cyclical jumping.',
      notes: null
    },
    {
      name: 'Johnson',
      hero_bio: 'Johnson honors U.S. Army Sgt. 1st Class Dwayne Johnson, killed in Iraq in 2005. It was released by CrossFit as a Hero conditioning benchmark. The workout blends running with loaded hip extension and plyometric output.',
      format: '4 rounds for time',
      time_domain: 'Medium (10–18 min)',
      workout_description: '4 rounds for time: Run 400m, 20 Kettlebell Swings (53/35 lb), 20 Box Jumps (24/20 in).',
      movements: [
        { movement_name: 'Run', reps: '400m', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Kettlebell Swing', reps: '20', rx_weight_m: '53 lb', rx_weight_f: '35 lb' },
        { movement_name: 'Box Jump', reps: '20', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Steady mixed-modal intervals with leg and breathing fatigue.',
      notes: null
    },
    {
      name: 'Small',
      hero_bio: 'Small honors U.S. Army Staff Sgt. Christopher Small. CrossFit published this Hero workout with descending reps and a high carry demand. Athletes are tested by sustained trunk tension and shoulder loading throughout.',
      format: 'For Time',
      time_domain: 'Long (20–35 min)',
      workout_description: 'For Time: 3 rounds of 800m Run, 50 Back Extensions, 50 Sit-ups.',
      movements: [
        { movement_name: 'Run', reps: '800m', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Back Extension', reps: '50', rx_weight_m: null, rx_weight_f: null },
        { movement_name: 'Sit-up', reps: '50', rx_weight_m: null, rx_weight_f: null }
      ],
      stimulus: 'Aerobic and trunk endurance with repeat-round consistency.',
      notes: null
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
