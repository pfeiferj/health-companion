import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.metActivities.create({
    data: {
      metId: 1003,
      mets: 14.0,
      type: 'bicycling',
      name: 'bicycling, mountain, uphill, vigorous',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1004,
      mets: 16.0,
      type: 'bicycling',
      name: 'bicycling, mountain, competitive, racing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1008,
      mets: 8.5,
      type: 'bicycling',
      name: 'bicycling, BMX',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1009,
      mets: 8.5,
      type: 'bicycling',
      name: 'bicycling, mountain, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1010,
      mets: 4.0,
      type: 'bicycling',
      name: 'bicycling, <10 mph, leisure, to work or for pleasure (Taylor Code 115)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1011,
      mets: 6.8,
      type: 'bicycling',
      name: 'bicycling, to/from work, self selected pace',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1013,
      mets: 5.8,
      type: 'bicycling',
      name: 'bicycling, on dirt or farm road, moderate pace',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1015,
      mets: 7.5,
      type: 'bicycling',
      name: 'bicycling, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1018,
      mets: 3.5,
      type: 'bicycling',
      name: 'bicycling, leisure, 5.5 mph',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1019,
      mets: 5.8,
      type: 'bicycling',
      name: 'bicycling, leisure, 9.4 mph',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1020,
      mets: 6.8,
      type: 'bicycling',
      name: 'bicycling, 10-11.9 mph, leisure, slow, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1030,
      mets: 8.0,
      type: 'bicycling',
      name: 'bicycling, 12-13.9 mph, leisure, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1040,
      mets: 10.0,
      type: 'bicycling',
      name: 'bicycling, 14-15.9 mph, racing or leisure, fast, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1050,
      mets: 12.0,
      type: 'bicycling',
      name:
        'bicycling, 16-19 mph, racing/not drafting or > 19 mph drafting, very fast, racing general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1060,
      mets: 15.8,
      type: 'bicycling',
      name: 'bicycling, > 20 mph, racing, not drafting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1065,
      mets: 8.5,
      type: 'bicycling',
      name: 'bicycling, 12 mph, seated, hands on brake hoods or bar drops, 80 rpm',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1066,
      mets: 9.0,
      type: 'bicycling',
      name: 'bicycling, 12 mph, standing, hands on brake hoods, 60 rpm',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 1070,
      mets: 5.0,
      type: 'bicycling',
      name: 'unicycling',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2001,
      mets: 2.3,
      type: 'conditioning exercise',
      name: 'activity promoting video game (e.g., Wii Fit), light effort (e.g., balance, yoga)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2003,
      mets: 3.8,
      type: 'conditioning exercise',
      name:
        'activity promoting video game (e.g., Wii Fit), moderate effort (e.g., aerobic, resistance)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2005,
      mets: 7.2,
      type: 'conditioning exercise',
      name:
        'activity promoting video/arcade game (e.g., Exergaming, Dance Dance Revolution), vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2008,
      mets: 5.0,
      type: 'conditioning exercise',
      name: 'army type obstacle course exercise, boot camp training program ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2010,
      mets: 7.0,
      type: 'conditioning exercise',
      name: 'bicycling, stationary, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2011,
      mets: 3.5,
      type: 'conditioning exercise',
      name: 'bicycling, stationary, 30-50 watts, very light to light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2012,
      mets: 6.8,
      type: 'conditioning exercise',
      name: 'bicycling, stationary, 90-100 watts, moderate to vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2013,
      mets: 8.8,
      type: 'conditioning exercise',
      name: 'bicycling, stationary, 101-160 watts, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2014,
      mets: 11.0,
      type: 'conditioning exercise',
      name: 'bicycling, stationary, 161-200 watts, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2015,
      mets: 14.0,
      type: 'conditioning exercise',
      name: 'bicycling, stationary, 201-270 watts, very vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2017,
      mets: 4.8,
      type: 'conditioning exercise',
      name: 'bicycling, stationary, 51-89 watts, light-to-moderate effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2019,
      mets: 8.5,
      type: 'conditioning exercise',
      name: 'bicycling, stationary, RPM/Spin bike class ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2020,
      mets: 8.0,
      type: 'conditioning exercise',
      name: 'calisthenics (e.g., push ups, sit ups, pull-ups, jumping jacks), vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2022,
      mets: 3.8,
      type: 'conditioning exercise',
      name: 'calisthenics (e.g., push ups, sit ups, pull-ups, lunges), moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2024,
      mets: 2.8,
      type: 'conditioning exercise',
      name: 'calisthenics (e.g., situps, abdominal crunches), light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2030,
      mets: 3.5,
      type: 'conditioning exercise',
      name:
        'calisthenics, light or moderate effort, general (e.g., back exercises), going up & down from floor (Taylor Code 150)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2035,
      mets: 4.3,
      type: 'conditioning exercise',
      name: 'circuit training, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2040,
      mets: 8.0,
      type: 'conditioning exercise',
      name:
        'circuit training, including kettlebells, some aerobic movement with minimal rest, general, vigorous intensity',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2045,
      mets: 3.5,
      type: 'conditioning exercise',
      name: 'CurvesTM exercise routines in women ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2048,
      mets: 5.0,
      type: 'conditioning exercise',
      name: 'Elliptical trainer, moderate effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2050,
      mets: 6.0,
      type: 'conditioning exercise',
      name:
        'resistance training (weight lifting, free weight, nautilus or universal), power lifting or body building, vigorous effort (Taylor Code 210)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2052,
      mets: 5.0,
      type: 'conditioning exercise',
      name: 'resistance (weight) training, squats , slow or explosive effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2054,
      mets: 3.5,
      type: 'conditioning exercise',
      name:
        'resistance (weight) training, multiple exercises, 8-15 repetitions at varied resistance ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2060,
      mets: 5.5,
      type: 'conditioning exercise',
      name: 'health club exercise, general (Taylor Code 160)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2061,
      mets: 5.0,
      type: 'conditioning exercise',
      name: 'health club exercise classes, general, gym/weight training combined in one visit',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2062,
      mets: 7.8,
      type: 'conditioning exercise',
      name: 'health club exercise, conditioning classes',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2064,
      mets: 3.8,
      type: 'conditioning exercise',
      name: 'home exercise, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2065,
      mets: 9.0,
      type: 'conditioning exercise',
      name: 'stair-treadmill ergometer, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2068,
      mets: 12.3,
      type: 'conditioning exercise',
      name: 'rope skipping, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2070,
      mets: 6.0,
      type: 'conditioning exercise',
      name: 'rowing, stationary ergometer, general, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2071,
      mets: 4.8,
      type: 'conditioning exercise',
      name: 'rowing, stationary, general, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2072,
      mets: 7.0,
      type: 'conditioning exercise',
      name: 'rowing, stationary, 100 watts, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2073,
      mets: 8.5,
      type: 'conditioning exercise',
      name: 'rowing, stationary, 150 watts, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2074,
      mets: 12.0,
      type: 'conditioning exercise',
      name: 'rowing, stationary, 200 watts, very vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2080,
      mets: 6.8,
      type: 'conditioning exercise',
      name: 'ski machine, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2085,
      mets: 11.0,
      type: 'conditioning exercise',
      name: 'slide board exercise, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2090,
      mets: 6.0,
      type: 'conditioning exercise',
      name: 'slimnastics, jazzercise',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2101,
      mets: 2.3,
      type: 'conditioning exercise',
      name: 'stretching, mild',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2105,
      mets: 3.0,
      type: 'conditioning exercise',
      name: 'pilates, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2110,
      mets: 6.8,
      type: 'conditioning exercise',
      name: 'teaching exercise class (e.g., aerobic, water)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2112,
      mets: 2.8,
      type: 'conditioning exercise',
      name: 'therapeutic exercise ball, Fitball exercise ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2115,
      mets: 2.8,
      type: 'conditioning exercise',
      name: 'upper body exercise, arm ergometer ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2117,
      mets: 4.3,
      type: 'conditioning exercise',
      name: 'upper body exercise, stationary bicycle - Airdyne (arms only) 40 rpm, moderate ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2120,
      mets: 5.3,
      type: 'conditioning exercise',
      name: 'water aerobics, water calisthenics, water exercise',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2135,
      mets: 1.3,
      type: 'conditioning exercise',
      name: 'whirlpool, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2140,
      mets: 2.3,
      type: 'conditioning exercise',
      name:
        'video exercise workouts, TV conditioning programs (e.g., yoga, stretching), light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2143,
      mets: 4.0,
      type: 'conditioning exercise',
      name:
        'video exercise workouts, TV conditioning programs (e.g., cardio-resistance), moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2146,
      mets: 6.0,
      type: 'conditioning exercise',
      name:
        'video exercise workouts, TV conditioning programs (e.g., cardio-resistance), vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2150,
      mets: 2.5,
      type: 'conditioning exercise',
      name: 'yoga, Hatha ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2160,
      mets: 4.0,
      type: 'conditioning exercise',
      name: 'yoga, Power ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2170,
      mets: 2.0,
      type: 'conditioning exercise',
      name: 'yoga, Nadisodhana ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2180,
      mets: 3.3,
      type: 'conditioning exercise',
      name: 'yoga, Surya Namaskar',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2200,
      mets: 5.3,
      type: 'conditioning exercise',
      name:
        'native New Zealander physical activities (e.g., Haka Powhiri, Moteatea, Waita Tira, Whakawatea, etc.), general, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 2205,
      mets: 6.8,
      type: 'conditioning exercise',
      name:
        'native New Zealander physical activities (e.g., Haka, Taiahab), general, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3010,
      mets: 5.0,
      type: 'dancing',
      name: 'ballet, modern, or jazz, general, rehearsal or class',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3012,
      mets: 6.8,
      type: 'dancing',
      name: 'ballet, modern, or jazz, performance, vigorous effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3014,
      mets: 4.8,
      type: 'dancing',
      name: 'tap ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3015,
      mets: 7.3,
      type: 'dancing',
      name: 'aerobic, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3016,
      mets: 7.5,
      type: 'dancing',
      name: 'aerobic, step, with 6 - 8 inch step',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3017,
      mets: 9.5,
      type: 'dancing',
      name: 'aerobic, step, with 10 - 12 inch step',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3018,
      mets: 5.5,
      type: 'dancing',
      name: 'aerobic, step, with 4-inch step ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3019,
      mets: 8.5,
      type: 'dancing',
      name: 'bench step class, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3020,
      mets: 5.0,
      type: 'dancing',
      name: 'aerobic, low impact',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3021,
      mets: 7.3,
      type: 'dancing',
      name: 'aerobic, high impact',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3022,
      mets: 10.0,
      type: 'dancing',
      name: 'aerobic dance wearing 10-15 lb weights ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3025,
      mets: 4.5,
      type: 'dancing',
      name:
        'ethnic or cultural dancing (e.g., Greek, Middle Eastern, hula, salsa, merengue, bamba y plena, flamenco, belly, and swing)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3030,
      mets: 5.5,
      type: 'dancing',
      name: 'ballroom, fast (Taylor Code 125)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3031,
      mets: 7.8,
      type: 'dancing',
      name:
        'general dancing (e.g., disco, folk, Irish step dancing, line dancing, polka, contra, country)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3038,
      mets: 11.3,
      type: 'dancing',
      name: 'ballroom dancing, competitive, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3040,
      mets: 3.0,
      type: 'dancing',
      name:
        'ballroom, slow (e.g., waltz, foxtrot, slow dancing, samba, tango, 19th century dance, mambo, cha cha)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3050,
      mets: 5.5,
      type: 'dancing',
      name: 'Anishinaabe Jingle Dancing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 3060,
      mets: 3.5,
      type: 'dancing',
      name:
        "Caribbean dance (Abakua, Beguine, Bellair, Bongo, Brukin's, Caribbean Quadrills, Dinki Mini, Gere, Gumbay, Ibo, Jonkonnu, Kumina, Oreisha, Jambu)",
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4001,
      mets: 3.5,
      type: 'fishing and hunting',
      name: 'fishing, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4005,
      mets: 4.5,
      type: 'fishing and hunting',
      name: 'fishing, crab fishing ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4007,
      mets: 4.0,
      type: 'fishing and hunting',
      name: 'fishing, catching fish with hands ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4010,
      mets: 4.3,
      type: 'fishing and hunting',
      name: 'fishing related, digging worms, with shovel',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4020,
      mets: 4.0,
      type: 'fishing and hunting',
      name: 'fishing from river bank and walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4030,
      mets: 2.0,
      type: 'fishing and hunting',
      name: 'fishing from boat or canoe, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4040,
      mets: 3.5,
      type: 'fishing and hunting',
      name: 'fishing from river bank, standing (Taylor Code 660)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4050,
      mets: 6.0,
      type: 'fishing and hunting',
      name: 'fishing in stream, in waders (Taylor Code 670)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4060,
      mets: 2.0,
      type: 'fishing and hunting',
      name: 'fishing, ice, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4061,
      mets: 1.8,
      type: 'fishing and hunting',
      name: 'fishing, jog or line, standing, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4062,
      mets: 3.5,
      type: 'fishing and hunting',
      name: 'fishing, dip net, setting net and retrieving fish, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4063,
      mets: 3.8,
      type: 'fishing and hunting',
      name: 'fishing, set net, setting net and retrieving fish, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4064,
      mets: 3.0,
      type: 'fishing and hunting',
      name: 'fishing, fishing wheel, setting net and retrieving fish, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4065,
      mets: 2.3,
      type: 'fishing and hunting',
      name: 'fishing with a spear, standing ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4070,
      mets: 2.5,
      type: 'fishing and hunting',
      name: 'hunting, bow and arrow, or crossbow',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4080,
      mets: 6.0,
      type: 'fishing and hunting',
      name: 'hunting, deer, elk, large game (Taylor Code 170)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4081,
      mets: 11.3,
      type: 'fishing and hunting',
      name: 'hunting large game, dragging carcass ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4083,
      mets: 4.0,
      type: 'fishing and hunting',
      name: 'hunting large marine animals ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4085,
      mets: 2.5,
      type: 'fishing and hunting',
      name: 'hunting large game, from a hunting stand, limited walking ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4086,
      mets: 2.0,
      type: 'fishing and hunting',
      name: 'hunting large game from a car, plane, or boat',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4090,
      mets: 2.5,
      type: 'fishing and hunting',
      name: 'hunting, duck, wading',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4095,
      mets: 3.0,
      type: 'fishing and hunting',
      name: 'hunting, flying fox, squirrel ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4100,
      mets: 5.0,
      type: 'fishing and hunting',
      name: 'hunting, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4110,
      mets: 6.0,
      type: 'fishing and hunting',
      name: 'hunting, pheasants or grouse (Taylor Code 680)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4115,
      mets: 3.3,
      type: 'fishing and hunting',
      name: 'hunting, birds ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4120,
      mets: 5.0,
      type: 'fishing and hunting',
      name: 'hunting, rabbit, squirrel, prairie chick, raccoon, small game (Taylor Code 690)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4123,
      mets: 3.3,
      type: 'fishing and hunting',
      name: 'hunting, pigs, wild ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4124,
      mets: 2.0,
      type: 'fishing and hunting',
      name: 'trapping game, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4125,
      mets: 9.5,
      type: 'fishing and hunting',
      name: 'hunting, hiking with hunting gear ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4130,
      mets: 2.5,
      type: 'fishing and hunting',
      name: 'pistol shooting or trap shooting, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4140,
      mets: 2.3,
      type: 'fishing and hunting',
      name: 'rifle exercises, shooting, lying down ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 4145,
      mets: 2.5,
      type: 'fishing and hunting',
      name: 'rifle exercises, shooting, kneeling or standing ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5010,
      mets: 3.3,
      type: 'home activities',
      name: 'cleaning, sweeping carpet or floors, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5011,
      mets: 2.3,
      type: 'home activities',
      name: 'cleaning, sweeping, slow, light effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5012,
      mets: 3.8,
      type: 'home activities',
      name: 'cleaning, sweeping, slow, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5020,
      mets: 3.5,
      type: 'home activities',
      name: 'cleaning, heavy or major (e.g. wash car, wash windows, clean garage), moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5021,
      mets: 3.5,
      type: 'home activities',
      name: 'cleaning, mopping, standing, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5022,
      mets: 3.2,
      type: 'home activities',
      name: 'cleaning windows, washing windows, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5023,
      mets: 2.5,
      type: 'home activities',
      name: 'mopping, standing, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5024,
      mets: 4.5,
      type: 'home activities',
      name: 'polishing floors, standing, walking slowly, using electric polishing machine ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5025,
      mets: 2.8,
      type: 'home activities',
      name: 'multiple household tasks all at once, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5026,
      mets: 3.5,
      type: 'home activities',
      name: 'multiple household tasks all at once, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5027,
      mets: 4.3,
      type: 'home activities',
      name: 'multiple household tasks all at once, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5030,
      mets: 3.3,
      type: 'home activities',
      name: 'cleaning, house or cabin, general, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5032,
      mets: 2.3,
      type: 'home activities',
      name: 'dusting or polishing furniture, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5035,
      mets: 3.3,
      type: 'home activities',
      name:
        'kitchen activity, general, (e.g., cooking, washing dishes, cleaning up), moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5040,
      mets: 2.5,
      type: 'home activities',
      name: 'cleaning, general (straightening up, changing linen, carrying out trash, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5041,
      mets: 1.8,
      type: 'home activities',
      name: 'wash dishes, standing or in general (not broken into stand/walk components)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5042,
      mets: 2.5,
      type: 'home activities',
      name: 'wash dishes, clearing dishes from table, walking, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5043,
      mets: 3.3,
      type: 'home activities',
      name: 'vacuuming, general, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5044,
      mets: 3.0,
      type: 'home activities',
      name: 'butchering animals, small ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5045,
      mets: 6.0,
      type: 'home activities',
      name: 'butchering animal, large, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5046,
      mets: 2.3,
      type: 'home activities',
      name: 'cutting and smoking fish, drying fish or meat ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5048,
      mets: 4.0,
      type: 'home activities',
      name: 'tanning hides, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5049,
      mets: 3.5,
      type: 'home activities',
      name: 'cooking or food preparation, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5050,
      mets: 2.0,
      type: 'home activities',
      name:
        'cooking or food preparation - standing or sitting or in general (not broken into stand/walk components), manual appliances, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5051,
      mets: 2.5,
      type: 'home activities',
      name: 'serving food, setting table, implied walking or standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5052,
      mets: 2.5,
      type: 'home activities',
      name: 'cooking or food preparation, walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5053,
      mets: 2.5,
      type: 'home activities',
      name: 'feeding household animals',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5055,
      mets: 2.5,
      type: 'home activities',
      name:
        'putting away groceries (e.g. carrying groceries, shopping without a grocery cart), carrying packages',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5056,
      mets: 7.5,
      type: 'home activities',
      name: 'carrying groceries upstairs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5057,
      mets: 3.0,
      type: 'home activities',
      name: 'cooking Indian bread on an outside stove',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5060,
      mets: 2.3,
      type: 'home activities',
      name: 'food shopping with or without a grocery cart, standing or walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5065,
      mets: 2.3,
      type: 'home activities',
      name: 'non-food shopping, with or without a cart, standing or walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5070,
      mets: 1.8,
      type: 'home activities',
      name: 'ironing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5080,
      mets: 1.3,
      type: 'home activities',
      name: 'knitting, sewing, light effort, wrapping presents, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5082,
      mets: 2.8,
      type: 'home activities',
      name: 'sewing with a machine ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5090,
      mets: 2.0,
      type: 'home activities',
      name:
        'laundry, fold or hang clothes, put clothes in washer or dryer, packing suitcase, washing clothes by hand, implied standing, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5092,
      mets: 4.0,
      type: 'home activities',
      name: 'laundry, hanging wash, washing clothes by hand, moderate effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5095,
      mets: 2.3,
      type: 'home activities',
      name:
        'laundry, putting away clothes, gathering clothes to pack, putting away laundry, implied walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5100,
      mets: 3.3,
      type: 'home activities',
      name: 'making bed, changing linens',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5110,
      mets: 5.0,
      type: 'home activities',
      name: 'maple syruping/sugar bushing (including carrying buckets, carrying wood)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5120,
      mets: 5.8,
      type: 'home activities',
      name: 'moving furniture, household items, carrying boxes',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5121,
      mets: 5.0,
      type: 'home activities',
      name: 'moving, lifting light loads',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5125,
      mets: 4.8,
      type: 'home activities',
      name: 'organizing room',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5130,
      mets: 3.5,
      type: 'home activities',
      name: 'scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5131,
      mets: 2.0,
      type: 'home activities',
      name: 'scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5132,
      mets: 6.5,
      type: 'home activities',
      name: 'scrubbing floors, on hands and knees, scrubbing bathroom, bathtub, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5140,
      mets: 4.0,
      type: 'home activities',
      name: 'sweeping garage, sidewalk or outside of house',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5146,
      mets: 3.5,
      type: 'home activities',
      name:
        'standing, packing/unpacking boxes, occasional lifting of lightweight household items, loading or unloading items in car, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5147,
      mets: 3.0,
      type: 'home activities',
      name: 'implied walking, putting away household items, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5148,
      mets: 2.5,
      type: 'home activities',
      name: 'watering plants',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5149,
      mets: 2.5,
      type: 'home activities',
      name: 'building a fire inside',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5150,
      mets: 9.0,
      type: 'home activities',
      name: 'moving household items upstairs, carrying boxes or furniture',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5160,
      mets: 2.0,
      type: 'home activities',
      name: 'standing, light effort tasks (pump gas, change light bulb, etc.)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5165,
      mets: 3.5,
      type: 'home activities',
      name:
        'walking, moderate effort tasks, non-cleaning (readying to leave, shut/lock doors, close windows, etc.)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5170,
      mets: 2.2,
      type: 'home activities',
      name: 'sitting, playing with child(ren), light effort, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5171,
      mets: 2.8,
      type: 'home activities',
      name: 'standing, playing with child(ren) light effort, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5175,
      mets: 3.5,
      type: 'home activities',
      name: 'walking/running, playing with child(ren), moderate effort, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5180,
      mets: 5.8,
      type: 'home activities',
      name: 'walking/running, playing with child(ren), vigorous effort, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5181,
      mets: 3.0,
      type: 'home activities',
      name: 'walking and carrying small child, child weighing 15 lbs or more',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5182,
      mets: 2.3,
      type: 'home activities',
      name: 'walking and carrying small child, child weighing less than 15 lbs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5183,
      mets: 2.0,
      type: 'home activities',
      name: 'standing, holding child',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5184,
      mets: 2.5,
      type: 'home activities',
      name: 'child care, infant, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5185,
      mets: 2.0,
      type: 'home activities',
      name:
        'child care, sitting/kneeling (e.g., dressing, bathing, grooming, feeding, occasional lifting of child), light effort, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5186,
      mets: 3.0,
      type: 'home activities',
      name:
        'child care, standing (e.g., dressing, bathing, grooming, feeding, occasional lifting of child), moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5188,
      mets: 1.5,
      type: 'home activities',
      name: 'reclining with baby',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5189,
      mets: 2.0,
      type: 'home activities',
      name: 'breastfeeding, sitting or reclining ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5190,
      mets: 2.5,
      type: 'home activities',
      name: 'sit, playing with animals, light effort, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5191,
      mets: 2.8,
      type: 'home activities',
      name: 'stand, playing with animals, light effort, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5192,
      mets: 3.0,
      type: 'home activities',
      name: 'walk/run, playing with animals, general, light effort, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5193,
      mets: 4.0,
      type: 'home activities',
      name: 'walk/run, playing with animals, moderate effort, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5194,
      mets: 5.0,
      type: 'home activities',
      name: 'walk/run, playing with animals, vigorous effort, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5195,
      mets: 3.5,
      type: 'home activities',
      name: 'standing, bathing dog',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5197,
      mets: 2.3,
      type: 'home activities',
      name: 'animal care, household animals, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5200,
      mets: 4.0,
      type: 'home activities',
      name:
        'elder care, disabled adult, bathing, dressing, moving into and out of bed, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 5205,
      mets: 2.3,
      type: 'home activities',
      name: 'elder care, disabled adult, feeding, combing hair, light effort, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6010,
      mets: 3.0,
      type: 'home repair',
      name: 'airplane repair',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6020,
      mets: 4.0,
      type: 'home repair',
      name: 'automobile body work',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6030,
      mets: 3.3,
      type: 'home repair',
      name: 'automobile repair, light or moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6040,
      mets: 3.0,
      type: 'home repair',
      name: 'carpentry, general, workshop (Taylor Code 620)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6050,
      mets: 6.0,
      type: 'home repair',
      name:
        'carpentry, outside house, installing rain gutters (Taylor Code 640),carpentry, outside house, building a fence',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6052,
      mets: 3.8,
      type: 'home repair',
      name: 'carpentry, outside house, building a fence ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6060,
      mets: 3.3,
      type: 'home repair',
      name: 'carpentry, finishing or refinishing cabinets or furniture',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6070,
      mets: 6.0,
      type: 'home repair',
      name: 'carpentry, sawing hardwood',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6072,
      mets: 4.0,
      type: 'home repair',
      name: 'carpentry, home remodeling tasks, moderate effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6074,
      mets: 2.3,
      type: 'home repair',
      name: 'carpentry, home remodeling tasks, light effort  ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6080,
      mets: 5.0,
      type: 'home repair',
      name: 'caulking, chinking log cabin',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6090,
      mets: 4.5,
      type: 'home repair',
      name: 'caulking, except log cabin',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6100,
      mets: 5.0,
      type: 'home repair',
      name: 'cleaning gutters',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6110,
      mets: 5.0,
      type: 'home repair',
      name: 'excavating garage',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6120,
      mets: 5.0,
      type: 'home repair',
      name: 'hanging storm windows',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6122,
      mets: 5.0,
      type: 'home repair',
      name: 'hanging sheet rock inside house ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6124,
      mets: 3.0,
      type: 'home repair',
      name: 'hammering nails ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6126,
      mets: 2.5,
      type: 'home repair',
      name: 'home repair, general, light effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6127,
      mets: 4.5,
      type: 'home repair',
      name: 'home repair, general, moderate effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6128,
      mets: 6.0,
      type: 'home repair',
      name: 'home repair, general, vigorous effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6130,
      mets: 4.5,
      type: 'home repair',
      name: 'laying or removing carpet',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6140,
      mets: 3.8,
      type: 'home repair',
      name: 'laying tile or linoleum,repairing appliances',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6144,
      mets: 3.0,
      type: 'home repair',
      name: 'repairing appliances ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6150,
      mets: 5.0,
      type: 'home repair',
      name: 'painting, outside home (Taylor Code 650)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6160,
      mets: 3.3,
      type: 'home repair',
      name: 'painting inside house,wallpapering, scraping paint',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6165,
      mets: 4.5,
      type: 'home repair',
      name: 'painting, (Taylor Code 630)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6167,
      mets: 3.0,
      type: 'home repair',
      name: 'plumbing, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6170,
      mets: 3.0,
      type: 'home repair',
      name: 'put on and removal of tarp - sailboat',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6180,
      mets: 6.0,
      type: 'home repair',
      name: 'roofing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6190,
      mets: 4.5,
      type: 'home repair',
      name: 'sanding floors with a power sander',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6200,
      mets: 4.5,
      type: 'home repair',
      name: 'scraping and painting sailboat or powerboat',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6205,
      mets: 2.0,
      type: 'home repair',
      name: 'sharpening tools ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6210,
      mets: 5.0,
      type: 'home repair',
      name: 'spreading dirt with a shovel',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6220,
      mets: 4.5,
      type: 'home repair',
      name: 'washing and waxing hull of sailboat or airplane',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6225,
      mets: 2.0,
      type: 'home repair',
      name: 'washing and waxing car ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6230,
      mets: 4.5,
      type: 'home repair',
      name: 'washing fence, painting fence, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 6240,
      mets: 3.3,
      type: 'home repair',
      name: 'wiring, tapping-splicing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7010,
      mets: 1.0,
      type: 'inactivity quiet/light',
      name: 'lying quietly and watching television',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7011,
      mets: 1.3,
      type: 'inactivity quiet/light',
      name:
        'lying quietly, doing nothing, lying in bed awake, listening to music (not talking or reading)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7020,
      mets: 1.3,
      type: 'inactivity quiet/light',
      name: 'sitting quietly and watching television',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7021,
      mets: 1.3,
      type: 'inactivity quiet/light',
      name: 'sitting quietly, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7022,
      mets: 1.5,
      type: 'inactivity quiet/light',
      name: 'sitting quietly, fidgeting, general, fidgeting hands',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7023,
      mets: 1.8,
      type: 'inactivity quiet/light',
      name: 'sitting, fidgeting feet',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7024,
      mets: 1.3,
      type: 'inactivity quiet/light',
      name: 'sitting, smoking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7025,
      mets: 1.5,
      type: 'inactivity quiet/light',
      name: 'sitting, listening to music (not talking or reading) or watching a movie in a theater',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7026,
      mets: 1.3,
      type: 'inactivity quiet/light',
      name: 'sitting at a desk, resting head in hands',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7030,
      mets: 0.95,
      type: 'inactivity quiet/light',
      name: 'sleeping',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7040,
      mets: 1.3,
      type: 'inactivity quiet/light',
      name: 'standing quietly, standing in a line',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7041,
      mets: 1.8,
      type: 'inactivity quiet/light',
      name: 'standing, fidgeting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7050,
      mets: 1.3,
      type: 'inactivity quiet/light',
      name: 'reclining, writing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7060,
      mets: 1.3,
      type: 'inactivity quiet/light',
      name: 'reclining, talking or talking on phone',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7070,
      mets: 1.3,
      type: 'inactivity quiet/light',
      name: 'reclining, reading',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 7075,
      mets: 1.0,
      type: 'inactivity quiet/light',
      name: 'meditating',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8009,
      mets: 3.3,
      type: 'lawn and garden',
      name:
        'carrying, loading or stacking wood, loading/unloading or carrying lumber, light-to-moderate effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8010,
      mets: 5.5,
      type: 'lawn and garden',
      name: 'carrying, loading or stacking wood, loading/unloading or carrying lumber',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8019,
      mets: 4.5,
      type: 'lawn and garden',
      name: 'chopping wood, splitting logs, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8020,
      mets: 6.3,
      type: 'lawn and garden',
      name: 'chopping wood, splitting logs, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8025,
      mets: 3.5,
      type: 'lawn and garden',
      name: 'clearing light brush, thinning garden, moderate effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8030,
      mets: 6.3,
      type: 'lawn and garden',
      name:
        'clearing brush/land, undergrowth, or ground, hauling branches, wheelbarrow chores, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8040,
      mets: 5.0,
      type: 'lawn and garden',
      name: 'digging sandbox, shoveling sand',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8045,
      mets: 3.5,
      type: 'lawn and garden',
      name: 'digging, spading, filling garden, composting, light-to-moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8050,
      mets: 5.0,
      type: 'lawn and garden',
      name: 'digging, spading, filling garden, compositing, (Taylor Code 590)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8052,
      mets: 7.8,
      type: 'lawn and garden',
      name: 'digging, spading, filling garden, composting, vigorous effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8055,
      mets: 2.8,
      type: 'lawn and garden',
      name: 'driving tractor ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8057,
      mets: 8.3,
      type: 'lawn and garden',
      name: 'felling trees, large size',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8058,
      mets: 5.3,
      type: 'lawn and garden',
      name: 'felling trees, small-medium size',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8060,
      mets: 5.8,
      type: 'lawn and garden',
      name: 'gardening with heavy power tools, tilling a garden, chain saw',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8065,
      mets: 2.3,
      type: 'lawn and garden',
      name: 'gardening, using containers, older adults > 60 years ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8070,
      mets: 4.0,
      type: 'lawn and garden',
      name: 'irrigation channels, opening and closing ports ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8080,
      mets: 6.3,
      type: 'lawn and garden',
      name: 'laying crushed rock',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8090,
      mets: 5.0,
      type: 'lawn and garden',
      name: 'laying sod',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8095,
      mets: 5.5,
      type: 'lawn and garden',
      name: 'mowing lawn, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8100,
      mets: 2.5,
      type: 'lawn and garden',
      name: 'mowing lawn, riding mower (Taylor Code 550)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8110,
      mets: 6.0,
      type: 'lawn and garden',
      name: 'mowing lawn, walk, hand mower (Taylor Code 570)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8120,
      mets: 5.0,
      type: 'lawn and garden',
      name: 'mowing lawn, walk, power mower, moderate or vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8125,
      mets: 4.5,
      type: 'lawn and garden',
      name: 'mowing lawn, power mower, light or moderate effort (Taylor Code 590)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8130,
      mets: 2.5,
      type: 'lawn and garden',
      name: 'operating snow blower, walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8135,
      mets: 2.0,
      type: 'lawn and garden',
      name: 'planting, potting, transplanting seedlings or plants, light effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8140,
      mets: 4.3,
      type: 'lawn and garden',
      name: 'planting seedlings, shrub, stooping, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8145,
      mets: 4.3,
      type: 'lawn and garden',
      name: 'planting crops or garden, stooping, moderate effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8150,
      mets: 4.5,
      type: 'lawn and garden',
      name: 'planting trees',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8160,
      mets: 3.8,
      type: 'lawn and garden',
      name: 'raking lawn or leaves, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8165,
      mets: 4.0,
      type: 'lawn and garden',
      name: 'raking lawn (Taylor Code 600)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8170,
      mets: 4.0,
      type: 'lawn and garden',
      name: 'raking roof with snow rake',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8180,
      mets: 3.0,
      type: 'lawn and garden',
      name: 'riding snow blower',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8190,
      mets: 4.0,
      type: 'lawn and garden',
      name: 'sacking grass, leaves',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8192,
      mets: 5.5,
      type: 'lawn and garden',
      name: 'shoveling dirt or mud ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8195,
      mets: 5.3,
      type: 'lawn and garden',
      name: 'shoveling snow, by hand, moderate effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8200,
      mets: 6.0,
      type: 'lawn and garden',
      name: 'shovelling snow, by hand (Taylor Code 610)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8202,
      mets: 7.5,
      type: 'lawn and garden',
      name: 'shoveling snow, by hand, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8210,
      mets: 4.0,
      type: 'lawn and garden',
      name: 'trimming shrubs or trees, manual cutter',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8215,
      mets: 3.5,
      type: 'lawn and garden',
      name: 'trimming shrubs or trees, power cutter, using leaf blower, edge, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8220,
      mets: 3.0,
      type: 'lawn and garden',
      name: 'walking, applying fertilizer or seeding a lawn, push applicator',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8230,
      mets: 1.5,
      type: 'lawn and garden',
      name: 'watering lawn or garden, standing or walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8239,
      mets: 3.5,
      type: 'lawn and garden',
      name: 'weeding, cultivating garden, light-to-moderate effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8240,
      mets: 4.5,
      type: 'lawn and garden',
      name: 'weeding, cultivating garden (Taylor Code 580)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8241,
      mets: 5.0,
      type: 'lawn and garden',
      name: 'weeding, cultivating garden, using a hoe, moderate-to-vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8245,
      mets: 3.8,
      type: 'lawn and garden',
      name: 'gardening, general, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8246,
      mets: 3.5,
      type: 'lawn and garden',
      name: 'picking fruit off trees, picking fruits/vegetables, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8248,
      mets: 4.5,
      type: 'lawn and garden',
      name:
        'picking fruit off trees, gleaning fruits, picking fruits/vegetables, climbing ladder to pick fruit, vigorous effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8250,
      mets: 3.3,
      type: 'lawn and garden',
      name: 'implied walking/standing - picking up yard, light, picking flowers or vegetables',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8251,
      mets: 3.0,
      type: 'lawn and garden',
      name: 'walking, gathering gardening tools',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8255,
      mets: 5.5,
      type: 'lawn and garden',
      name: 'wheelbarrow, pushing garden cart or wheelbarrow ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8260,
      mets: 3.0,
      type: 'lawn and garden',
      name: 'yard work, general, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8261,
      mets: 4.0,
      type: 'lawn and garden',
      name: 'yard work, general, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 8262,
      mets: 6.0,
      type: 'lawn and garden',
      name: 'yard work, general, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9000,
      mets: 1.5,
      type: 'miscellaneous',
      name: 'board game playing, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9005,
      mets: 2.5,
      type: 'miscellaneous',
      name: 'casino gambling, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9010,
      mets: 1.5,
      type: 'miscellaneous',
      name: 'card playing, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9013,
      mets: 1.5,
      type: 'miscellaneous',
      name: 'chess game, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9015,
      mets: 1.5,
      type: 'miscellaneous',
      name: 'copying documents, standing ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9020,
      mets: 1.8,
      type: 'miscellaneous',
      name: 'drawing, writing, painting, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9025,
      mets: 1.0,
      type: 'miscellaneous',
      name: 'laughing, sitting ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9030,
      mets: 1.3,
      type: 'miscellaneous',
      name: 'sitting, reading, book, newspaper, etc.',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9040,
      mets: 1.3,
      type: 'miscellaneous',
      name: 'sitting, writing, desk work, typing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9045,
      mets: 1.0,
      type: 'miscellaneous',
      name: 'sitting, playing traditional video game, computer game ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9050,
      mets: 1.8,
      type: 'miscellaneous',
      name: 'standing, talking in person, on the phone, computer, or text messaging, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9055,
      mets: 1.5,
      type: 'miscellaneous',
      name: 'sitting, talking in person, on the phone, computer, or text messaging, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9060,
      mets: 1.3,
      type: 'miscellaneous',
      name: 'sitting, studying, general, including reading and/or writing, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9065,
      mets: 1.8,
      type: 'miscellaneous',
      name: 'sitting, in class, general, including note-taking or class discussion',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9070,
      mets: 1.8,
      type: 'miscellaneous',
      name: 'standing, reading',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9071,
      mets: 2.5,
      type: 'miscellaneous',
      name: 'standing, miscellaneous',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9075,
      mets: 1.8,
      type: 'miscellaneous',
      name: 'sitting, arts and crafts,  carving wood, weaving, spinning wool, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9080,
      mets: 3.0,
      type: 'miscellaneous',
      name: 'sitting, arts and crafts,  carving wood, weaving, spinning wool, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9085,
      mets: 2.5,
      type: 'miscellaneous',
      name: 'standing, arts and crafts, sand painting, carving, weaving, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9090,
      mets: 3.3,
      type: 'miscellaneous',
      name: 'standing, arts and crafts, sand painting, carving, weaving, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9095,
      mets: 3.5,
      type: 'miscellaneous',
      name: 'standing, arts and crafts, sand painting, carving, weaving, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9100,
      mets: 1.8,
      type: 'miscellaneous',
      name: 'retreat/family reunion activities involving sitting, relaxing, talking, eating',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9101,
      mets: 3.0,
      type: 'miscellaneous',
      name: 'retreat/family reunion activities involving playing games with children',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9105,
      mets: 2.0,
      type: 'miscellaneous',
      name: 'touring/traveling/vacation involving riding in a vehicle',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9106,
      mets: 3.5,
      type: 'miscellaneous',
      name: 'touring/traveling/vacation involving walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9110,
      mets: 2.5,
      type: 'miscellaneous',
      name: 'camping involving standing, walking, sitting, light-to-moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 9115,
      mets: 1.5,
      type: 'miscellaneous',
      name: 'sitting at a sporting event, spectator',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10010,
      mets: 1.8,
      type: 'music playing',
      name: 'accordion, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10020,
      mets: 2.3,
      type: 'music playing',
      name: 'cello, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10030,
      mets: 2.3,
      type: 'music playing',
      name: 'conducting orchestra, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10035,
      mets: 2.5,
      type: 'music playing',
      name: 'double bass, standing ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10040,
      mets: 3.8,
      type: 'music playing',
      name: 'drums, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10045,
      mets: 3.0,
      type: 'music playing',
      name: 'drumming (e.g., bongo, conga, benbe), moderate, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10050,
      mets: 2.0,
      type: 'music playing',
      name: 'flute, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10060,
      mets: 1.8,
      type: 'music playing',
      name: 'horn, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10070,
      mets: 2.3,
      type: 'music playing',
      name: 'piano, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10074,
      mets: 2.0,
      type: 'music playing',
      name: 'playing musical instruments, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10077,
      mets: 2.0,
      type: 'music playing',
      name: 'organ, sitting ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10080,
      mets: 3.5,
      type: 'music playing',
      name: 'trombone, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10090,
      mets: 1.8,
      type: 'music playing',
      name: 'trumpet, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10100,
      mets: 2.5,
      type: 'music playing',
      name: 'violin, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10110,
      mets: 1.8,
      type: 'music playing',
      name: 'woodwind, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10120,
      mets: 2.0,
      type: 'music playing',
      name: 'guitar, classical, folk, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10125,
      mets: 3.0,
      type: 'music playing',
      name: 'guitar, rock and roll band, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10130,
      mets: 4.0,
      type: 'music playing',
      name: 'marching band, baton twirling, walking, moderate pace, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10131,
      mets: 5.5,
      type: 'music playing',
      name: 'marching band, playing an instrument, walking, brisk pace, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 10135,
      mets: 3.5,
      type: 'music playing',
      name: 'marching band, drum major, walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11003,
      mets: 2.3,
      type: 'occupation',
      name: 'active workstation, treadmill desk, walking ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11006,
      mets: 3.0,
      type: 'occupation',
      name: 'airline flight attendant ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11010,
      mets: 4.0,
      type: 'occupation',
      name: 'bakery, general, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11015,
      mets: 2.0,
      type: 'occupation',
      name: 'bakery, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11020,
      mets: 2.3,
      type: 'occupation',
      name: 'bookbinding',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11030,
      mets: 6.0,
      type: 'occupation',
      name: 'building road, driving heavy machinery',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11035,
      mets: 2.0,
      type: 'occupation',
      name: 'building road, directing traffic, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11038,
      mets: 2.5,
      type: 'occupation',
      name: 'carpentry, general, light effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11040,
      mets: 4.3,
      type: 'occupation',
      name: 'carpentry, general, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11042,
      mets: 7.0,
      type: 'occupation',
      name: 'carpentry, general, heavy or vigorous effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11050,
      mets: 8.0,
      type: 'occupation',
      name: 'carrying heavy loads (e.g., bricks, tools)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11060,
      mets: 8.0,
      type: 'occupation',
      name: 'carrying moderate loads up stairs, moving boxes 25-49 lbs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11070,
      mets: 4.0,
      type: 'occupation',
      name: 'chambermaid, hotel housekeeper, making bed, cleaning bathroom, pushing cart',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11080,
      mets: 5.3,
      type: 'occupation',
      name: 'coal mining, drilling coal, rock',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11090,
      mets: 5.0,
      type: 'occupation',
      name: 'coal mining, erecting supports',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11100,
      mets: 5.5,
      type: 'occupation',
      name: 'coal mining, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11110,
      mets: 6.3,
      type: 'occupation',
      name: 'coal mining, shoveling coal',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11115,
      mets: 2.5,
      type: 'occupation',
      name: 'cook, chef',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11120,
      mets: 4.0,
      type: 'occupation',
      name: 'construction, outside, remodeling, new structures (e.g., roof repair, miscellaneous)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11125,
      mets: 2.3,
      type: 'occupation',
      name:
        'custodial work, light effort (e.g., cleaning sink and toilet, dusting, vacuuming, light cleaning)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11126,
      mets: 3.8,
      type: 'occupation',
      name:
        'custodial work, moderate effort (e.g., electric buffer, feathering arena floors, mopping, taking out trash, vacuuming)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11128,
      mets: 2.0,
      type: 'occupation',
      name: 'driving delivery truck, taxi, shuttle bus, school bus',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11130,
      mets: 3.3,
      type: 'occupation',
      name: 'electrical work (e.g., hook up wire, tapping-splicing)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11135,
      mets: 1.8,
      type: 'occupation',
      name: 'engineer (e.g., mechanical or electrical)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11145,
      mets: 7.8,
      type: 'occupation',
      name: 'farming, vigorous effort (e.g., baling hay, cleaning barn) ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11146,
      mets: 4.8,
      type: 'occupation',
      name:
        'farming, moderate effort (e.g., feeding animals, chasing cattle by walking and/or horseback, spreading manure, harvesting crops)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11147,
      mets: 2.0,
      type: 'occupation',
      name: 'farming, light effort (e.g., cleaning animal sheds, preparing animal feed) ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11170,
      mets: 2.8,
      type: 'occupation',
      name: 'farming, driving tasks (e.g., driving tractor or harvester) ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11180,
      mets: 3.5,
      type: 'occupation',
      name: 'farming, feeding small animals',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11190,
      mets: 4.3,
      type: 'occupation',
      name: 'farming, feeding cattle, horses',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11191,
      mets: 4.3,
      type: 'occupation',
      name:
        'farming, hauling water for animals, general hauling water,farming, general hauling water',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11192,
      mets: 4.5,
      type: 'occupation',
      name:
        'farming, taking care of animals (e.g., grooming, brushing, shearing sheep, assisting with birthing, medical care, branding), general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11195,
      mets: 3.8,
      type: 'occupation',
      name: 'farming, rice, planting, grain milling activities',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11210,
      mets: 3.5,
      type: 'occupation',
      name: 'farming, milking by hand, cleaning pails, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11220,
      mets: 1.3,
      type: 'occupation',
      name: 'farming, milking by machine, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11240,
      mets: 8.0,
      type: 'occupation',
      name: 'fire fighter, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11244,
      mets: 6.8,
      type: 'occupation',
      name: 'fire fighter, rescue victim, automobile accident, using pike pole',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11245,
      mets: 8.0,
      type: 'occupation',
      name: 'fire fighter, raising and climbing ladder with full gear, simulated fire supression',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11246,
      mets: 9.0,
      type: 'occupation',
      name:
        'fire fighter, hauling hoses on ground, carrying/hoisting equipment, breaking down walls etc., wearing full gear',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11247,
      mets: 3.5,
      type: 'occupation',
      name: 'fishing, commercial, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11248,
      mets: 5.0,
      type: 'occupation',
      name: 'fishing, commercial, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11249,
      mets: 7.0,
      type: 'occupation',
      name: 'fishing, commercial, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11250,
      mets: 17.5,
      type: 'occupation',
      name:
        'forestry, ax chopping, very fast, 1.25 kg axe, 51 blows/min, extremely vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11260,
      mets: 5.0,
      type: 'occupation',
      name: 'forestry, ax chopping, slow, 1.25 kg axe, 19 blows/min, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11262,
      mets: 8.0,
      type: 'occupation',
      name: 'forestry, ax chopping, fast, 1.25 kg axe, 35 blows/min, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11264,
      mets: 4.5,
      type: 'occupation',
      name: 'forestry, moderate effort (e.g., sawing wood with power saw, weeding, hoeing)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11266,
      mets: 8.0,
      type: 'occupation',
      name:
        'forestry, vigorous effort (e.g., barking, felling, or trimming trees, carrying or stacking logs, planting seeds, sawing lumber by hand)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11370,
      mets: 4.5,
      type: 'occupation',
      name: 'furriery',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11375,
      mets: 4.0,
      type: 'occupation',
      name: 'garbage collector, walking, dumping bins into truck',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11378,
      mets: 1.8,
      type: 'occupation',
      name: 'hairstylist (e.g., plaiting hair, manicure, make-up artist)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11380,
      mets: 7.3,
      type: 'occupation',
      name:
        'horse grooming, including feeding, cleaning stalls, bathing, brushing, clipping, longeing and exercising horses',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11381,
      mets: 4.3,
      type: 'occupation',
      name: 'horse, feeding, watering, cleaning stalls, implied walking and lifting loads',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11390,
      mets: 7.3,
      type: 'occupation',
      name: 'horse racing, galloping',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11400,
      mets: 5.8,
      type: 'occupation',
      name: 'horse racing, trotting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11410,
      mets: 3.8,
      type: 'occupation',
      name: 'horse racing, walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11413,
      mets: 3.0,
      type: 'occupation',
      name: 'kitchen maid ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11415,
      mets: 4.0,
      type: 'occupation',
      name: 'lawn keeper, yard work, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11418,
      mets: 3.3,
      type: 'occupation',
      name: 'laundry worker',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11420,
      mets: 3.0,
      type: 'occupation',
      name: 'locksmith',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11430,
      mets: 3.0,
      type: 'occupation',
      name:
        'machine tooling (e.g., machining, working sheet metal, machine fitter, operating lathe, welding) light-to-moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11450,
      mets: 5.0,
      type: 'occupation',
      name: 'Machine tooling, operating punch press, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11472,
      mets: 1.8,
      type: 'occupation',
      name: 'manager, property',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11475,
      mets: 2.8,
      type: 'occupation',
      name: 'manual or unskilled labor, general, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11476,
      mets: 4.5,
      type: 'occupation',
      name: 'manual or unskilled labor, general, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11477,
      mets: 6.5,
      type: 'occupation',
      name: 'manual or unskilled labor, general, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11480,
      mets: 4.3,
      type: 'occupation',
      name: 'masonry, concrete, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11482,
      mets: 2.5,
      type: 'occupation',
      name: 'masonry, concrete, light effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11485,
      mets: 4.0,
      type: 'occupation',
      name: 'massage therapist, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11490,
      mets: 7.5,
      type: 'occupation',
      name:
        'moving, carrying or pushing heavy objects, 75 lbs or more, only active time (e.g., desks, moving van work)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11495,
      mets: 12.0,
      type: 'occupation',
      name: 'skindiving or SCUBA diving as a frogman, Navy Seal',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11500,
      mets: 2.5,
      type: 'occupation',
      name: 'operating heavy duty equipment, automated, not driving',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11510,
      mets: 4.5,
      type: 'occupation',
      name: 'orange grove work, picking fruit',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11514,
      mets: 3.3,
      type: 'occupation',
      name: 'painting,house, furniture, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11516,
      mets: 3.0,
      type: 'occupation',
      name: 'plumbing activities ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11520,
      mets: 2.0,
      type: 'occupation',
      name: 'printing, paper industry worker, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11525,
      mets: 2.5,
      type: 'occupation',
      name: 'police, directing traffic, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11526,
      mets: 2.5,
      type: 'occupation',
      name: 'police, driving a squad car, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11527,
      mets: 1.3,
      type: 'occupation',
      name: 'police, riding in a squad car, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11528,
      mets: 4.0,
      type: 'occupation',
      name: 'police, making an arrest, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11529,
      mets: 2.3,
      type: 'occupation',
      name: 'postal carrier, walking to deliver mail',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11530,
      mets: 2.0,
      type: 'occupation',
      name: 'shoe repair, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11540,
      mets: 7.8,
      type: 'occupation',
      name: 'shoveling, digging ditches',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11550,
      mets: 8.8,
      type: 'occupation',
      name: 'shoveling, more than 16 lbs/minute, deep digging, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11560,
      mets: 5.0,
      type: 'occupation',
      name: 'shoveling, less than 10 lbs/minute, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11570,
      mets: 6.5,
      type: 'occupation',
      name: 'shoveling, 10 to 15 lbs/minute, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11580,
      mets: 1.5,
      type: 'occupation',
      name:
        'sitting tasks, light effort (e.g., office work, chemistry lab work, computer work, light assembly repair, watch repair, reading, desk work)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11585,
      mets: 1.5,
      type: 'occupation',
      name:
        'sitting meetings, light effort, general, and/or with talking involved (e.g., eating at a business meeting)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11590,
      mets: 2.5,
      type: 'occupation',
      name:
        'sitting tasks, moderate effort (e.g., pushing heavy levers, riding mower/forklift, crane operation)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11593,
      mets: 2.8,
      type: 'occupation',
      name: 'sitting, teaching stretching or yoga, or light effort exercise class',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11600,
      mets: 3.0,
      type: 'occupation',
      name:
        'standing tasks, light effort (e.g., bartending, store clerk, assembling, filing, duplicating, librarian, putting up a Christmas tree, standing and talking at work, changing clothes when teaching physical education, standing)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11610,
      mets: 3.0,
      type: 'occupation',
      name:
        'standing, light/moderate effort (e.g., assemble/repair heavy parts, welding,stocking parts,auto repair,standing, packing boxes, nursing patient care)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11615,
      mets: 4.5,
      type: 'occupation',
      name:
        'standing, moderate effort, lifting items continuously, 10  20 lbs, with limited walking or resting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11620,
      mets: 3.5,
      type: 'occupation',
      name: 'standing, moderate effort, intermittent lifting 50 lbs, hitch/twisting ropes',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11630,
      mets: 4.5,
      type: 'occupation',
      name:
        'standing, moderate/heavy tasks (e.g., lifting more than 50 lbs, masonry, painting, paper hanging)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11708,
      mets: 5.3,
      type: 'occupation',
      name: 'steel mill, moderate effort (e.g., fettling, forging, tipping molds)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11710,
      mets: 8.3,
      type: 'occupation',
      name:
        'steel mill, vigorous effort (e.g., hand rolling, merchant mill rolling, removing slag, tending furnace)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11720,
      mets: 2.3,
      type: 'occupation',
      name: 'tailoring, cutting fabric',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11730,
      mets: 2.5,
      type: 'occupation',
      name: 'tailoring, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11740,
      mets: 1.8,
      type: 'occupation',
      name: 'tailoring, hand sewing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11750,
      mets: 2.5,
      type: 'occupation',
      name: 'tailoring, machine sewing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11760,
      mets: 3.5,
      type: 'occupation',
      name: 'tailoring, pressing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11763,
      mets: 2.0,
      type: 'occupation',
      name:
        'tailoring, weaving, light effort (e.g., finishing operations, washing, dyeing, inspecting cloth, counting yards, paperwork)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11765,
      mets: 4.0,
      type: 'occupation',
      name:
        'tailoring, weaving, moderate effort (e.g., spinning and weaving operations, delivering boxes of yam to spinners, loading of warp bean, pinwinding, conewinding, warping, cloth cutting)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11766,
      mets: 6.5,
      type: 'occupation',
      name:
        'truck driving, loading and unloading truck, tying down load, standing, walking and carrying heavy loads',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11767,
      mets: 2.0,
      type: 'occupation',
      name: 'Truch, driving delivery truck, taxi, shuttlebus, school bus',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11770,
      mets: 1.3,
      type: 'occupation',
      name: 'typing, electric, manual or computer',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11780,
      mets: 6.3,
      type: 'occupation',
      name: 'using heavy power tools such as pneumatic tools (e.g., jackhammers, drills)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11790,
      mets: 8.0,
      type: 'occupation',
      name: 'using heavy tools (not power) such as shovel, pick, tunnel bar, spade',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11791,
      mets: 2.0,
      type: 'occupation',
      name: 'walking on job, less than 2.0 mph, very slow speed, in office or lab area',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11792,
      mets: 3.5,
      type: 'occupation',
      name: 'walking on job, 3.0 mph, in office, moderate speed, not carrying anything',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11793,
      mets: 4.3,
      type: 'occupation',
      name: 'walking on job, 3.5 mph, in office, brisk speed, not carrying anything',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11795,
      mets: 3.5,
      type: 'occupation',
      name: 'walking on job, 2.5 mph, slow speed and carrying light objects less than 25 lbs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11796,
      mets: 3.0,
      type: 'occupation',
      name: 'walking, gathering things at work, ready to leave',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11797,
      mets: 3.8,
      type: 'occupation',
      name: 'walking, 2.5 mph, slow speed, carrying heavy objects more than 25 lbs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11800,
      mets: 4.5,
      type: 'occupation',
      name: 'walking, 3.0 mph, moderately and carrying light objects less than 25 lbs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11805,
      mets: 3.5,
      type: 'occupation',
      name: 'walking, pushing a wheelchair',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11810,
      mets: 4.8,
      type: 'occupation',
      name: 'walking, 3.5 mph, briskly and carrying objects less than 25 lbs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11820,
      mets: 5.0,
      type: 'occupation',
      name: 'walking or walk downstairs or standing, carrying objects about 25 to 49 lbs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11830,
      mets: 6.5,
      type: 'occupation',
      name: 'walking or walk downstairs or standing, carrying objects about 50 to 74 lbs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11840,
      mets: 7.5,
      type: 'occupation',
      name: 'walking or walk downstairs or standing, carrying objects about 75 to 99 lbs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11850,
      mets: 8.5,
      type: 'occupation',
      name: 'walking or walk downstairs or standing, carrying objects about 100 lbs or more',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 11870,
      mets: 3.0,
      type: 'occupation',
      name: 'working in scene shop, theater actor, backstage employee',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12010,
      mets: 6.0,
      type: 'running',
      name: 'jog/walk combination (jogging component of less than 10 minutes) (Taylor Code 180)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12020,
      mets: 7.0,
      type: 'running',
      name: 'jogging, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12025,
      mets: 8.0,
      type: 'running',
      name: 'jogging, in place',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12027,
      mets: 4.5,
      type: 'running',
      name: 'jogging, on a mini-tramp',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12029,
      mets: 6.0,
      type: 'running',
      name: 'Running, 4 mph (13 min/mile) ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12030,
      mets: 8.3,
      type: 'running',
      name: 'running, 5 mph (12 min/mile)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12040,
      mets: 9.0,
      type: 'running',
      name: 'running, 5.2 mph (11.5 min/mile)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12050,
      mets: 9.8,
      type: 'running',
      name: 'running, 6 mph (10 min/mile)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12060,
      mets: 10.5,
      type: 'running',
      name: 'running, 6.7 mph (9 min/mile)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12070,
      mets: 11.0,
      type: 'running',
      name: 'running, 7 mph (8.5 min/mile)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12080,
      mets: 11.5,
      type: 'running',
      name: 'running, 7.5 mph (8 min/mile)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12090,
      mets: 11.8,
      type: 'running',
      name: 'running, 8 mph (7.5 min/mile)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12100,
      mets: 12.3,
      type: 'running',
      name: 'running, 8.6 mph (7 min/mile)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12110,
      mets: 12.8,
      type: 'running',
      name: 'running, 9 mph (6.5 min/mile)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12120,
      mets: 14.5,
      type: 'running',
      name: 'running, 10 mph (6 min/mile)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12130,
      mets: 16.0,
      type: 'running',
      name: 'running, 11 mph (5.5 min/mile)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12132,
      mets: 19.0,
      type: 'running',
      name: 'running, 12 mph (5 min/mile) ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12134,
      mets: 19.8,
      type: 'running',
      name: 'running, 13 mph (4.6 min/mile)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12135,
      mets: 23.0,
      type: 'running',
      name: 'running, 14 mph (4.3 min/mile) ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12140,
      mets: 9.0,
      type: 'running',
      name: 'running, cross country',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12150,
      mets: 8.0,
      type: 'running',
      name: 'running, (Taylor code 200)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12170,
      mets: 15.0,
      type: 'running',
      name: 'running, stairs, up',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12180,
      mets: 10.0,
      type: 'running',
      name: 'running, on a track, team practice',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12190,
      mets: 8.0,
      type: 'running',
      name: 'running, training, pushing a wheelchair or baby carrier',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 12200,
      mets: 13.3,
      type: 'running',
      name: 'running, marathon',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 13000,
      mets: 2.3,
      type: 'self care',
      name: 'getting ready for bed, general, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 13009,
      mets: 1.8,
      type: 'self care',
      name: 'sitting on toilet, eliminating while standing or squating',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 13010,
      mets: 1.5,
      type: 'self care',
      name: 'bathing, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 13020,
      mets: 2.5,
      type: 'self care',
      name: 'dressing, undressing, standing or sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 13030,
      mets: 1.5,
      type: 'self care',
      name: 'eating, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 13035,
      mets: 2.0,
      type: 'self care',
      name: 'talking and eating or eating only, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 13036,
      mets: 1.5,
      type: 'self care',
      name: 'taking medication, sitting or standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 13040,
      mets: 2.0,
      type: 'self care',
      name:
        'grooming, washing hands, shaving, brushing teeth, putting on make-up, sitting or standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 13045,
      mets: 2.5,
      type: 'self care',
      name: 'hairstyling, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 13046,
      mets: 1.3,
      type: 'self care',
      name: 'having hair or nails done by someone else, sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 13050,
      mets: 2.0,
      type: 'self care',
      name: 'showering, toweling off, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 14010,
      mets: 2.8,
      type: 'sexual activity',
      name: 'active, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 14020,
      mets: 1.8,
      type: 'sexual activity',
      name: 'general, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 14030,
      mets: 1.3,
      type: 'sexual activity',
      name: 'passive, light effort, kissing, hugging',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15000,
      mets: 5.5,
      type: 'sports',
      name: 'Alaska Native Games, Eskimo Olympics, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15010,
      mets: 4.3,
      type: 'sports',
      name: 'archery, non-hunting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15020,
      mets: 7.0,
      type: 'sports',
      name: 'badminton, competitive (Taylor Code 450)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15030,
      mets: 5.5,
      type: 'sports',
      name: 'badminton, social singles and doubles, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15040,
      mets: 8.0,
      type: 'sports',
      name: 'basketball, game (Taylor Code 490)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15050,
      mets: 6.0,
      type: 'sports',
      name: 'basketball, non-game, general (Taylor Code 480)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15055,
      mets: 6.5,
      type: 'sports',
      name: 'basketball, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15060,
      mets: 7.0,
      type: 'sports',
      name: 'basketball, officiating (Taylor Code 500)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15070,
      mets: 4.5,
      type: 'sports',
      name: 'basketball, shooting baskets',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15072,
      mets: 9.3,
      type: 'sports',
      name: 'basketball, drills, practice ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15075,
      mets: 7.8,
      type: 'sports',
      name: 'basketball, wheelchair',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15080,
      mets: 2.5,
      type: 'sports',
      name: 'billiards',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15090,
      mets: 3.0,
      type: 'sports',
      name: 'bowling (Taylor Code 390)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15092,
      mets: 3.8,
      type: 'sports',
      name: 'bowling, indoor, bowling alley ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15100,
      mets: 12.8,
      type: 'sports',
      name: 'boxing, in ring, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15110,
      mets: 5.5,
      type: 'sports',
      name: 'boxing, punching bag',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15120,
      mets: 7.8,
      type: 'sports',
      name: 'boxing, sparring',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15130,
      mets: 7.0,
      type: 'sports',
      name: 'broomball',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15135,
      mets: 5.8,
      type: 'sports',
      name:
        'children’s games, adults playing (e.g., hopscotch, 4-square, dodgeball, playground apparatus, t-ball, tetherball, marbles, arcade games), moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15138,
      mets: 6.0,
      type: 'sports',
      name: 'cheerleading, gymnastic moves, competitive ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15140,
      mets: 4.0,
      type: 'sports',
      name: 'coaching, football, soccer, basketball, baseball, swimming, etc.',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15142,
      mets: 8.0,
      type: 'sports',
      name: 'coaching, actively playing sport with players ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15150,
      mets: 4.8,
      type: 'sports',
      name: 'cricket, batting, bowling, fielding',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15160,
      mets: 3.3,
      type: 'sports',
      name: 'croquet',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15170,
      mets: 4.0,
      type: 'sports',
      name: 'curling',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15180,
      mets: 2.5,
      type: 'sports',
      name: 'darts, wall or lawn',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15190,
      mets: 6.0,
      type: 'sports',
      name: 'drag racing, pushing or driving a car',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15192,
      mets: 8.5,
      type: 'sports',
      name: 'auto racing, open wheel',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15200,
      mets: 6.0,
      type: 'sports',
      name: 'fencing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15210,
      mets: 8.0,
      type: 'sports',
      name: 'football, competitive',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15230,
      mets: 8.0,
      type: 'sports',
      name: 'football, touch, flag, general (Taylor Code 510)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15232,
      mets: 4.0,
      type: 'sports',
      name: 'football, touch, flag, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15235,
      mets: 2.5,
      type: 'sports',
      name: 'football or baseball, playing catch',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15240,
      mets: 3.0,
      type: 'sports',
      name: 'frisbee playing, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15250,
      mets: 8.0,
      type: 'sports',
      name: 'frisbee, ultimate',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15255,
      mets: 4.8,
      type: 'sports',
      name: 'golf, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15265,
      mets: 4.3,
      type: 'sports',
      name: 'golf, walking, carrying clubs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15270,
      mets: 3.0,
      type: 'sports',
      name: 'golf, miniature, driving range',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15285,
      mets: 5.3,
      type: 'sports',
      name: 'golf, walking, pulling clubs ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15290,
      mets: 3.5,
      type: 'sports',
      name: 'golf, using power cart (Taylor Code 070)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15300,
      mets: 3.8,
      type: 'sports',
      name: 'gymnastics, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15310,
      mets: 4.0,
      type: 'sports',
      name: 'hacky sack',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15320,
      mets: 12.0,
      type: 'sports',
      name: 'handball, general (Taylor Code 520)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15330,
      mets: 8.0,
      type: 'sports',
      name: 'handball, team',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15335,
      mets: 4.0,
      type: 'sports',
      name: 'high ropes course, multiple elements',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15340,
      mets: 3.5,
      type: 'sports',
      name: 'hang gliding',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15350,
      mets: 7.8,
      type: 'sports',
      name: 'hockey, field',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15360,
      mets: 8.0,
      type: 'sports',
      name: 'hockey, ice, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15362,
      mets: 10.0,
      type: 'sports',
      name: 'hockey, ice, competitive',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15370,
      mets: 5.5,
      type: 'sports',
      name: 'horseback riding, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15375,
      mets: 4.3,
      type: 'sports',
      name: 'horse chores, feeding, watering, cleaning stalls, implied walking and lifting loads ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15380,
      mets: 4.5,
      type: 'sports',
      name: 'saddling, cleaning, grooming, harnessing and unharnessing horse',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15390,
      mets: 5.8,
      type: 'sports',
      name: 'horseback riding, trotting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15395,
      mets: 7.3,
      type: 'sports',
      name: 'horseback riding, canter or gallop ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15400,
      mets: 3.8,
      type: 'sports',
      name: 'horseback riding,walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15402,
      mets: 9.0,
      type: 'sports',
      name: 'horseback riding, jumping ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15408,
      mets: 1.8,
      type: 'sports',
      name: 'horse cart, driving, standing or sitting',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15410,
      mets: 3.0,
      type: 'sports',
      name: 'horseshoe pitching, quoits',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15420,
      mets: 12.0,
      type: 'sports',
      name: 'jai alai',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15425,
      mets: 5.3,
      type: 'sports',
      name: 'martial arts, different types, slower pace, novice performers, practice',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15430,
      mets: 10.3,
      type: 'sports',
      name:
        'martial arts, different types, moderate pace (e.g., judo, jujitsu, karate, kick boxing, tae kwan do, tai-bo, Muay Thai boxing)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15440,
      mets: 4.0,
      type: 'sports',
      name: 'juggling',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15450,
      mets: 7.0,
      type: 'sports',
      name: 'kickball',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15460,
      mets: 8.0,
      type: 'sports',
      name: 'lacrosse',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15465,
      mets: 3.3,
      type: 'sports',
      name: 'lawn bowling, bocce ball, outdoor ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15470,
      mets: 4.0,
      type: 'sports',
      name: 'moto-cross, off-road motor sports, all-terrain vehicle, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15480,
      mets: 9.0,
      type: 'sports',
      name: 'orienteering',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15490,
      mets: 10.0,
      type: 'sports',
      name: 'paddleball, competitive',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15500,
      mets: 6.0,
      type: 'sports',
      name: 'paddleball, casual, general (Taylor Code 460)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15510,
      mets: 8.0,
      type: 'sports',
      name: 'polo, on horseback',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15520,
      mets: 10.0,
      type: 'sports',
      name: 'racquetball, competitive',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15530,
      mets: 7.0,
      type: 'sports',
      name: 'racquetball, general (Taylor Code 470)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15533,
      mets: 8.0,
      type: 'sports',
      name: 'rock or mountain climbing (Taylor Code 470) (Formerly code = 17120) ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15535,
      mets: 7.5,
      type: 'sports',
      name: 'rock climbing, ascending rock, high difficulty',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15537,
      mets: 5.8,
      type: 'sports',
      name: 'rock climbing, ascending or traversing rock, low-to-moderate difficulty ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15540,
      mets: 5.0,
      type: 'sports',
      name: 'rock climbing, rappelling',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15542,
      mets: 4.0,
      type: 'sports',
      name: 'rodeo sports, general, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15544,
      mets: 5.5,
      type: 'sports',
      name: 'rodeo sports, general, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15546,
      mets: 7.0,
      type: 'sports',
      name: 'rodeo sports, general, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15550,
      mets: 12.3,
      type: 'sports',
      name: 'rope jumping, fast pace, 120-160 skips/min',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15551,
      mets: 11.8,
      type: 'sports',
      name: 'rope jumping, moderate pace, 100-120 skips/min, general,  2 foot skip, plain bounce',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15552,
      mets: 8.8,
      type: 'sports',
      name: 'rope jumping, slow pace, < 100 skips/min, 2 foot skip, rhythm bounce',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15560,
      mets: 8.3,
      type: 'sports',
      name: 'rugby, union, team, competitive',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15562,
      mets: 6.3,
      type: 'sports',
      name: 'rugby, touch, non-competitive',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15570,
      mets: 3.0,
      type: 'sports',
      name: 'shuffleboard',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15580,
      mets: 5.0,
      type: 'sports',
      name: 'skateboarding, general, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15582,
      mets: 6.0,
      type: 'sports',
      name: 'skateboarding, competitive, vigorous effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15590,
      mets: 7.0,
      type: 'sports',
      name: 'skating, roller (Taylor Code 360)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15591,
      mets: 7.5,
      type: 'sports',
      name: 'rollerblading, in-line skating, 14.4 km/h (9.0 mph), recreational pace',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15592,
      mets: 9.8,
      type: 'sports',
      name:
        'rollerblading, in-line skating, 17.7 km/h (11.0 mph), moderate pace, exercise training',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15593,
      mets: 12.3,
      type: 'sports',
      name:
        'rollerblading, in-line skating, 21.0 to 21.7 km/h (13.0 to 13.6 mph), fast pace, exercise training',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15594,
      mets: 14.0,
      type: 'sports',
      name: 'rollerblading, in-line skating, 24.0 km/h (15.0 mph), maximal effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15600,
      mets: 3.5,
      type: 'sports',
      name: 'skydiving, base jumping, bungee jumping ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15605,
      mets: 10.0,
      type: 'sports',
      name: 'soccer, competitive',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15610,
      mets: 7.0,
      type: 'sports',
      name: 'soccer, casual, general (Taylor Code 540)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15620,
      mets: 5.0,
      type: 'sports',
      name: 'softball or baseball, fast or slow pitch, general (Taylor Code 440)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15625,
      mets: 4.0,
      type: 'sports',
      name: 'softball, practice ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15630,
      mets: 4.0,
      type: 'sports',
      name: 'softball, officiating',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15640,
      mets: 6.0,
      type: 'sports',
      name: 'softball,pitching',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15645,
      mets: 3.3,
      type: 'sports',
      name: 'sports spectator, very excited, emotional, physically moving  ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15650,
      mets: 12.0,
      type: 'sports',
      name: 'squash (Taylor Code 530)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15652,
      mets: 7.3,
      type: 'sports',
      name: 'squash, general ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15660,
      mets: 4.0,
      type: 'sports',
      name: 'table tennis, ping pong (Taylor Code 410)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15670,
      mets: 3.0,
      type: 'sports',
      name: 'tai chi, qi gong, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15672,
      mets: 1.5,
      type: 'sports',
      name: 'tai chi, qi gong, sitting, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15675,
      mets: 7.3,
      type: 'sports',
      name: 'tennis, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15680,
      mets: 6.0,
      type: 'sports',
      name: 'tennis, doubles (Taylor Code 430)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15685,
      mets: 4.5,
      type: 'sports',
      name: 'tennis, doubles',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15690,
      mets: 8.0,
      type: 'sports',
      name: 'tennis, singles (Taylor Code 420)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15695,
      mets: 5.0,
      type: 'sports',
      name: 'tennis, hitting balls, non-game play, moderate effort ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15700,
      mets: 3.5,
      type: 'sports',
      name: 'trampoline, recreational',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15702,
      mets: 4.5,
      type: 'sports',
      name: 'trampoline, competitive',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15710,
      mets: 4.0,
      type: 'sports',
      name: 'volleyball (Taylor Code 400)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15711,
      mets: 6.0,
      type: 'sports',
      name: 'volleyball, competitive, in gymnasium',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15720,
      mets: 3.0,
      type: 'sports',
      name: 'volleyball, non-competitive, 6 - 9 member team, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15725,
      mets: 8.0,
      type: 'sports',
      name: 'volleyball, beach, in sand',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15730,
      mets: 6.0,
      type: 'sports',
      name: 'wrestling (one match = 5 minutes)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15731,
      mets: 7.0,
      type: 'sports',
      name: 'wallyball, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15732,
      mets: 4.0,
      type: 'sports',
      name: 'track and field (e.g., shot, discus, hammer throw)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15733,
      mets: 6.0,
      type: 'sports',
      name: 'track and field (e.g., high jump, long jump, triple jump, javelin, pole vault)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 15734,
      mets: 10.0,
      type: 'sports',
      name: 'track and field (e.g., steeplechase, hurdles)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 16010,
      mets: 2.5,
      type: 'transportation',
      name: 'automobile or light truck (not a semi) driving',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 16015,
      mets: 1.3,
      type: 'transportation',
      name: 'riding in a car or truck',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 16016,
      mets: 1.3,
      type: 'transportation',
      name: 'riding in a bus or train',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 16020,
      mets: 1.8,
      type: 'transportation',
      name: 'flying airplane or helicopter',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 16030,
      mets: 3.5,
      type: 'transportation',
      name: 'motor scooter, motorcycle',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 16035,
      mets: 6.3,
      type: 'transportation',
      name: 'pulling rickshaw ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 16040,
      mets: 6.0,
      type: 'transportation',
      name: 'pushing plane in and out of hangar',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 16050,
      mets: 2.5,
      type: 'transportation',
      name: 'truck, semi, tractor, > 1 ton, or bus, driving',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 16060,
      mets: 3.5,
      type: 'transportation',
      name: 'walking for transportation, 2.8-3.2 mph, level, moderate pace, firm surface ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17010,
      mets: 7.0,
      type: 'walking',
      name: 'backpacking (Taylor Code 050)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17012,
      mets: 7.8,
      type: 'walking',
      name: 'backpacking, hiking or organized walking with a daypack',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17020,
      mets: 5.0,
      type: 'walking',
      name: 'carrying 15 pound load (e.g. suitcase), level ground or downstairs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17021,
      mets: 2.3,
      type: 'walking',
      name: 'carrying 15 lb child, slow walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17025,
      mets: 8.3,
      type: 'walking',
      name: 'carrying load upstairs, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17026,
      mets: 5.0,
      type: 'walking',
      name: 'carrying 1 to 15 lb load, upstairs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17027,
      mets: 6.0,
      type: 'walking',
      name: 'carrying 16 to 24 lb load, upstairs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17028,
      mets: 8.0,
      type: 'walking',
      name: 'carrying 25 to 49 lb load, upstairs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17029,
      mets: 10.0,
      type: 'walking',
      name: 'carrying 50 to 74 lb load, upstairs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17030,
      mets: 12.0,
      type: 'walking',
      name: 'carrying > 74 lb load, upstairs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17031,
      mets: 3.5,
      type: 'walking',
      name: 'loading /unloading a car, implied walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17033,
      mets: 6.3,
      type: 'walking',
      name: 'climbing hills, no load',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17035,
      mets: 6.5,
      type: 'walking',
      name: 'climbing hills with 0 to 9 lb load',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17040,
      mets: 7.3,
      type: 'walking',
      name: 'climbing hills with 10 to 20 lb load',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17050,
      mets: 8.3,
      type: 'walking',
      name: 'climbing hills with 21 to 42 lb load',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17060,
      mets: 9.0,
      type: 'walking',
      name: 'climbing hills with 42+ lb load',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17070,
      mets: 3.5,
      type: 'walking',
      name: 'descending stairs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17080,
      mets: 6.0,
      type: 'walking',
      name: 'hiking, cross country (Taylor Code 040)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17082,
      mets: 5.3,
      type: 'walking',
      name: 'hiking or walking at a normal pace through fields and hillsides ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17085,
      mets: 2.5,
      type: 'walking',
      name: 'bird watching, slow walk',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17088,
      mets: 4.5,
      type: 'walking',
      name: 'marching, moderate speed, military, no pack',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17090,
      mets: 8.0,
      type: 'walking',
      name: 'marching rapidly, military, no pack',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17100,
      mets: 4.0,
      type: 'walking',
      name: 'pushing or pulling stroller with child or walking with children, 2.5 to 3.1 mph',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17105,
      mets: 3.8,
      type: 'walking',
      name: 'pushing a wheelchair, non-occupational ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17110,
      mets: 6.5,
      type: 'walking',
      name: 'race walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17130,
      mets: 8.0,
      type: 'walking',
      name: 'stair climbing, using or climbing up ladder (Taylor Code 030)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17133,
      mets: 4.0,
      type: 'walking',
      name: 'stair climbing, slow pace',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17134,
      mets: 8.8,
      type: 'walking',
      name: 'stair climbing, fast pace',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17140,
      mets: 5.0,
      type: 'walking',
      name: 'using crutches',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17150,
      mets: 2.0,
      type: 'walking',
      name: 'walking, household',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17151,
      mets: 2.0,
      type: 'walking',
      name: 'walking, less than 2.0 mph, level, strolling, very slow',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17152,
      mets: 2.8,
      type: 'walking',
      name: 'walking, 2.0 mph, level, slow pace, firm surface',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17160,
      mets: 3.5,
      type: 'walking',
      name: 'walking for pleasure (Taylor Code 010)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17161,
      mets: 2.5,
      type: 'walking',
      name:
        'walking from house to car or bus, from car or bus to go places, from car or bus to and from the worksite',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17162,
      mets: 2.5,
      type: 'walking',
      name: 'walking to neighbor’s house or family’s house for social reasons',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17165,
      mets: 3.0,
      type: 'walking',
      name: 'walking the dog',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17170,
      mets: 3.0,
      type: 'walking',
      name: 'walking, 2.5 mph, level, firm surface',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17180,
      mets: 3.3,
      type: 'walking',
      name: 'walking, 2.5 mph, downhill',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17190,
      mets: 3.5,
      type: 'walking',
      name: 'walking, 2.8 to 3.2 mph, level, moderate pace, firm surface',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17200,
      mets: 4.3,
      type: 'walking',
      name: 'walking, 3.5 mph, level, brisk, firm surface, walking for exercise',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17210,
      mets: 5.3,
      type: 'walking',
      name: 'walking, 2.9 to 3.5 mph, uphill, 1 to 5% grade',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17211,
      mets: 8.0,
      type: 'walking',
      name: 'walking, 2.9 to 3.5 mph, uphill, 6% to 15% grade',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17220,
      mets: 5.0,
      type: 'walking',
      name: 'walking, 4.0 mph, level, firm surface, very brisk pace',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17230,
      mets: 7.0,
      type: 'walking',
      name: 'walking, 4.5 mph, level, firm surface, very, very brisk',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17231,
      mets: 8.3,
      type: 'walking',
      name: 'walking, 5.0 mph, level, firm surface',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17235,
      mets: 9.8,
      type: 'walking',
      name: 'walking, 5.0 mph, uphill, 3% grade',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17250,
      mets: 3.5,
      type: 'walking',
      name: 'walking, for pleasure, work break',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17260,
      mets: 4.8,
      type: 'walking',
      name: 'walking, grass track',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17262,
      mets: 4.5,
      type: 'walking',
      name: 'walking, normal pace, plowed field or sand ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17270,
      mets: 4.0,
      type: 'walking',
      name: 'walking, to work or class (Taylor Code 015)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17280,
      mets: 2.5,
      type: 'walking',
      name: 'walking, to and from an outhouse',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17302,
      mets: 4.8,
      type: 'walking',
      name:
        'walking, for exercise, 3.5 to 4 mph, with ski poles, Nordic walking, level, moderate pace ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17305,
      mets: 9.5,
      type: 'walking',
      name: 'walking, for exercise, 5.0 mph, with ski poles, Nordic walking, level, fast pace ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17310,
      mets: 6.8,
      type: 'walking',
      name: 'walking, for exercise, with ski poles, Nordic walking, uphill',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17320,
      mets: 6.0,
      type: 'walking',
      name: 'walking, backwards, 3.5 mph, level ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 17325,
      mets: 8.0,
      type: 'walking',
      name: 'walking, backwards, 3.5 mph, uphill, 5% grade',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18010,
      mets: 2.5,
      type: 'water activities',
      name: 'boating, power, driving',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18012,
      mets: 1.3,
      type: 'water activities',
      name: 'boating, power, passenger, light ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18020,
      mets: 4.0,
      type: 'water activities',
      name: 'canoeing, on camping trip (Taylor Code 270)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18025,
      mets: 3.3,
      type: 'water activities',
      name: 'canoeing, harvesting wild rice, knocking rice off the stalks',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18030,
      mets: 7.0,
      type: 'water activities',
      name: 'canoeing, portaging',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18040,
      mets: 2.8,
      type: 'water activities',
      name: 'canoeing, rowing, 2.0-3.9 mph, light effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18050,
      mets: 5.8,
      type: 'water activities',
      name: 'canoeing, rowing, 4.0-5.9 mph, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18060,
      mets: 12.5,
      type: 'water activities',
      name: 'canoeing, rowing, kayaking, competition, >6 mph, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18070,
      mets: 3.5,
      type: 'water activities',
      name: 'canoeing, rowing, for pleasure, general (Taylor Code 250)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18080,
      mets: 12.0,
      type: 'water activities',
      name: 'canoeing, rowing, in competition, or crew or sculling (Taylor Code 260)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18090,
      mets: 3.0,
      type: 'water activities',
      name: 'diving, springboard or platform',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18100,
      mets: 5.0,
      type: 'water activities',
      name: 'kayaking, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18110,
      mets: 4.0,
      type: 'water activities',
      name: 'paddle boat',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18120,
      mets: 3.0,
      type: 'water activities',
      name: 'sailing, boat and board sailing, windsurfing, ice sailing, general (Taylor Code 235)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18130,
      mets: 4.5,
      type: 'water activities',
      name: 'sailing, in competition',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18140,
      mets: 3.3,
      type: 'water activities',
      name: 'sailing, Sunfish/Laser/Hobby Cat, Keel boats, ocean sailing, yachting, leisure',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18150,
      mets: 6.0,
      type: 'water activities',
      name: 'skiing, water or wakeboarding (Taylor Code 220)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18160,
      mets: 7.0,
      type: 'water activities',
      name: 'jet skiing, driving, in water',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18180,
      mets: 15.8,
      type: 'water activities',
      name: 'skindiving, fast',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18190,
      mets: 11.8,
      type: 'water activities',
      name: 'skindiving, moderate',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18200,
      mets: 7.0,
      type: 'water activities',
      name: 'skindiving, scuba diving, general (Taylor Code 310)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18210,
      mets: 5.0,
      type: 'water activities',
      name: 'snorkeling (Taylor Code 310)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18220,
      mets: 3.0,
      type: 'water activities',
      name: 'surfing, body or board, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18222,
      mets: 5.0,
      type: 'water activities',
      name: 'surfing, body or board, competitive',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18225,
      mets: 6.0,
      type: 'water activities',
      name: 'paddle boarding, standing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18230,
      mets: 9.8,
      type: 'water activities',
      name: 'swimming laps, freestyle, fast, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18240,
      mets: 5.8,
      type: 'water activities',
      name: 'swimming laps, freestyle, front crawl, slow, light or moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18250,
      mets: 9.5,
      type: 'water activities',
      name: 'swimming, backstroke, general, training or competition',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18255,
      mets: 4.8,
      type: 'water activities',
      name: 'swimming, backstroke, recreational',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18260,
      mets: 10.3,
      type: 'water activities',
      name: 'swimming, breaststroke, general, training or competition',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18265,
      mets: 5.3,
      type: 'water activities',
      name: 'swimming, breaststroke, recreational ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18270,
      mets: 13.8,
      type: 'water activities',
      name: 'swimming, butterfly, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18280,
      mets: 10.0,
      type: 'water activities',
      name: 'swimming, crawl, fast speed, ~75 yards/minute, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18290,
      mets: 8.3,
      type: 'water activities',
      name: 'swimming, crawl, medium speed, ~50 yards/minute, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18300,
      mets: 6.0,
      type: 'water activities',
      name: 'swimming, lake, ocean, river (Taylor Codes 280, 295)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18310,
      mets: 6.0,
      type: 'water activities',
      name: 'swimming, leisurely, not lap swimming, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18320,
      mets: 7.0,
      type: 'water activities',
      name: 'swimming, sidestroke, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18330,
      mets: 8.0,
      type: 'water activities',
      name: 'swimming, synchronized',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18340,
      mets: 9.8,
      type: 'water activities',
      name: 'swimming, treading water, fast, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18350,
      mets: 3.5,
      type: 'water activities',
      name: 'swimming, treading water, moderate effort, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18352,
      mets: 2.3,
      type: 'water activities',
      name: 'tubing, floating on a river, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18355,
      mets: 5.5,
      type: 'water activities',
      name: 'water aerobics, water calisthenics',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18360,
      mets: 10.0,
      type: 'water activities',
      name: 'water polo',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18365,
      mets: 3.0,
      type: 'water activities',
      name: 'water volleyball',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18366,
      mets: 9.8,
      type: 'water activities',
      name: 'water jogging',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18367,
      mets: 2.5,
      type: 'water activities',
      name: 'water walking, light effort, slow pace',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18368,
      mets: 4.5,
      type: 'water activities',
      name: 'water walking, moderate effort, moderate pace',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18369,
      mets: 6.8,
      type: 'water activities',
      name: 'water walking, vigorous effort, brisk pace',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18370,
      mets: 5.0,
      type: 'water activities',
      name: 'whitewater rafting, kayaking, or canoeing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18380,
      mets: 5.0,
      type: 'water activities',
      name: 'windsurfing, not pumping for speed',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18385,
      mets: 11.0,
      type: 'water activities',
      name: 'windsurfing or kitesurfing, crossing trial',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 18390,
      mets: 13.5,
      type: 'water activities',
      name: 'windsurfing, competition, pumping for speed',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19005,
      mets: 7.5,
      type: 'winter activities',
      name: 'dog sledding, mushing ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19006,
      mets: 2.5,
      type: 'winter activities',
      name: 'dog sledding, passenger ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19010,
      mets: 6.0,
      type: 'winter activities',
      name: 'moving ice house, set up/drill holes',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19011,
      mets: 2.0,
      type: 'winter activities',
      name: 'ice fishing, sitting ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19018,
      mets: 14.0,
      type: 'winter activities',
      name: 'skating, ice dancing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19020,
      mets: 5.5,
      type: 'winter activities',
      name: 'skating, ice, 9 mph or less',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19030,
      mets: 7.0,
      type: 'winter activities',
      name: 'skating, ice, general (Taylor Code 360)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19040,
      mets: 9.0,
      type: 'winter activities',
      name: 'skating, ice, rapidly, more than 9 mph, not competitive',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19050,
      mets: 13.3,
      type: 'winter activities',
      name: 'skating, speed, competitive',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19060,
      mets: 7.0,
      type: 'winter activities',
      name: 'ski jumping, climb up carrying skis',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19075,
      mets: 7.0,
      type: 'winter activities',
      name: 'skiing, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19080,
      mets: 6.8,
      type: 'winter activities',
      name: 'skiing, cross country, 2.5 mph, slow or light effort, ski walking',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19090,
      mets: 9.0,
      type: 'winter activities',
      name: 'skiing, cross country, 4.0-4.9 mph, moderate speed and effort, general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19100,
      mets: 12.5,
      type: 'winter activities',
      name: 'skiing, cross country, 5.0-7.9 mph, brisk speed, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19110,
      mets: 15.0,
      type: 'winter activities',
      name: 'skiing, cross country, >8.0 mph, elite skier, racing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19130,
      mets: 15.5,
      type: 'winter activities',
      name: 'skiing, cross country, hard snow, uphill, maximum, snow mountaineering',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19135,
      mets: 13.3,
      type: 'winter activities',
      name: 'skiing, cross-country, skating ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19140,
      mets: 13.5,
      type: 'winter activities',
      name: 'skiing, cross-country, biathlon, skating technique ',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19150,
      mets: 4.3,
      type: 'winter activities',
      name: 'skiing, downhill, alpine or snowboarding, light effort, active time only',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19160,
      mets: 5.3,
      type: 'winter activities',
      name: 'skiing, downhill, alpine or snowboarding, moderate effort, general, active time only',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19170,
      mets: 8.0,
      type: 'winter activities',
      name: 'skiing, downhill, vigorous effort, racing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19175,
      mets: 12.5,
      type: 'winter activities',
      name: 'skiing, roller, elite racers',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19180,
      mets: 7.0,
      type: 'winter activities',
      name: 'sledding, tobogganing, bobsledding, luge (Taylor Code 370)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19190,
      mets: 5.3,
      type: 'winter activities',
      name: 'snow shoeing, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19192,
      mets: 10.0,
      type: 'winter activities',
      name: 'snow shoeing, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19200,
      mets: 3.5,
      type: 'winter activities',
      name: 'snowmobiling, driving, moderate',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19202,
      mets: 2.0,
      type: 'winter activities',
      name: 'snowmobiling, passenger',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19252,
      mets: 5.3,
      type: 'winter activities',
      name: 'snow shoveling, by hand, moderate effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19254,
      mets: 7.5,
      type: 'winter activities',
      name: 'snow shoveling, by hand, vigorous effort',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 19260,
      mets: 2.5,
      type: 'winter activities',
      name: 'snow blower, walking and pushing',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20000,
      mets: 1.3,
      type: 'religious activities',
      name: 'sitting in church, in service, attending a ceremony, sitting quietly',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20001,
      mets: 2.0,
      type: 'religious activities',
      name: 'sitting, playing an instrument at church',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20005,
      mets: 1.8,
      type: 'religious activities',
      name:
        'sitting in church, talking or singing, attending a ceremony, sitting, active participation',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20010,
      mets: 1.3,
      type: 'religious activities',
      name: 'sitting, reading religious materials at home',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20015,
      mets: 1.3,
      type: 'religious activities',
      name: 'standing quietly in church, attending a ceremony',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20020,
      mets: 2.0,
      type: 'religious activities',
      name: 'standing, singing in church, attending a ceremony, standing, active participation',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20025,
      mets: 1.3,
      type: 'religious activities',
      name: 'kneeling in church or at home, praying',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20030,
      mets: 1.8,
      type: 'religious activities',
      name: 'standing, talking in church',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20035,
      mets: 2.0,
      type: 'religious activities',
      name: 'walking in church',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20036,
      mets: 2.0,
      type: 'religious activities',
      name: 'walking, less than 2.0 mph, very slow',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20037,
      mets: 3.5,
      type: 'religious activities',
      name: 'walking, 3.0 mph, moderate speed, not carrying anything',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20038,
      mets: 4.3,
      type: 'religious activities',
      name: 'walking, 3.5 mph, brisk speed, not carrying anything',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20039,
      mets: 2.0,
      type: 'religious activities',
      name: 'walk/stand combination for religious purposes, usher',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20040,
      mets: 5.0,
      type: 'religious activities',
      name: 'praise with dance or run, spiritual dancing in church',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20045,
      mets: 2.5,
      type: 'religious activities',
      name: 'serving food at church',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20046,
      mets: 2.0,
      type: 'religious activities',
      name: 'preparing food at church',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20047,
      mets: 3.3,
      type: 'religious activities',
      name: 'washing dishes, cleaning kitchen at church',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20050,
      mets: 1.5,
      type: 'religious activities',
      name: 'eating at church',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20055,
      mets: 2.0,
      type: 'religious activities',
      name: 'eating/talking at church or standing eating, American Indian Feast days',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20060,
      mets: 3.3,
      type: 'religious activities',
      name: 'cleaning church',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20061,
      mets: 4.0,
      type: 'religious activities',
      name: 'general yard work at church',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20065,
      mets: 3.5,
      type: 'religious activities',
      name: 'standing, moderate effort (e.g., lifting heavy objects, assembling at fast rate)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20095,
      mets: 4.5,
      type: 'religious activities',
      name: 'Standing, moderate-to-heavy effort, manual labor, lifting = 50 lbs, heavy maintenance',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 20100,
      mets: 1.3,
      type: 'religious activities',
      name: 'typing, electric, manual, or computer',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21000,
      mets: 1.5,
      type: 'volunteer activities',
      name: 'sitting, meeting, general, and/or with talking involved',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21005,
      mets: 1.5,
      type: 'volunteer activities',
      name: 'sitting, light office work, in general',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21010,
      mets: 2.5,
      type: 'volunteer activities',
      name: 'sitting, moderate work',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21015,
      mets: 2.3,
      type: 'volunteer activities',
      name: 'standing, light work (filing, talking, assembling)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21016,
      mets: 2.0,
      type: 'volunteer activities',
      name: 'sitting, child care, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21017,
      mets: 3.0,
      type: 'volunteer activities',
      name: 'standing, child care, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21018,
      mets: 3.5,
      type: 'volunteer activities',
      name: 'walk/run play with children, moderate, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21019,
      mets: 5.8,
      type: 'volunteer activities',
      name: 'walk/run play with children, vigorous, only active periods',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21020,
      mets: 3.0,
      type: 'volunteer activities',
      name:
        'standing, light/moderate work (e.g., pack boxes, assemble/repair, set up chairs/furniture)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21025,
      mets: 3.5,
      type: 'volunteer activities',
      name: 'standing, moderate (lifting 50 lbs., assembling at fast rate)',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21030,
      mets: 4.5,
      type: 'volunteer activities',
      name: 'standing, moderate/heavy work',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21035,
      mets: 1.3,
      type: 'volunteer activities',
      name: 'typing, electric, manual, or computer',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21040,
      mets: 2.0,
      type: 'volunteer activities',
      name: 'walking, less than 2.0 mph, very slow',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21045,
      mets: 3.5,
      type: 'volunteer activities',
      name: 'walking, 3.0 mph, moderate speed, not carrying anything',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21050,
      mets: 4.3,
      type: 'volunteer activities',
      name: 'walking, 3.5 mph, brisk speed, not carrying anything',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21055,
      mets: 3.5,
      type: 'volunteer activities',
      name: 'walking, 2.5 mph slowly and carrying objects less than 25 lbs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21060,
      mets: 4.5,
      type: 'volunteer activities',
      name: 'walking, 3.0 mph moderately and carrying objects less than 25 lbs, pushing something',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21065,
      mets: 4.8,
      type: 'volunteer activities',
      name: 'walking, 3.5 mph, briskly and carrying objects less than 25 lbs',
    },
  });

  await prisma.metActivities.create({
    data: {
      metId: 21070,
      mets: 3.0,
      type: 'volunteer activities',
      name: 'walk/stand combination, for volunteer purposes',
    },
  });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
